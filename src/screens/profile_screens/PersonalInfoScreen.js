import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import EditFieldProfile from "../../components/fields/EditFieldProfile";

const PersonalInfoScreen = () => {
  const [fullName, setFullName] = useState('El nano'); // user.getFirstName() + " " + user.getLastName();
  const [email, setEmail] = useState('elnano@example.com'); // user.getEmail();
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890'); // user.getPhone();
  const [address, setAddress] = useState('123 Main St.'); // user.getAddress();

  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <EditFieldProfile label="Full Name" value={fullName} onChange={setFullName} />
          <EditFieldProfile label="Email" value={email} onChange={setEmail} />
          <EditFieldProfile label="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />
          <EditFieldProfile label="Address" value={address} onChange={setAddress} />
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
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8667f1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

