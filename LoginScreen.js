import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import { StyleSheet, Text , View, Image, TextInput, Button, TouchableOpacity, } from "react-native";



export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.title}>Welcome back!</Text>


      <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#FFFFFF"
    onChangeText={(email) => setEmail(email)}
  />
</View>

      <TouchableOpacity>
        <Text style={styles.OR_text}>OR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Mainscreen')}>
        <Text style={styles.loginText}>Continue with google</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: "center",
    justifyContent: "center",
  },



  inputView: {
    backgroundColor: "rgb(58, 58, 60)",
    borderRadius: 8,
    width: "78%",
    height: 45,
    marginBottom: 20,

    alignItems: "flex-start",
  },

  TextInput: {
    color: 'rgba(235, 235, 245, 0.6)',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,

  },

  OR_text: {
    height: 30,
    marginBottom: 28,
    alignItems: 'flex-end',
    color: '#FFFFFF',
  },

  loginBtn: {
    width: "80%",
    borderRadius: 8,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: '#1d4ed8',

    loginText: {
      color: '#FFFFFF',
      fontSize: 23,
      fontWeight: '300',
      lineHeight: 22,
    },
},
});
