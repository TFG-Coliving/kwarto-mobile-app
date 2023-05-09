import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const RentCardComponent = ({name, image, province, available_rooms, item, onPress}) => {
  return (
      <TouchableOpacity
          key={item.id}
          style={item.is_bid ? styles.cardBid : styles.cardRent}
          onPress={onPress}
      >
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardLocation}>
            {province}
          </Text>
          <Text style={styles.cardPrice}>{available_rooms}</Text>
          <Text style={styles.roomsText}>Rooms</Text>
        </View>
      </TouchableOpacity>
  );
}

export default RentCardComponent;

const styles = StyleSheet.create({
  cardRent: {
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  cardBid: {
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#e1e7ff",
  },
  cardImage: {
    width: "50%",
    height: 150,
    marginBottom: "auto",
    marginRight: 20,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    maxHeight: 69,
  },
  cardLocation: {
    fontSize: 17,
    marginTop: "auto",
    marginBottom: "auto",
    textAlign: "center",
  },
  roomsText: {
    fontSize: 10,
    marginBottom: "auto",
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8667f1",
    textAlign: "center",
  }
})