/* eslint-disable */
import { all, fork } from 'redux-saga/effects';
import { saga as authSaga } from '$pages/login';

export default function* root() {
  yield all([
    fork(authSaga.watchLogin),
    fork(authSaga.watchLogout),
  ]);
}

