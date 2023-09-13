// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './VideoSecStyles';
import { AppStyles, Images } from '../../../theme';
import ReactPlayer from 'react-player/lazy';
import { STORE_URLS } from '../../../constants';

export default function VideoSecView(props) {
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
            Watch how Kiffgo empowers drivers and increases their productivity
          </h3>
        </div>

        <div className={`row align-items-center`}>
          <div className={`col-md-12 mt-1 mb-4`}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=06g39-1ZQkA"
              controls={true}
              width="100%"
              height="calc(100vh - 360px)"
            />
          </div>
        </div>

        <p className={`${css(styles.productPara)}`}>
          Kiffgo driver app is an integral part of Kiffgo — routing and delivery
          management platform providing advanced route optimization, driver
          scheduling & dispatching, and customer communication — All in one
          tool. To use the kiffgo driver app a driver needs to be added on
          Kiffgo - platform by the company he is working for. Do not attempt to
          download the driver app directly, you will receive a download link
          once added on the system.
        </p>

        <div className={`${css(styles.storeIconsWrapper)}`}>
          {/* app store icon */}
          <a
            href={STORE_URLS.APP_STORE}
            target="_blank"
            className={`${css(styles.responsiveMargin)}`}
          >
            <img
              src={Images.appStore}
              alt="App Store"
              className={`${css(styles.storeIcon)}`}
            />
          </a>
          {/* google store icon */}
          <a href={STORE_URLS.GOOGLE_PLAY_STORE} target="_blank">
            <img
              src={Images.googlePlay}
              alt="Google Play Store"
              className={`${css(styles.storeIcon)}`}
            />
          </a>
        </div>
      </div>

      {/* product two details */}
    </section>
  );
}
