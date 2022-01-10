import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../../../../components';
import { addTraining, getTraining } from '../../actions';
import { TStore } from '../../../../store';
import { clearTraining } from '../../../../slices/training_page';

export const Controls = () => {
  const dispatch = useDispatch();
  const { training, result } = useSelector((state: TStore) => state.trainingReducer);

  const totalPushUps = result
    .reduce(
      (acc, item: any) => acc
          + item.first_push_up_att
          + item.second_push_up_att
          + item.third_push_up_att
          + item.fourth_push_up_att,
      0,
    );

  const totalSquats = result
    .reduce(
      (acc, item: any) => acc
          + item.first_squats_att
          + item.second_squats_att
          + item.third_squats_att
          + item.fourth_squats_att,
      0,
    );

  const totalPlankPrepare = result.reduce((acc, item: any) => acc + (item.first_plank_att !== 0
    ? item.first_plank_att
    : '')
    .split(':').reduce((a: any, t: any) => (60 * a) + +t), 0);
  const totalPlank = new Date(totalPlankPrepare * 1000)
    .toISOString()
    .substr(11, 8);

  const daysOfTraining = result.length;

  const handleSendTraining = async () => {
    await dispatch(addTraining(training));
    await dispatch(clearTraining());
    await dispatch(getTraining());
  };

  return (
    <div className="training-button-result">
      <ButtonComponent onClick={handleSendTraining} label="Add Training" />
      {result.length ? (
        <div className="training-result">
          <span>
            <span className="result-el">Total Days:</span>
            {daysOfTraining}
          </span>
          <span>
            <span className="result-el">Total Push Ups:</span>
            {totalPushUps}
          </span>
          <span>
            <span className="result-el">Total Squats:</span>
            {totalSquats}
          </span>
          <span>
            <span className="result-el">Total Plank:</span>
            {totalPlank}
          </span>
        </div>
      ) : null}
    </div>
  );
};
