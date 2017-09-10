import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// import { reducer as authReducer, actions } from '$pages/auth';
import { reducer as auth } from '$pages/login';


const rootReducers = combineReducers({
  routing: routerReducer,
  auth,
});


export default rootReducers;
