import React from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';
import BottomNavigation from "./src/navigation/BottomNavigation";

const store = createStore(rootReducer); // create a store with your reducers

export default function RootComponent() {
  const auth = auth('lorien@example.com', '1234');
  auth.handleLogin();
  return (
      <Provider store={store}>
        <BottomNavigation />
      </Provider>
  );
}
