// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'aphrodite';
import ReactGA from 'react-ga';
import styles from './TrialHeaderStyles';
import { Images, AppStyles } from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function TrialHeaderView(props) {
  const { driverLandingPage } = props;
  return (
    <div>
      <header className={`${css([styles.siteHeader])}`}>
        <div className={` ${css(styles.container)}`}>
          <div className={` ${css([styles.headerRow])}`}>
            <div className={`${css([styles.siteLogoWrap])}`}>
              <NavLink to={'/'}>
                <img
                  className={`${css(styles.siteLogoImg)}`}
                  src={Images.logo_green}
                  alt=""
                />
              </NavLink>
            </div>
            <div className={css(AppStyles.flexBox, AppStyles.alignItemsCenter)}>
              <a
                // className={css(styles.navAnchorTag)}
                href="tel:020 8050 2806"
              >
                <button
                  className={css(styles.dashboardBtn)}
                  onClick={() =>
                    ReactGA.event({
                      category: 'callclick',
                      action: 'click',
                      label: 'success'
                    })
                  }
                >
                  {'Call  020 8050 2806'}
                </button>
                <div className={css(styles.profileBox)}>
                  <div className={css(styles.profielAvatar)}>
                    <FontAwesomeIcon
                      className={css(styles.dashboardIcon)}
                      icon={faPhone}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
