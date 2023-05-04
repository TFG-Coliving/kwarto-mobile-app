import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditFieldProfile = ({ label, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableValue, setEditableValue] = useState(value || '');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onChange(editableValue);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditableValue(value);
    setIsEditing(false);
  };

  const handleValueChange = (text) => {
    setEditableValue(text);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}:</Text>
        {isEditing ? (
            <View style={styles.editableContainer}>
              <TextInput
                  style={styles.editableInput}
                  value={editableValue}
                  onChangeText={handleValueChange}
                  autoFocus={true}
                  key={label}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
        ) : (
            <TouchableOpacity style={styles.readOnlyContainer} onPress={handleEdit}>
              <Text style={styles.readOnly}>{editableValue}</Text>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
        )}
      </View>
  );
};

export default EditFieldProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  readOnlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  editableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8667f1',
    borderRadius: 5,
    padding: 5,
    flex: 1,
  },
  readOnlyBox: {
    flex: 1,
    marginRight: 10,
  },
  editButton: {
    color: '#8667f1',
    marginLeft: 'auto',
    marginRight: 10
  },
  editableInput: {
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#8667f1',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelButton: {
    padding: 5,
  },
  saveButtonText: {
    color: '#fff',
  },
  cancelButtonText: {
    color: 'black',
  },
});
