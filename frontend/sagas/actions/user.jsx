import * as types from './types';
import { LOGOUT } from './types';

export const createUserAction = (user) => {
  return {
    type: types.CREATE_USER_SUCCESS,
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
