import { GET_GIFTS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case GET_GIFTS:
      return [ action.payload.data, ...state ];
      // return Object.assign({}, state, action.payload.data);
      break;
  }
  return state;
}
