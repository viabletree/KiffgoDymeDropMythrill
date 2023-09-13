// @flow
import React from 'react';
import { css } from 'aphrodite';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DMMigrationStyles';
import { Images } from '../../../theme';

export default function DMFileUploaderView(props) {
  const { requestMigration } = props;
  return (
    <div onClick={requestMigration}>
      <img src={Images.fetchDataFromApi} className={css(styles.toolImg)} />
    </div>
  );
}
