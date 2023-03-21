import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const HelpScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Help Screen</Text>
      </View>

  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});