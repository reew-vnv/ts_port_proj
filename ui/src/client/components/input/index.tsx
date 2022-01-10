import React from 'react';
import { Input } from 'semantic-ui-react';
import './style.scss';

interface inputInterface {
    onChange: any,
    label: string,
    value: string | number | {},
    disabled?: boolean,
    type?: string,
    additionalLabel?: any,
}

export const InputComponent = (props: inputInterface) => {
  const {
    onChange = () => console.log('onChange'),
    label = '',
    disabled = false,
    value = '',
    type = 'string',
    additionalLabel = '',
  } = props;

  return (
    <div className="input-style">
      <div>{label}</div>
      <Input
        size="small"
        value={type === 'number' ? value && Math.max(0, Number(value)) : value}
        type={type}
        placeholder={label}
        disabled={disabled}
        label={additionalLabel || null}
        onChange={onChange}
      />
    </div>
  );
};
