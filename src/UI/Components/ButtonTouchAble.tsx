import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type ButtonTouchAbleType = {
  text: string;
  bgColor: string;
  textColor: string;
};

const ButtonTouchAble: React.FC<ButtonTouchAbleType> = ({
  text,
  bgColor,
  textColor,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.touchableOpacity, {backgroundColor: bgColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTouchAble;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    padding: 10,
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 180,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
  },
});
