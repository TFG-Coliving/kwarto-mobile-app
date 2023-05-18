import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';
import InputProperty from "../../components/fields/InputProperty";
import COLORS from "../../components/colors";
import {useDispatch, useSelector} from "react-redux";
import {setProperty} from "../../redux/actions/properties/propertyActions";
import AddPictureComponent from "../../components/buttons/AddPictureComponent";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    province: '',
    city: '',
    address: '',
    available_rooms: '',
    dimensions: '',
    _bid: false,
    rooms: [],
  });
  const [images, setImages] = useState([]);

  const token = useSelector(state => state.authentication.token);
  const dispatch = useDispatch();
  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  }
  const handleCheckboxChange = (value) => {
    setFormData({
      ...formData,
      _bid: value,
    });
  };
  const handleNewPhotos = (photos) => {
    setImages(photos)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setProperty(formData, token));
  }


  return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.inputContainer}>
              <InputProperty
                  label="Name"
                  placeholder="Enter property name"
                  onChangeText={value => handleFieldChange('name', value)}
              />
              <InputProperty
                  label="Country"
                  placeholder="Enter country"
                  onChangeText={value => handleFieldChange('country', value)}
              />

              <InputProperty
                  label="Province"
                  placeholder="Enter province"
                  onChangeText={value => handleFieldChange('province', value)}
              />

              <InputProperty
                  label="City"
                  placeholder="Enter city"
                  onChangeText={value => handleFieldChange('city', value)}
              />

              <InputProperty
                  label="Address"
                  placeholder="Enter address"
                  onChangeText={value => handleFieldChange('address', value)}
              />
              <View style={styles.checkBox}>
                <TouchableOpacity
                    onPress={() => handleCheckboxChange(!formData._bid)}
                >
                  <View
                      style={[
                        styles.uncheckedBox,
                        formData._bid && styles.checkedBox,
                      ]}
                  />
                </TouchableOpacity>
                <Text style={styles.checkBoxLabel}>Bid</Text>
              </View>

            <InputProperty
                label="Available rooms"
                placeholder="Enter number of available rooms"
                onChangeText={value => {
                  const rooms = Array.from({ length: value }, () => ({
                    name: '',
                    price: '',
                    dimensions: '',
                    capacity: '',
                  }));
                  setFormData(prevState => ({ ...prevState, available_rooms: value, rooms }));
                }}
                keyboardType="numeric"
            />
              <AddPictureComponent buttonName={"Add Pictures"} isMultiple={true} onNewPhotos={handleNewPhotos}/>
            </View>

            {formData.rooms.map((room, index) => (
                <View key={index} style={styles.inputContainer}>
                  <Text style={styles.roomLabel}>Room {index + 1}</Text>
                  <InputProperty
                      label="Room Name"
                      placeholder="Enter name"
                      onChangeText={value => {
                        const newRooms = [...formData.rooms];
                        newRooms[index].name = value;
                        setFormData(prevState => ({ ...prevState, rooms: newRooms }));
                      }}
                  />
                  <InputProperty
                      label="Price"
                      placeholder="Enter price"
                      onChangeText={value => {
                        const newRooms = [...formData.rooms];
                        newRooms[index].price = value;
                        setFormData(prevState => ({ ...prevState, rooms: newRooms }));
                      }}
                      keyboardType="numeric"
                  />
                  <InputProperty
                      label="Dimensions"
                      placeholder="Enter dimensions"
                      onChangeText={value => {
                        const newRooms = [...formData.rooms];
                        newRooms[index].dimensions = value;
                        setFormData(prevState => ({ ...prevState, rooms: newRooms }));
                      }}
                  />
                  <InputProperty
                      label="Capacity"
                      placeholder="Enter capacity"
                      value={room.capacity}
                      onChangeText={value => {
                        const newRooms = [...formData.rooms];
                        newRooms[index].capacity = value;
                        setFormData(prevState => ({ ...prevState, rooms: newRooms }));
                      }}
                      keyboardType="numeric"
                  />
                </View>
            ))}

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
};
export default MyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  roomLabel:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary
  },
  checkedBox: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: COLORS.primary,
    marginRight: 5,
  },
  uncheckedBox: {
    width: 10,
    height: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    marginRight: 5,

  },
  checkBoxLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
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
