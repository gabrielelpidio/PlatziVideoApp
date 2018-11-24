/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './src/sections/components/splash-screen';
import AppLayout from './src/app';


type Props = {};


export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<SplashScreen />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}


