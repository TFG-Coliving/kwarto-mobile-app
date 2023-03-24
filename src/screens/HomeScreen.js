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
  const [data, setData] = useState([
    {
      id: 1,
      name: "Habitación individual en el centro",
      image: "https://via.placeholder.com/150",
      description: "Habitación individual en el centro de la ciudad",
      price: "$50 por noche",
    },
    {
      id: 2,
      name: "Habitación doble cerca de la playa",
      image: "https://via.placeholder.com/150",
      description: "Habitación doble cerca de la playa con balcón",
      price: "$80 por noche",
    },
    {
      id: 3,
      name: "Apartamento de lujo en el centro histórico",
      image: "https://via.placeholder.com/150",
      description: "Apartamento de lujo en el centro histórico de la ciudad",
      price: "$150 por noche",
    },
    {
      id: 4,
      name: "Habitación triple con vistas a la montaña",
      image: "https://via.placeholder.com/150",
      description: "Habitación triple con vistas a la montaña",
      price: "$100 por noche",
    },
    {
      id: 5,
      name: "Casa en la playa con piscina",
      image: "https://via.placeholder.com/150",
      description: "Casa en la playa con piscina privada",
      price: "$200 por noche",
    },
  ]);
  const [filterData, setFilterData] = useState(data);
  const [searchText, setSearchText] = useState("");

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearchText(text);
    } else {
      setFilterData(data);
      setSearchText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar habitaciones"
        value={searchText}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <ScrollView>
        <Text style={styles.textRooms}>Habitaciones disponibles</Text>
        {filterData.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  description: item.description,
                  price: item.price,
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textDescription}>{item.description}</Text>
                <Text style={styles.textPrice}>{item.price}</Text>
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
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    margin: 10,
  },
  textRooms: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#444",
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HomeScreen;
