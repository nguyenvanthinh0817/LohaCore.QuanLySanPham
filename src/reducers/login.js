/** @format */

import * as loginConstants from './../constants/login';
import { toastSuccess, toastError2 } from '../helpers/toastHelper';

import sessionstorage from 'sessionstorage';
const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginConstants.LOGIN: {
            console.log('login');
            return {
                ...state,
            };
        }
        case loginConstants.LOGIN_SUCCESS: {
            const { UserTokenKey, CurrentUser } = action.payload.data;
            const currentUser = {
                name: CurrentUser,
                token: UserTokenKey,
            };
            sessionstorage.setItem('auth', JSON.stringify(currentUser));
            toastSuccess('Wellcome back');
            return {
                ...state,
            };
        }
        case loginConstants.LOGIN_FAILED: {
            const { error } = action.payload;
            toastError2(error);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default reducer;
