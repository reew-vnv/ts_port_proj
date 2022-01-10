import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputComponent, SelectComponent } from '../../../../components';
import { updateTraining } from '../../../../slices/training_page';
import { TStore } from '../../../../store';

const options = [
  { key: 'push ups', text: 'push ups', value: 'push_ups' },
  { key: 'squats', text: 'squats', value: 'squats' },
  { key: 'plank', text: 'plank', value: 'plank' },
];

export const Fields = () => {
  const [currentTraining, setCurrentTraining] = useState('');
  const { training } = useSelector((state: TStore) => state.trainingReducer);

  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  const handleUpdateCurrentAttempts = (e: any, item: any, flag: string) => {
    const { label } = item;
    const { push_ups, squats, plank } = training;

    if (currentTraining === flag && flag === 'push_ups') {
      return dispatch(updateTraining({
        training: {
          ...training,
          [flag]: {
            ...push_ups,
            [label]: {
              label,
              value: e,
            },
          },
        },
      }));
    } if (currentTraining === flag && flag === 'squats') {
      return dispatch(updateTraining({
        training: {
          ...training,
          [flag]: {
            ...squats,
            [label]: {
              label,
              value: e,
            },
          },
        },
      }));
    } if (currentTraining === flag && flag === 'plank') {
      return dispatch(updateTraining({
        training: {
          ...training,
          [flag]: {
            ...plank,
            [label]: {
              label,
              value: e,
            },
          },
        },
      }));
    }
  };
  // eslint-disable-next-line consistent-return
  const handleChangeTraining = () => {
    switch (currentTraining) {
      case 'push_ups':
        return Object.values(training.push_ups)
          .map((item, key) => (
            <InputComponent
              key={key}
              label={item.label}
              value={item.value}
              type="number"
              onChange={(e:
               { currentTarget: { value: any; };
               }) => handleUpdateCurrentAttempts(e.currentTarget.value, item, 'push_ups')}
            />
          ));
      case 'squats':
        return Object.values(training.squats)
          .map((item, key) => (
            <InputComponent
              key={key}
              label={item.label}
              value={item.value}
              type="number"
              onChange={(e:
               { currentTarget: { value: any; };
               }) => handleUpdateCurrentAttempts(e.currentTarget.value, item, 'squats')}
            />
          ));
      case 'plank':
        return Object.values(training.plank)
          .map((item, key) => (
            <InputComponent
              key={key}
              label={item.label}
              value={item.value}
              additionalLabel="Seconds"
              type="number"
              onChange={(e:
               { currentTarget: { value: any; };
               }) => handleUpdateCurrentAttempts(e.currentTarget.value, item, 'plank')}
            />
          ));
      default:
        console.log('no current training');
    }
  };

  const handleChangeSelect = (item: any, data: any) => {
    setCurrentTraining(data.value);
  };
  return (
    <>
      <SelectComponent
        value={currentTraining}
        label="Choose training"
        options={options}
        onChange={handleChangeSelect}
      />
      <div className="training-parts">
        {handleChangeTraining()}
      </div>
    </>
  );
};
