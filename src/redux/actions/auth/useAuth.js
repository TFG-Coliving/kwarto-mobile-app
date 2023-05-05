import {useDispatch, useSelector} from "react-redux";
import {login} from "./authActions";
import {useState} from "react";

const useAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    console.log(e);
    dispatch(login(e.email, e.password));
  };

  return {
    isLoggedIn,
    handleLogin,
    setEmail,
    setPassword
  }
};

export default useAuth;
