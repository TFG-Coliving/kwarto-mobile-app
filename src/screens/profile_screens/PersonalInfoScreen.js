import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditFieldProfile from "../../components/fields/EditFieldProfile";
import {useDispatch, useSelector} from "react-redux";
import {setUserField} from "../../redux/actions/users/usersActions";
import ImagePickerButton from "../../components/buttons/AddPictureComponent";

const PersonalInfoScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  function handleFieldChange(fieldName, newValue) {
    dispatch(setUserField({ field: fieldName, value: newValue }));
  }


  console.log(user);
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <EditFieldProfile
              label="First Name"
              value={user?.firstname}
              onChange={(value) => handleFieldChange('firstname', value)}
              key="firstName"
          />
          <EditFieldProfile
              label="Last Name"
              value={user?.lastname}
              onChange={(value) => handleFieldChange('lastname', value)}
              key="lastName"
          />
          <EditFieldProfile
              label="Email"
              value={user?.email}
              onChange={(value) => handleFieldChange('email', value)}
              key="email"
          />
          <EditFieldProfile
              label="Phone Number"
              value={user?.phone}
              onChange={(value) => handleFieldChange('phone', value)}
              key="phoneNumber"
          />
          <ImagePickerButton maxPhotos={1} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
  );
};

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

