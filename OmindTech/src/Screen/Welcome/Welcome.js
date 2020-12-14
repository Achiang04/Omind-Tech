import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Buttons from '../../Reusable/Buttons/Buttons';
import {wp} from '../../Reusable/Responsive/dimen';
import styles from './WelcomeStyle';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/image/Omind_Tech.png')}
      />
      <View style={styles.button}>
        <Buttons
          width={wp(320)}
          bgColor={'#FDCB5A'}
          text={'Login'}
          borColor={'#FDCB5A'}
          color={'#1A3150'}
          press={() => navigation.replace('Login')}
        />
      </View>
      <Buttons
        width={wp(320)}
        bgColor={'#1F99D3'}
        text={'Register'}
        borColor={'#1F99D3'}
        color={'#fff'}
        press={() => navigation.replace('Regis')}
      />
    </View>
  );
}
