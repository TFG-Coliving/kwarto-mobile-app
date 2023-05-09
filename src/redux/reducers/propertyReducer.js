import {
  REQUEST_PROPERTIES_FALIURE,
  REQUEST_PROPERTIES_SUCCESS,
  SET_CURRENT_PROPERTY,
  SET_PROPERTY_FIELD,
} from "../actions/properties/propertyConstants";

const initialState = {
  properties: [
    {
      id: 1,
      name: "Prueba Alquiler",
      country: "Spain",
      province: "Madrid",
      city: "Alcorcon",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2017-06/h1_b.jpeg?VersionId=mJfwx76Bg1ZROco4yQF3MKj.BSnHG999&itok=fQ6sr8S8",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación matrimonio",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 1,
      name: "Prueba Puja",
      country: "Spain",
      province: "Barcelona",
      city: "Sabadell",
      address: "Plaza Catalunya, 1",
      coordinates_long_north: 41.55001651201284,
      coordinates_latitude_east:  2.098955621583387,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2017-06/h1_b.jpeg?VersionId=mJfwx76Bg1ZROco4yQF3MKj.BSnHG999&itok=fQ6sr8S8",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación matrimonio",
          price: 400.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
  ],
  error: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: [...action.payload],
        error: null,
      };
    case REQUEST_PROPERTIES_FALIURE:
      return {
        ...state,
        properties: null,
        error: action.payload,
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
