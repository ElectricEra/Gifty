import { LOG_IN, LOG_OUT, CREATE_USER, ADD_FRIENDS, ADD_TO_HISTORY } from '../actions/index';
import axios from 'axios';

const initialState = {
    name: undefined,
    email: undefined,
    facebook: undefined,
    password: undefined,
    picture: '',
    friends: [],
    history: [],
    settings: []
};

export default (state = initialState, action) => {
  var result;
  switch (action.type) {
    case LOG_IN:
      console.log(`${action.payload.email} LOGED IN`);
      return Object.assign({}, state, action.payload);
      break;

    case LOG_OUT:
      return Object.assign({}, initialState);
      break;

    case CREATE_USER:
      console.log(`USER ${action.payload.email} CREATED`);
      return Object.assign({}, state, action.payload);
      break;

    case ADD_FRIENDS:
      result = Object.assign({}, state, {friends: action.payload});
      axios.post('/update', 
        {
          facebook: result.facebook, 
          email: result.email, 
          friends: result.friends
        }
      );
      return result;
      break;

    case ADD_TO_HISTORY:
      result = Object.assign({}, state, {history: [action.payload,...state.history].slice(0,10)});
      axios.post('/update', 
        {
          facebook: result.facebook, 
          email: result.email, 
          history: result.history
        }
      );
      return result;
      break;
  }
  return state;
}
