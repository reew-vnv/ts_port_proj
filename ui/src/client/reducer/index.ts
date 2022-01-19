import { trainingReducer } from '../slices/training_page';
import { authReducer } from '../slices/auth_page';
import { notificationReducer } from '../slices/notification_control';

const reducer = {
  trainingReducer,
  authReducer,
  notificationReducer,
};

export default reducer;
