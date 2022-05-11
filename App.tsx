import React from 'react';
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RouteScreen } from './src/routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from './src/hooks/useTheme';
import { StyleSheet } from 'react-native';
import { getCurrentTheme } from './src/utils/Utils';

const Stack = createStackNavigator();

function App() {
  const theme = getCurrentTheme();
  const navigationTheme = useTheme(DarkTheme, DefaultTheme);
  const styles = StyleSheet.create({
    container: {
      flex: theme.FULL,
      backgroundColor: navigationTheme.colors.card,
      paddingBottom: 10,
    },
  });

  const ScreenRoutes = Routes.map((screen: RouteScreen) => (
    <Stack.Screen
      key={screen.name}
      options={{ headerBackTitleVisible: false }}
      name={screen.name}
      component={screen.component}
    />
  ));

  return (
    <NavigationContainer theme={navigationTheme}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>{ScreenRoutes}</Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
