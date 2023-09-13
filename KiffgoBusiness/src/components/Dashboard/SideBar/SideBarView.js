// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'aphrodite';
import { Images, AppStyles } from '../../../theme';
import styles from './SideBarStyles';

export default function SideBarView(props) {
  return (
    <div className={css(styles.sideBarWrap)}>
      <div className={css(styles.sideBar)} ref={props.userLoginRef}>
        {/* <NavLink to={ROUTES.HOME}> */}
        <div className={`${css(styles.imgWrap)}`}>
          <img
            src={Images.logo_green}
            alt="logo"
            className={css(styles.logoImage)}
          />
        </div>
        {/* </NavLink> */}
        <div className={css(styles.coloumnWrap)}>
          {props.sideBarItem.map(item => {
            if (!props.isKiffgoAdmin && item.onlyForAdmin) {
              return null;
            }
            return (
              <NavLink
                key={item.id}
                to={item.url}
                activeClassName="active_menu"
                className={css(styles.decorationNone)}
              >
                <div className={css(styles.sideBarColumn)} data-for="sideBar">
                  <img
                    src={item.itemImage}
                    alt={item.title}
                    className={css(styles.linkImage)}
                  />
                  <p className={`d-block ${css(styles.navText)}`}>
                    {item.title}
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className={css([styles.userProfile])}>
          <div
            className={css([styles.profileAvatar, AppStyles.weight7])}
            onClick={props.onProfileBoxClick}
          >
            {props.userFirstletter}
          </div>
          {props.profileBoxStatus && (
            <ul className={css(styles.profileArea)}>
              <li
                className={css(styles.profileItem)}
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
