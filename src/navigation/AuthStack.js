import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/login_register_screens/LoginScreen";
import RegisterScreen from "../screens/login_register_screens/RegisterScreen";
import HomeScreen from "../screens/bottom_navigation_screens/HomeScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;