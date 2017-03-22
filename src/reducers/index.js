import { combineReducers } from 'redux'
import currentGift from './reducer_current_gift'
import currentForm from './reducer_form'
import addedFriends from './reducer_friends'
import generatedGifts from './reducer_gifts'
import firstEntrance from './reducer_entrance'
import { reducer as formReducer } from 'redux-form'


const App = combineReducers({
  gifts: generatedGifts,
  friends: addedFriends,
  form: formReducer,
  isFirstTime: firstEntrance,
  currentForm,
  currentGift
})

export default App
