import { LOG_IN, LOG_OUT, CREATE_USER, ADD_FRIENDS, ADD_TO_HISTORY, DELETE_FROM_HISTORY } from '../actions/index';

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
      return Object.assign({}, state, {friends: action.payload});
      break;

    case ADD_TO_HISTORY:      
      return Object.assign({}, state, {history: [action.payload,...state.history].slice(0,10)});
      break;

    case DELETE_FROM_HISTORY:
      var tempArr = [...state.history];
      tempArr.splice(action.payload,1);
      return Object.assign({}, state, {history: tempArr});
      break; 

  }
  return state;
}
