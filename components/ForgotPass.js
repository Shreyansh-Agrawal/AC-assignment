import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ForgotPass() {
    return (
        <TouchableOpacity style={styles.fpass}>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fpass: {
        alignItems: 'center',
      },
    forgot:{
        color:"white",
        fontSize:12,
      
    }
});
