
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth/authConstants';

const initialState = {
  token: null,
  isLoggedIn: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;