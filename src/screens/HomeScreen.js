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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [dataAlquiler] = useState([
    {
      id: 1,
      name: "PRUEBA ALQUILER",
      image: "https://via.placeholder.com/150",
      location: "Madrid",
      price: "$50 por noche",
    },
    {
      id: 2,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Barcelona",
      price: "$80 por noche",
    },
    {
      id: 3,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Sevilla",
      price: "$150 por noche",
    },
    {
      id: 4,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Leon",
      price: "$100 por noche",
    },
    {
      id: 5,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Valencia",
      price: "$200 por noche",
    },
    {
      id: 6,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Segovia",
      price: "$50 por noche",
    },
    {
      id: 7,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Toledo",
      price: "$80 por noche",
    },
    {
      id: 8,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Córdoba",
      price: "$150 por noche",
    },
    {
      id: 9,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Cuenca",
      price: "$100 por noche",
    },
    {
      id: 10,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Granada",
      price: "$200 por noche",
    },
    {
      id: 11,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Ávila",
      price: "$50 por noche",
    },
    {
      id: 12,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Salamanca",
      price: "$80 por noche",
    },
    {
      id: 13,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Burgos",
      price: "$150 por noche",
    },
    {
      id: 14,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Bilbao",
      price: "$100 por noche",
    },
    {
      id: 15,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Santander",
      price: "$200 por noche",
    },
  ]);
  const [dataPuja] = useState([
    {
      id: 1,
      name: "PRUEBA PUJA",
      image: "https://via.placeholder.com/150",
      location: "A coruña",
      price: "$50 por noche",
    },
    {
      id: 2,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Barcelona",
      price: "$80 por noche",
    },
    {
      id: 3,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Sevilla",
      price: "$150 por noche",
    },
    {
      id: 4,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Leon",
      price: "$100 por noche",
    },
    {
      id: 5,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Valencia",
      price: "$200 por noche",
    },
    {
      id: 6,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Segovia",
      price: "$50 por noche",
    },
    {
      id: 7,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Toledo",
      price: "$80 por noche",
    },
    {
      id: 8,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Córdoba",
      price: "$150 por noche",
    },
    {
      id: 9,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Cuenca",
      price: "$100 por noche",
    },
    {
      id: 10,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Granada",
      price: "$200 por noche",
    },
    {
      id: 11,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      location: "Ávila",
      price: "$50 por noche",
    },
    {
      id: 12,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      location: "Salamanca",
      price: "$80 por noche",
    },
    {
      id: 13,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      location: "Burgos",
      price: "$150 por noche",
    },
    {
      id: 14,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      location: "Bilbao",
      price: "$100 por noche",
    },
    {
      id: 15,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      location: "Santander",
      price: "$200 por noche",
    },
  ]);
  const [filterData, setFilterData] = useState(dataAlquiler);
  const [searchText, setSearchText] = useState("");
  const [selectedButton, setSelectedButton] = useState("Alquiler");
  const [scrollViewHidden, setScrollViewHidden] = useState(false);

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
          source={require("../assets/logoinsideapp.png")}
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
      <ScrollView>
        {filterData.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => navigation.navigate("Detalle", { item })}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardLocastion}>{item.location}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#8667f1",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#8667f1",
    borderRadius: 5,
    marginRight: 10,
    color: "white",
  },
  selectedButton: {
    backgroundColor: "#8667f1",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#8667f1",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardLocastion: {
    fontSize: 14,
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8667f1",
  },
});

export default HomeScreen;
