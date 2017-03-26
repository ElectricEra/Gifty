import { GIFT_PROCESS } from '../actions/index'

export default (state = "WAIT", action) => {
  switch(action.type) {
  case GIFT_PROCESS:
    return action.payload;
  }
  return state;
}
