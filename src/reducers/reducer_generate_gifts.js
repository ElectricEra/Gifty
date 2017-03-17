import GENERATE_GIFTS from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case GENERATE_GIFTS:
      return action.payload;
      break;
  }
  return state;
}
