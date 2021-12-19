import { connect } from 'react-redux';
import React from 'react';

const TrainingPage = () => (
  <div>TRAINING</div>
);

export const Training = connect((store) => {
  console.log({ store });
})(TrainingPage);
