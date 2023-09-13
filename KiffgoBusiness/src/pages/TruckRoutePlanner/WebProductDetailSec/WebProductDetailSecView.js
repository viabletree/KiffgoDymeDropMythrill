// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './WebProductDetailSecStyles';
import { AppStyles, Images } from '../../../theme';

export default function WebProductDetailSecView(props) {
  return (
    <section
      className={`${css([
        AppStyles.overflowHidden,
        AppStyles.pxy_12,
        styles.webProductContainer
      ])}`}
    >
      <div className={`container ${css(styles.container)}`}>
        <div className={css(styles.productSecContainer)}>
          <h3 className={css(styles.productSecHead)}>
            A SaaS for delivery management
          </h3>
          <p className={css(styles.productSecPara)}>
            Kiffgo provides a full suite of front and backend applications to
            help leading enterprises maximize their capacity, efficiency, and
            speed.
          </p>
        </div>
        <div
          className={`row align-items-center justify-content-between ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              Easy to use dispatch management
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              Provides operational teams with an interface for scheduling driver
              pick-ups and deliveries. With complete, end-to-end visibility of
              the delivery business as a whole, This module saves critical time
              identifying who a task should be assigned to.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.easyToUse}
              alt="Optimize Route"
            />
          </div>
        </div>
        <div
          className={`row align-items-center justify-content-between   flex-row-reverse ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              Seamless real-time tracking
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              To provide a high quality service, companies must show customers
              where their delivery is at all times and enable customer
              notifications en route. Providing instant access to real-time
              mapping of driver location is critical to providing a great
              customer experience.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.seamlessRealTime}
              alt="Delivery Driver Tracking"
            />
          </div>
        </div>

        <div
          className={`row align-items-center justify-content-between ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              Intuitive driver app
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              Today’s drivers need quick access to all of a delivery’s
              information—customer data, order information, routing data and
              more. More importantly, they need mobile access to all the tools
              necessary to complete the transaction—payment applications,
              delivery verification, tipping payments, rating tools and more.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.intuitiveDriver}
              alt="Delivery Driver App"
            />
          </div>
        </div>

        <div
          className={`row align-items-center justify-content-between   flex-row-reverse ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              Simple Integration options
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              Integration options are critical to supporting both enterprise
              systems and essential ecosystem products systems and branded
              mobile apps. Provide seamless integration options with IT.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.simpleIntegration}
              alt="Easy Integration With Unleashed And Other Software Via Api"
            />
          </div>
        </div>

        <div
          className={`row align-items-center justify-content-between ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              In-app team chat
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              Communicate and track Dispatch/Driver chats in the app. Have your
              entire team inside a private, secure chat platform.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImgOnWeb)}`}
              src={Images.inAppTeamChat}
              alt="Connect Driver, Dispatcher And Customer With Real-Time Chat"
            />
            <img
              className={`${css(styles.productImgOnMobile)}`}
              src={Images.inAppTeamChatMobile}
              alt="Connect Driver, Dispatcher And Customer With Real-Time Chat"
            />
          </div>
        </div>

        <div
          className={`row align-items-center justify-content-between   flex-row-reverse ${css(
            AppStyles.colReverse
          )}`}
        >
          <div className={`col-md-6 my-4 px-5 ${css(styles.serviceText)}`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.heading30,
                AppStyles.weight7
              ])}`}
            >
              Proactive Customer notifications
            </h2>
            <p className={`${css([AppStyles.heading16, styles.productPara])}`}>
              It is best to give customers the flexibility they need to get
              their messages via any device or communication channel, and
              include in-app messaging to let customers and drivers communicate
              directly with each other to eliminate any potential problems.
            </p>
          </div>
          <div className={`col-md-6 my-4`}>
            <img
              className={`${css(styles.productImg)}`}
              src={Images.proactiveCustomer}
              alt="Delivery Notification"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
