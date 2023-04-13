import {
  REQUEST_USER_FAILURE,
  REQUEST_USER_SUCCESS
} from "../modules/users/usersConstants";

const initialState = {
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default authReducer;