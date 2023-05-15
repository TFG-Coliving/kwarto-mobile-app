import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AdCardComponent from "../../components/cards/AdCardComponent";
import {useSelector} from "react-redux";
import {
  getUserProperties
} from "../../redux/actions/properties/propertyActions";
import RentAdCardComponent from "../../components/cards/AdCardComponent";

const MyPropertiesScreen = () => {
  let myProperties = useSelector((state) => state.properties.user_properties);
  if (!myProperties) {
    const token = useSelector((state) => state.authentication.token);
    myProperties = getUserProperties(token);
  }

  const [scrollViewHidden, setScrollViewHidden] = useState(false);


  const navigation = useNavigation();
  const handleCardPress = (cardData) => cardData.is_bid ? navigation.navigate("CardPuja", { cardData }) : navigation.navigate("CardAlquiler", { cardData });

  return (
    <View style={styles.container}>
      {!scrollViewHidden && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {myProperties.map((item) => (
                <RentAdCardComponent
                    onPress={() => handleCardPress(item)}
                    item={item}
                    name={item.name}
                    province={item.province}
                    available_rooms={item.available_rooms}
                    image={item.image}
                />
            ))}
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
