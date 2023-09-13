// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMLoaderStyles';
import { AppStyles, Colors, Images } from '../../../theme';
import { BeatLoader } from 'react-spinners';

export default function DMLoaderView(props) {
  return (
    <div>
      {props.loading && (
        <div
          className={css([
            styles.loaderWrapper,
            props.backgroundColor === 'white'
              ? AppStyles.backgroundWhite
              : AppStyles.backgroundBlackTransparent
          ])}
        >
          <img
            src={Images.kiffgoLogo}
            alt="kiffgoLogo"
            className={css(styles.logoLoader)}
          />
        </div>
      )}
    </div>
  );
}
