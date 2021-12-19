import * as types from '../sagas/actions/types';

const initialState = {
  name: '',
  email: '',
  error: undefined,
  logged: false,
};

export const user = (state = initialState, action = null) => {
  console.log(action.type);
  if (action.type === types.CREATE_USER) {
    return {
      ...state,
      name: action.user.name,
      email: action.user.email,
    };
  } else if (action.type === types.CREATE_USER_FAIL) {
    return {
      error: { message: 'Usuario já cadastrado' },
    };
  } else if (action.type === types.LOGIN_SUCCESS) {
    return {
      ...state,
      logged: true,
    };
  } else if (action.type === types.LOGIN_ERROR) {
    return {
      error: { message: 'Usuario ou senha incorreto' },
      logged: false,
    };
  } else if (action.type === types.LOGOUT) {
    return initialState;
  } else {
    return state;
  }
};
