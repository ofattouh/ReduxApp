/**
 * ReduxApp React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux';

// PersistGate ensure cached Redux store is loaded before any components are loaded

import Album from './components/Album';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <Album />
    </PersistGate>
  </Provider>
);

export default App;

// npx react-native init MyApp
// npm install --save redux react-redux
// npm install --save axios
// npm install --save redux-promise-middleware
// npm install --save randomcolor
// npm install --save redux-persist
// npm install --save @react-native-async-storage/async-storage
// cd ios // pod install OR // npx pod-install
