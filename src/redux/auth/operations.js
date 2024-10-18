import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../../firebase';
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (values, thunkAPI) => {
    try {
      console.log('opartion start');
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      console.log('operation sucess', user);
      return user;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    console.log('opeartion logout start');
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.log(error);
    thunkAPI.rejectWithValue(error.message);
  }
});
export const updateUser = createAsyncThunk(
  'auth/update',
  async (values, thunkAPI) => {
    try {
      const user = auth.currentUser; // Get the current logged-in user
      console.log(user);
      await updateProfile(user, {
        displayName: values.name, // Set the new display name
      });
      return values.name;
    } catch (error) {
      console.log(error);

      thunkAPI.rejectWithValue(error.message);
    }
  }
);
