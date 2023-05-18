import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView, Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AdCardComponent from "../../components/cards/AdCardComponent";
import {useSelector} from "react-redux";

const MyPropertiesScreen = () => {
  let properties = useSelector((state) => state.properties.properties);
  let user = useSelector((state) => state.users.user);
  let myProperties = properties?.filter(property => property.owner.id === user?.id)

  const navigation = useNavigation();
  const handleCardPress = (cardData) => cardData._bid ? navigation.navigate("CardPuja", { cardData }) : navigation.navigate("CardAlquiler", { cardData });

  user ? console.log("user id: ", user.id) : console.log("user is null")
  return (
    <View style={styles.container}>
      {myProperties ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {myProperties.map((property) => {
              console.log("holaaaa")
              return (
                  <AdCardComponent
                      key={property.id}
                      item={property}
                      name={property.name}
                      province={property.province}
                      available_rooms={property.available_rooms}
                      image={"http://172.17.41.21:8000" + property.images[0]?.uri}
                      onPress={() => handleCardPress(property)}
                  />
              )
            })}
          </ScrollView>
      ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text> You currently have no properties </Text>
            </ScrollView>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
  },
  searchInput: {
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#8667f1",
    borderRadius: 5,
    marginRight: 10,
    color: "white",
  },
  selectedButton: {
    backgroundColor: "#8667f1",
  },
});

export default MyPropertiesScreen;
