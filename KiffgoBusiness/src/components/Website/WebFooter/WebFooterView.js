// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'aphrodite';
import { Images, AppStyles, Colors } from '../../../theme';
import styles from './WebFooterStyles';
import { ROUTES } from '../../../constants';
import LiveChatContainer from '../../LiveChatContainer';

export default function WebFooterView(props) {
  const {
    driverLandingPage,
    onFooterContactClick,
    onFooterTeamSecClick
  } = props;
  return (
    <footer
      className={`pt-5 ${css([
        styles.siteFooter,
        driverLandingPage && styles.mTop0
      ])}`}
    >
      <div className={`${css([AppStyles.pxy_12, styles.footerWrap])}`}>
        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css([
                styles.footerItem
              ])}`}
            >
              <a href={'/'}>
                <img
                  className={`${css(styles.footerLogoImg)}`}
                  src={Images.logo_green}
                  alt=""
                />
              </a>
              <p className={`mt-3 ${css(styles.logoCaption)}`}>
                The operating system <br /> for delivery management
              </p>
            </div>
            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css([
                styles.footerItem
              ])}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Product
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.LOGIN}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Delivery Management App
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.DELIVERY_DRIVER_APP}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Delivery Driver Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css(
                styles.footerItem
              )}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Company
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.PRINCIPLES}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    The 10 Kiffgo’s principles
                  </a>
                </li>
                <li className={`mb-3`} onClick={onFooterTeamSecClick}>
                  <a
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3,
                      styles.cursorPointer
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Team
                  </a>
                </li>
                <li className={`mb-3`}>
                  {/* <a
                    href={'https://blog.kiffgo.com/'}
                    className={`mt-3 ${css(AppStyles.whiteColor,AppStyles.lineHeight1_3)}`}
                  >
                    Blog
                  </a> */}
                  <a
                    href="https://blog.kiffgo.com/"
                    target="_blank"
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Blog
                  </a>
                </li>
                {/* <li className={`mb-3`}>
                  <a
                    href={'/career'}
                    className={`mt-3 ${css(AppStyles.whiteColor,AppStyles.lineHeight1_3)}`}
                  >
                    Careers
                  </a>
                </li> */}
                <li className={`mb-3`} onClick={onFooterContactClick}>
                  <a
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      styles.cursorPointer
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Contact
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={'/terms-of-use'}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Term of Use
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={'/privacy-policy'}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css([
                styles.footerItem
              ])}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Use Cases
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.SECONDARY_DELIVERY_MANAGEMENT}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Delivery Management
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.DELIVERY_ROUTE_PLANNING}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Delivery Route Planning
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.ROUTE_OPTIMIZATION_SOFTWARE}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Route Optimization Software
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.TRUCK_ROUTE_PLANNER}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Truck Route Planner
                  </a>
                </li>
              </ul>
            </div>

            {/* Tips links */}
            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css(
                styles.footerItem
              )}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Tips
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.BLOG}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Best Route Planner
                  </a>
                </li>

                <li className={`mb-3`}>
                  <a
                    href={ROUTES.DELIVERY_EXCELLENCE_BLOG}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Last Mile Delivery Metrics
                  </a>
                </li>
              </ul>
            </div>

            {/* Comparison links */}
            <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css(
                styles.footerItem
              )}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Comparisons
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={ROUTES.ONFLEET}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Kiffgo vs Onfleet
                  </a>
                </li>

                <li className={`mb-3`}>
                  <a
                    href={ROUTES.CIRCUIT}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Kiffgo vs Circuit
                  </a>
                </li>

                <li className={`mb-3`}>
                  <a
                    href={ROUTES.PRO_DELIVERY_MANAGER}
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      AppStyles.lineHeight1_3
                    )}`}
                    style={{ fontSize: 13 }}
                  >
                    Kiffgo vs Pro Delivery Manager
                  </a>
                </li>
                {/*           
                <li className={`mb-3`} onClick={onFooterContactClick}>
                  <a
                    className={`mt-3 ${css(
                      AppStyles.whiteColor,
                      styles.cursorPointer
                    )}`}
                  >
                    Contact
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={'/terms-of-use'}
                    className={`mt-3 ${css(AppStyles.whiteColor,AppStyles.lineHeight1_3)}`}
                  >
                    Term of Use
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={'/privacy-policy'}
                    className={`mt-3 ${css(AppStyles.whiteColor,AppStyles.lineHeight1_3)}`}
                  >
                    Privacy Policy
                  </a>
                </li> */}
              </ul>
            </div>

            {/* <div
              className={`col-lg-2 col-md-6 col-sm-12 ${css(
                styles.footerItem
              )}`}
            >
              <h3
                className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}
              >
                Support
              </h3>
              <ul className={`${css(AppStyles.whiteColor)}`}>
                <li className={`mb-3`}>
                  <a
                    href={'/advices'}
                    className={`${css(AppStyles.whiteColor)}`}
                  >
                    Advices
                  </a>
                </li>
                <li className={`mb-3`}>
                  <a
                    href={'/system-status'}
                    className={`${css(AppStyles.whiteColor)}`}
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div
          className={`mt-3 d-flex align-items-center justify-content-center ${css(
            styles.socialWrap
          )}`}
        >
          <a href="https://www.facebook.com/Kiffgo/" target="_blank">
            <img
              className={`mr-4 ${css(styles.ratingImg)}`}
              src={Images.fb}
              alt=""
            />
          </a>
          <a href="https://twitter.com/kiffgo" target="_blank">
            <img
              className={`mr-4 ${css(styles.ratingImg)}`}
              src={Images.twitter}
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/company/kiffgo/" target="_blank">
            <img
              className={`mr-4 ${css(styles.ratingImg)}`}
              src={Images.linkedIn}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/kiffgo/" target="_blank">
            <img
              className={`mr-4 ${css(styles.ratingImg)}`}
              src={Images.instagram}
              alt=""
            />
          </a>
        </div>
        <div
          className={`text-center ${css([
            styles.footerItem,
            styles.emailhide
          ])}`}
        >
          <h3 className={`mb-3 ${css(AppStyles.peraOne)} ${css(styles.bold)}`}>
            Got a question?
          </h3>
          <ul className={`${css(AppStyles.whiteColor)}`}>
            <li className={`mb-3`}>
              <a
                className={`${css(AppStyles.whiteColor)}`}
                href="email:hello@kiffgo.io"
              >
                hello@kiffgo.io
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`py-3 mt-4 ${css(styles.footerBottom)}`}>
        <div className={`container ${css(styles.container)}`}>
          <div className={css(styles.copyright)}>
            <p
              className={`text-center ${css([
                AppStyles.peraTwo,
                AppStyles.weight4
              ])} ${css(AppStyles.blackColor)}`}
            >
              Made with love around the world
            </p>
          </div>
        </div>
      </div>
      <LiveChatContainer location={window.location} />
    </footer>
  );
}
