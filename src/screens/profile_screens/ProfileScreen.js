import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from '../../components/buttons/MenuButton';
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import {getCurrentUser} from "../../redux/actions/users/usersActions";


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

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  let user = useSelector((state) => state.users.user);


  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser(token));
    }
  }, [dispatch, token, user]);

  return ( user ? (
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
      >
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
                source={{uri: "http://172.17.41.21:8000" + user?.profilePicture.uri}}
                style={styles.profilePicture}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.name}>
                {user?.firstname} {user?.lastname}
              </Text>
              <View style={styles.score}>
                {calculateStars(user?.score)}
              </View>
            </View>
          </View>
          <MenuButton
              iconType={"home"}
              text={"Add Property"}
              onPress={() => navigation.navigate("AddProperty")}
          />
          <MenuButton
              iconType={"business"}
              text={"My Properties"}
              onPress={() => navigation.navigate("MyProperties")}
          />
          <MenuButton
              iconType={"person"}
              text={"Personal Info"}
              onPress={() => navigation.navigate("PersonalInfo")}
          />
          <MenuButton
              iconType={"card"}
              text={"Payment Info"}
              onPress={() => navigation.navigate("PaymentInfo")}
          />
          <MenuButton
              iconType={"heart"}
              text={"Favorites"}
              onPress={() => navigation.navigate("Favourites")}
          />
          <MenuButton
              iconType={"notifications"}
              text={"Notifications"}
              onPress={() => navigation.navigate("Notifications")}
          />
          <MenuButton
              iconType={"lock-closed"}
              text={"Security"}
              onPress={() => navigation.navigate("Security")}
          />
          <MenuButton
              iconType={"help"}
              text={"Help"}
              onPress={() => navigation.navigate("Help")}
          />
          <MenuButton
              iconType={"log-out"}
              text={"Log Out"}
              onPress={() => navigation.navigate("LogOut")}
          />
        </View>
      </ScrollView>
      ) : null
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
