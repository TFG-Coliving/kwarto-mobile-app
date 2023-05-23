import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileMenuScreen from "../screens/bottom_navigation_screens/ProfileMenuScreen";
import HomeMenuScreen from "../screens/bottom_navigation_screens/HomeMenuScreen";
import ReservasMenuScreen from "../screens/bottom_navigation_screens/ReservasMenuScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#8667f1",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={25} name="home"></Ionicons>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={ReservasMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={25} name="calendar"></Ionicons>
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={25} name="person"></Ionicons>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomNavigation() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
