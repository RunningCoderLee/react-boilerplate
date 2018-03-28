import React from 'react';
import ReactDOM from 'react-dom';

import 'Styles/public.scss';

import App from './routes/index';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

registerServiceWorker();
