import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

//screens
import HomeScreen from "../screens/bottom_navigation_screens/HomeScreen";

import StackScreen from "../screens/bottom_navigation_screens/StackScreen";
import ProfileScreen from "../screens/profile_screens/ProfileScreen";

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileMenuScreen from "../screens/bottom_navigation_screens/ProfileMenuScreen";
import HomeMenuScreen from "../screens/bottom_navigation_screens/HomeMenuScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#8667f1',
                }
            }
        >

            <Tab.Screen
                name="Home"
                component={HomeMenuScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                  ),
                  headerShown: false
                }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileMenuScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={30} />
                ),
                headerShown: false
              }}
            />
        </Tab.Navigator>
    );
}

export default function BottomNavigation() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs/>
        </NavigationContainer>
    );
}