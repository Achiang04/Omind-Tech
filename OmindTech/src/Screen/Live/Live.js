import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import Header from '../../Reusable/Header/Header';
import styles from './LiveStyle';

export default function Live() {
  return (
    <View style={styles.container}>
      <Header name={'Live'} />
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../../assets/image/1.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/image/2.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/image/3.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/image/4.jpg')}
        />
      </ScrollView>
    </View>
  );
}
