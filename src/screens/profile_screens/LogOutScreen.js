import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const LogOutScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >LogOut Screen</Text>
      </View>

  );
}

export default LogOutScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});