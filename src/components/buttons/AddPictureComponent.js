import React, { useState } from 'react';
import { TouchableOpacity, Alert, Platform, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import {
  setUserField,
  updateProfilePicture
} from "../../redux/actions/users/usersActions";

const ImagePickerButton = ({ maxPhotos = 1 }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const dispatch = useDispatch();

  const handlePress = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Please grant permission to access the photo library');
        return;
      }
    }

    const { cancelled, selected } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      base64: true,
      maxSelected: maxPhotos - selectedPhotos.length,
    })
    .then((newPhotos) => {
      dispatch(updateProfilePicture(newPhotos.uri ));
    })
    .catch((error) => {
      console.error("error image picker: ",error);
    });

    if (!cancelled) {
      const newPhotos = selected?.map((photo) => ({
        uri: photo.uri,
        base64: photo.base64,
      })) || [];
      console.log(newPhotos);
      setSelectedPhotos((prevSelectedPhotos) => [...prevSelectedPhotos, ...newPhotos]);



    }
  };

  const handleSave = () => {
    console.log("hola");
    dispatch({type: 'SET_USER_FIELD', payload: {field: 'profilePicture.uri', value: selectedPhotos[0].uri}});
  };

  return (
      <>
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
          <Text style={styles.buttonText}>Select Photos ({selectedPhotos.length}/{maxPhotos})</Text>
        </TouchableOpacity>
      </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8667f1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ImagePickerButton;
