import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './reducers';

type Props = {
    value: any;
    onIncrement: () => void;
    onDecrement: () => void;
};

/**
 * @useSelector - Redux store에서 상태를 선택하는 hook입니다.
 * @useDispatch - Redux store에 액션을 디스패치하는 hook입니다.
 * Dispatch는 액션을 store에 보내어 상태를 변경하는 역할을 합니다.
 */

function App({ value, onIncrement, onDecrement }: Props) {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter);
    const todos: string[] = useSelector((state: RootState) => state.todos);
    const [todoValue, setTodoValue] = useState('');
    const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    };
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            text: todoValue,
        });
        setTodoValue('');
    };

    return (
        <div className="App">
            Clicked: {counter} times
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" value={todoValue} onChange={handleChane} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
