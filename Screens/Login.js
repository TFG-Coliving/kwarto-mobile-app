import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, ImageBackground } from 'react-native';
import TextInput from "../Components/TextInput";
import ButtonLogin from "../Components/ButtonLogin";
import RegistrationForm from "../Components/RegistrationForm";

const logo = require('../assets/logoinsideapp.png');
const backgroundImage = require('../assets/backgroundlogin.png');

export default function Login() {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(animation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(animation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(animation, { toValue: 0, duration: 50, useNativeDriver: true })
    ]).start();
  };

  const animatedStyle = {
    transform: [{ translateX: animation }]
  };

  const handleRegistrationLinkPress = () => {
    setShowRegistrationForm(true);
  };

  const handleRegistrationSubmit = () => {
    setShowRegistrationForm(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.Image source={logo} style={[styles.logo, animatedStyle]} />
        </View>
        {showRegistrationForm ? (
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        ) : (
          <>
            <Text style={styles.subtitle}></Text>  
            <TextInput name="Username"  type={"text"}/>
            <TextInput name={"Password"} type={"password"} />
            <ButtonLogin text="Log in" onPress={handlePress} />
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Not registered? <Text style={styles.registerLink} onPress={handleRegistrationLinkPress}>Register now.</Text></Text>
            </View>
          </>
        )}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30, // Add margin to create space between logo and text
  },
  logo: {
    width: 240,
    height: 50,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#000000',
  },
  registerLink: {
    color: '#8667f1',
  },
});