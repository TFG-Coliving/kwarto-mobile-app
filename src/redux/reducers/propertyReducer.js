import {
    REQUEST_PROPERTIES_FALIURE,
    REQUEST_PROPERTIES_SUCCESS,
    REQUEST_USER_PROPERTIES_FALIURE,
    REQUEST_USER_PROPERTIES_SUCCESS,
    SET_CURRENT_PROPERTY,
    SET_PROPERTY_FIELD
} from "../actions/properties/propertyConstants";


const initialState = {
    properties: [{
        id: 1,
        name: "PRUEBA ALQUILER",
        image: "https://via.placeholder.com/150",
        location: "Madrid",
        price: "$50",
        is_bid: false,

    },
    {
        id: 1,
        name: "PRUEBA PUJA",
        image: "https://via.placeholder.com/150",
        location: "A coruña",
        price: "$50",
        is_bid: true,
    }],
    user_properties: [{
            id: 1,
            name: "PRUEBA MI PROPIEDAD ALQUILER",
            image: "https://via.placeholder.com/150",
            location: "Madrid",
            price: "$50",
            is_bid: false,

        },
        {
            id: 1,
            name: "PRUEBA MI PROPIEDAD PUJA",
            image: "https://via.placeholder.com/150",
            location: "A coruña",
            price: "$50",
            is_bid: true,
        }],
    error: null
}

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PROPERTIES_SUCCESS:
            return {
                ...state,
                properties: [...action.payload],
                error: null
            };
        case REQUEST_PROPERTIES_FALIURE:
            return {
                ...state,
                properties: null,
                error: action.payload
            };
        case REQUEST_USER_PROPERTIES_SUCCESS:
            return {
                ...state,
                user_properties: [...action.payload],
                error: null
            }
        case REQUEST_USER_PROPERTIES_FALIURE:
            return {
                ...state,
                user_properties: null,
                error: action.payload
            }
        case SET_CURRENT_PROPERTY:
            return { ...state, property: action.payload };
        case SET_PROPERTY_FIELD:
            const { field, value } = action.payload;
            return { ...state, property: { ...state.property, [field]: value } };
        default:
            return state;
    }
};

export default propertyReducer;