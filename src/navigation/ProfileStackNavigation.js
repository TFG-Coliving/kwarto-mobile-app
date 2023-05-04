import React from 'react';

import SettingsScreen from "../screens/profile_screens/SettingsScreen";
import {createStackNavigator} from "@react-navigation/stack";
import PersonalInfoScreen from "../screens/profile_screens/PersonalInfoScreen";
import PaymentInfoScreen from "../screens/profile_screens/PaymentInfoScreen";
import FavouritesScreen from "../screens/profile_screens/FavouritesScreen";
import NotificationsScreen
  from "../screens/profile_screens/NotificationsScreen";
import SecurityScreen from "../screens/profile_screens/SecurityScreen";
import HelpScreen from "../screens/profile_screens/HelpScreen";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "../screens/profile_screens/ProfileScreen";
import LoginScreen from "../screens/login_register_screens/LoginScreen";



const ProfileStackNavigation = createStackNavigator();
function ProfileStack() {
  return (
      <ProfileStackNavigation.Navigator
          initialRouteName="ProfileScreen"
      >
        <ProfileStackNavigation.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerTitle:"Profile",
              headerLeft: null
            }}
        />
        <ProfileStackNavigation.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{
            headerTitle:"Personal Info",
            headerBackTitle: "Profile"
          }}
        />
        <ProfileStackNavigation.Screen
            name="PaymentInfo"
            component={PaymentInfoScreen}
            options={{
              headerTitle:"Payment Info",
              headerBackTitle: "Profile"
            }}
        />
        <ProfileStackNavigation.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              headerTitle:"Favourites",
              headerBackTitle: "Profile"
            }}
        />
        <ProfileStackNavigation.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              headerTitle:"Notifications",
              headerBackTitle: "Profile"
            }}
        />
        <ProfileStackNavigation.Screen
            name="Security"
            component={SecurityScreen}
            options={{
              headerTitle:"Security",
              headerBackTitle: "Profile"
            }}
        />
        <ProfileStackNavigation.Screen
            name="Help"
            component={HelpScreen}
            options={{
              headerTitle:"Help",
              headerBackTitle: "Profile"
            }}
        />
        <ProfileStackNavigation.Screen
            name="LogOut"
            component={LoginScreen}
            options={{
              headerTitle:"Log Out",
              headerBackTitle: "Profile"
            }}
        />

      </ProfileStackNavigation.Navigator>

  );
}
export default function ProfileMenuNavigation() {
  return (
    <NavigationContainer independent={true}>
      <ProfileStack/>
    </NavigationContainer>
  );
}