import { takeLatest } from 'redux-saga/effects';
import * as types from './actions/types';
import {
  getAllProductsSaga,
  loginSaga,
  sendForm,
  createProductSaga,
  buySaga,
  getAllPurchaseByUserIdSaga,
  updateProductSaga,
  updateUserSaga
} from './userSaga';

export default function* watchForm() {
  yield takeLatest(types.CREATE_USER, sendForm);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.GET_ALL_PRODUCTS, getAllProductsSaga);
  yield takeLatest(types.CREATE_PRODUCT, createProductSaga);
  yield takeLatest(types.UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(types.UPDATE_USER, updateUserSaga);
  yield takeLatest(types.PURCHASE, buySaga);
  yield takeLatest(
    types.GET_ALL_PURCHASE_BY_USER_ID_ACTION,
    getAllPurchaseByUserIdSaga,
  );
}
