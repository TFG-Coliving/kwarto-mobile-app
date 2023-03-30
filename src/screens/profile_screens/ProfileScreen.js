import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../../components/buttons/MenuButton';
import {useNavigation} from "@react-navigation/native";
import Users from "../../redux/modules/users/users";
import {useSelector} from "react-redux";

export default function ProfileScreen( ) {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={require('../../assets/profile_picture.jpg')} style={styles.profilePicture} />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>El nano</Text>
            <View style={styles.score}>
              <Ionicons name='md-star' size={24} color='#f7d825' />
              <Ionicons name='md-star' size={24} color='#f7d825' />
              <Ionicons name='md-star' size={24} color='#f7d825' />
              <Ionicons name='md-star' size={24} color='#f7d825' />
              <Ionicons name='md-star-half' size={24} color='#f7d825' />
            </View>
          </View>
        </View>
        <MenuButton iconType={'person'} text={"Personal Info"} onPress={() => navigation.navigate("PersonalInfo")}/>
        <MenuButton iconType={'card'} text={"Payment Info"} onPress={() => navigation.navigate("PaymentInfo")}/>
        <MenuButton iconType={'settings'} text={"Settings"} onPress={() => navigation.navigate("Settings")}/>
        <MenuButton iconType={'heart'} text={"Favorites"} onPress={() => navigation.navigate("Favourites")}/>
        <MenuButton iconType={'notifications'} text={"Notifications"} onPress={() => navigation.navigate("Notifications")}/>
        <MenuButton iconType={'lock-closed'} text={"Security"} onPress={() => navigation.navigate("Security")}/>
        <MenuButton iconType={'help'} text={"Help"} onPress={() => navigation.navigate("Help")}/>
        <MenuButton iconType={'log-out'} text={"Log Out"} onPress={() => navigation.navigate("LogOut")}/>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
