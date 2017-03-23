import { SIGN_UP_FAILED, SIGN_UP_SUCCESS } from '../actions/index'
import { LOG_IN_FAILED, LOG_IN_SUCCESS } from '../actions/index'
import { LOGGED_OUT } from '../actions/index'


const initialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      console.log('LOG_IN_SUCCESS');
      return Object.assign({}, state, action.payload);
      break;

    case LOG_IN_FAILED:
      console.log('LOG_IN_FAILED');
      return Object.assign({}, state, action.payload);
      break;

    case SIGN_UP_SUCCESS:
      console.log('SIGN_UP_SUCCESS');
      return Object.assign({}, state, action.payload);

    case SIGN_UP_FAILED:
      console.log('SIGN_UP_FAILED');
      return Object.assign({}, state, action.payload);
      break;

    case LOGGED_OUT:
      console.log('LOGGED OUT');
      return Object.assign({}, initialState);
      break;
  }
  return state;
}
