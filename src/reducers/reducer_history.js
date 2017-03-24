import { ADD_TO_HISTORY } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
  	case ADD_TO_HISTORY:
      console.log("reducer history");
      console.log([action.payload,...state].slice(0,5));
      return [action.payload,...state].slice(0,5);
      break;
  }
  return state;
}