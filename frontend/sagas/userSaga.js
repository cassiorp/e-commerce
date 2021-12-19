import * as types from './actions/types';
import { put, call } from 'redux-saga/effects';
import { loginService, sendService } from '../services/services';
import redirect from 'nextjs-redirect';

export function* sendForm(payload) {
  try {
    yield call(sendService, payload);
    yield put({ type: types.CREATE_USER, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.CREATE_USER_FAIL, errorData });
  }
}

export function* loginSaga(payload) {
  try {
    yield call(loginService, payload);
    console.log('ccccccccccccccccccccccccc');
    yield put({ type: types.LOGIN_SUCCESS, payload });
    redirect('http://localhost:3000/home');
  } catch (error) {
    console.log('dddddddddddddddddd', error);
    const errorData = error?.response?.data;
    yield put({ type: types.LOGIN_ERROR, errorData });
  }
}
