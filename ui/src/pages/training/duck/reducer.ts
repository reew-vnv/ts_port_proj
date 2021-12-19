import { createActionReducer } from '../../../store-utils/redux-utils';
import store from '../../../store-utils/store';

export interface TrainingState {
    training?: string;
  }

export const initialState: TrainingState = {
  training: 'training',
};

const trainingReducer = createActionReducer(initialState);
store.injectReducers({
  training: trainingReducer,
});

export { trainingReducer };
