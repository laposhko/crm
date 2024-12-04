import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface CompaniesState {}
const initialState: CompaniesState = {};
const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const companiesReducer = companiesSlice.reducer;

export default companiesReducer;
