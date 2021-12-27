import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resp: {},
  training: {
    push_ups: {
      first_att: { label: 'first_att', value: 0 },
      second_att: { label: 'second_att', value: 0 },
      third_att: { label: 'third_att', value: 0 },
      fourth_att: { label: 'fourth_att', value: 0 },
    },
    squats: {
      first_att: { label: 'first_att', value: 0 },
      second_att: { label: 'second_att', value: 0 },
      third_att: { label: 'third_att', value: 0 },
      fourth_att: { label: 'fourth_att', value: 0 },
    },
    plank: {
      first_att: { label: 'first_att', value: 0 },
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
