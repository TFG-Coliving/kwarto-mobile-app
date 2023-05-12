import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Mapa from "../../components/fields/Mapa";
import SelectDropdown from "react-native-select-dropdown";

const CardPuja = ({ route }) => {
  // Accede a la información de la card seleccionada desde route.params
  //const { cardData } = route.params;
  const [cardData] = useState([
    {
      id: 1,
      name: "Prueba Puja",
      country: "Spain",
      province: "Barcelona",
      city: "Sabadell",
      address: "Plaza Catalunya, 1",
      coordinates_long_north: 2.098955621583387,
      coordinates_latitude_east: 41.55001651201284,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2017-06/h1_b.jpeg?VersionId=mJfwx76Bg1ZROco4yQF3MKj.BSnHG999&itok=fQ6sr8S8",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación matrimonio",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación individual",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
        {
          id: 3,
          name: "Habitación suite",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
        {
          id: 4,
          name: "Habitación litera",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
  ]);

  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    // Create a new array with only the names of the rooms
    const newHabitaciones = cardData[0].rooms.map((room) => room.name);
    // Update the habitaciones state with the new array
    setHabitaciones(newHabitaciones);
  }, [cardData]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.nota}>
          {cardData[0].score}
          <Ionicons style={styles.star} name="star"></Ionicons>
        </Text>
        <Image style={styles.image} source={{ uri: cardData[0].image }} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{cardData[0].name}</Text>
        <View style={styles.cardFooter}>
          <View style={{ width: "50%" }}>
            <Text style={styles.cardLocation}>{cardData[0].address}</Text>
            <Text style={styles.cardLocation}>
              {cardData[0].city}, {cardData[0].province}
            </Text>
            <Text style={styles.cardLocation}>{cardData[0].country}</Text>
          </View>
          <View style={styles.rooms}>
            <Text style={styles.numberRooms}>
              {cardData[0].available_rooms}
            </Text>
            <Text style={styles.roomsText}>Rooms</Text>
          </View>
        </View>
        <View style={styles.mapa}>
          <Mapa
            latitude={cardData[0].coordinates_latitude_east}
            longitude={cardData[0].coordinates_long_north}
          />
        </View>
        <View style={styles.dropdown}>
          <SelectDropdown
            data={habitaciones}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.favoritesButton}>
          <Text style={styles.favoritesButtonText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e7ff",
  },
  dropdown: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignContent: "center",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  rooms: {
    borderRadius: 15,
    alignItems: "center",
    width: "auto",
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  image: {
    height: 300,
    width: "90%",
    borderRadius: 10,
    marginTop: "5%",
  },
  cardInfo: {
    padding: 20,
    backgroundColor: "white",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nota: {
    fontSize: 45,
    fontWeight: "bold",
  },
  star: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#8667f1",
  },
  cardLocation: {
    fontSize: 15,
    color: "black",
    marginBottom: "auto",
    marginTop: "auto",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  mapa: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  numberRooms: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8667f1",
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
  roomsText: {
    fontSize: 20,
    color: "#8667f1",
    marginBottom: "auto",
    marginTop: "auto",
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "justify",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  chatButton: {
    width: "38%",
    padding: 10,
    borderWidth: 3,
    height: 60,
    borderColor: "#8667f1",
    backgroundColor: "#e1e7ff",
    borderRadius: 10,
    marginRight: "10%",
    marginLeft: "auto",
  },
  chatButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  favoritesButton: {
    padding: 10,
    borderWidth: 3,
    height: 60,
    borderColor: "#8667f1",
    backgroundColor: "#e1e7ff",
    borderRadius: 10,
    marginRight: "auto",
    marginLeft: "10%",
    width: "38%",
  },
  favoritesButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  bookButton: {
    marginTop: -20,
    padding: 10,
    height: 60,
    width: "80%",
    borderWidth: 3,
    borderColor: "#8667f1",
    backgroundColor: "#8667f1",
    borderRadius: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  bookButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CardPuja;
