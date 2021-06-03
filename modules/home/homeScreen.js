import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavConstants from '../../navigators/navConstants';
import COLORS from '../../Utils/color_constants';

export default function HomeScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      {/* <Avatar.Image
        size={94}
        source={require('../../assets/images/appImages/addProduct.png')}
      /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NavConstants.addProduct);
        }}>
        <Image
          source={require('../../assets/images/appImages/addProduct.png')}
          style={{
            width: 120,
            height: 80,
            borderRadius: 10,
          }}
          resizeMode="center"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionStyles: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  titleStyle: {
    textAlign: 'center',
  },
});
