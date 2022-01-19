import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../../components';
import { TStore } from '../../store';
import { clearLogging, updateAuth } from '../../slices/auth_page';
import { logging } from './actions';
import { Registration, Logging } from './parts';
import './style.scss';

export const Auth = () => {
  const {
    logging_data, current_user, isLogging,
  } = useSelector((state: TStore) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current_user.uid !== '') {
      localStorage.setItem('current_user', JSON.stringify(current_user));
      localStorage.setItem('isLogging', JSON.stringify(isLogging));
    }
  }, [current_user]);

  const handleLogging = () => {
    dispatch(logging(logging_data));
    dispatch(clearLogging());
  };

  const handleOpenRegistration = () => {
    dispatch(updateAuth({
      isOpenRegistration: true,
    }));
  };

  return (
    <div className="auth_page">
      <span className="auth_header">Authentication</span>
      <Registration />
      <Logging />
      <div className="auth_button">
        <ButtonComponent onClick={handleOpenRegistration} label="Registration" />
        <ButtonComponent onClick={handleLogging} label="Login" />
      </div>
    </div>
  );
};
