import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TStore } from '../../store';
import { updateTraining } from '../../slices/training';
import { ButtonComponent, SelectComponent } from '../../components';

import './style.scss';

const options = [
  { key: 'push ups', text: 'push ups', value: 'push_ups' },
  { key: 'squats', text: 'squats', value: 'squats' },
  { key: 'plank', text: 'plank', value: 'plank' },
];

export const Training = () => {
  const dispatch = useDispatch();
  const [currentTraining, setCurrentTraining] = useState('');
  const { training } = useSelector((state: TStore) => state.trainingReducer);
  // dispatch(updateTraining({ training: currentTraining }));

  // eslint-disable-next-line consistent-return
  const handleChangeTraining = () => {
    if (currentTraining === 'push_ups') {
      return 'PUSHUPS';
    } if (currentTraining === 'squats') {
      return 'SQUATS';
    } if (currentTraining === 'plank') {
      return 'PLANK';
    }
  };

  const handleChangeSelect = (item: any, data: any) => {
    setCurrentTraining(data.value);
  };

  return (
    <div className="training">
      <SelectComponent
        value={currentTraining}
        label="Choose training"
        options={options}
        onChange={handleChangeSelect}
      />
      <div className="training-parts">
        {handleChangeTraining()}
        <ButtonComponent onClick={handleChangeTraining} label="Change Training to New Training" />
      </div>
    </div>
  );
};
