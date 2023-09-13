// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './RouteOptimizationSecStyles';
import { AppStyles, Images } from '../../../theme';
import { ROUTE_OPTIMIZATION_FEATURES } from '../../../constants';

export default function RouteOptimizationSecView(props) {
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
            id="routes-optimization-autonomous-dispatch"
          >
            <div className={`row`}>
              <div className={`col-12`}>
                <p className={`${css(styles.bannerHead)}`}>
                  Route optimization & Automous dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${css(styles.container, AppStyles.pxy_12)}`}>
          <div className={css(styles.productSecContainer)}>
            <p className={css(styles.productSecPara)}>
              Most SMBs perceive Routing and Delivery management software as a
              cost. This is a misleading thought as better delivery leads to
              more sales. Routing software helps you to deliver more, faster and
              cheaper. It will impact revenue by giving opportunity to sell more
              and it wll impact cost by reducing delivery cost.
            </p>
          </div>

          <div className={`row align-items-center`}>
            <div className={`col-md-12 mt-1 mb-4`}>
              <img
                className={`${css(styles.productImg)}`}
                src={Images.optimize_delivery}
                alt="Route optimization & Autonomous dispatch"
              />
            </div>
          </div>
        </div>
      </section>

      <div className={`container ${css(styles.container)}`}>
        <div
          className={css(styles.productSecContainer)}
          id="routes-optimization-autonomous-dispatch"
        >
          <h3 className={css(styles.productSecHead)}>
            10 key features of a robust route optimization and autonomous
            dispatch system
          </h3>
        </div>
      </div>

      <div className={`container mt-3 ${css(styles.container)}`}>
        {/* route optimization feature data */}
        <div className={`row`}>
          {ROUTE_OPTIMIZATION_FEATURES &&
            ROUTE_OPTIMIZATION_FEATURES.map((item, index) => {
              return (
                <div key={index} className={`col-lg-6 col-sm-12 mt-3`}>
                  <div className={`${css(styles.featureBoxWrapper)}`}>
                    <div className={`${css(styles.featureNumberWrapper)}`}>
                      <h4
                        className={`${css(styles.featureNumber)}`}
                        style={{ color: `${item.numberColor}` }}
                      >
                        {item.id}
                      </h4>
                    </div>

                    <div className={`${css(styles.featureContent)}`}>
                      <h6 className={`${css(styles.featureInnerTitle)}`}>
                        {item.title}
                      </h6>
                      <p className={`${css(styles.featureDesc)}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
