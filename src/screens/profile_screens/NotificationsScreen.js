import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const NotificationsScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Notifications Screen</Text>
      </View>

  );
}

export default NotificationsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});