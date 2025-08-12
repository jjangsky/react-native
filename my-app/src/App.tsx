import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './reducers';
import { fetchPosts } from './actions/posts'; // Assuming you have an action creator for fetching posts

type Props = {
    value: any;
    onIncrement: () => void;
    onDecrement: () => void;
};

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

/**
 * @useSelector - Redux store에서 상태를 선택하는 hook입니다.
 * @useDispatch - Redux store에 액션을 디스패치하는 hook입니다.
 * Dispatch는 액션을 store에 보내어 상태를 변경하는 역할을 합니다.
 */

function App({ value, onIncrement, onDecrement }: Props) {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter);
    const todos: string[] = useSelector((state: RootState) => state.todos);
    const posts = useSelector((state: RootState) => state.posts);
    const [todoValue, setTodoValue] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // fetchPosts는 비동기 액션을 디스패치하는 함수입니다.

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
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
