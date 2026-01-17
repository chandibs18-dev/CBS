import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  user: null,          // logged-in user info
  token: null,         // optional auth token (JWT)
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token || null;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

// Export actions
export const { login, logout, updateUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
