import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './TextBarStyle';

export default function TextBar(props) {
  return (
    <View>
      <TextInput
        style={styles.inputan}
        placeholder={props.ph}
        onChangeText={props.change}
        secureTextEntry={props.secure}
        keyboardType={props.type}
        value={props.value}
      />
    </View>
  );
}
