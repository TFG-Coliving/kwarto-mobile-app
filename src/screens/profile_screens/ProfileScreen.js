import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../../components/buttons/MenuButton';
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";


function calculateStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Ionicons name='md-star' size={24} color='#f7d825' />);
    }
    else if (!Number.isInteger(rating) ){
      stars.push(<Ionicons name='md-star-half' size={24} color='#f7d825' />);
    }
    else {
      stars.push(<Ionicons name='md-star-outline' size={24} color='#f7d825' />);
    }
  }
  return stars;
}

export default function ProfileScreen( ) {
  const navigation = useNavigation();
  /* esta parte se queda en el profile, para poder recoger el user
  if (
  const dispatch = useDispatch();
  const token = useSelector(state => state.authentication.token);
  useEffect(() => {
    dispatch(getCurrentUser(token));
  }, [dispatch, token]);
  // -------------------------------------------------------------------

  const user = Users();
   */

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  if (user === null) {
    /*let token = useSelector(state => state.authentication.token);
    dispatch(getCurrentUser(token));
    */
  }
  return (
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={/*{{uri: user.getProfilePicture()}}*/require('../../assets/profile_picture.jpg')} style={styles.profilePicture} />
            <View style={styles.profileDetails}>
              <Text style={styles.name}>{/*user.getFirstName()*/}{" "}{/*user.getLastName()*/}{"EL nano "}</Text>
              <View style={styles.score}>
                {calculateStars(/*user.getScore()*/4.5)}
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
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
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
