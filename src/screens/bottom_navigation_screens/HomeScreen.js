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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [dataAlquiler, setDataAlquiler] = useState([
    {
      id: 1,
      name: "PRUEBA ALQUILER",
      image: "https://via.placeholder.com/150",
      location: "Madrid",
      price: "$50",
    },
    {
      id: 2,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Barcelona",
      price: "$80",
    },
    {
      id: 3,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Sevilla",
      price: "$150",
    },
    {
      id: 4,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Leon",
      price: "$100",
    },
    {
      id: 5,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Valencia",
      price: "$200",
    },
    {
      id: 6,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Segovia",
      price: "$50",
    },
    {
      id: 7,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Toledo",
      price: "$80",
    },
    {
      id: 8,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Córdoba",
      price: "$150",
    },
    {
      id: 9,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Cuenca",
      price: "$100",
    },
    {
      id: 10,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Granada",
      price: "$200",
    },
    {
      id: 11,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Ávila",
      price: "$50",
    },
    {
      id: 12,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Salamanca",
      price: "$80",
    },
    {
      id: 13,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Burgos",
      price: "$150",
    },
    {
      id: 14,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Bilbao",
      price: "$100",
    },
    {
      id: 15,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Santander",
      price: "$200",
    },
  ]);
  const [dataPuja, setDataPuja] = useState([
    {
      id: 1,
      name: "PRUEBA PUJA",
      image: "https://via.placeholder.com/150",
      location: "A coruña",
      price: "$50",
    },
    {
      id: 2,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Barcelona",
      price: "$80",
    },
    {
      id: 3,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Sevilla",
      price: "$150",
    },
    {
      id: 4,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Leon",
      price: "$100",
    },
    {
      id: 5,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Valencia",
      price: "$200",
    },
    {
      id: 6,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Segovia",
      price: "$50",
    },
    {
      id: 7,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Toledo",
      price: "$80",
    },
    {
      id: 8,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Córdoba",
      price: "$150",
    },
    {
      id: 9,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Cuenca",
      price: "$100",
    },
    {
      id: 10,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Granada",
      price: "$200",
    },
    {
      id: 11,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Ávila",
      price: "$50",
    },
    {
      id: 12,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Salamanca",
      price: "$80",
    },
    {
      id: 13,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Burgos",
      price: "$150",
    },
    {
      id: 14,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Bilbao",
      price: "$100",
    },
    {
      id: 15,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Santander",
      price: "$200",
    },
  ]);
  const [filterData, setFilterData] = useState(dataAlquiler);
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
        const newData = dataPuja.filter((item) => {
          const itemData = item.location.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearchText(text);
      } else {
        setFilterData(dataPuja);
        setSearchText("");
      }
    } else {
      if (text) {
        const newData = dataAlquiler.filter((item) => {
          const itemData = item.location.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearchText(text);
      } else {
        setFilterData(dataAlquiler);
        setSearchText("");
      }
    }
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    if (button === "Pujas") {
      setScrollViewHidden(true);
      setFilterData(dataPuja);
    } else {
      setScrollViewHidden(false);
      setFilterData(dataAlquiler);
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
              <TouchableOpacity
                key={item.id}
                style={styles.cardPuja}
                onPress={() => handleCardPujaPress(item)}
              >
                <Image source={{ uri: item.image }} style={styles.cardImagePuja} />
                <View style={styles.cardContentPuja}>
                  <Text style={styles.cardTitlePuja}>{item.name}</Text>
                  <Text style={styles.cardLocastionPuja}>{item.location}</Text>
                  <Text style={styles.cardPricePuja}>{item.price}</Text>
                </View>
              </TouchableOpacity>
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
    //borderWidth: 2,
    //borderColor: "#8667f1",
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
  cardPuja: {
    flexDirection: "row",
    //borderWidth: 2,
    //borderColor: "#525561",
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#e1e7ff",
    //height: 200,
  },
  cardImagePuja: {
    width: "50%",
    height: 150,
    //marginTop: "auto",
    marginBottom: "auto",
    marginRight: 20,
    borderRadius: 5,
  },
  cardContentPuja: {
    flex: 1,
  },
  cardTitlePuja: {
    fontSize: 18,
    fontWeight: "bold",
    //marginBottom: "auto",
    textAlign: "center",
    //height: 69,
    maxHeight: 69,
  },
  cardLocastionPuja: {
    fontSize: 17,
    marginTop: "auto",
    marginBottom: "auto",
    textAlign: "center",
  },
  cardPricePuja: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8667f1",
    //marginBottom: 50,
    //marginTop: "auto",
    textAlign: "center",
  },
});

export default HomeScreen;
