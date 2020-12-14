import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonsStyle';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default function Buttons(props) {
  return (
    <View>
      {/* <TouchableOpacity
        style={[
          styles.container,
          {backgroundColor: props.bgColor, borderColor: props.bgColor},
        ]}
        onPress={props.press}>
        <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[
          styles.container,
          {
            width: props.width,
            backgroundColor: props.bgColor,
            borderColor: props.borColor,
          },
        ]}
        onPress={props.press}>
        <Text
          style={{
            color: props.color,
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
          }}>
          {props.text}
        </Text>
        {props.loading}
      </TouchableOpacity>
    </View>
  );
}
