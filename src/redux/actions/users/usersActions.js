import axios from "axios";
import {
  REQUEST_USER_FAILURE,
  REQUEST_USER_SUCCESS,
  SET_USER_FIELD
} from "./usersConstants";
import {API_UPDATE_USER, API_USER} from "../../endpoints";
import {useSelector} from "react-redux";

export const getCurrentUser = (token) => dispatch => {
  return axios.get(API_USER, {
    headers: {
      'Authorization':'Bearer '+token
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

export const setUserField = (payload) => dispatch => {
  return dispatch({ type: SET_USER_FIELD, payload});
}

export const updateUser = (token, user) => dispatch => {
  return axios.put(API_UPDATE_USER, user, {
    headers: {
      'Authorization':'Bearer '+token
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
}