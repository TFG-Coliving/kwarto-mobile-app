import {
  REQUEST_PROPERTIES_FALIURE,
  REQUEST_PROPERTIES_SUCCESS,
  REQUEST_USER_PROPERTIES_FALIURE,
  REQUEST_USER_PROPERTIES_SUCCESS,
  SET_CURRENT_PROPERTY,
  SET_PROPERTY_FIELD,
} from "../actions/properties/propertyConstants";

const initialState = {
  properties: [
    {
      id: 1,
      name: "Prueba 1",
      country: "Spain",
      province: "Barcelona",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image:
        "https://www.revistainteriores.es/uploads/s1/21/97/78/3/29-salones-en-blanco-y-madera-para-llenar-de-luz-tu-casa.webp",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 2,
      name: "Prueba 2",
      country: "Spain",
      province: "Madrid",
      city: "Alcorcon",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 3,
      dimensions: "400x400",
      image:
        "https://st.hzcdn.com/simgs/cf71fdf70128d684_14-8346/home-design.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 3,
      name: "Prueba 3",
      country: "Spain",
      province: "Sevilla",
      city: "Sevilla",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image:
        "https://www.milideas.net/wp-content/uploads/salones-estrechos-portada.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 4,
      name: "Prueba 4",
      country: "Spain",
      province: "A Coruña",
      city: "A Coruña",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image:
        "https://www.sofaclub.es/blog/imagenes/Principales-caracteristicas-de-los-salones-modernos-1024x573.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 5,
      name: "Prueba 5",
      country: "Spain",
      province: "Madrid",
      city: "Alcorcon",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 4,
      dimensions: "400x400",
      image:
        "https://www.gestilar.com/uploads/Blog/blog-2021/decoracion-salones-diafanos.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 6,
      name: "Prueba 6",
      country: "Spain",
      province: "Cádiz",
      city: "Cádiz",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 3,
      dimensions: "400x400",
      image:
        "https://estaticos-cdn.prensaiberica.es/clip/a504071b-df7c-46f8-a6b1-83cb87c03194_16-9-discover-aspect-ratio_default_0.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 7,
      name: "Prueba 7",
      country: "Spain",
      province: "Barcelona",
      city: "Barcelona",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image: "https://xikara.net/wp-content/uploads/2018/10/montaje-salon.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 8,
      name: "Prueba 1",
      country: "Spain",
      province: "Barcelona",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image: "https://i.blogs.es/567c42/1366_2000/450_1000.jpeg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
    {
      id: 9,
      name: "Prueba 2",
      country: "Spain",
      province: "Madrid",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image:
        "https://kibuc.com/blog/wp-content/uploads/2018/07/1576-K-Athos-0010-512x307.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
    {
      id: 10,
      name: "Prueba 3",
      country: "Spain",
      province: "Bilbao",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 4,
      dimensions: "400x400",
      image:
        "https://www.revistainteriores.es/uploads/s1/21/97/78/3/29-salones-en-blanco-y-madera-para-llenar-de-luz-tu-casa.webp",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
    {
      id: 11,
      name: "Prueba 4",
      country: "Spain",
      province: "Ourense",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image:
        "https://entrecolores.com/wp-content/uploads/2019/01/Alfombra-fibra-natural-1-2.jpg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 2,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: true,
      rentReviews: [],
    },
  ],
  user_properties: [
    {
      id: 1,
      name: "Prueba 1",
      country: "Spain",
      province: "Barcelona",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 2,
      dimensions: "400x400",
      image:
        "https://www.revistainteriores.es/uploads/s1/21/97/78/3/29-salones-en-blanco-y-madera-para-llenar-de-luz-tu-casa.webp",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 1,
          name: "Habitación matrimonio",
          price: 100.0,
          dimensions: "20x20",
          capacity: 2,
          bids: [],
        },
      ],
      is_bid: false,
      rentReviews: [],
    },
    {
      id: 8,
      name: "Prueba 1",
      country: "Spain",
      province: "Barcelona",
      city: "Caldes de Montbui",
      address: "Plaza Reyes de España, 1",
      coordinates_long_north: -3.828476,
      coordinates_latitude_east: 40.349213,
      score: 4.5,
      available_rooms: 5,
      dimensions: "400x400",
      image: "https://i.blogs.es/567c42/1366_2000/450_1000.jpeg",
      facilities: [
        {
          id: 1,
          name: "Parking",
        },
      ],
      rooms: [
        {
          id: 1,
          name: "Habitación individual",
          price: 100.0,
          dimensions: "10x20",
          capacity: 1,
          bids: [],
        },
        {
          id: 1,
          name: "Habitación matrimonio",
          price: 100.0,
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
      console.log("la casa ahora es en el reducer: " + action.payload);
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
    case REQUEST_USER_PROPERTIES_SUCCESS:
      return {
        ...state,
        user_properties: [...action.payload],
        error: null,
      };
    case REQUEST_USER_PROPERTIES_FALIURE:
      return {
        ...state,
        user_properties: null,
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
