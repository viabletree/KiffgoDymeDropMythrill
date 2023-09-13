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
        <div className={`row align-items-center ${css(styles.mt5)}`}>
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
              Top rated Route Optimization software
            </h2>

            <p
              className={`my-3 pr-5 ${css([
                AppStyles.heading16,
                AppStyles.weight5,
                styles.desription
              ])}`}
            >
              Kiffgo is an all-in-one route optimization and scheduling
              software. Smart route planning, real-time tracking of drivers and
              customer communication.
            </p>
            <p
              className={`my-3 pr-5 ${css([
                AppStyles.heading16,
                AppStyles.weight5,
                styles.desription
              ])}`}
            >
              Optimize for any constraint Driver shift, Fleet capacity, Vehicle
              payload, delivery time window, set-up time, service time, traffic
              and roadworks. Optimize your delivery route planning and save time
              and money now!
            </p>
            <div className={css(styles.madeLondonContainer)}>
              <span className={css(styles.madeLondonText)}>
                Made with love around the world
              </span>
            </div>
            <form>
              <div
                className={`form-row mb-2 align-items-baseline ${css(
                  styles.formWrapper
                )}`}
              >
                <div
                  className={`form-group col-md-4 ${css(styles.marginRight)}`}
                >
                  <label
                    className={`mb-2 ${css(
                      AppStyles.weight5,
                      AppStyles.heading16
                    )}`}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${css(styles.inputControl)}`}
                    name="name"
                    value={props.name}
                    onChange={props.onInputChange}
                    placeholder="John Smith"
                  />
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.nameError}
                  </span>
                </div>
                {/* <div className={`form-group col-md-1`} /> */}
                <div className={`form-group col-md-4`}>
                  <label
                    className={`mb-2 ${css(
                      AppStyles.weight5,
                      AppStyles.heading16
                    )}`}
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${css(styles.inputControl)}`}
                    name="phoneNumber"
                    value={props.phoneNumber}
                    onChange={props.onInputChange}
                    placeholder="07210310110"
                  />
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.phoneNumberError}
                  </span>
                </div>
              </div>
              <div
                className={`form-row mb-2 align-items-baseline ${css(
                  styles.formWrapper
                )}`}
              >
                <div
                  className={`form-group col-md-4 ${css(styles.marginRight)}`}
                >
                  <label
                    className={`mb-2 ${css(
                      AppStyles.weight5,
                      AppStyles.heading16
                    )}`}
                  >
                    Business email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${css(styles.inputControl)}`}
                    name="businessEmail"
                    value={props.businessEmail}
                    onChange={props.onInputChange}
                    placeholder="contact@mybusiness.com"
                  />
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.businessEmailError}
                  </span>
                </div>
                <div className={`form-group col-md-4`}>
                  <label
                    className={`mb-2 ${css(
                      AppStyles.weight5,
                      AppStyles.heading16
                    )}`}
                  >
                    How many stops per day
                  </label>
                  <select
                    className={`form-control custom-select mr-sm-2 p-0 ${css([
                      styles.inputControl,
                      styles.selectorPadding
                    ])}`}
                    name="volume"
                    value={props.volume}
                    onChange={props.onInputChange}
                  >
                    <option selected>Choose your volume</option>
                    <option value="0-100">0-100</option>
                    <option value="100-1000">100-1000</option>
                    <option value="1000 – 10 000">1000 – 10 000</option>
                    <option value="10 000 – 50 000">10 000 – 50 000</option>
                    <option value="50 000+">50 000+</option>
                  </select>
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.volumeError}
                  </span>
                </div>
              </div>
              <div className={`form-row mb-2 ${css(styles.actionBtnWrapper)}`}>
                <div
                  className={`form-group md-4 ${css(
                    AppStyles.flexBox,
                    AppStyles.justifyCenter,
                    AppStyles.alignItemsCenter,
                    styles.marginRightMaxWidth
                  )}`}
                >
                  <Button
                    title="Start free trial now"
                    isLoading={props.trialLoading}
                    className={css(styles.sendBtn)}
                    onClick={e => props.onSubmit(e, true)}
                    ripple={false}
                  />
                </div>
                <div
                  className={`form-group md-4 ${css(
                    AppStyles.flexBox,
                    AppStyles.justifyCenter,
                    AppStyles.alignItemsCenter
                  )}`}
                >
                  <PopupButton
                    className={css(styles.requestDemoBtn)}
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
            </form>
            {props.successStatus && (
              <p
                className={`alert alert-success mt-3 ${css(
                  styles.marginRightMessage
                )}`}
              >
                {props.successMsg}
              </p>
            )}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <img
              className={css(styles.headerGraphics)}
              src={Images.delivery_app}
              alt={'Route optimization software'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
