import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

//screens
import HomeScreen from "./src/screens/navigation_screens/HomeScreen";
import SettingsScreen from "./src/screens/navigation_screens/SettingsScreen";
import StackScreen from "./src/screens/navigation_screens/StackScreen";
import ProfileScreen from "./src/screens/navigation_screens/ProfileScreen";

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();
function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="StackScreen"
                component={StackScreen}
                options={{
                }}
            />
        </HomeStackNavigator.Navigator>
    );
}
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
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={30} />
                  ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                  ),
                  headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                  ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}