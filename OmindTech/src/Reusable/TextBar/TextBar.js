import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './TextBarStyle';

export default function TextBar(props) {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        style={styles.inputan}
        placeholder={props.ph}
        onChangeText={props.change}
        secureTextEntry={props.entry}
        keyboardType={props.type}
        value={props.value}
        placeholderTextColor={props.color}
        maxLength={props.length}
        onFocus={props.focus}
        onBlur={props.blur}
        onEndEditing={props.editing}
      />
    </View>
  );
}
