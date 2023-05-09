import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RentAdCardComponent from "../../components/cards/rentAdCardComponent";
import PujaAdCardComponent from "../../components/cards/pujaAdCardComponent";
import {useSelector} from "react-redux";
import {getProperties} from "../../redux/actions/properties/propertyActions";

const HomeScreen = () => {
  let properties = useSelector((state) => state.properties.properties);
  if (!properties){
    const token = useSelector((state) => state.authentication.token);
    properties = getProperties(token);
  }
  const alquilerProperties = properties.filter(property => property.is_bid === false);
  const pujasProperties = properties.filter(property => property.is_bid === true);

  const navigation = useNavigation();
  const [filterData, setFilterData] = useState(alquilerProperties);
  const [searchText, setSearchText] = useState("");
  const [selectedButton, setSelectedButton] = useState("Alquiler");
  const [scrollViewHidden, setScrollViewHidden] = useState(false);



  const handleCardAlquilerPress = (cardData) => {
    // Aquí puedes navegar a la nueva pantalla y pasar la información de la card seleccionada
    navigation.navigate("CardAlquiler", { cardData });
  }
  const handleCardPujaPress = (cardData) => {
    // Aquí puedes navegar a la nueva pantalla y pasar la información de la card seleccionada
    navigation.navigate("CardPuja", { cardData });
  };

  const searchFilterFunction = (text) => {
    if (selectedButton === "Pujas") {
      if (text) {
        const newData = pujasProperties.filter((item) => {
          const itemData = item.location.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearchText(text);
      } else {
        setFilterData(pujasProperties);
        setSearchText("");
      }
    } else {
      if (text) {
        const newData = alquilerProperties.filter((item) => {
          const itemData = item.location.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearchText(text);
      } else {
        setFilterData(alquilerProperties);
        setSearchText("");
      }
    }
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    if (button === "Pujas") {
      setScrollViewHidden(true);
      setFilterData(pujasProperties);
    } else {
      setScrollViewHidden(false);
      setFilterData(alquilerProperties);
    }
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: -60, marginTop: 10 }}>
        <Image
          source={require("../../assets/logoinsideapp.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
          alt="My Image"
        />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Escribe un destino"
        value={searchText}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Alquiler" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Alquiler")}
        >
          <Text>Alquiler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Pujas" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Pujas")}
        >
          <Text>Pujas</Text>
        </TouchableOpacity>
      </View>
      {!scrollViewHidden && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterData.map((item) => {
            return (
              <RentAdCardComponent onPress={() => handleCardAlquilerPress(item)}
                                   item={item}
                                   name={item.name}
                                   location={item.location}
                                   price={item.price}
                                   image={item.image}
              />
            );
          })}
        </ScrollView>
      )}
      {scrollViewHidden && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterData.map((item) => {
            return (
              <PujaAdCardComponent onPress={() => handleCardPujaPress(item)}
                                   item={item}
                                   name={item.name}
                                   location={item.location}
                                   price={item.price}
                                   image={item.image}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default HomeScreen;
