import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../../../../components';
import { addTraining, getTraining } from '../../actions';
import { TStore } from '../../../../store';

export const Controls = () => {
  const dispatch = useDispatch();
  const { training, result } = useSelector((state: TStore) => state.trainingReducer);
  console.log({ result });

  const handleSendTraining = async () => {
    await dispatch(addTraining(training));
    await dispatch(getTraining());
  };
  return (
    <div className="training-button">
      <ButtonComponent onClick={handleSendTraining} label="Add Training" />
    </div>
  );
};
