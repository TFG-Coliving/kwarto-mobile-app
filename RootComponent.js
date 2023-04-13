import React from 'react-native';
import BottomNavigation from "./src/navigation/BottomNavigation";
import AuthStack  from "./src/navigation/AuthStack";
import {NavigationContainer} from "@react-navigation/native";

export default function RootComponent() {
  return (
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
  );

}
