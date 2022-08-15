import React from 'react';
import { Modal, Button } from 'react-materialize';


interface ModalWindowProps {
  header: string,
  body: React.ReactNode,
  trigger: React.ReactNode,
  actions: React.ReactNode[],
}

export function ModalWindow({header, body, trigger, actions}: ModalWindowProps) {
  return (
    <Modal
      header={header}
      trigger={trigger}
      actions={actions}
    >
      {body}
    </Modal>
  )
};
