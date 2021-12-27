import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './style.scss';

interface selectInterface {
    onChange: any,
    label: string,
    options: any[],
    value: any,
}

export const SelectComponent = (props: selectInterface) => {
  const {
    onChange = () => console.log('onChange'),
    label = '',
    options = [],
    value = '',
  } = props;

  return (
    <Dropdown
      value={value}
      placeholder={label}
      options={options}
      onChange={onChange}
      selection
    />
  );
};
