export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const createRequestTypes = base =>
  [PENDING, SUCCESS, FAILURE].reduce((actionCreator, type) => {
    actionCreator[type] = `${base}_${type}`;
    return actionCreator;
  }, {});


export const createAction = (type, payload = {}) => ({ type, ...payload });
