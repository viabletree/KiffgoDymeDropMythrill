// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './WebhookItemStyles';
import { AppStyles } from '../../../../../theme';

export default function WebhookItemView(props) {
  const { selected, item, itemClick } = props;
  const { event, items } = item;

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.eventHeading)}>
        {items[0].trigger.event_text}
      </div>
      <div className={css([AppStyles.mTop10, AppStyles.mBottom10])}>
        {items.map(hookItem => {
          const { name, webhook, id } = hookItem;
          return (
            <div
              className={css([
                AppStyles.noSelection,
                styles.itemWrapper,
                selected.id === id && styles.selected
              ])}
              onClick={() => {
                itemClick(hookItem);
              }}
            >
              <span
                className={css([
                  styles.title,
                  selected.id === id && styles.titleSelected
                ])}
              >
                {name}
              </span>
              <span className={css(styles.key)}>{webhook}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
