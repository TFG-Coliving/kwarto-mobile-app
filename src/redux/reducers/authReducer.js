
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../modules/auth';

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          id: action.payload.id,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          role: action.payload.role,
          phone: action.payload.phone,
          score: action.payload.score,
          score_hidden: action.payload.score_hidden,
          birth_date: action.payload.birth_date,
          profilePicture:{
            id: action.payload.profilePicture.id,
            name: action.payload.profilePicture.name,
            type: action.payload.profilePicture.type,
            uri: action.payload.profilePicture.uri
          },
          username: action.payload.username
        },
        isLoggedIn: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;