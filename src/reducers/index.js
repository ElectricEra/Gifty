import { combineReducers } from 'redux'
import currentGift from './reducer_current_gift';
import generatedGifts from './reducer_gifts';
import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  form: formReducer,
  currentGift
})

export default App
