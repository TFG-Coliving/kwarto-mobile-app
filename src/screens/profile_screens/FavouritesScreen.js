import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const FavouritesScreen = ({navigation}) => {
  return (
      <View>
        <Text
            style={styles.text}
        >Favourites Screen</Text>
      </View>

  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: "20%"
  }
});