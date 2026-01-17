import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // import the auth slice

// Configure Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // register auth slice
  },
});

export default store;
