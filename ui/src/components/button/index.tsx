import React from 'react';
import { Button } from 'semantic-ui-react';

interface buttonInterface {
    onClick: any,
    label: string,
    disabled?: boolean,
}

export const ButtonComponent = (props: buttonInterface) => {
  const {
    label = '',
    onClick = () => console.log('onClick'),
    disabled = false,
  } = props;
  return (
    <Button onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
