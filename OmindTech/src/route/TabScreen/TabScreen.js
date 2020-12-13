import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screen/Home/Home.js';
import Live from '../../Screen/Live/Live';
import Diskusi from '../../Screen/Diskusi/Diskusi';
import Profile from '../../Screen/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'home-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Live',
          selectedTextColor: '#FFFFFF',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'location-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Live"
        component={Live}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Diskusi',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'heart-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Diskusi"
        component={Diskusi}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'person-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
