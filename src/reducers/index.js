import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';
import modalReducer from './modal';
import productReducer from './product';
import uiReducer from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  modal: modalReducer,
  login: loginReducer,
  product: productReducer,
  form: formReducer,
});

export default rootReducer;
