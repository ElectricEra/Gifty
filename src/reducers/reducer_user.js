import { LOG_IN, LOG_OUT } from '../actions/index'
import { CREATE_USER } from '../actions/index'

const initialState = {
    name: undefined,
    email: undefined,
    password: undefined,
    picture: '',
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

  }
  return state;
}
