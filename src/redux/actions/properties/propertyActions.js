import axios from "axios";
import {API_PROPERTIES} from "../../endpoints";
import {
    POST_PROPERTIES_FALIURE,
    POST_PROPERTIES_SUCCESS,
    REQUEST_PROPERTIES_FALIURE,
    REQUEST_PROPERTIES_SUCCESS
} from "./propertyConstants";

export const getProperties = (token) => dispatch => {
    return axios.get(API_PROPERTIES, {
        headers: {
        Authorization:token
        }
    })
    .then(response => {
        console.log(response);
        dispatch({ type: REQUEST_PROPERTIES_SUCCESS, payload: response.data });
    })
    .catch(error => {
        console.error(error);
        dispatch({ type: REQUEST_PROPERTIES_FALIURE, payload: error.response.data });
    });
}

export const setProperty = (payload,token) => dispatch => {
    return axios.post(API_PROPERTIES, payload, {
        headers: {
        Authorization:token
        }
    })
    .then(response => {
        console.log(response);
        dispatch({ type: POST_PROPERTIES_SUCCESS, payload: response.data });
    })
    .catch(error => {
        console.error(error);
        dispatch({ type: POST_PROPERTIES_FALIURE, payload: error.response.data });
    });
}