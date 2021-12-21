import { takeLatest } from 'redux-saga/effects';
import * as types from './actions/types';
import { getAllProductsSaga, loginSaga, sendForm, createProductSaga } from './userSaga';

export default function* watchForm() {
  yield takeLatest(types.CREATE_USER, sendForm);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.GET_ALL_PRODUCTS, getAllProductsSaga);
  yield takeLatest(types.CREATE_PRODUCT, createProductSaga);
}
