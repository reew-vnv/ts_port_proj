import axios from 'axios';
import { urls } from '../../../constants';
import { updateTraining } from '../../../slices/training_page';
import { prepareTrainingData } from '../helpers';

export const getTraining = (params?: any) => async (dispatch: any) => {
  await axios.get(`${urls.TRAINING}${urls.FB_EXTENSION}`, {
    params,
  })
    .then((response: any) => {
      const entries = Object.entries(response.data || []);
      const preparedData = entries.reduce((acc: any, currEl: any) => {
        const item = currEl[1];
        const objId = currEl[0];
        const { date } = item;
        delete item.date;
        const ov = Object.values(item);
        const result = ov.reduce((a: any, el: any) => {
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const key in el) a[key] = el[key];
          return a;
        }, {});

        if (date !== undefined) {
          const pr = Object.assign(result, { date, objId });
          acc.push(pr);
        }
        return acc;
      }, []);

      preparedData.reduce((acc: any, item: any) => {
        if (item.first_plank_att) {
          item.first_plank_att = new Date(item.first_plank_att * 1000)
            .toISOString()
            .substr(11, 8)
            .slice(3);
        }
        acc.push(item);
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

export const deleteTraining = (id: string) => async () => {
  await axios.delete(`${urls.TRAINING}/${id}${urls.FB_EXTENSION}`)
    .then((resp) => {
      console.log(resp.data);
    }).catch((error) => {
      console.log(error);
    });
};
