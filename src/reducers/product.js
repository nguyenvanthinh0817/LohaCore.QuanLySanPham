/** @format */

import { toastError, toastError2, toastSuccess } from '../helpers/toastHelper';
import * as productConstants from './../constants/product';

const initialState = {
    listProduct: [],
    productEditing: null,
    totalPage: null,
    currentPage: 1,
    productView: null,
    page: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCT: {
            return {
                ...state,
                listProduct: [],
            };
        }
        case productConstants.FETCH_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            const { Data, totalPage, PageNumber } = data;
            return {
                ...state,
                listProduct: Data,
                totalPage: totalPage,
                currentPage: PageNumber
            };
        }
        case productConstants.FETCH_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listProduct: [],
            };
        }
        case productConstants.ADD_PRODUCT: {
            return {
                ...state,
            };
        }
        case productConstants.ADD_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            toastSuccess('Đã thêm thành công bản ghi');
            return {
                ...state,
                listProduct: [data].concat(state.listProduct),
            };
        }
        case productConstants.ADD_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        case productConstants.SET_PRODUCT_EDITING: {
            const { product } = action.payload;
            return {
                ...state,
                productEditing: product,    
            };
        }
        case productConstants.UPDATE_PRODUCT: {
            return {
                ...state,
            };
        }
        case productConstants.UPDATE_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            const { listProduct } = state;
            toastSuccess('Cập nhật bản ghi thành công');
            const index = listProduct.findIndex(
                (item) => item.Properties.ID === data.Properties.ID,
            );
            if (index !== -1) {
                const newList = [
                    ...listProduct.slice(0, index),
                    data,
                    ...listProduct.slice(index + 1),
                ];

                return {
                    ...state,
                    listProduct: newList,
                };
            } else {
                return { ...state };
            }
        }
        case productConstants.UPDATE_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError2(error);
            return {
                ...state,
            };
        }
        case productConstants.DELETE_PRODUCT: {
            return {
                ...state,
            };
        }
        case productConstants.DELETE_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            const { listProduct } = state;
            toastSuccess('Xóa bản ghi thành công');
            const index = listProduct.findIndex(
                (item) => item.Properties.ID === data,
            );
            if (index !== -1) {
                const newList = [
                    ...listProduct.slice(0, index),
                    ...listProduct.slice(index + 1),
                ];
                return {
                    ...state,
                    listProduct: newList,
                };
            } else {
                return { ...state };
            }
        }
        case productConstants.DELETE_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError2(error);
            return {
                ...state,
            };
        }
        case productConstants.GET_PRODUCT_BY_ID: {
            return {
                ...state,
            };
        }
        case productConstants.GET_PRODUCT_BY_ID_SUCCESS: {
            const { data } = action.payload;
            return {    
                ...state,
                productView: data,
            };
        }
        case productConstants.GET_PRODUCT_BY_ID_FAILED: {
           
            return {
                ...state,
            };
        }
        case productConstants.SET_PAGE: {
            const {page} = action.payload;
            return{
                ...state,
                page: page
            }
        }
        default:
            return state;
    }
};

export default reducer;
