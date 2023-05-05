import {
    REQUEST_PROPERTIES_FALIURE,
    REQUEST_PROPERTIES_SUCCESS,
    SET_CURRENT_PROPERTY, SET_PROPERTY_FIELD
} from "../actions/properties/propertyConstants";


const initialState = {
    property: null,
    error: null
}

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PROPERTIES_SUCCESS:
            return {
                ...state,
                property: {
                    id: action.payload.id,
                    country: action.payload.country,
                    province: action.payload.province,
                    city: action.payload.city,
                    address: action.payload.address,
                    coordinates_long_north: action.payload.coordinates_long_north,
                    coordinates_latitude_east: action.payload.coordinates_latitude_east,
                    score: action.payload.score,
                    available_rooms: action.payload.available_rooms,
                    dimensions: action.payload.dimensions,
                    facilities: [...action.payload.facilities],
                    rooms: [...action.payload.rooms],
                    rent_reviews: [...action.payload.rent_reviews],
                    images: [...action.payload.images],
                },
                error: null
            };
        case REQUEST_PROPERTIES_FALIURE:
            return {
                ...state,
                property: null,
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