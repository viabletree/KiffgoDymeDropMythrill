// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './SeamlessIntSecStyles';
import { AppStyles, Images } from '../../../theme';
import { ROUTE_OPTIMIZATION_FEATURES } from '../../../constants';

export default function SeamlessIntSecView(props) {
  return (
    <>
      <section
        className={`${css([
          AppStyles.overflowHidden,
          styles.webProductContainer
        ])}`}
      >
        <div className={`${css([styles.heroSection])}`}>
          <div
            className={`container mb-0 ${css(styles.containerTwo)}`}
            id="seamless-api-integration"
          >
            <div className={`row`}>
              <div className={`col-12`}>
                <p className={`${css(styles.bannerHead)}`}>
                  Seamless API integration with 3rd party software and order
                  management system
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${css(styles.container, AppStyles.pxy_12)}`}>
          <div className={css(styles.productSecContainer)}>
            <p className={css(styles.productSecPara)}>
              Kiffgo’s on-demand delivery solution can be used as a standalone
              or fit on top of pre-existing infrastructure,enriching or
              replacing its capabilities and enabling more streamlined delivery
              operations, while providing customers with a better delivery
              experience.
            </p>
          </div>

          <div className={`row align-items-center`}>
            <div className={`col-md-12 mt-1 mb-4`}>
              <img
                className={`${css(styles.productImg)}`}
                src={Images.api_delivery}
                alt="Seamless API integration"
              />
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-12 my-4 px-5 ${css(styles.serviceText)}`}>
              <h2
                className={`mb-3 ${css([
                  AppStyles.heading20,
                  AppStyles.weight7,
                  AppStyles.lineHeight1_5
                ])}`}
              >
                Easy Implementation
              </h2>
              <p
                className={`${css([AppStyles.fontSize14, styles.productPara])}`}
              >
                Kiffgo’s cloud-based software has a simple and easy-to-grasp
                interface which allows users and organisations shorten the
                learning curve to 1 hour or less. Some systems require costly,
                time-consuming rollouts with high failure rates, but Kiffgo can
                be integrated painlessly with easy-to-use APIs whether you have
                one distribution center or a dozen. Most integrations are
                already built in, and in the rare case we don’t support
                something in your ecosystem, we’ll work with you until we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
