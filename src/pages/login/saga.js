import { put, call, take, fork } from 'redux-saga/effects';
import { hashHistory } from 'react-router';
// import { recordApi } from '$api/index';

import * as actions from './redux';


const fakeApi = password => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (password === '123456') {
      resolve({ name: '张三' });
    }

    reject({ content: '密码错误' });
  }, 3000);
});


function* authorize(password) {

  yield put({ type: actions.LOG_IN.PENDING });

  try {

    const { name } = yield call(fakeApi, password);


    yield put({
      type: actions.LOG_IN.SUCCESS,
      name,
    });

    hashHistory.push('/system-configuration');


  } catch (error) {

    yield put({
      type    : actions.LOG_IN.FAILURE,
      content : error.content,
    });

  }
}

function* logout() {

  yield put({
    type: actions.LOG_OUT,
  });

  hashHistory.push('/login');
}

export function* watchLogin() {

  while (true) {

    const { password } = yield take(actions.REQUEST_LOG_IN);

    yield fork(authorize, password);

  }

}

export function* watchLogout() {

  while (true) {

    yield take(actions.REQUEST_LOG_OUT);

    yield fork(logout);

  }

}
