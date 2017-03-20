import { combineReducers } from 'redux'
import currentGift from './reducer_current_gift';
import generatedGifts from './reducer_gifts';
import addedFriends from './reducer_friends';
import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  friends: addedFriends,
  form: formReducer,
  currentGift
})

export default App
