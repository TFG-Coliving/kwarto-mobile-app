import React from "react";
import { View, Text } from "react-native";

const CardAlquiler = ({ route }) => {
  // Accede a la información de la card seleccionada desde route.params
  const { cardData } = route.params;

  return (
    <View>
      {/* Renderiza la información de la card seleccionada */}
      <Image source={{ uri: cardData.image }}/>
      <Text>{cardData.name}</Text>
      <Text>{cardData.location}</Text>
      <Text>{cardData.price}</Text>
      {/* Renderiza el resto del contenido de la pantalla */}
    </View>
  );
};

export default CardAlquiler;