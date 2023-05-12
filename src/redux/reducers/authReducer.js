
import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/auth/authConstants';

const initialState = {
  token: null,
  isLoggedIn: false,
  errorLogin: null,
  errorRegister: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        errorLogin: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        errorLogin: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        errorRegister: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errorRegister: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;