/** @format */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

import ProductItem from './../ProductItem';
class ProductList extends Component {
    render() {
        const { listProduct, onClickDelete, onClickEdit,onClickView } = this.props;
        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listProduct.map((item, index) => {
                        return (<ProductItem
                        key={item.Properties.ID}
                        product={item}
                        index={index}
                        onClickView={() => onClickView(item)}
                        onClickEdit={() => onClickEdit(item)}
                        onClickDelete={() => onClickDelete(item)}
                    />)
                    })
                } 
                    
                </tbody>
            </table>
        );
    }
}

export default withStyles(styles)(ProductList);
