import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const PersonalInfoScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Full Name" defaultValue={"Jhon Doe"} />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <TextInput style={styles.input} placeholder="Address" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
  );
}
export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8667f1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
