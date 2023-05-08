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
import DropDownPicker from "react-native-dropdown-picker";

const CardAlquiler = ({ route }) => {
  // Accede a la información de la card seleccionada desde route.params
  //const { cardData } = route.params;
  const [cardData] = useState([
    {
      id: 1,
      country: "Spain",
      province: "Madrid",
      city: "Madrid",
      address: "Gran Vía, 50",
      coordinates_long_north: 1.36779,
      coordinates_latitude_east: 23.536345,
      score: 0.0,
      available_rooms: 5,
      dimensions: "400x400",
      image:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2017-06/h1_b.jpeg?VersionId=mJfwx76Bg1ZROco4yQF3MKj.BSnHG999&itok=fQ6sr8S8",
      facilities: [
        {
          id: 1,
          name: "garage",
        },
      ],
      rooms: [
        {
          id: 1,
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
          _bid: false,
        },
      ],
      rentReviews: [],
    },
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    "italy",
    "spain",
    "barcelona",
    "finland",
  ]);
  const [items, setItems] = useState([
    { label: "Spain", value: "spain" },
    { label: "Madrid", value: "madrid", parent: "spain" },
    { label: "Barcelona", value: "barcelona", parent: "spain" },

    { label: "Italy", value: "italy" },
    { label: "Rome", value: "rome", parent: "italy" },

    { label: "Finland", value: "finland" },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: cardData[0].image }} />
      </View>
      <View style={styles.cardInfo}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          multiple={true}
          mode="BADGE"
          badgeDotColors={[
            "#e76f51",
            "#00b4d8",
            "#e9c46a",
            "#e76f51",
            "#8ac926",
            "#00b4d8",
            "#e9c46a",
          ]}
        />
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
    backgroundColor: "#F5F5F5",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    marginTop: "10%",
    height: 300,
    width: "90%",
    borderRadius: 15,
  },
  cardInfo: {
    padding: 20,
    backgroundColor: "white",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardLocation: {
    fontSize: 20,
    color: "black",
    marginBottom: "auto",
    marginTop: "auto",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8667f1",
    textAlign: "center",
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
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
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
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
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
    borderRadius: 5,
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

export default CardAlquiler;
