import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authConstants';

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
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: response.data });
    }
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
  });
};


