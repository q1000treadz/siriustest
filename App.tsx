/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from './src/reducers/mainReducer'
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import {mainSaga} from './src/saga/saga'
import Loader from './src/loader';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga)

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Loader />
      </NavigationContainer>
    </Provider>

  )
}

export default App;
