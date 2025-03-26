import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      localStorage.setItem("registeredUser", JSON.stringify(action.payload));
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, register, loginFailed } = authSlice.actions;
export default authSlice.reducer;
