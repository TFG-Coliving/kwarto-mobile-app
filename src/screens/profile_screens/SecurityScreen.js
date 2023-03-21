import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const SecurityScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Security Screen</Text>
      </View>

  );
}

export default SecurityScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});