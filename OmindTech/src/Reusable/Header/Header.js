import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styles from './HeaderStyle';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.press}>
        <FontAwesome5
          style={styles.icon}
          name={props.icon}
          color={'white'}
          size={RFPercentage(2)}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}
