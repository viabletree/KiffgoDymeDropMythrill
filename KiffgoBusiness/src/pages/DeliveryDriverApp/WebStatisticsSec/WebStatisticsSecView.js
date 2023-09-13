// @flow
import React from 'react';
import { css } from 'aphrodite';
import CountUp from 'react-countup';
import styles from './WebStatisticsSecStyles';
import { Images, AppStyles, Colors } from '../../../theme';

export default function WebStatisticsSecView(props) {
  return (
    <section
      className={`container ${css([styles.heroSection, AppStyles.pxy_12])}`}
    >
      <div className={`${css(styles.counterContainer)}`}>
        <div
          className={css(
            AppStyles.flexColumn,
            AppStyles.alignItemsCenter,
            styles.counterColor
          )}
        >
          <CountUp end={500} suffix="+" separator=" " />
          <span className={css(styles.lowerText)}>Dispatchers</span>
        </div>

        <div
          className={css(
            AppStyles.flexColumn,
            AppStyles.alignItemsCenter,
            styles.counterColor
          )}
        >
          <CountUp end={10000000} suffix="+" separator=" " />
          <span className={css(styles.lowerText)}>Annual deliveries</span>
        </div>

        <div
          className={css(
            AppStyles.flexColumn,
            AppStyles.alignItemsCenter,
            styles.counterColor
          )}
        >
          <CountUp end={4000} suffix="+" separator=" " />
          <span className={css(styles.lowerText)}>Drivers</span>
        </div>
      </div>
    </section>
  );
}
