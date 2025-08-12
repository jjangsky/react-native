import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import counter from './reducers/index'; // Assuming you have a counter reducer
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// redux는 상태 관리 라이브러리로, 애플리케이션의 상태를 중앙에서 관리할 수 있게 해줍니다.
// index.tsx 파일에서 redux를 사용하기 위해 createStore 함수를 import합니다.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(counter);

const render = () => root.render(
  <React.StrictMode>
    <App value={store.getState()}
    onIncrement={()=> store.dispatch({type:"INCREMENT"})}
    onDecrement={()=> store.dispatch({type:"DECREMENT"})}/>
  </React.StrictMode>
);

render();
store.subscribe(render); // 상태가 변경될 때마다 render 함수를 호출하여 UI를 업데이트

reportWebVitals();
