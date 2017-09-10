import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import configureStore from '$redux/configure-store';

import Layout, { Main } from '$layout/';
import { view as Login } from '$pages/login';
import { view as DataSourceManagement } from '$pages/data-source-management';
import { view as CollectPlanManagement } from '$pages/collect-plan-management';
import { view as CollectTaskManagement } from '$pages/collect-task-management';
import { view as SystemConfiguration } from '$pages/system-configuration';
import { view as NoMatch } from '$pages/no-match';

// const cookies = new Cookies();

import '$styles/public.scss';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

function requireAuth(nextState, replace) {
  const state = store.getState();

  if (!state.auth.isLoggedIn) {
    replace('/login');
  }
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="/system-configuration" />
        <Route path="login" component={Login} />
        <Route component={Main} onEnter={requireAuth} >
          <Route path="data-source-management" component={DataSourceManagement} />
          <Route path="collect-plan-management" component={CollectPlanManagement} />
          <Route path="collect-task-management" component={CollectTaskManagement} />
          <Route path="system-configuration" component={SystemConfiguration} />
        </Route>
      </Route>

      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
);

export default router;

