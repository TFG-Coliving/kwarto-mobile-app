import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import usersReducer from "../reducers/usersReducer";
import thunk from "redux-thunk";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  authentication: authReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
