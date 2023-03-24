import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import LoginScreen from "./src/screens/login_register_screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";


export default function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}

