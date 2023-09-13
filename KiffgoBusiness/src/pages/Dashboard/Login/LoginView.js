// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './LoginStyles';
import { Images, AppStyles } from '../../../theme';
import { WebHeader, WebFooter, SignInView } from '../../../components';

export default function LoginView() {
  return (
    <div>
      <WebHeader showLoginBtn={false} />
      <div className={css(styles.logInContainer)}>
        <SignInView />
      </div>
      <WebFooter />
    </div >
  );
}
