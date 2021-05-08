import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RouteScreen } from './src/routes/Routes';

const Stack = createStackNavigator();

function App() {
  const ScreenRoutes = Routes.map((screen: RouteScreen) => (
    <Stack.Screen
      options={{ headerBackTitleVisible: false }}
      name={screen.name}
      component={screen.component}
    />
  ));

  return (
    <NavigationContainer>
      <Stack.Navigator>{ScreenRoutes}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
