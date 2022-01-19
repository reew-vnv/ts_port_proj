import { createSlice } from '@reduxjs/toolkit';
import { initialInterface } from './types';

const initialState = {
  result: [],

  ifInputCorrect: true,

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
} as initialInterface;

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    // eslint-disable-next-line default-param-last
    updateTraining: (state = initialState, action) => ({
      ...state,
      ...action.payload,
    }),
    // eslint-disable-next-line default-param-last
    clearTraining: (state = initialState) => ({
      ...state,
      training: { ...initialState.training },
    }),
  },
});

export const trainingReducer = trainingSlice.reducer;
export const { updateTraining } = trainingSlice.actions;
export const { clearTraining } = trainingSlice.actions;
