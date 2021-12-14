import { takeLatest } from 'redux-saga/effects';
import * as types from './actions/types';
import { loginSaga, sendForm } from './userSaga';

export default function* watchForm() {
  yield takeLatest(types.CREATE_USER, sendForm);
  yield takeLatest(types.LOGIN_SUCCESS, loginSaga);
}
