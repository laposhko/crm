import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../../../firebase'; // Assuming your Firebase instance is exported here

// Define the shape of the payload for the login action
interface LogInPayload {
  email: string;
  password: string;
}

// Define the shape of the payload for the update user action
interface UpdateUserPayload {
  name: string;
  image: File | null;
}

// Define the shape of the ThunkApiConfig
interface ThunkApiConfig {
  rejectValue: string;
}

// LogIn action with email and password
export const logIn = createAsyncThunk<
  UserCredential, // Return type (Firebase UserCredential on success)
  LogInPayload, // Payload type (email and password)
  ThunkApiConfig // Config for thunkAPI including rejectWithValue type
>('auth/logIn', async (values: LogInPayload, thunkAPI: any) => {
  try {
    console.log('Operation start', values);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    console.log('Operation success', userCredential.user.uid);
    const userData = {
      user: {
        email: userCredential.user.email,
        name: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      },
      accessToken: userCredential.user.uid,
      emailVerified: userCredential.user.emailVerified,
      // refreshToken: userCredential.user.email,
    };
    console.log('userDate', userData);
    return userData; // Return the user credentials (includes user data)
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message || 'Login failed');
  }
});

// LogOut action
export const logOut = createAsyncThunk<void, void, ThunkApiConfig>(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      console.log('Operation logout start');
      const authInstance = getAuth();
      await signOut(authInstance);
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message || 'Logout failed');
    }
  }
);

// Update user profile action
export const updateUser = createAsyncThunk<
  string, // Return type (the updated displayName)
  UpdateUserPayload, // Payload type (name and image)
  ThunkApiConfig // Config for thunkAPI
>('auth/update', async (values: UpdateUserPayload, thunkAPI) => {
  try {
    const user = auth.currentUser; // Get the current logged-in user
    if (!user) {
      throw new Error('User not authenticated');
    }

    console.log(user);

    // Update the display name
    await updateProfile(user, {
      displayName: values.name,
    });

    return values.name; // Return the updated name
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message || 'Failed to update user');
  }
});
