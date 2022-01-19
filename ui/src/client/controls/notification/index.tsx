import React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

export const Notification = () => {
  const {
    isShowNotification, message, variant,
  } = useSelector((state: TStore) => state.notificationReducer);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <span style={{ display: 'none' }}>
      {isShowNotification
        ? enqueueSnackbar(message, {
          variant,
        })
        : null}
    </span>
  );
};
