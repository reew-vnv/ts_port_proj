export const prepareTrainingData = (training: { plank: any; squats: any; push_ups: any; }) => {
  const { plank, squats, push_ups } = training;
  const updatedPlank = {
    first_plank_att: plank.first_att.value === '' ? 0 : plank.first_att.value,
  };
  const updatedSquats = {
    first_squats_att: squats.first_att.value === '' ? 0 : squats.first_att.value,
    second_squats_att: squats.second_att.value === '' ? 0 : squats.second_att.value,
    third_squats_att: squats.third_att.value === '' ? 0 : squats.third_att.value,
    fourth_squats_att: squats.fourth_att.value === '' ? 0 : squats.fourth_att.value,
  };
  const updatedPushUps = {
    first_push_up_att: push_ups.first_att.value === '' ? 0 : push_ups.first_att.value,
    second_push_up_att: push_ups.second_att.value === '' ? 0 : push_ups.second_att.value,
    third_push_up_att: push_ups.third_att.value === '' ? 0 : push_ups.third_att.value,
    fourth_push_up_att: push_ups.fourth_att.value === '' ? 0 : push_ups.fourth_att.value,
  };

  return { updatedPlank, updatedSquats, updatedPushUps };
};
