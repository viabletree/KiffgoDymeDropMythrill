// @flow
import React from 'react';
import Modal from 'react-responsive-modal';
import { Colors } from '../../theme';

export default function ModalView(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      showCloseIcon={props.showCloseIcon}
      center
      styles={{
        modal: {
          padding: 0,
          width: '800px',
          maxWidth: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0px 0px 28px 14px rgba(255, 255, 255, 0.25)'
        },
        overlay: {
          background: Colors.tintedBlack
        }
      }}
    >
      {props.children}
    </Modal>
  );
}
