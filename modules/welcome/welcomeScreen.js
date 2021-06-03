import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {ActivityIndicator, Title, IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../Utils/color_constants';

export default function WelcomeScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.lightGreen} />
      <Text>Hello World</Text>
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