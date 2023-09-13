/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React from 'react';
import { css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import styles from './WebHeroSecStyles';
import { Images, AppStyles, Colors } from '../../../theme';
import { ROUTES } from '../../../constants';
import { Button } from '../../../components';
import { PopupButton } from 'react-calendly';

export default function WebHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSection])}`}>
      <div
        className={`container ${css(styles.container)} ${css(
          styles.HeightVhs
        )}`}
      >
        <div className={`row align-items-stretch ${css(styles.mt5)}`}>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
            {/* <h2
              className={`${css([AppStyles.headingTwo, AppStyles.weight6])} `}
            >
              We Can
            </h2> */}
            <h2
              className={`mt-5 mb-3 mb-4 ${css([
                AppStyles.headingOne,
                AppStyles.blackColor,
                styles.lineHeight12,
                styles.mt5
              ])}`}
            >
              What is delivery management?
            </h2>

            <p
              className={`my-3 pr-5 ${css([
                AppStyles.heading16,
                AppStyles.weight5,
                styles.desription
              ])}`}
            >
              Delivery management is the process of transferring deliveries from
              their point of origin to their final destination. Delivery
              management is all about process improvement with the ultimate goal
              of driving down the delivery cost (man hours, vehicles, fuel,
              missed deliveries, errors) while keeping a high level of customer
              service. Delivery operations teams leverage a number of tools and
              strategies for improving their metrics and scaling up their
              operations.
            </p>
            <br />
            <p
              className={`my-1 pr-5 ${css([
                AppStyles.heading16,
                AppStyles.weight6,
                styles.desription
              ])}`}
            >
              3 Key areas of focus for delivery management:
            </p>
            <ul className={`my-3`}>
              <li>
                <a
                  href={
                    ROUTES.SECONDARY_DELIVERY_MANAGEMENT +
                    '#routes-optimization-autonomous-dispatch'
                  }
                  className={`${css(styles.deliverySecLinks)}`}
                >
                  Route optimization & Automous dispatch
                </a>
              </li>
              <li>
                <a
                  href={
                    ROUTES.SECONDARY_DELIVERY_MANAGEMENT +
                    '#seamless-communication-and-real-time-eta'
                  }
                  className={`${css(styles.deliverySecLinks)}`}
                >
                  Seamless communication and real-time ETA
                </a>
              </li>
              <li>
                <a
                  href={
                    ROUTES.SECONDARY_DELIVERY_MANAGEMENT +
                    '#seamless-api-integration'
                  }
                  className={`${css(styles.deliverySecLinks)}`}
                >
                  Seamless API integration with 3rd party software
                </a>
              </li>
            </ul>

            <div className={`${css(styles.buttonContainer)}`}>
              <PopupButton
                className={css(styles.buttonOne)}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                  hideLandingPageDetails: false,
                  primaryColor: '00a2ff',
                  textColor: '4d5055'
                }}
                prefill={null}
                styles={{}}
                text="Request A Demo"
                url="https://calendly.com/kiffgo/power-your-deliver-with-kiffgo"
                utm={null}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
            <img
              className={css(styles.headerGraphics)}
              src={Images.DMS_main_landing_page}
              alt={'Hyconnected Delivery Management'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
