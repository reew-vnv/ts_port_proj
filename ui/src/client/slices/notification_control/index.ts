import { createSlice } from '@reduxjs/toolkit';
import { initialInterface } from './types';

const initialState = {
  isShowNotification: false,
  message: '',
  variant: 'default',
} as initialInterface;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    // eslint-disable-next-line default-param-last
    updateNotification: (state = initialState, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const notificationReducer = notificationSlice.reducer;
export const { updateNotification } = notificationSlice.actions;
