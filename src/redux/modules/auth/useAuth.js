import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {login, registerUser} from "./authModule";

const useAuth = callback => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    console.log(e);
    dispatch(login(e.email, e.password));
  };

  const handleRegister = e => {
    e.preventDefault();
    console.log(e);
    dispatch(registerUser(e.firstname,e.lastname, e.email,e.phone, e.password));
  }

  return {
    isLoggedIn,
    handleLogin,
    handleRegister,
    setEmail,
    setPassword
  }
};

export default useAuth;
