/** @format */

import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import MenuLinkPagin from './../MemuLinkPagin';
import styles from './styles';
class Pagination extends Component {
    renderPrevious = (currentPage, onClickPagin) => {
        let xhtml = null;
        if (currentPage > 1) {
            let x = currentPage - 1;
            xhtml = (
                <MenuLinkPagin
                    onClickPagin={() => onClickPagin(x)}
                    lable={'Previous'}
                    to={`/products?page=${x}`}
                    activeOnlyWhenExact={true}
                />
            );
        }
        return xhtml;
    };

    renderNext = (currentPage, totalPage, onClickPagin) => {
        let xhtml = null;
        if (currentPage < totalPage) {
            let x = currentPage + 1;
            xhtml = (
                <MenuLinkPagin
                    onClickPagin={() => onClickPagin(x)}
                    lable={'Next'}
                    to={`/products?page=${x}`}
                    activeOnlyWhenExact={true}
                />
            );
        }
        return xhtml;
    };
    render() {
        const { totalPage, currentPage, onClickPagin } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="pagination">
                    {this.renderPrevious(currentPage, onClickPagin)}
                    {this.showMenus(totalPage, currentPage, onClickPagin)}
                    {this.renderNext(currentPage, totalPage, onClickPagin)}
                </ul>
            </nav>
        );
    }

    showMenus = (totalPage, currentPage, onClickPagin) => {
        var xhtml = [];
        if (totalPage > 0) {
            for (let x = 1; x <= totalPage; x++) {
                let activex = false;
                if(x === currentPage){
                    activex = true
                }
                xhtml.push(
                    <MenuLinkPagin
                        onClickPagin={() => onClickPagin(x)}
                        key={x}
                        lable={x}
                        to={`/products?page=${x}`}
                        activeOnlyWhenExact={true}
                        activex={activex}
                    />,
                );
            }
        }
        return xhtml;
    };
}

export default compose(withStyles(styles))(Pagination);
