import React from "react";
import {View, Text, StyleSheet} from "react-native";
const ProfileScreen = () => {
  return (
      <View>
        <Text
            style={styles.text}
        >Profile Screen</Text>
      </View>

  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});