import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputComponent } from '../../../../components';
import { updateAuth } from '../../../../slices/auth_page';
import { TStore } from '../../../../store';

export const Logging = () => {
  const dispatch = useDispatch();
  const { logging_data } = useSelector((state: TStore) => state.authReducer);

  const handleChangeEmail = (e: any) => {
    dispatch(updateAuth({
      logging_data: {
        ...logging_data,
        email: e,
      },
    }));
  };
  const handleChangePassword = (e: any) => {
    dispatch(updateAuth({
      logging_data: {
        ...logging_data,
        password: e,
      },
    }));
  };
  return (
    <>
      <InputComponent
        onChange={(e:
       { currentTarget: { value: any; };
       }) => handleChangeEmail(e.currentTarget.value)}
        label="E-mail"
        value={logging_data.email}
      />
      <InputComponent
        onChange={(e:
       { currentTarget: { value: any; };
       }) => handleChangePassword(e.currentTarget.value)}
        type="password"
        label="Password"
        value={logging_data.password}
      />
    </>
  );
};
