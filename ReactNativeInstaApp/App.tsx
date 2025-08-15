import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './src/screens/Search';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Status from './src/screens/Status';
import FriendProfile from './src/screens/FriendProfile';
import EditProfile from './src/screens/EditProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    // 바텀 탭 라우팅 함수
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { height: 70 },
          tabBarIcon: ({ focused, color, size }) => {
            // 아이콘 설정
            let iconName: string = 'home-outline';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
