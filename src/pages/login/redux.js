import { createAction, createRequestTypes, PENDING, SUCCESS, FAILURE } from '$utils/action';
import { MessageType } from '$utils/enumerations';

/* Constants */
export const REQUEST_LOG_IN = 'REQUEST_LOG_IN';
export const LOG_IN = createRequestTypes('LOG_IN');

export const REQUEST_LOG_OUT = 'REQUEST_LOG_OUT';
export const LOG_OUT = 'LOG_OUT';

/* Action Creators */
export const login = password => createAction(REQUEST_LOG_IN, password);
export const logout = () => createAction(REQUEST_LOG_OUT);


const initialState = {
  isLoggedIn : false,
  loading    : false,
  message    : {
    type    : '',
    content : '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN[PENDING]:
      return {
        ...state,
        message: {
          type    : MessageType.LOADING,
          content : '正在登录，请稍后。。。',
        },
        isLoggedIn : false,
        loading    : true,
      };
    case LOG_IN[SUCCESS]:
      return {
        ...state,
        message: {
          type    : MessageType.SUCCESS,
          content : '登录成功',
        },
        isLoggedIn : true,
        loading    : false,
      };
    case LOG_IN[FAILURE]:
      return {
        ...state,
        message: {
          type    : MessageType.ERROR,
          content : action.content,
        },
        isLoggedIn : false,
        loading    : false,
      };


    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
