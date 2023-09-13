// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './WebDemandSecStyles';
import { Images, AppStyles } from '../../../theme';

export default function WebDemandSecView(props) {
  return (
    <section
      className={`py-5 ${css([styles.demandSection, AppStyles.pxy_12])}`}
    >
      <div className={`container ${css(AppStyles.container)}`}>
        <div className={`row`}>
          <div className={`col-lg-4 col-md-12`}>
            <img
              className={` ${css(AppStyles.serviceImg)}`}
              src={Images.services1}
              alt=""
            />
            <h2
              className={`mt-5 mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight8
              ])}`}
            >
              On Demand
            </h2>
            <p className={`${css(AppStyles.peraOne)}`}>
              Book a courier in minutes and deliver your items within an hour or
              two. Perfect for people who just can’t wait to get their hands on
              your product.
            </p>
          </div>
          <div className={`col-lg-4 col-md-12`}>
            <img
              className={` ${css(AppStyles.serviceImg)}`}
              src={Images.samedaySvg}
              alt=""
            />
            <h2
              className={`mt-5 mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight8
              ])}`}
            >
              Same Day
            </h2>
            <p className={`${css(AppStyles.peraOne)}`}>
              Deliver later on the same day an order is placed or you customer
              can choose the time.
            </p>
          </div>
          <div className={`col-lg-4 col-md-12`}>
            <img
              className={` ${css(AppStyles.serviceImg)}`}
              src={Images.customise}
              alt=""
            />
            <h2
              className={`mt-5 mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight8
              ])}`}
            >
              Customise
            </h2>
            <p className={`${css(AppStyles.peraOne)}`}>
              Choose 1 man or 2 men delivery Schedule deliveries or set up
              recurring orders ahead of time, and we take care of everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
