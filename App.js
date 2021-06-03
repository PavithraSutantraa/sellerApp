import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigators/RootNavigation';
import {store, persistor} from './redux/store';

import {DefaultTheme} from 'react-native-paper';
import COLORS from './Utils/color_constants';

export default function App() {
  const defaultTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: COLORS.lightGreen,
      accent: COLORS.orange,
    },
  };
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={defaultTheme}>
          <RootNavigation />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}
