import * as types from '../sagas/actions/types';

const initialState = {
  name: '',
  email: '',
  id: '',
  error: undefined,
  logged: false,
  success: false,
  productsFromUser: [],
  products: [],
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.CREATE_USER) {
    return {
      ...state,
      name: action.user.name,
      email: action.user.email,
      success: true,
    };
  } else if (action.type === types.CREATE_USER_FAIL) {
    return {
      error: { message: 'Usuario já cadastrado' },
    };
  } else if (action.type === types.LOGIN_SUCCESS) {
    return {
      ...state,
      email: action.userInfo.data.email,
      id: action.userInfo.data.id,
      logged: true,
    };
  } else if (action.type === types.LOGIN_ERROR) {
    return {
      error: { message: 'Usuario ou senha incorreto' },
      logged: false,
    };
  } else if (action.type === types.GET_ALL_PRODUCTS_BY_USER_EMAIL_SUCCESS) {
    return {
      ...state,
      productsFromUser: action.products.data,
    };
  } else if (action.type === types.CREATE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      productsFromUser: [action.product.data, ...state.productsFromUser],
    };
  } else if (action.type === types.GET_ALL_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.products.data,
    };
  } else if (action.type === types.LOGOUT) {
    return initialState;
  } else {
    return state;
  }
};
