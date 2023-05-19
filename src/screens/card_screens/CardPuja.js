import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Mapa from "../../components/fields/Mapa";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const CardPuja = ({ route }) => {
  const navigation = useNavigation();

  const [cardData, setCardData] = useState({
    id: 1,
    name: "",
    country: "",
    province: "",
    city: "",
    address: "",
    coordinates_lat_north: 41.39,
    coordinates_long_east: 2.153889,
    score: 0.0,
    available_rooms: 0,
    dimensions: "",
    images: [],
    facilities: [],
    rooms: [],
    rentReviews: [],
  });

  useEffect(() => {
    if (route.params && route.params.cardData) {
      setCardData(route.params.cardData);
    }
  }, [route.params]);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(-1);

  function reloadIndex(selectedItem, index) {
    console.log(selectedItem, index);
    setSelectedRoomIndex(index);
  }

  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    // Create a new array with only the names of the rooms
    const newHabitaciones = cardData.rooms.map((room) => room.name);
    // Update the habitaciones state with the new array
    setHabitaciones(newHabitaciones);
  }, [cardData]);

  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    if (selectedRoomIndex <= -1) {
      Toast.show({
        type: "info",
        text1: "Warning!",
        text2: "Please, select a room to continue.",
      });
    } else {
      setModalVisible(true);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const backModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.nota}>
            {cardData.score}
            <Ionicons style={styles.star} name="star"></Ionicons>
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: "http://172.17.41.21:8000" + cardData.images[0]?.uri,
            }}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{cardData.name}</Text>
          <View style={styles.cardFooter}>
            <View style={{ width: "50%" }}>
              <Text style={styles.cardLocation}>{cardData.address}</Text>
              <Text style={styles.cardLocation}>
                {cardData.city}, {cardData.province}
              </Text>
              <Text style={styles.cardLocation}>{cardData.country}</Text>
            </View>
            <View style={styles.rooms}>
              <Text style={styles.numberRooms}>{cardData.available_rooms}</Text>
              <Text style={styles.roomsText}>Rooms</Text>
            </View>
          </View>
          <View style={styles.mapa}>
            <Mapa
              latitude={cardData.coordinates_lat_north}
              longitude={cardData.coordinates_long_east}
            />
          </View>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={habitaciones}
              onSelect={(selectedItem, index) => {
                reloadIndex(selectedItem, index);
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
            <Modal visible={isModalVisible} animationType="slide" transparent>
              <View style={styles.modalContainer}>
                {/* Contenido del popup */}
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>¿Aceptar reserva?</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={backModal}
                  >
                    <Text style={styles.modalButtonText}>Aceptar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={closeModal}
                  >
                    <Text style={styles.modalButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          {selectedRoomIndex > -1 && (
            <View>
              <Text style={styles.cardTitle}>
                {cardData.rooms[selectedRoomIndex].name}
              </Text>
              <View style={styles.cardFooter}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.cardLocation}>
                    Dimensiones: {cardData.rooms[selectedRoomIndex].dimensions}
                  </Text>
                  <Text style={styles.cardLocation}>
                    Capacidad: {cardData.rooms[selectedRoomIndex].capacity}
                  </Text>
                </View>
                <View style={styles.rooms}>
                  <Text style={styles.numberRooms}>
                    {cardData.rooms[selectedRoomIndex].price}€
                  </Text>
                  <Text style={styles.roomsText}>/noche</Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.favoritesButton}
            onPress={() => {
              Toast.show({
                type: "info",
                text1: "Coming soon!",
                text2: "Our developers are working on it, please stay tuned!",
              });
            }}
          >
            <Text style={styles.favoritesButtonText}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => {
              Toast.show({
                type: "info",
                text1: "Coming soon!",
                text2: "Our developers are working on it, please stay tuned!",
              });
            }}
          >
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.bookButton} onPress={openModal}>
            <Text style={styles.bookButtonText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e7ff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#8667f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
