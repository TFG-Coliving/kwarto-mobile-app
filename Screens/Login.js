import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from "../Components/TextInput";

export default function Login() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Log in into account</Text>
        <TextInput name = "holaaaaaa"/>
        <TextInput name={"nigga"} type={"password"}/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8667f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  subtitle:{
    fontSize: 20,
    color: '#e1e7ff',
  },


});
