import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Settings Screen</Text>
      </View>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});