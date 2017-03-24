import { ADD_TO_HISTORY } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
  	case ADD_TO_HISTORY:
      return [action.payload,...state].slice(0,10);
      break;
  }
  return state;
}