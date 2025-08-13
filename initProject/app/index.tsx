import { Provider } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Main"
                        component={MainScreen}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={LoginScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
