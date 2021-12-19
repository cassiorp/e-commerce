import * as types from './types';

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
