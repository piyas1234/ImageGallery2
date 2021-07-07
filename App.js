import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from './src/Screens/HomeScreens';
import AccountScreens from './src/Screens/AccountScreens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreens} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={AccountScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;