/** @format */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MenuLink from './../MemuLink';
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Giới thiệu',
        to: '/about',
        exact: false,
    },
    {
        name: 'Liên hệ',
        to: '/contact',
        exact: false,
    },
    {
        name: 'Sản phẩm',
        to: '/products',
        exact: false,
    },
];

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav navbar-nav mr-auto">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var xhtml = null;
        if (menus.length > 0) {
            xhtml = menus.map((item) => {
                return (
                    <MenuLink
                        key={item.to}
                        lable={item.name}
                        to={item.to}
                        activeOnlyWhenExact={item.exact}
                    />
                );
            });
        }
        return xhtml;
    };
}

export default Menu;
