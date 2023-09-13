// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './TextFieldStyles';
import { AppStyles } from '../../theme';

export default function TextFieldView(props) {
  return (
    <div className={css([props.icon && styles.withIcon])}>
      {props.label && (
        <label className={css(styles.labelStyle)}>{props.label}:</label>
      )}
      {props.icon && (
        <img alt="Icon" className={css(styles.icon)} src={props.icon} />
      )}
      {!props.isTextArea && (
        <input
          {...props}
          type={props.type || 'text'}
          className={css([
            styles.inputStyle,
            props.icon && styles.inputWithIcon,
            props.styles && props.styles
          ])}
          autoComplete="off"
        />
      )}
      {props.isTextArea && (
        <textarea
          {...props}
          rows="4"
          cols="30"
          className={css([
            styles.textAreaStyle,
            styles.inputStyle,
            props.styles && props.styles
          ])}
        />
      )}
      {props.error && (
        <p className={`${css(AppStyles.formError)}`}>{props.error}</p>
      )}
    </div>
  );
}
