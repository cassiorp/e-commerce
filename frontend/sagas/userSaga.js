import * as types from './actions/types';
import { put, call } from 'redux-saga/effects';
import { loginService, sendService } from '../services/services';

export function* sendForm(payload) {
  try {
    console.log("criando user");
    yield call(sendService, payload);
    yield put({ type: types.CREATE_USER_SUCCESS, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.CREATE_USER_FAIL, errorData });
  }
}

export function* loginSaga(payload) {
  try {
    yield call(loginService, payload);
    yield put({ type: types.LOGIN_SUCCESS, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.LOGIN_ERROR, errorData });
  }
}
