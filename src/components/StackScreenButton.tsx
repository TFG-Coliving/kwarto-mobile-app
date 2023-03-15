import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const GoToStackScreenButton = ({ onPress }) => {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Go to Stack Screen</Text>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8667f1',
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
  }
});

export default GoToStackScreenButton;
