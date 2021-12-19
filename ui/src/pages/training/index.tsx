import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';
// import { changeTraining } from '../../slices/training';

export const Training = () => {
  // const dispatch = useDispatch();
  const { training } = useSelector((state: TStore) => state.trainingReducer);

  // const handleChangeTraining = () => {
  //   dispatch(changeTraining({ training: 'new training' }));
  // };

  return (
    <div>{training}</div>
  );
};
