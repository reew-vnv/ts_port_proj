import axios from 'axios';
import { urls } from '../../../constants';
import { updateTraining } from '../../../slices/training_page';
import { prepareTrainingData } from '../helpers';

export const getTraining = (params?: any) => async (dispatch: any) => {
  await axios.get(`${urls.TRAINING}${urls.FB_EXTENSION}`, {
    params,
  })
    .then((response: any) => {
      const keysData = Object.keys(response.data)
        .map((key) => response.data[key]);
      const preparedData = keysData.reduce((acc, item) => {
        const { date } = item;
        delete item.date;
        const ov = Object.values(item);
        const result = ov.reduce((a: any, el: any) => {
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const key in el) a[key] = el[key];
          return a;
        }, {});

        if (date !== undefined) {
          const pr = Object.assign(result, { date });
          acc.push(pr);
        }
        return acc;
      }, []);

      dispatch(updateTraining({
        result: preparedData,
      }));
    }).catch((error: any) => {
      console.log(error);
    });
};

export const addTraining = (training: any) => async () => {
  const data = prepareTrainingData(training);
  const { updatedPlank, updatedSquats, updatedPushUps } = data;
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  await axios.post(`${urls.TRAINING}${urls.FB_EXTENSION}`, {
    plank: updatedPlank,
    squats: updatedSquats,
    push_ups: updatedPushUps,
    date: dateTime,
  }).then((resp) => {
    console.log(resp.data);
  }).catch((error) => {
    console.log(error);
  });
};
