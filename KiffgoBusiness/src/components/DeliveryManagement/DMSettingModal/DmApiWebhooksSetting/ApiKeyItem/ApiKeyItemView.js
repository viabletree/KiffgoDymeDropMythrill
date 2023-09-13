// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './ApiKeyItemStyles';
import { AppStyles } from '../../../../../theme';

export default function ApiKeyItemView(props) {
  const { selected, item, itemClick } = props;
  const { name, key, id } = item;
  const keyCodded = `${key[0]}${key[1]}****************${key[key.length - 2]}${
    key[key.length - 1]
  }`;
  return (
    <div
      className={css([
        AppStyles.noSelection,
        styles.wrapper,
        selected === id && styles.selected
      ])}
      onClick={() => {
        itemClick(id);
      }}
    >
      <span
        className={css([styles.title, selected === id && styles.titleSelected])}
      >
        {name}
      </span>
      <span className={css(styles.key)}>{keyCodded}</span>
    </div>
  );
}
