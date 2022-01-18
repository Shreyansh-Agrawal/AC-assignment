import React from 'react';
import {StyleSheet, TextInput,View} from 'react-native';

export default function MyInput(props) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholderText}
        placeholderTextColor="#003f5c"
        secureTextEntry={props.visibility}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    inputText: {
      height:50,
      color:"white"
    },
    inputView:{
        width:350,
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      }
  });