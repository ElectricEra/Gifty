import { combineReducers } from 'redux'
import currentForm from './reducer_form'
import generatedGifts from './reducer_gifts'
import firstEntrance from './reducer_entrance'
import user from './reducer_user'
import logStatus from './reducer_log_status'
import giftProcess from './reducer_generation_process'
import prevPath from './reducer_last_path'

import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  form: formReducer,
  isFirstTime: firstEntrance,
  giftProcessState:giftProcess,
  currentForm,
  user,
  logStatus,
  prevPath
})

export default App
