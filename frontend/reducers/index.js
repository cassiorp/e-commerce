import * as types from '../sagas/actions/types';

const initialState = {
  name: '',
  email: '',
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.CREATE_USER) {
    console.log(action.payload, 'uuuuuuuuuu');
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
  }
};
