import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './auth';

const API_USER = 'http://172.17.41.21:8000/api/user';
const API_LOGIN = 'http://172.17.41.21:8000/api/auth/authenticate';

export const login = (email = "lorien@example.com", password="1234") => dispatch => {
  return axios
  .post(API_LOGIN, {
    email,
    password
  })
  .then(response => {
    if (response["token"]) {
      const token = response["token"];
      localStorage.setItem('user', JSON.stringify(response.data));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      dispatch(getCurrentUser());
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: response.data });
    }
  })
  .catch(error => {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
  });
};

export const getCurrentUser = () => dispatch => {
  return axios.get(API_USER, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')['token']}`
    }
  })
  .then(response => {
    console.log(response);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  })
  .catch(error => {
    console.log(error);
    console.error(error);
  });
};
