import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

const CardPuja = ({ route }) => {
  // Accede a la información de la card seleccionada desde route.params
  const { cardData } = route.params;

  return (
    <View>
      {/* Renderiza la información de la card seleccionada */}
      <Text>{cardData.name}</Text>
      <Text>{cardData.location}</Text>
      <Text>{cardData.price}</Text>
      {/* Renderiza el resto del contenido de la pantalla */}
    </View>
  );
};

export default CardPuja;