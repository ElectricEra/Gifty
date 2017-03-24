import { combineReducers } from 'redux'
import currentForm from './reducer_form'
import generatedGifts from './reducer_gifts'
import firstEntrance from './reducer_entrance'
import user from './reducer_user'
import logStatus from './reducer_log_status'

import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  form: formReducer,
  isFirstTime: firstEntrance,
  currentForm,
  user,
  logStatus
})

export default App
