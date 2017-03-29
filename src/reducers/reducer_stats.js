import { INC_GIFTS } from '../actions/index'
import { INC_FRIENDS } from '../actions/index'
import { INC_HISTORY } from '../actions/index'

const initialState = {
    gifts: 0,
    friend: 0,
    history: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
  	case INC_FRIENDS:
      return Object.assign({}, state, action.payload);
      break;
    case INC_GIFTS:
      return Object.assign({}, state, action.payload);
      break;
    case INC_HISTORY:
      return Object.assign({}, state, action.payload);
      break;
  }
  return state;
}
