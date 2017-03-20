import { ADD_FRIENDS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return action.payload;
      break;
  }
  return state;
}