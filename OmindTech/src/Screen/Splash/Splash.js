import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import styles from './SplashStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Welcome'));
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/image/Omind_Tech.png')}
        />
      </View>
    </View>
  );
}
