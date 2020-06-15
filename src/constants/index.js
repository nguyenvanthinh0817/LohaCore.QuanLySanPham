import React from 'react';
import AdminHomePage from '../containers/AdminHomePage';
import Product from '../containers/ProductBoard';
import Login from './../containers/Login';

export const API_ENDPOINT2 = 'http://localhost:8020';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: 'Trang quản trị',
    path: '/',
    exact: true,
    component: AdminHomePage,
  },
  {
    name: 'Quản lý sản phẩm',
    path: '/products',
    component: ({match, location}) => <Product match={match} location={location} />,
  },
];

export const ROUTES = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
  }
]
