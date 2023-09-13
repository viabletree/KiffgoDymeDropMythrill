// @flow
import React from 'react';
import { ForgotPasswordModal } from '../../components';

export default function LayoutWrapperView(props) {
  return (
    <>
      {props.children}
      <ForgotPasswordModal />
    </>
  );
}
