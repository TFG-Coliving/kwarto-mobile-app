import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import usersReducer from "../reducers/usersReducer";
import paymentReducer from "../reducers/paymentReducer";
import propertyReducer from "../reducers/propertyReducer";
import thunk from "redux-thunk";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  authentication: authReducer,
  users: usersReducer,
  payment: paymentReducer,
  properties: propertyReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
