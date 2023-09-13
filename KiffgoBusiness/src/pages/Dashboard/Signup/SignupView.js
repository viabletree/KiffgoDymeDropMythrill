// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './SignupStyles';
import Header from '../../../components/Header';
import { SignupView as SignupViewComponent } from '../../../components';
import { WebHeader, WebFooter } from '../../../components';

export default function SignupView() {
  return (
    <div>
      <WebHeader showSignupBtn={false} showLoginBtn={false} />

      <div className={css(styles.signInContainer)}>
        <SignupViewComponent />
      </div>

      <WebFooter />
    </div>
  );
}
