import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  training: 'Training',
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    updateTraining:
    (state, action) => state = action.payload,
  },
});

export const trainingReducer = trainingSlice.reducer;
export const { updateTraining } = trainingSlice.actions;
