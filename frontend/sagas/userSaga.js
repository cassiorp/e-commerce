import * as types from './actions/types';
import { put, call } from 'redux-saga/effects';
import { sendService } from '../services/services';

export function* sendForm(payload) {
  try {
    yield call(sendService, payload);
    yield put({ type: types.CREATE_USER, payload });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.CREATE_USER_FAIL, errorData });
  }
}
