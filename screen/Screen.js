import React from 'react';
import {View} from 'react-native';
import MyInput from '../components/MyInput';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import ForgotPass from '../components/ForgotPass';

export default function Screen() {

  return (
    <>
      <MyInput
        placeholderText = "Enter your email..."
      />
      <MyInput
        placeholderText = "Enter your password..."
        visibility = {true}
      />
      <ForgotPass/>
    
      <LoginButton 
        title = "LOGIN"
      />
  
      <SignupButton
        title = "SIGNUP"
      />
    </>
  );
}


