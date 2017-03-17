import { combineReducers } from 'redux'
import form from "./reducer_form";
import gifts from './reducer_gifts';
import currentGift from './reducer_current_gift';
import generatedGifts from './reducer_generated_gifts';



const App = combineReducers({
  form,
  gifts,
  currentGift,
  generatedGifts
})

export default App
