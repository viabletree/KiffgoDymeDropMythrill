// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './WebProductDetailSecStyles';
import { AppStyles, Images } from '../../../theme';
import { Button } from '../../../components';

export default function WebProductDetailSecView(props) {
  return (
    <section
      className={`${css([
        AppStyles.overflowHidden,
        AppStyles.pxy_12,
        styles.webProductContainer
      ])}`}
    >
      {/* product one details */}
      <div className={`container ${css(styles.container)}`}>
        <div className={css(styles.productSecContainer)}>
          <h3 className={css(styles.productSecHead)}>
            To keep you and your drivers on the same page, our driver mobile app
            offers a number of features
          </h3>
        </div>

        <div className={`row align-items-center`}>
          <div className={`col-md-12 mt-1 mb-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.driver_app_part1}
              alt="Route Planner"
            />
          </div>
          <div className={`row`}>
            <div className={`col-md-1`}></div>
            <div
              className={`col-md-5 col-sm-12 my-4 px-5 ${css(
                styles.serviceText
              )}`}
            >
              <h2
                className={`mb-3 ${css([
                  AppStyles.heading20,
                  AppStyles.weight7,
                  AppStyles.lineHeight1_5
                ])}`}
              >
                Optimize route and dispatch based on drivers working schedule
              </h2>
              <p
                className={`${css([AppStyles.fontSize14, styles.productPara])}`}
              >
                Auto-assign tasks to drivers based on their working schedule,
                vehicle capacity. Make their daily working day easy and
                productive No expensive hardware needed. Start tracking with any
                iPhone or Android phone.
              </p>
            </div>
            <div
              className={`col-md-5 col-sm-12 my-4 px-5 ${css(
                styles.serviceText
              )}`}
            >
              <h2
                className={`mb-3 ${css([
                  AppStyles.heading20,
                  AppStyles.weight7,
                  AppStyles.lineHeight1_5
                ])}`}
              >
                Seamlessly let the driver complete a pickup, a delivery or a
                task in app
              </h2>
              <p
                className={`${css([AppStyles.fontSize14, styles.productPara])}`}
              >
                Photo and video capture for proof of delivery (or attempted
                delivery) Delivery instructions that can be pushed to the driver
                in real time
              </p>
            </div>
            <div className={`col-md-1`}></div>
          </div>
        </div>
      </div>

      {/* product two details */}
      <div className={`container mt-5 ${css(styles.container)}`}>
        <div className={css(styles.productSecContainer)}>
          <h3 className={css(styles.productSecHead)}>
            No internet no productivity loss the driver can complete with
            offline mode
          </h3>
        </div>

        <div className={`row align-items-center`}>
          <div className={`col-md-12 mt-1 mb-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.driver_app_part2}
              alt="Last Mile Delivery Excellence"
            />
          </div>
          <div className={`row`}>
            <div className={`col-md-1`}></div>
            <div
              className={`col-md-5 col-sm-12 my-4 px-5 ${css(
                styles.serviceText
              )}`}
            >
              <h2
                className={`mb-3 ${css([
                  AppStyles.heading20,
                  AppStyles.weight7,
                  AppStyles.lineHeight1_5
                ])}`}
              >
                Tracking without GPS devices
              </h2>
              <p
                className={`${css([AppStyles.fontSize14, styles.productPara])}`}
              >
                Now, fleet operators no need to rely on GPS tracking devices for
                basic tracking, convert your driver mobile app into tracking
                device with no installation.
              </p>
            </div>
            <div
              className={`col-md-5 col-sm-12 my-4 px-5 ${css(
                styles.serviceText
              )}`}
            >
              <h2
                className={`mb-3 ${css([
                  AppStyles.heading20,
                  AppStyles.weight7,
                  AppStyles.lineHeight1_5
                ])}`}
              >
                Proof of delivery{' '}
              </h2>
              <p
                className={`${css([AppStyles.fontSize14, styles.productPara])}`}
              >
                Enforce completion requirements through in-app collection of
                photos, signatures, barcodes and notes.
              </p>
            </div>
            <div className={`col-md-1`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
