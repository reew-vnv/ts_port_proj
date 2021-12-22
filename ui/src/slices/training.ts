import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  training: {
    push_ups: {
      first_att: 0,
      second_att: 0,
      third_att: 0,
      fourth_att: 0,
    },
    squats: {
      first_att: 0,
      second_att: 0,
      third_att: 0,
      fourth_att: 0,
    },
    plank: {
      first_att: 0,
      second_att: 0,
      third_att: 0,
      fourth_att: 0,
    },
  },
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
