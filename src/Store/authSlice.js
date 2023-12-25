import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: { },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.auth = { ...state.auth, ...action.payload };
    },
    removeAuthUser: (state, action) => {
      state.auth = {};
    },
  },
});

export const { setAuthUser, removeAuthUser } = authSlice.actions;

export default authSlice.reducer;
