import React from 'react';
import { Input } from 'semantic-ui-react';
import './style.scss';

interface inputInterface {
    onChange: any,
    label: string,
    disabled?: boolean,
    value: string,
    type?: string,
}

export const InputComponent = (props: inputInterface) => {
  const {
    onChange = () => console.log('onChange'),
    label = '',
    disabled = false,
    value = '',
    type = 'string',
  } = props;
  return (
    <Input
      size="small"
      value={value}
      type={type}
      placeholder={label}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
