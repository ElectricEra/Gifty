import { combineReducers } from 'redux'
import form from "./reducer_form";
import generation from './reducer_generate_gifts';
import currentGift from './reducer_current_gift';
import generatedGifts from './reducer_gifts';


const App = combineReducers({
  generation,
  gifts: generatedGifts
})

export default App
