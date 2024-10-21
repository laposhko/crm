import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logIn, logOut, updateUser } from './operations';
interface User {
  email: string | null;
  name: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: User;
  accessToken: string | null;
  emailVerified: boolean | null;
  refreshToken: string | null;
  isLoggingIn: boolean | null;
  isLoggedIn: boolean | null;
  isError: boolean | null;
}
const initialState: AuthState = {
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
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.isError = false;
        state.isLoggingIn = true;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<any>) => {
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
      .addCase(logOut.fulfilled, (state) => {
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
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.user.name = action.payload;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
