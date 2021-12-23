import * as types from './actions/types';
import { put, call } from 'redux-saga/effects';
import {
  getAllProducts,
  getAllProductsFromUserService,
  getUserInfo,
  loginService,
  sendService,
  createProduct,
  buyProduct,
  getAllPurchaseByUserIdService,
  updateProduct,
  updateUser,
} from '../services/services';
import { setOnLocalStorage } from '../utils/localstorage';

export function* sendForm(payload) {
  try {
    yield call(sendService, payload);
    yield put({ type: types.CREATE_USER_SUCCESS, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.CREATE_USER_FAIL, errorData });
  }
}

export function* updateUserSaga(payload) {
  try {
    const user = yield call(updateUser, payload);
    yield put({ type: types.UPDATE_USER_SUCCESS, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    // yield put({ type: types.CREATE_USER_FAIL, errorData });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginService, payload);
    setOnLocalStorage('token', response?.data?.token);
    const userInfo = yield call(getUserInfo, payload?.user?.email);
    const products = yield call(
      getAllProductsFromUserService,
      userInfo?.data?.id,
    );
    yield put({ type: types.LOGIN_SUCCESS, userInfo });
    yield put({ type: types.GET_ALL_PRODUCTS_BY_USER_EMAIL_SUCCESS, products });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.LOGIN_ERROR, errorData });
  }
}

export function* getAllProductsSaga() {
  try {
    const products = yield call(getAllProducts);
    yield put({ type: types.GET_ALL_PRODUCTS_SUCCESS, products });
  } catch (error) {
    console.log(error);
  }
}

export function* createProductSaga(payload) {
  try {
    const product = yield call(createProduct, payload);
    yield put({ type: types.CREATE_PRODUCTS_SUCCESS, product });
  } catch (error) {
    console.log(error);
    console.log('Erro no payload');
  }
}

export function* updateProductSaga(payload) {
  try {
    const product = yield call(updateProduct, payload);
    const products = yield call(getAllProducts);
    yield put({ type: types.GET_ALL_PRODUCTS_SUCCESS, products });
    yield put({ type: types.GET_ALL_PRODUCTS_BY_USER_EMAIL_SUCCESS, products });
    yield put({ type: types.UPDATE_PRODUCT_SUCCESS, product });
  } catch (error) {
    console.log(error);
    console.log('Erro no payload');
  }
}

export function* buySaga(payload) {
  try {
    const product = yield call(buyProduct, payload);
    const userId = payload?.purchase.userId;
    yield put({ type: types.PURCHASE_SUCCESS, product });
    const purchase = yield call(getAllPurchaseByUserIdService, userId);
    yield put({
      type: types.GET_ALL_PURCHASE_BY_USER_ID_ACTION_SUCCESS,
      purchase,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getAllPurchaseByUserIdSaga(payload) {
  try {
    const purchase = yield call(getAllPurchaseByUserIdService, payload?.userId);
    yield put({
      type: types.GET_ALL_PURCHASE_BY_USER_ID_ACTION_SUCCESS,
      purchase,
    });
  } catch (error) {
    console.log(error);
  }
}
