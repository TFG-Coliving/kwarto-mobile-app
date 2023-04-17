import React from 'react-native';
import RootComponent from "./RootComponent";
import {Provider} from "react-redux";
import store from "./src/redux/store/store";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {

  return (
      <Provider store={store}>
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
      </Provider>
  );
}
