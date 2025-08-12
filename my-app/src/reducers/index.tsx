import { combineReducers } from 'redux';
import counter from './counter'; // Assuming you have a counterReducer
import todos from './todos'; // Assuming you have a todosReducer
import posts from './posts'; // Assuming you have a postsReducer

const rootReducer = combineReducers({
    counter,
    todos,
    posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
