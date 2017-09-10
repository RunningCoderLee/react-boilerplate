import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _ from 'lodash';
import { loadState, saveState } from '$utils/local-storage'; // eslint-disable-line


import rootSaga from '$saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

// redux devTool
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // eslint-disable-line
}

const persistedState = loadState();

const configureStore = () => {
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // NOTE: 更新存入本地的store状态，以便在类似刷新页面这样的操作后依然能够保留store数据
  store.subscribe(_.throttle(() => {
    const { auth } = store.getState();

    saveState({
      auth,
    });
  }, 1000));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
