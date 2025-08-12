import { combineReducers } from 'redux';
import counter from './counter'; // Assuming you have a counterReducer
import todos from './todos'; // Assuming you have a todosReducer

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
