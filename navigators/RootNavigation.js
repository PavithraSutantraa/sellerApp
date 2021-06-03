import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopStackNavigator from './TopStackNavigator';

export default function RootNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TopStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
