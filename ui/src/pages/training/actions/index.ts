import axios from 'axios';
import { urls } from '../../../constants';
import { updateTraining } from '../../../slices/training_page';

export const getTraining = (params?: any) => async (dispatch: any) => {
  await axios.get(`${urls.TRAINING}`, {
    params,
  })
    .then((response: any) => {
      dispatch(updateTraining({ resp: response }));
    }).catch((error: any) => {
      console.log(error);
    });
};

export const addTraining = (training: any) => {
  console.log({ training });
  return async () => {
    console.log(1);
    await axios.post(`${urls.TRAINING}`, {
    }).then((resp) => {
      console.log(resp.data);
    }).catch((error) => {
      console.log(error);
    });
  };
};
