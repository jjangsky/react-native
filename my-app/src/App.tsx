import {useState} from 'react';
import logo from './logo.svg';
import './App.css';


type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState('');
  const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue('');
  }

  return (
    <div className="App">
      Clicked: 
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
      <form onSubmit ={addTodo}>
        <input type="text" value={todoValue} onChange={handleChane} />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
