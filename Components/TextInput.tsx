import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
type Props = {
  name: string;
  type: string;

}
const TextInput = ({ name, type}: Props) => {
  if (type === 'password') {
    return (
      <RNTextInput
        style={styles.textInput}
        placeholder={name}
        secureTextEntry={true}
      />
    );
  }else{
    return (
        <RNTextInput
            style={styles.textInput}
            placeholder={name}
        />
    );
  }

};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e1e7ff',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },
});

export default TextInput;