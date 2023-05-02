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

const CardAlquiler = ({ route }) => {
  // Accede a la información de la card seleccionada desde route.params
  //const { cardData } = route.params;
  const [cardData] = useState([
    {
      id: 1,
      name: "PRUEBA ALQUILER",
      image: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2017-06/h1_b.jpeg?VersionId=mJfwx76Bg1ZROco4yQF3MKj.BSnHG999&itok=fQ6sr8S8",
      location: "Madrid",
      description: "Esta habitación de alquiler es una opción ideal para aquellos que buscan una estancia cómoda y acogedora en una zona tranquila y segura. La habitación cuenta con una cama doble, armario, escritorio y silla, así como un baño privado completo. La decoración es elegante y moderna, con paredes en tonos suaves y una iluminación cálida. Además, la habitación está equipada con aire acondicionado y calefacción para que puedas ajustar la temperatura según tus necesidades. La ubicación es perfecta para aquellos que quieran estar cerca del centro de la ciudad y de todas las atracciones turísticas, así como de las estaciones de transporte público.",
      price: "$50",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: cardData[0].image }} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{cardData[0].name}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardLocation}>{cardData[0].location}</Text>
          <Text style={styles.cardPrice}>{cardData[0].price}</Text>
        </View>
        <Text style={styles.cardDescription}>{cardData[0].description}</Text>
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