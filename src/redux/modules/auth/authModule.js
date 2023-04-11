import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authConstants';
import {API_LOGIN} from "../../endpoints";

export const login = (email="", password="") => dispatch => {
  console.log(" A- " +email + " B- " + password);
  return axios
  .post(API_LOGIN, {
    email,
    password
  })
  .then(response => {
    if (response.data.token) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: response.data });
    }
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
  });
};


