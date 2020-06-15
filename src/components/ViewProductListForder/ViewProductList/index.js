/** @format */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

import ViewProductItem from './../ViewProductItem';
class ViewProductList extends Component {
    render() {
        const { listProduct } = this.props;
        if( listProduct.length <=0 ){
            return <h1>Sản phẩm này chưa có ai mua</h1>
        }
        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã khách hàng</th>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ngày mua</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listProduct.map((item, index) => {
                        return (<ViewProductItem
                        key={index}
                        product={item}
                        index={index}
                    />)
                    })
                } 
                    
                </tbody>
            </table>
        );
    }
}

export default withStyles(styles)(ViewProductList);
