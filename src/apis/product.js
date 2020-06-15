/** @format */

import sessionstorage from 'sessionstorage';
import axiosService from './../commons/axiosService';
import { API_ENDPOINT2 } from './../constants';
export const getListProduct = (params = {}, page) => {
    let token = '';
    if (sessionstorage.getItem('auth')) {
        const auth = JSON.parse(sessionstorage.getItem('auth'));
        token = auth.token;
    }
    const header = {
        headers: { Authorization: `Authorize ${token}` },
    };
    let queryParams = '';
    let query = '';
    if (params.q) {
        queryParams = params.q;
        query = `<Where><FieldRef Name="name" Type="Text" Clause="" Operators="Like">${queryParams}</FieldRef></Where>`;
    }
    const pageQuery = page;
    const rowLimit = 2;

    const data = {
        List: 'products',
        SPQuery: {
            AllowPaging: true,
            Paging: pageQuery,
            RowLimit: rowLimit,
            Query: query,
        },
    };

    return axiosService.post(
        `${API_ENDPOINT2}/_vt_api/List/GetItems`,
        data,
        header,
    );
};

export const addProduct = (data) => {
    let token = '';
    if (sessionstorage.getItem('auth')) {
        const auth = JSON.parse(sessionstorage.getItem('auth'));
        token = auth.token;
    }
    const header = {
        headers: { Authorization: `Authorize ${token}` },
    };
    const body = {
        List: 'products',
        Properties: {
            name: data.name,
            description: data.description,
            price: data.price,
        },
    };
    return axiosService.post(
        `${API_ENDPOINT2}/_vt_api/List/AddItem`,
        body,
        header,
    );
};

export const updateProduct = (data, id) => {
    let token = '';
    if (sessionstorage.getItem('auth')) {
        const auth = JSON.parse(sessionstorage.getItem('auth'));
        token = auth.token;
    }
    const header = {
        headers: { Authorization: `Authorize ${token}` },
    };
    const body = {
        List: 'products',
        ID: id,
        Properties: {
            name: data.name,
            description: data.description,
            price: data.price,
        },
    };
    return axiosService.post(
        `${API_ENDPOINT2}/_vt_api/List/UpdateItem`,
        body,
        header,
    );
};

export const deleteProduct = (ID) => {
    let token = '';
    if (sessionstorage.getItem('auth')) {
        const auth = JSON.parse(sessionstorage.getItem('auth'));
        token = auth.token;
    }
    const header = {
        headers: { Authorization: `Authorize ${token}` },
    };
    const body = {
        List: 'products',
        ID: ID,
    };
    return axiosService.post(
        `${API_ENDPOINT2}/_vt_api/List/DeleteItemByID`,
        body,
        header,
    );
};

/////////////////////////////////

export const getProductById = (ID) => {
    let token = '';
    if (sessionstorage.getItem('auth')) {
        const auth = JSON.parse(sessionstorage.getItem('auth'));
        token = auth.token;
    }
    const header = {
        headers: { Authorization: `Authorize ${token}` },
    };
    const body = {
        a: ID,
    };
    return axiosService.post(
        `${API_ENDPOINT2}/_api/test/test`,
        body,
        header,
    );
};
// export const getListProduct = () => {
//     const page = 1;
//     const rowLimit = 10;
//     let query = '';
//     return axios.post(
//         `${API_ENDPOINT2}/_vt_api/List/GetItems`,
//         {
//             List: 'products',
//             SPQuery: {
//                 AllowPaging: true,
//                 Paging: page,
//                 RowLimit: rowLimit,
//                 Query: query,
//             },
//         },
//         {
//             headers: { Authorization: `Authorize ${token}` },
//         },
//     );
// };
