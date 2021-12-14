import * as types from '../sagas/actions/types';
import {LOGIN_SUCCESS} from "../sagas/actions/types";

const initialState = {
  name: '',
  email: '',
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.CREATE_USER) {
    return {
      ...state,
      name: action.user.name,
      email: action.user.email,
    };
  } else if (action.type === types.CREATE_USER_FAIL) {
    const response = action?.errorData;
    return {
      error: response,
    };
  } else if (action.type === types.LOGIN_SUCCESS) {
    return {
      ...state,
      name: action.user.name,
      email: action.user.email,
    };
  }
};
