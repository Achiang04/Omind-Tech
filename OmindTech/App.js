import React from 'react';
import StackScreen from './src/route/StackScreen/StackScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/Store/store';
console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
}
