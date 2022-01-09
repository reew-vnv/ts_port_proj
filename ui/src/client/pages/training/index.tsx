import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTraining } from './actions';
import { Controls, Fields, Journal } from './components';

import './style.scss';

export const Training = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTraining());
  }, []);

  return (
    <div className="training">
      <Fields />
      <Controls />
      <Journal />
    </div>
  );
};
