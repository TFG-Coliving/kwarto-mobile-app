import React from 'react-native';
import {Provider} from "react-redux";
import store from "./src/redux/store/store";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {

  return (
      <Provider store={store}>
        <BottomNavigation/>
      </Provider>
  );
}
