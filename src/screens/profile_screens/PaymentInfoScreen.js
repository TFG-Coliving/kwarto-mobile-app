import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const PaymentInfoScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Payment Info</Text>
      </View>

  );
}

export default PaymentInfoScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});