import { createSlice } from '@reduxjs/toolkit';
import { initialInterface } from './types';

const initialState = {
  registration_data: {
    email: '',
    password: '',
    name: '',
  },

  logging_data: {
    email: '',
    password: '',
  },

  current_user: {
    email: '',
    name: '',
    uid: '',
    email_verified: false,
  },
  isLogging: false,
  isOpenRegistration: false,
} as initialInterface;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line default-param-last
    updateAuth: (state = initialState, action) => ({
      ...state,
      ...action.payload,
    }),
    clearRegistration: (state = initialState) => ({
      ...state,
      registration_data: { ...initialState.registration_data },
    }),
    clearLogging: (state = initialState) => ({
      ...state,
      logging_data: { ...initialState.logging_data },
    }),
  },
});

export const authReducer = authSlice.reducer;
export const { updateAuth } = authSlice.actions;
export const { clearRegistration } = authSlice.actions;
export const { clearLogging } = authSlice.actions;
