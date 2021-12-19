import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TStore } from '../../store';
import { updateTraining } from '../../slices/training';

import './style.scss';

export const Training = () => {
  const dispatch = useDispatch();
  const [train, setTrain] = useState('');
  const { training } = useSelector((state: TStore) => state.trainingReducer);

  const handleChangeTraining = () => {
    dispatch(updateTraining({ training: train }));
  };

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTrain(e.currentTarget.value);
  };

  console.log({ training, train });

  return (
    <div className="training">
      {training}
      <input type="input" onChange={handleChangeInput} />
      <button onClick={handleChangeTraining} type="button">
        Change Training to New Training
      </button>
    </div>
  );
};
