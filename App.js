import React from 'react-native';
import RootComponent from "./RootComponent";
import {Provider} from "react-redux";
import store from "./src/redux/store/store";

export default function App() {

  return (
      <Provider store={store}>
        <RootComponent/>
      </Provider>
  );
}
