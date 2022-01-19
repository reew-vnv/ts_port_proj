import React from 'react';
import { Modal } from 'semantic-ui-react';
import './style.scss';

interface modalInterface {
    title: string,
    content: any,
    actions: any,
    open: boolean
}

export const ModalComponent = (props: modalInterface) => {
  const {
    title = '',
    actions,
    content,
    open = false,
  } = props;

  const { onSubmit, onClose } = actions;
  const { main } = content;

  return (
    <Modal dimmer="blurring" open={open}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{main}</Modal.Content>
      <Modal.Actions>
        {onClose}
        {onSubmit}
      </Modal.Actions>
    </Modal>
  );
};
