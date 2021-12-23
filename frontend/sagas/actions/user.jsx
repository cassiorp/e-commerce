import * as types from './types';
import { GET_ALL_PRODUCTS } from './types';

export const createUserAction = (user) => {
  return {
    type: types.CREATE_USER,
    user,
  };
};

export const loginAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const logOutAction = () => {
  return {
    type: types.LOGOUT,
  };
};

export const getAllProductsAction = () => {
  return {
    type: types.GET_ALL_PRODUCTS,
  };
};

export const createProductAction = (product) => {
  return {
    type: types.CREATE_PRODUCT,
    product,
  };
};

export const buyAction = (purchase) => {
  return {
    type: types.PURCHASE,
    purchase,
  };
};

export const getAllPurchaseByUserIdAction = (userId) => {
  return {
    type: types.GET_ALL_PURCHASE_BY_USER_ID_ACTION,
    userId,
  };
};
