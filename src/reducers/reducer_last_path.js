import { LAST_PATH } from '../actions/index'

export default (state = "", action) => {
  switch(action.type) {
  case LAST_PATH:
    return action.payload;
  }
  return state;
}