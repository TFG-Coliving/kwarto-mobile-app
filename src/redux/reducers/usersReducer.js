import {
  REQUEST_USER_FAILURE,
  REQUEST_USER_SUCCESS,
  SET_CURRENT_USER,
  SET_PROFILE_PICTURE,
  SET_PROFILE_PICTURE_URI,
  SET_USER_FIELD
} from "../actions/users/usersConstants";

const initialState = {
  user: null,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_SUCCESS:
      console.log("user: ", action.payload);
      return {
        ...state,
        user: {...action.payload},
        error: null
      };
    case REQUEST_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload
      };
    case SET_CURRENT_USER:
      return { ...state, user: {...action.payload} };
    case SET_USER_FIELD:
      const { field, value } = action.payload;
      return { ...state, user: { ...state.user, [field]: value } };
    case SET_PROFILE_PICTURE_URI:
      return { ...state, user: { ...state.user, profilePicture: { ...state.user.profilePicture, uri: action.payload } } };
    default:
      return state;
  }
};

export default usersReducer;