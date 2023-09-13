// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DispatcherInputStyles';
import { AppStyles } from '../../../../../theme';

export default function DispatcherInputView(props) {
  const { selected, item, itemClick } = props;
  const { firstName, id, lastName, email } = item;

  return (
    <div
      className={css([
        styles.item,
        selected.id === item.id && styles.selectedItem
      ])}
      onClick={() => {
        itemClick(id);
      }}
    >
      <div className={css(styles.title)}>
        <p className={`${css([styles.para1])}`}>{firstName + ' ' + lastName}</p>
        <p className={`${css([styles.rightItem])}`}>{email}</p>
      </div>
    </div>
  );
}
