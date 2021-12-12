import { takeLatest } from 'redux-saga/effects';
import * as types from './actions/types';
import { sendForm } from './userSaga';

export default function* watchForm() {
  yield takeLatest(types.CREATE_USER, sendForm);
}
