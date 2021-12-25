import React from 'react';
import { Input } from 'semantic-ui-react';
import './style.scss';

interface inputInterface {
    onChange: any,
    label: string,
    disabled?: boolean,
    value: string | number | {},
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
    <div className="input-style">
      <div>{label}</div>
      <Input
        size="small"
        value={value}
        type={type}
        placeholder={label}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
