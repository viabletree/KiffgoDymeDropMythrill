// @flow
import React from 'react';
import { css } from 'aphrodite';
import ReactGA from 'react-ga';
import { AppStyles } from '../../../theme';
import { Button } from '../../../components';
import styles from './WebWhyKiffgoStyles';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
export default function WebWhyKiffgoView(props) {
  return (
    <section
      className={`py-5 mt-5 ${css([
        styles.marginBottom,
        styles.WhyKiffgoSec,
        AppStyles.pxy_12
      ])}`}
    >
      <div className={`container ${css([styles.container])}`}>
        <div className={css(styles.ctaBannerContainer)}>
          <p
            className={`my-3 ${css([
              styles.ctaBannerText,
              AppStyles.whiteColor,
              AppStyles.weight7,
              AppStyles.lineHeight1_5
            ])}`}
          >
            Discover now how Kiffgo’s powerful
            <span className={css(styles.ctaBannerTextSpan)}>
              {' '}
              Hyperconnected Delivery Platform can help
            </span>
          </p>
        </div>
        <div className={css(styles.meetingButtonContainer)}>
          <a href={ROUTES.HOME + '#contactForm'}>
            <button type="button" className={`${css(styles.sendBtn)}`}>
              Start Trial
            </button>
          </a>

          {/* <Button
            title="Want to book a meeting"
            isLoading={props.isLoading}
            className={css(styles.sendBtn)}
            onClick={props.scrollToDemo}
            ripple={false}
          /> */}
        </div>
      </div>
    </section>
  );
}
