// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './UserLoginStyles';
import { USER_LOGIN_THEME } from '../../constants';
import { AppStyles } from '../../theme';
export default function UserLoginView(props) {
  if (!props.isLoggedIn) {
    return null;
  }
  return (
    <div className={css(styles.profileWrap)}>
      {/* <div
        className={css(
          [styles.userName, AppStyles.weight7],
          props.theme === USER_LOGIN_THEME.DARK && styles.darkTheme,
          props.theme === USER_LOGIN_THEME.DARK && styles.userFullName,
          props.theme === USER_LOGIN_THEME.LIGHT && styles.lightTheme
        )} 
      >
        {props.userFullName}
      </div> */}
      <div ref={props.loginRef}>
        <div className={css(styles.profileBox)}>
          <div
            className={css([
              styles.profielAvatar,
              AppStyles.weight8,
              props.theme === USER_LOGIN_THEME.DARK && styles.darkTheme,
              props.theme === USER_LOGIN_THEME.DARK && styles.greenColor,
              props.theme === USER_LOGIN_THEME.LIGHT && styles.lightTheme
            ])}
            onClick={props.onProfileBoxClick}
          >
            <div>{props.userFirstletter}</div>
          </div>
          {props.profileBoxStatus && (
            <ul className={css(styles.dropDrownWrap)}>
              <li
                className={css(styles.dropDrownItem)}
                onClick={props.onLogoutClick}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
