import axios from "axios";
import {API_PROPERTIES, API_USER_PROPERTY} from "../../endpoints";
import {
    POST_PROPERTIES_FALIURE,
    POST_PROPERTIES_SUCCESS,
    REQUEST_PROPERTIES_FALIURE,
    REQUEST_PROPERTIES_SUCCESS,
    REQUEST_USER_PROPERTIES_FALIURE,
    REQUEST_USER_PROPERTIES_SUCCESS
} from "./propertyConstants";

export const getProperties = (token) => dispatch => {
    console.log("token: " + token);
    return axios.get(API_PROPERTIES, {
        headers: {
            'Authorization':'Bearer '+token
        }
    })
    .then(response => {
        console.log("respuesta de propiedades: " + response);
        dispatch({ type: REQUEST_PROPERTIES_SUCCESS, payload: response.data });
    })
    .catch(error => {
        console.error(error);
        dispatch({ type: REQUEST_PROPERTIES_FALIURE, payload: error.response.data });
    });
}
export const getUserProperties = (token) => dispatch => {
    return axios.get(API_USER_PROPERTY, {
        headers: {
            'Authorization':'Bearer '+token
        }
    })
    .then(response => {
        console.log(response);
        dispatch({ type: REQUEST_USER_PROPERTIES_SUCCESS, payload: response.data });
    })
    .catch(error => {
        console.error(error);
        dispatch({ type: REQUEST_USER_PROPERTIES_FALIURE, payload: error.response.data });
    });
}

export const setProperty = (imagesUri,payload,token) => dispatch => {
    console.log(payload);


    let images = [];
    imagesUri.forEach(imageUri => {
        images.push({
            uri: imageUri,
            type: 'image/jpeg',
            name: 'propertyImage'
        });
    });
    const newPayload = {
        ...payload,
        images: images
    }
    console.log("payload: ")
    console.log(newPayload);
    return axios.post(API_PROPERTIES, newPayload, {
        headers: {
        'Authorization':'Bearer '+token
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