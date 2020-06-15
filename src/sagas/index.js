/** @format */
import {
    call,
    delay,
    fork,
    put,
    select,
    take,
    takeEvery,
    takeLatest
} from 'redux-saga/effects';
import { loginFailed, loginSuccess } from '../actions/login';
import { hideModal } from '../actions/modal';
import {
    addProductFailed,
    deleteProductFailed,
    deleteProductSuccess,
    fetchListProduct,
    fetchListProductFailed,
    fetchListProductSuccess,
    getProductByIdFailed, getProductByIdSuccess, updateProductFailed
} from '../actions/product';
import { hideLoading, showLoading } from '../actions/ui';
import { login } from './../apis/login';
import {
    addProduct,
    deleteProduct,
    getListProduct,
    getProductById, updateProduct
} from './../apis/product';
import * as loginkType from './../constants/login';
import * as ProductType from './../constants/product';
import history from './../containers/App/history';
/**
 * B1: Thực thi action fetch task
 * B2: Gọi api
 * B2.1: Hiển thị thanh tiến trình ( loading )
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */
/////////////////////////////////////////////////////////////////////// login
function* loginSaga({ payload }) {
    const { email, password } = payload;
    yield put(showLoading());
    
    const resp = yield call(login, { email, password });
    const { Success, UserTokenKey, Message, CurrentUser } = resp.data;
    if (Success === true) {
        yield put(loginSuccess({ UserTokenKey, CurrentUser }));
        history.push('/')
        
    } else {
        yield put(loginFailed(Message));
    }

    yield put(hideLoading());
}

/////////////////////////////////////////////////////////////////////////////////////////Product

function* watchFetchListProductAction() {
    while (true) {
        const action = yield take(ProductType.FETCH_PRODUCT); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
        const { params } = action.payload;
        const { page } = action.payload;
        yield put(showLoading());
        try {
            const resp = yield call(getListProduct, params, page);
            const { data, status } = resp;
            if (status === 200) {
                const { Data, Total, PageNumber } = resp.data;
                const totalPage = Math.ceil(Total / 2);
                yield put(fetchListProductSuccess({ Data, totalPage, PageNumber  }));
            } else {
                yield put(fetchListProductFailed(data));
            }
        } catch (error) {
            // sessionstorage.clear();
        }
        yield put(hideLoading());
    }
}

function* addProductSaga({ payload }) {
    const { name, description, price } = payload;

    yield put(showLoading());
    const resp = yield call(addProduct, {
        name,
        description,
        price,
    });
    const { OutputID } = resp.data;
    const Data = {
        Properties: {
            ID: OutputID,
            name,
            description,
            price,
        },
    };
    const {status} = resp;
    if (status === 200) {
        yield put(fetchListProduct());
        yield put(hideModal());
    } else {
        yield put(addProductFailed(Data));
    }
    yield put(hideLoading());
}

function* updateProductSaga({ payload }) {
    const { name, description, price } = payload;
    const productEditing = yield select(
        (state) => state.product.productEditing,
    );
    yield put(showLoading());
    const resp = yield call(
        updateProduct,
        {
            name,
            description,
            price,
        },
        productEditing.ID,
    );

    const { Success, Message } = resp.data;
    if (Success === true) {
        yield put(fetchListProduct());
        yield put(hideModal());
    } else {
        yield put(updateProductFailed(Message));
    }
    yield put(hideLoading());
}

function* deleteProductSaga({ payload }) {
    const { ID } = payload;
    yield put(showLoading());
    const resp = yield call(deleteProduct, ID);
    const { Message } = resp.data;
    const { status } = resp;
    if (status === 200) {
        yield put(deleteProductSuccess(ID));
        yield put(hideModal());
    } else {
        yield put(deleteProductFailed(Message));
    }
    yield put(hideLoading());
}

function* filterProductSaga({ payload }) {
    yield delay(1000);
    const { keyword } = payload;
    yield put(
        fetchListProduct({
            q: keyword,
        }),
    );
}

function* getProductByIdSaga({ payload }) {
    const { ID } = payload;
    yield put(showLoading());
    const resp = yield call(getProductById, ID);
    const { Data } = resp.data;
    const { status } = resp;
    if (status === 200) {
        yield put(getProductByIdSuccess(Data));
    } else {
        yield put(getProductByIdFailed(resp.data));
    }
    yield put(hideLoading());
}
function* rootSaga() {
    yield takeLatest(loginkType.LOGIN, loginSaga);
    yield fork(watchFetchListProductAction);
    yield takeEvery(ProductType.ADD_PRODUCT, addProductSaga);
    yield takeLatest(ProductType.UPDATE_PRODUCT, updateProductSaga);
    yield takeLatest(ProductType.DELETE_PRODUCT, deleteProductSaga);
    yield takeLatest(ProductType.FILTER_PRODUCT, filterProductSaga);
    yield takeLatest(ProductType.GET_PRODUCT_BY_ID, getProductByIdSaga);
}
// OutputID
export default rootSaga;
