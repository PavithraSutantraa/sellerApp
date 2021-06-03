import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavConstants from './navConstants';
import HomeScreen from '../modules/home/homeScreen';
import AddProductScreen from '../modules/product/addProductScreen';

import screenHeaderOptions from './screenHeaderOptions';
const Stack = createStackNavigator();

const DrawerStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={screenHeaderOptions}
      initialRouteName={NavConstants.home}>
      <Stack.Screen
        name={NavConstants.home}
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={NavConstants.addProduct}
        component={AddProductScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default DrawerStack;
