import { createSlice } from "@reduxjs/toolkit";

const userStorage = JSON.parse(localStorage["user"] || "{}");

const initialState = userStorage || {
  auth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_, { payload }) => payload,
    logout: (state) => {
      localStorage.clear();
      return (state = { auth: false });
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
