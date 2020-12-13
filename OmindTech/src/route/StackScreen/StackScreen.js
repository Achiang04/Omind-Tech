import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from '../TabScreen/TabScreen';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="TabScreen" component={TabScreen} />
    </Stack.Navigator>
  );
}
