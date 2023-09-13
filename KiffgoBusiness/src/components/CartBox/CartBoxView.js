// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './CartBoxStyles';
import { AppStyles } from '../../theme';

export default function CartBoxView(props) {
  return (
    <div
      className={`row mx-0 px-4 py-4 mb-2  ${css([
        AppStyles.boxWrapper,
        AppStyles.bgWhite
      ])} ${props.className}`}
    >
      {props.children}
    </div>
  );
}
