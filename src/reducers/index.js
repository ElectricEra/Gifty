import { combineReducers } from 'redux'
import currentForm from './reducer_form'
import generatedGifts from './reducer_gifts'
import firstEntrance from './reducer_entrance'
import user from './reducer_user'
import stats from './reducer_stats'
import logStatus from './reducer_log_status'
import giftProcess from './reducer_generation_process'

import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  form: formReducer,
  isFirstTime: firstEntrance,
  giftProcessState:giftProcess,
  currentForm,
  user,
  logStatus,
  stats
})

export default App
