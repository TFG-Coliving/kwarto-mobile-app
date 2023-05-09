import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CardAlquiler from "../screens/card_screens/CardAlquiler";
import CardPuja from "../screens/card_screens/CardPuja";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/bottom_navigation_screens/HomeScreen";

const HomeStackNavigation = createStackNavigator();
function HomeStack() {
  return (
      <HomeStackNavigation.Navigator
          initialRouteName="HomeScreen"
      >
        <HomeStackNavigation.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        />
        <HomeStackNavigation.Screen
          name="CardAlquiler"
          component={CardAlquiler}
          options={{
              headerTitle: "Alquiler",
              headerBackTitle: "Home"
          }}
        />
        <HomeStackNavigation.Screen
            name="CardPuja"
            component={CardPuja}
            options={{
                headerTitle: "Puja",
                headerBackTitle: "Home"
            }}
        />
      </HomeStackNavigation.Navigator>
  );
}
export default function HomeMenuNavigation() {
  return (
    <NavigationContainer independent={true}>
      <HomeStack/>
    </NavigationContainer>
  );
}