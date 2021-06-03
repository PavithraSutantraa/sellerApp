import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../modules/welcome/welcomeScreen';
import DrawerNavigator from './DrawerNavigator';
import NavConstants from './navConstants';
import React from 'react';

const Stack = createStackNavigator();

const TopStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NavConstants.drawerNavigator}>
      <Stack.Screen
        name={NavConstants.welcome}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavConstants.drawerNavigator}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TopStackNavigator;
