import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/login_register_screens/LoginScreen";
import RegisterScreen from "../screens/login_register_screens/RegisterScreen";
import BottomNavigation from "./BottomNavigation";
import RegisterCompleteScreen from "../screens/login_register_screens/RegisterCompleteScreen";
import RegisterErrorScreen from "../screens/login_register_screens/RegisterErrorScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={BottomNavigation}/>
            <Stack.Screen name="RegisterComplete" component={RegisterCompleteScreen}/>
            <Stack.Screen name="RegisterError" component={RegisterErrorScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;