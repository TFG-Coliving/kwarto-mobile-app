import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE} from './authConstants';
import {API_LOGIN, API_REGISTER} from "../../endpoints";

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
      console.log("TOKEN: " + response.data.token)
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: response.data });
    }
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
  });
};

export const registerUser = (firstname = "", lastname = "",email="",phone = "", password="") => dispatch => {
  console.log(" A- " + firstname + " B- " + lastname  + " c- " + email + " A- " + phone + " B- " + password );
return axios
  .post(API_REGISTER, {
    firstname,
    lastname,
    email,
    phone,
    password
  })
  .then(response => {
    if (response.data) {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      console.log("RESPONSE: " + response.data)
    } else {
      dispatch({ type: REGISTER_FAILURE, payload: response.data });
    }
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: REGISTER_FAILURE, payload: error.response.data });
  });


}


