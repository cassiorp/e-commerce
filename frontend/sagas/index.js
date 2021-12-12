import { fork } from 'redux-saga/effects';
import watchForm from './watchers';

export default function* startForman() {
  yield fork(watchForm);
}
