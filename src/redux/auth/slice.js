import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, updateUser } from './operations';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      name: null,
      photoURL: null,
    },
    accessToken: null,
    emailVerified: false,
    refreshToken: null,
    isLoggingIn: null,
    isLoggedIn: null,
    isError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.isError = false;
        state.isLoggingIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.emailVerified = action.payload.emailVerified;
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.photoURL = action.payload.photoURL;
        state.isError = false;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoggingIn = false;
        state.isError = true;
      })
      .addCase(logOut.pending, (state) => {
        state.isError = false;
        state.isLoggingIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.emailVerified = null;
        state.user.email = null;
        state.user.name = null;
        state.user.photoURL = null;
        state.isError = false;
        state.isLoggingIn = false;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoggedIn = true;
        state.isLoggingIn = false;
        state.isError = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload;
      }),
});
const authReducer = authSlice.reducer;

export default authReducer;
