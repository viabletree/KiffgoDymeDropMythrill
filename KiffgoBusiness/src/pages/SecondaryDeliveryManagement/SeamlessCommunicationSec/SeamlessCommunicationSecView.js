// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './SeamlessCommunicationSecStyles';
import { AppStyles, Images } from '../../../theme';
import {
  ROUTE_OPTIMIZATION_FEATURES,
  SEAMLESS_COMM_DATA
} from '../../../constants';

import SeamlessComm from './component/SeamlessComm';

export default function SeamlessCommunicationSecView(props) {
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
            id="seamless-communication-and-real-time-eta"
          >
            <div className={`row`}>
              <div className={`col-12`}>
                <p className={`${css(styles.bannerHead)}`}>
                  Seamless communication and real-time ETA.Where’s my delivery?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${css(styles.container, AppStyles.pxy_12)}`}>
          <div className={css(styles.productSecContainer)}>
            <p className={css(styles.productSecPara)}>
              Kiffgo fills in the gaps along the last mile with
              location-triggered communication workflows, live ETA tracking,
              two-way customer communications and real-time feedback.
            </p>
          </div>

          <div className={`row align-items-center`}>
            <div className={`col-md-12 mt-1 mb-4`}>
              <img
                className={`${css(styles.productImg)}`}
                src={Images.notify_delivery}
                alt="Seamless communication and real-time ETA"
              />
            </div>
          </div>
        </div>
      </section>
      <SeamlessComm
        title={'Step 1: schedule stage communication'}
        descTitle={'Scheduled stage communication'}
        description={
          'Plan your delivery or collections days in advance and seamlessly communicate with customers accurate ETA to avoid missed deliveries or collections. Kiffgo notify feature will let you communicate with customers via branded emails, sms or web-based url.'
        }
        backgroundGradient={'transparent'}
        image={Images.scheduled_notification}
        altText={'Advance notification'}
      />
      <SeamlessComm
        title={'Step 2: on the day communication'}
        descTitle={'Delivery/collection day communication'}
        description={
          'Real-time Uber-like driver tracking provides live driver locations with accurate ETAs in a beautiful, branded and responsive web tracking experience. Waiting for delivery, whether a parcel or wholesale business order, with no transparency into status or ETA is no longer acceptable.'
        }
        backgroundGradient={'transparent'}
        image={Images.live_tracking}
        altText={'Live tracking'}
        isImageOnLeft={false}
      />
      <SeamlessComm
        title={'Step 3: At completion communication'}
        descTitle={'Email proof of delivery with pic'}
        description={
          'Customer not at location and delivery left in back garden no problem email them branded proof of delivery with accurate pics. Proof of delivery can include sign-on glass, or photographic evidence of where a parcel or b2b delivery has been securely left.'
        }
        backgroundGradient={'transparent'}
        image={Images.completion_notification}
        altText={'proof of delivery'}
      />
      <SeamlessComm
        title={'Step 4: Feedback is the breakfast of the champion'}
        descTitle={'Get real-time feedback on the delivery experience'}
        description={
          'Get a first-hand account of each customer’s experience after their delivery with Kiffgo’s integrated feedback form.'
        }
        backgroundGradient={'transparent'}
        image={Images.feedback}
        altText={'Real-time feedback'}
        isImageOnLeft={false}
      />
    </>
  );
}
