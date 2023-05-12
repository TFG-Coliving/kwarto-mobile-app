import React, {useEffect, useState} from "react";
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
import RentAdCardComponent from "../../components/cards/AdCardComponent";
import {useDispatch, useSelector} from "react-redux";
import { getProperties } from "../../redux/actions/properties/propertyActions";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  let properties = useSelector((state) => state.properties.properties);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  if (!properties) {
    console.log("token en useEffect: ", token);
    dispatch(getProperties(token));
    console.log("properties despues de dispatch: ", properties);
  }

  useEffect(() => {
    if (!properties) {

      dispatch(getProperties(token));
      console.log("hola")
    }

  }, [token]);

  console.log("properties: ", properties);

  const alquilerProperties = properties.filter(property => property.is_bid === false);
  const pujasProperties = properties.filter(property => property.is_bid === true);

  const navigation = useNavigation();
  const [filterData, setFilterData] = useState(alquilerProperties);
  const [searchText, setSearchText] = useState("");
  const [selectedButton, setSelectedButton] = useState("Alquiler");
  const [scrollViewHidden, setScrollViewHidden] = useState(false);

  const handleCardPress = (cardData) => cardData.is_bid ? navigation.navigate("CardPuja", { cardData }) : navigation.navigate("CardAlquiler", { cardData })


  const searchFilterFunction = (text) => {
    if (selectedButton === "Pujas") {
      if (text) {
        const newData = pujasProperties.filter((item) => {
          const itemData = item.province.toUpperCase();
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
          const itemData = item.province.toUpperCase();
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
      <View style={{ position: "relative" }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Escribe un destino"
          value={searchText}
          onChangeText={(text) => searchFilterFunction(text)}
        />
        <Ionicons
          name="search-outline"
          size={24}
          color="gray"
          style={{ position: "absolute", right: 20, top: 60 }}
        />
      </View>
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
              <RentAdCardComponent
                  key={item.id}
                  onPress={() => handleCardPress(item)}
                  item={item}
                  name={item.name}
                  province={item.province}
                  available_rooms={item.available_rooms}
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
              <PujaAdCardComponent
                onPress={() => handleCardPress(item)}
                item={item}
                name={item.name}
                province={item.province}
                available_rooms={item.available_rooms}
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
    borderRadius: 10,
    marginRight: 10,
    color: "white",
  },
  selectedButton: {
    backgroundColor: "#8667f1",
  },
});

export default HomeScreen;
