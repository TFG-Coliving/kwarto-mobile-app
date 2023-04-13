import axios from "axios";
import {REQUEST_USER_FAILURE, REQUEST_USER_SUCCESS} from "./usersConstants";
import {API_USER} from "../../endpoints";
import {useSelector} from "react-redux";

export const getCurrentUser = () => dispatch => {
  return axios.get(API_USER, {
    headers: {
      Authorization: useSelector(state => state.authentication.token)
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