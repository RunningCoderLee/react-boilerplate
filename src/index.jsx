import ReactDOM from 'react-dom';

import '$styles/public.scss';
import router from './router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  router,
  document.getElementById('root'),
);

registerServiceWorker();
