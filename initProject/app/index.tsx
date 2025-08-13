import { Provider } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import { store } from '../redux/store';

export default function HomeScreen() {
   return (
      <Provider store={store}>
         <MainScreen />
      </Provider>
   );
}
