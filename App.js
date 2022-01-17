import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './screen/Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>HELLO, SHREYANSH</Text>
      <Screen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height:120,
    color:"white",
    fontSize:30,
    color: '#fb5b5a',
    fontWeight:"bold"
  }
});