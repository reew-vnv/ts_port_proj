import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TStore } from '../../store';
import { updateTraining } from '../../slices/training';
import { ButtonComponent, InputComponent } from '../../components';

import './style.scss';

export const Training = () => {
  const dispatch = useDispatch();
  const [train, setTrain] = useState('');
  const { training } = useSelector((state: TStore) => state.trainingReducer);

  const handleChangeTraining = () => {
    dispatch(updateTraining({ training: train }));
    setTrain('');
  };

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTrain(e.currentTarget.value);
  };

  return (
    <div className="training">
      {training}
      <InputComponent label="training" value={train} onChange={handleChangeInput} />
      <ButtonComponent onClick={handleChangeTraining} label="Change Training to New Training" />
    </div>
  );
};
