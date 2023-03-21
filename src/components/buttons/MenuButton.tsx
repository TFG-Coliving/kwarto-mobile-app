import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Link} from 'expo-router';

const MenuButton = ({ iconType, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons size={30} name={iconType} color={'#8667f1'}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 16
  },
  text: {
    marginLeft: 16,
    fontSize: 25,
    padding: 10,
    color: '#444',
  }
});

export default MenuButton;
