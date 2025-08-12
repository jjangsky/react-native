import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducers/index'; // Assuming you have a counter reducer
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { configureStore } from '@reduxjs/toolkit';

// redux는 상태 관리 라이브러리로, 애플리케이션의 상태를 중앙에서 관리할 수 있게 해줍니다.
// index.tsx 파일에서 redux를 사용하기 위해 createStore 함수를 import합니다.

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Hello Redux'
// })

// middleware는 Redux의 액션을 가로채고,
// 액션이 store에 도달하기 전에 추가적인 작업을 수행할 수 있게 해줍니다.
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log('Dispatching action:', action);
    return next(action); // 액션을 다음 미들웨어로 전달
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

const render = () =>
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    value={store.getState()}
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />
            </Provider>
        </React.StrictMode>
    );

render();

reportWebVitals();
