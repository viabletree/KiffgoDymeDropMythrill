// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'aphrodite';
import ReactGA from 'react-ga';
import styles from './WebHeaderStyles';
import { Images, AppStyles } from '../../../theme';
import UserLogin from '../../UserLogin';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { USER_LOGIN_THEME, ROUTES } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

export default function WebHeaderView(props) {
  const { driverLandingPage, onContactClick } = props;
  return (
    <div>
      <header className={`${css([styles.siteHeader])}`}>
        <div className={`container ${css(styles.container)}`}>
          <div
            className={`row justify-content-stretch ${css([
              styles.headerRow,
              driverLandingPage && styles.blueCircle
            ])}`}
          >
            <div className={`${css([styles.siteLogoWrap])}`}>
              <NavLink to={'/'}>
                <img
                  className={`${css(styles.siteLogoImg)}`}
                  src={Images.logo_green}
                  alt=""
                />
              </NavLink>
            </div>
            {!driverLandingPage && (
              <nav className={`navbar navbar-expand-lg ${css(styles.navBar)}`}>
                <div
                  className={`${css(styles.hamburgerMenu)}`}
                  onClick={props.onHamburgeClick}
                >
                  <span className={`${css(styles.hamburgerIcon)}`}></span>
                  <span className={`${css(styles.hamburgerIcon)}`}></span>
                  <span className={`${css(styles.hamburgerIcon)}`}></span>
                </div>
                <div
                  className={`${css(
                    props.showMobileMenu && styles.collabeMenuWrap
                  )}`}
                  onClick={props.onHamburgeHide}
                ></div>
                <div
                  className={`${css([
                    props.showMobileMenu && styles.showMenu
                  ])} ${css(styles.collabeMenu)} `}
                  id={`navbarNavDropdown`}
                >
                  <span
                    className={`${css(styles.closeMenu)}`}
                    onClick={props.onHamburgeHide}
                  >
                    <img
                      className={`${css(styles.CloseBtn)}`}
                      src={Images.CloseBtn}
                      alt=""
                    />
                  </span>
                  <NavLink to={'/'}>
                    <img
                      className={`${css(styles.ResSiteLogoImg)}`}
                      src={Images.logo_green}
                      alt="Kiffgo"
                    />
                  </NavLink>
                  <ul className={`navbar-nav ${css(styles.NavbarUl)}`}>
                    <li
                      className={`nav-item ${css(
                        styles.NavItem,
                        styles.borderBottom
                      )}`}
                    >
                      {/* <ul> */}
                      <NavDropdown
                        className={`custom-carets ${css(
                          styles.dropdownSelect
                        )}`}
                        title="Product"
                        id="basic-nav-dropdown"
                      >
                        <NavLink
                          className={css(styles.navDropDownAnchorTag)}
                          to={ROUTES.LOGIN}
                        >
                          Delivery Management App
                        </NavLink>

                        <NavLink
                          className={css(styles.navDropDownAnchorTag)}
                          to={ROUTES.DELIVERY_DRIVER_APP}
                        >
                          Delivery Driver Mobile App
                        </NavLink>
                      </NavDropdown>
                      {/* </ul> */}
                    </li>

                    {/* <li
                      className={`nav-item ${css(
                        styles.NavItem,
                        styles.borderBottom
                      )}`}
                    >
                      <NavLink
                        className={css(styles.navAnchorTag)}
                        to="/company"
                      >
                        Company
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${css(
                        styles.NavItem,
                        styles.borderBottom
                      )}`}
                    >
                      <NavLink
                        className={css(styles.navAnchorTag)}
                        to="/support"
                      >
                        Support
                      </NavLink>
                    </li> */}
                    <li className={`nav-item ${css(styles.NavItem)}`}>
                      <NavLink
                        className={css(styles.navAnchorTag)}
                        to={ROUTES.PRICING}
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${css(styles.NavItem)}`}
                      onClick={onContactClick}
                    >
                      <a
                        className={css(
                          styles.navAnchorTag,
                          styles.pintorCursor
                        )}
                        //href={'/#contactss'}
                      >
                        Contact
                      </a>
                    </li>

                    <div className={`${css(styles.loginBtnContainer)}`}>
                      {!props.isLoggedIn && props.showLoginBtn && (
                        <li
                          className={`nav-item ${css(styles.loginBtnMobile)}`}
                        >
                          <NavLink to={ROUTES.LOGIN}>
                            <button className={css(styles.loginBtn)}>
                              Log In
                            </button>
                          </NavLink>
                        </li>
                      )}
                      {!props.isLoggedIn && props.showSignupBtn && (
                        <li
                          className={`nav-item ml-4 ${css(
                            styles.NavItem,
                            styles.loginBtnMobile
                          )}`}
                        >
                          <NavLink
                            // className={css(styles.navAnchorTag)}
                            to={ROUTES.SIGN_UP}
                          >
                            <button
                              className={css(styles.signupBtn)}
                              onClick={() => {
                                // Google analytics
                                ReactGA.event({
                                  category: 'signup',
                                  action: 'click',
                                  label: 'success'
                                });
                              }}
                            >
                              Sign Up
                            </button>
                          </NavLink>
                        </li>
                      )}
                    </div>
                  </ul>
                </div>
                {props.isLoggedIn && props.showSignupBtn && props.showLoginBtn && (
                  <a
                    // className={css(styles.navAnchorTag)}
                    href="/dashboard/delivery-management"
                  >
                    <button className={css(styles.dashboardBtn)}>
                      Dashboard
                    </button>
                    <div className={css(styles.profileBox)}>
                      <div className={css(styles.profielAvatar)}>
                        <FontAwesomeIcon
                          className={css(styles.dashboardIcon)}
                          icon={faTachometerAlt}
                        />
                      </div>
                    </div>
                  </a>
                )}

                {/* <UserLogin theme={USER_LOGIN_THEME.LIGHT} /> */}
              </nav>
            )}
          </div>
        </div>
      </header>
      {props.isChildPage && (
        <section>
          <div className={`${css(AppStyles.container)}`}>
            <div className={`${css(styles.introSec)}`}>
              <h2
                className={`${css([
                  AppStyles.headingOne,
                  AppStyles.whiteColor,
                  styles.titleHeading
                ])}`}
              >
                {props.bannerTitle}
              </h2>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
