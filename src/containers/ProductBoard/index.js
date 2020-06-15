/** @format */

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductForm from '../ProductForm';
import * as modalActions from '../../actions/modal';
import * as productActions from '../../actions/product';
import Pagination from '../../components/Pagination';
import ProductList from '../../components/ProductList';
import SearchBox from '../../components/SearchBox';
import ProductViewForm from '../ProductViewForm';
import styles from './styles';
import GridView from './../../components/GridView';
import Test from './../../components/test';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
    {
        right: false,
        lable: 'Dessert (100g serving)',
    },
    {
        right: true,
        lable: 'Calories',
    },
    {
        right: true,
        lable: 'Fat (g)',
    },
    {
        right: true,
        lable: 'Carbs (g)	',
    },
    {
        right: true,
        lable: 'Protein (g)',
    },
];
class ProductBoard extends Component {
    componentDidMount() {
        const { location } = this.props;
        const query = new URLSearchParams(location.search);
        let page = 1;
        if (query.get('page')) {
            page = parseInt(query.get('page'));
        }
        const { productActionCreators } = this.props;
        const { fetchListProduct } = productActionCreators;
        fetchListProduct({}, page);
    }
    renderButtonLoad() {}
    openForm = () => {
        const { modalActionCreators, productActionCreators } = this.props;
        const { setProductEditing } = productActionCreators;
        setProductEditing(null);
        const {
            showModal,
            changeModalTitle,
            changeModalContent,
        } = modalActionCreators;
        showModal();
        changeModalTitle('Thêm mới sản phẩm');
        changeModalContent(<ProductForm />);
    };
    handleDeleteProduct = (product) => {
        const { ID } = product.Properties;
        const { productActionCreators } = this.props;
        const { deleteProduct } = productActionCreators;
        deleteProduct(ID);
    };
    openFormDelete = (product) => {
        const { classes } = this.props;
        const { modalActionCreators } = this.props;
        const {
            showModal,
            hideModal,
            changeModalTitle,
            changeModalContent,
        } = modalActionCreators;
        showModal();
        changeModalTitle('Xóa sản phẩm');
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn chắc chắn muốn xóa{' '}
                    <span className={classes.modalConfirmTextBold}>
                        {product.Properties.name}
                    </span>
                    ?
                </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={hideModal}
                        >
                            Hủy Bỏ
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleDeleteProduct(product)}
                        >
                            Đồng Ý
                        </Button>
                    </Box>
                </Box>
            </div>,
        );
    };

    handleEditProduct = (product) => {
        const { modalActionCreators, productActionCreators } = this.props;
        const { setProductEditing } = productActionCreators;
        setProductEditing(product.Properties);
        const {
            showModal,
            changeModalTitle,
            changeModalContent,
        } = modalActionCreators;
        showModal();
        changeModalTitle('Cập nhật sản phẩm');
        changeModalContent(<ProductForm />);
    };
    handleViewProduct = (product) => {
        const { modalActionCreators, productActionCreators } = this.props;
        const { getProductById } = productActionCreators;
        getProductById(product.Properties.ID);

        const {
            showModal,
            changeModalTitle,
            changeModalContent,
        } = modalActionCreators;
        showModal();
        changeModalTitle('Thông tin mua bán của sản phẩm');
        changeModalContent(<ProductViewForm />);
    };

    renderListProduct() {
        const { listProduct } = this.props;
        let xhtml = null;
        xhtml = (
            <ProductList
                listProduct={listProduct}
                onClickView={this.handleViewProduct}
                onClickEdit={this.handleEditProduct}
                onClickDelete={this.openFormDelete}
            />
        );
        return xhtml;
    }
    renderPagination() {
        const { totalPage, currentPage } = this.props;
        let xhtml = null;
        xhtml = (
            <Pagination
                totalPage={totalPage}
                currentPage={currentPage}
                onClickPagin={this.handleClickPagin}
            />
        );
        return xhtml;
    }
    renderSearchBox() {
        let xhtml = null;
        xhtml = <SearchBox handleChange={this.handleFilter} />;
        return xhtml;
    }
    handleFilter = (e) => {
        const { value } = e.target;
        const { productActionCreators } = this.props;
        const { filterProduct } = productActionCreators;
        filterProduct(value);
    };

    handleClickPagin = (x) => {
        const { productActionCreators } = this.props;
        const { fetchListProduct } = productActionCreators;
        fetchListProduct({}, x);
    };

    onClickDeletee = (item) => {
        console.log(item);
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.productBoard} id="1">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <AddIcon /> Thêm mới sản phẩm
                </Button>
                {this.renderSearchBox()}
                {this.renderListProduct()}
                <div>{this.renderPagination()}</div>
                <GridView name={'Bang test'} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
        totalPage: state.product.totalPage,
        currentPage: state.product.currentPage,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(ProductBoard),
);
