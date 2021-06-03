import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerStack from './DrawerStack';
import NavConstants from './navConstants';
import HomeScreen from '../modules/home/homeScreen';

import {useWindowDimensions} from 'react-native';
import {DrawerComponent} from './drawerComponent/DrawerComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName={NavConstants.drawerStack}
      drawerStyle={{width: (dimensions.width * 2) / 3}}
      drawerContent={props => {
        <DrawerComponent {...props} />;
      }}>
      <Drawer.Screen name="DashBoard" component={DrawerStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
