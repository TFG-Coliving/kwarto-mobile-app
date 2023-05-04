import {
  REQUEST_USER_FAILURE,
  REQUEST_USER_SUCCESS, SET_CURRENT_USER, SET_USER_FIELD
} from "../actions/users/usersConstants";

const initialState = {
  user: null,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        user: {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          role: action.payload.role,
          phone: action.payload.phone,
          score: action.payload.score,
          score_hidden: action.payload.score_hidden,
          birth_date: action.payload.birth_date,
          profilePicture:{
            uri: action.payload.profilePicture.uri
          },
        },
        error: null
      };
    case REQUEST_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload
      };
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case SET_USER_FIELD:
      const { field, value } = action.payload;
      return { ...state, user: { ...state.user, [field]: value } };
    default:
      return state;
  }
};

export default usersReducer;