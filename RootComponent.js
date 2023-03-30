import React from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import BottomNavigation from "./src/navigation/BottomNavigation";
import useAuth from "./src/redux/modules/auth/useAuth";// create a store with your reducers

export default function RootComponent() {
  const { setUsername, setPassword, handleLogin } = useAuth(); // use the useAuth hook to get the auth methods
  setUsername("lorien@example.com");
  setPassword("1234");
  handleLogin({});
  return (
      <Provider store={store}>
        <BottomNavigation />
      </Provider>
  );
}
