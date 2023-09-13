// @flow
import React from 'react';
import { css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import styles from './HeaderStyles';
import { Images, AppStyles } from '../../theme';
import UserLogin from '../UserLogin';

export default function HeaderView(props) {
  return (
    <div className={css(styles.fullContainer)}>
      <div className={css(styles.leftWrapper)}>
        <NavLink to={'/'}>
          <img
            src={Images.vanLogo}
            alt="logo"
            className={css(styles.logoImage)}
          />
          <img
            src={Images.logo}
            alt="logo"
            className={css(styles.logoImageText)}
          />
        </NavLink>
        <span className={css(styles.businessText)}>| Business</span>
      </div>
      <div className={css(styles.rightWraper)}>
        {!props.isLoggedIn && (
          <>
            {props.showLoginBtn && (
              <button
                type="button"
                className={css([AppStyles.whiteButton1, AppStyles.mRight10])}
                onClick={props.onSignInClick}
              >
                Login
              </button>
            )}
            {props.showSignupBtn && (
              <button
                type="button"
                className={css(AppStyles.whiteButton1)}
                onClick={props.onSignUpClick}
              >
                Sign up
              </button>
            )}
          </>
        )}
        {props.showUserProfile && <UserLogin />}
      </div>
    </div>
  );
}
