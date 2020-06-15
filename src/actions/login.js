/** @format */

import * as loginConstants from './../constants/login';

export const login = (email, password) => {
    return {
        type: loginConstants.LOGIN,
        payload: {
            email,
            password,
        },
    };
};
 
export const loginSuccess = (data) => {
    return {
        type: loginConstants.LOGIN_SUCCESS,
        payload: {
            data,
        },
    };
};

export const loginFailed = (error) => {
    return {
        type: loginConstants.LOGIN_FAILED,
        payload: {
            error,
        },
    };
};
