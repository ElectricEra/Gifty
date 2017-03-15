import { combineReducers } from 'redux'
import form from "./reducer_form";
import gifts from './reducer_gifts';
import currentGift from './reducer_current_gift';


const App = combineReducers({
  form,
  gifts,
  currentGift
})

export default App
