import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from '../TabScreen/TabScreen';
import Login from '../../Screen/Login/Login';
import Regis from '../../Screen/Regis/Regis';
const Stack = createStackNavigator();
import EditProfile from '../../Screen/Profile/EditProfile';

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabScreen" component={TabScreen} />
      <Stack.Screen name="Regis" component={Regis} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
