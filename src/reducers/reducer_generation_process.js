import { GIFT_PROCESS } from '../actions/index'

export default (state = false, action) => {
  switch(action.type) {
  case GIFT_PROCESS:
    return action.payload;
  }
  return state;
}
