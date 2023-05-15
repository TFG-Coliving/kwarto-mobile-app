import axios from "axios";
import FormData from 'react-native/Libraries/Network/FormData'
import {
  REQUEST_USER_FAILURE,
  REQUEST_USER_SUCCESS, SET_PROFILE_PICTURE_URI,
  SET_USER_FIELD
} from "./usersConstants";
import {API_UPDATE_USER, API_USER, API_USER_PROFILE_PICTURE} from "../../endpoints";

export const getCurrentUser = (token) => dispatch => {
  return axios.get(API_USER, {
    headers: {
      'Authorization':'Bearer '+token
    }
  })
  .then(response => {
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
export const updateProfilePicture = (token, imageUri) => dispatch => {
  let data = new FormData();
  data.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'profilePicture'
  });
  return axios.put(API_USER_PROFILE_PICTURE, data, {
    headers: {
      'Authorization':'Bearer '+token
    }
  })
  .then(response => {
    dispatch({ type: SET_PROFILE_PICTURE_URI, payload: response.data.uri });
  })
  .catch(error => {
    console.error(error);
    dispatch({ type: REQUEST_USER_FAILURE, payload: error.response.data });
  });
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