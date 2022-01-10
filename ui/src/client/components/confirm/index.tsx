import React from 'react';
import { Confirm } from 'semantic-ui-react';

interface confirmInterface {
    onConfirm: any,
    onCancel: any,
    open: boolean,
    content: string
}

export const ConfirmComponent = (props: confirmInterface) => {
  const {
    onConfirm, onCancel, open, content,
  } = props;
  return (
    <Confirm
      open={open}
      content={content}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};
