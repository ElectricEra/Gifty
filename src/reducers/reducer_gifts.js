import { GET_GIFTS } from '../actions/index'
import { GIFT_RESET } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
  	case GIFT_RESET:
      console.log("reducer gifts");
      console.log(action.payload);
      return action.payload;
      break;
    case GET_GIFTS:
      console.log("reducer gifts");
      console.log(action.payload);
      return action.payload.data;
      break;
  }
  return state;
}
