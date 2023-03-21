import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const PersonalInfoScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Personal Info</Text>
      </View>

  );
}

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});