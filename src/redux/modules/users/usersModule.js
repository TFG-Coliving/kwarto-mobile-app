import axios from "axios";
import {REQUEST_USER_FAILURE, REQUEST_USER_SUCCESS} from "./usersConstants";

export const getCurrentUser = () => dispatch => {
  return axios.get(API_USER, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')['token']}`
    }
  })
  .then(response => {
    console.log(response);
    dispatch({ type: REQUEST_USER_SUCCESS, payload: response.data });
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: REQUEST_USER_FAILURE, payload: error.response.data });
  });
};