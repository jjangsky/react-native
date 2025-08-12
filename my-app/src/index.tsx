import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducers/index'; // Assuming you have a counter reducer
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {createStore} from 'redux';

// redux는 상태 관리 라이브러리로, 애플리케이션의 상태를 중앙에서 관리할 수 있게 해줍니다.
// index.tsx 파일에서 redux를 사용하기 위해 createStore 함수를 import합니다.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);

store.dispatch({
  type: 'ADD_TODO',
  text: 'Hello Redux'
})

const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App value={store.getState()}
      onIncrement={()=> store.dispatch({type:"INCREMENT"})}
      onDecrement={()=> store.dispatch({type:"DECREMENT"})}/>
      </Provider>
  </React.StrictMode>
);

render();

reportWebVitals();
