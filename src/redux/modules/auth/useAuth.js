import {useDispatch, useSelector} from "react-redux";
import {login} from "./authModule";
import {useState} from "react";

const useAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return {
    isLoggedIn,
    handleLogin,
    setUsername,
    setPassword
  }
};

export default useAuth;
