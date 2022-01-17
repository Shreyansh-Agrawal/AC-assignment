import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function LoginButton(props) {
  return (
    <TouchableOpacity style={styles.signUpBtn}>
      <Text style={styles.inputText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signUpBtn: {
    width: 350,
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputText: {
    color: 'white',
  },
});
