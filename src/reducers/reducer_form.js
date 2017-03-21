import { CHANGE_SIGN_UP } from '../actions/index'
import { CHANGE_SIGN_IN } from '../actions/index'

export default (state = 'signIn', action) => {
  switch (action.type) {
    case CHANGE_SIGN_UP:
      return action.payload;
      break;
    case CHANGE_SIGN_IN:
      return action.payload;
      break;
  }
  return state;
}
