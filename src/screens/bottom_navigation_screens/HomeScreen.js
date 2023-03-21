import React from "react";
import {View, Text, StyleSheet} from "react-native";
import StackScreenButton from "../../components/buttons/StackScreenButton";
import {useNavigation} from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
          style={styles.text}
      >Home Screen</Text>
      <StackScreenButton onPress={() => navigation.navigate("StackScreen")}/>
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