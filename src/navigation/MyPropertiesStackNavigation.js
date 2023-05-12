import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CardAlquiler from "../screens/card_screens/CardAlquiler";
import CardPuja from "../screens/card_screens/CardPuja";
import {NavigationContainer} from "@react-navigation/native";
import MyPropertiesScreen from "../screens/profile_screens/MyPropertiesScreen";

const MyPropertiesStackNavigator = createStackNavigator();
function MyPropertiesStack() {
  return (
      <MyPropertiesStackNavigator.Navigator
          initialRouteName="HomeScreen"
      >
        <MyPropertiesStackNavigator.Screen
            name="HomeScreen"
            component={MyPropertiesScreen}
            options={{
                headerShown: false
            }}
        />
        <MyPropertiesStackNavigator.Screen
          name="CardAlquiler"
          component={CardAlquiler}
          options={{
              headerTitle: "Alquiler",
              headerBackTitle: "Home"
          }}
        />
        <MyPropertiesStackNavigator.Screen
            name="CardPuja"
            component={CardPuja}
            options={{
                headerTitle: "Puja",
                headerBackTitle: "Home"
            }}
        />
      </MyPropertiesStackNavigator.Navigator>
  );
}
export default function MyPropertiesStackNavigation() {
  return (
    <NavigationContainer independent={true}>
      <MyPropertiesStack/>
    </NavigationContainer>
  );
}