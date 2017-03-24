import { combineReducers } from 'redux'
import currentForm from './reducer_form'
import addedFriends from './reducer_friends'
import generatedGifts from './reducer_gifts'
import firstEntrance from './reducer_entrance'
import user from './reducer_user'
import logStatus from './reducer_log_status'
import history from './reducer_history'

import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  friends: addedFriends,
  form: formReducer,
  isFirstTime: firstEntrance,
  history,
  currentForm,
  user,
  logStatus
})

export default App
