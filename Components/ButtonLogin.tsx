import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  text: string;
}

const MyButton = ({ text, style, ...props }: MyButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#e1e7ff',
    width: '50%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#8667f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  }
});

export default MyButton;
