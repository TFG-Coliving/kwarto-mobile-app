import {
    REQUEST_PROPERTIES_FALIURE,
    REQUEST_PROPERTIES_SUCCESS,
    SET_CURRENT_PROPERTY, SET_PROPERTY_FIELD
} from "../actions/properties/propertyConstants";


const initialState = {
    properties: [{
        id: 1,
        name: "PRUEBA ALQUILER",
        image: "https://avanzahomes.com/wp-content/uploads/2021/08/003-blog-comprar-piso-madrid.jpg",
        location: "Madrid",
        price: "$50",
        type: "Alquiler",

    },
    {
        id: 1,
        name: "PRUEBA PUJA",
        image: "https://avanzahomes.com/wp-content/uploads/2021/08/003-blog-comprar-piso-madrid.jpg",
        location: "A coruña",
        price: "$50",
        type: "Puja",
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