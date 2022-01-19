import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent, InputComponent, ModalComponent } from '../../../../components';
import { registration } from '../../actions';
import { clearRegistration, updateAuth } from '../../../../slices/auth_page';
import { TStore } from '../../../../store';

export const Registration = () => {
  const dispatch = useDispatch();
  const {
    registration_data, isOpenRegistration,
  } = useSelector((state: TStore) => state.authReducer);

  const handleChangeName = (e: any) => {
    dispatch(updateAuth({
      registration_data: {
        ...registration_data,
        name: e,
      },
    }));
  };
  const handleChangeEmail = (e: any) => {
    dispatch(updateAuth({
      registration_data: {
        ...registration_data,
        email: e,
      },
    }));
  };
  const handleChangePassword = (e: any) => {
    dispatch(updateAuth({
      registration_data: {
        ...registration_data,
        password: e,
      },
    }));
  };

  const content = {
    main:
  <>
    <InputComponent
      onChange={(e:
         { currentTarget: { value: any; };
         }) => handleChangeName(e.currentTarget.value)}
      label="Name"
      value={registration_data.name}
    />
    <InputComponent
      onChange={(e:
         { currentTarget: { value: any; };
         }) => handleChangeEmail(e.currentTarget.value)}
      label="E-mail"
      value={registration_data.email}
    />
    <InputComponent
      onChange={(e:
       { currentTarget: { value: any; };
       }) => handleChangePassword(e.currentTarget.value)}
      type="password"
      label="Password"
      value={registration_data.password}
    />
  </>,
  };

  const handleClose = () => {
    dispatch(updateAuth({
      isOpenRegistration: false,
    }));
    dispatch(clearRegistration());
  };

  const handleRegister = () => {
    dispatch(registration(registration_data));
    dispatch(clearRegistration());
    handleClose();
  };

  const actions = {
    onSubmit: <ButtonComponent onClick={handleRegister} label="Register" />,
    onClose: <ButtonComponent onClick={handleClose} label="Close" />,
  };
  return (
    <ModalComponent title="Registration" content={content} actions={actions} open={isOpenRegistration} />
  );
};
