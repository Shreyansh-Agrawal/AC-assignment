import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function LoginButton(props) {
  return (
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.inputText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  inputText: {
    color: 'white',
  },
});
