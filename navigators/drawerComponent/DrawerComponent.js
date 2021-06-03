import React from 'react';
import {View} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function props() {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View>
          <DrawerItem name="Purhcase" text="Purchase" />
          <DrawerItem name="Sell" text="Sell" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
