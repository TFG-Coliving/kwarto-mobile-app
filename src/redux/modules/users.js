import { useDispatch, useSelector } from 'react-redux';
import { login } from './authModule';

const Users = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const getUser = () => {
    return user;
  };

  const getFirstName = () => {
    return user.firstname;
  }

  return {
    getUser,
    getFirstName,
    isLoggedIn,
    handleLogin,
    setUsername,
    setPassword
  };
};

export default Users;
