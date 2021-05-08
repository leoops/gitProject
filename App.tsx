import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RouteScreen } from './src/routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  const ScreenRoutes = Routes.map((screen: RouteScreen) => (
    <Stack.Screen
      key={screen.name}
      options={{ headerBackTitleVisible: false }}
      name={screen.name}
      component={screen.component}
    />
  ));

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 10 }}>
        <Stack.Navigator>{ScreenRoutes}</Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
