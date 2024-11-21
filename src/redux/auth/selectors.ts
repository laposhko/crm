interface AuthState {
  user: {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    // Add any other user fields that are part of your auth state
  } | null;
}

interface RootState {
  auth: AuthState;
}

export const selectAuthUser = (state: RootState) => state.auth.user;
