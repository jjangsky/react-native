import { combineReducers } from 'redux';
import counterReducer from './counter'; // Assuming you have a counterReducer
import todosReducer from './todos'; // Assuming you have a todosReducer
import exp from 'constants';

const rootReducer = combineReducers({
  counterReducer,  
   todosReducer

})

export default rootReducer;