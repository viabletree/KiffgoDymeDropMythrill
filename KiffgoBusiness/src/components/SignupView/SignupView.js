// @flow
import React from 'react';
import { css } from 'aphrodite';
import { Images, AppStyles } from '../../theme';
import { TextField, Button } from '../../components';
import { NavLink } from 'react-router-dom';
import { USER_LOGIN_THEME, ROUTES } from '../../constants';
import styles from './SignupViewStyles';
import StripePayment from '../StripePayment';
import {
  CardElement,
  Elements,
  ElementsConsumer
} from '@stripe/react-stripe-js';

export default function SignupViewView(props) {
  const { step, nextClick, previousClick, data } = props;
  return (
    <div>
      <div className={`${css(styles.signinBgColor, AppStyles.container)}`}>
        <div className={`${css(styles.signinWraper)}`}>
          <div className={`row`}>
            <div className={`col-lg-3 col-md-3 col-sm-12`}>
              <div className={css(styles.signinHeadContainer)}>
                <h6 className={css(styles.signinHead)}>Sign up</h6>
                <h4 className={css(styles.signinSubHead)}>Get started !</h4>
              </div>
            </div>
            <div className={`col-lg-9 col-md-9 col-sm-12`}>
              <ul className={css(styles.progressBar)}>
                <li
                  className={css(
                    step >= 0
                      ? [
                          styles.progressBarListSelected,
                          styles.SelectedlistMarginLeftZero
                        ]
                      : [styles.progressBarList]
                  )}
                >
                  <span
                    className={css(
                      step == 0
                        ? styles.liSpanSelected
                        : step > 0
                        ? styles.prevListHide
                        : styles.liSpan
                    )}
                  >
                    Personal Information
                  </span>
                </li>
                <li
                  className={css(
                    step >= 1
                      ? [
                          styles.progressBarListSelected,
                          styles.SelectedlistMarginLeftOne
                        ]
                      : [styles.progressBarList, styles.greyDotsOne]
                  )}
                >
                  <span
                    className={css(
                      step == 1
                        ? styles.liSpanSelected
                        : step > 1
                        ? styles.prevListHide
                        : styles.liSpan
                    )}
                  >
                    Company Information
                  </span>
                </li>
                <li
                  className={css(
                    step >= 2
                      ? [
                          styles.progressBarListSelected,
                          styles.SelectedlistMarginLeftTwo
                        ]
                      : [styles.progressBarList, styles.greyDotsTwo]
                  )}
                >
                  <span
                    className={css(
                      step == 2
                        ? styles.liSpanSelected
                        : step > 2
                        ? styles.prevListHide
                        : styles.liSpan
                    )}
                  >
                    Verification
                  </span>
                </li>
                <li
                  className={css(
                    step >= 3
                      ? [
                          styles.progressBarListSelected,
                          styles.SelectedlistMarginLeftThree
                        ]
                      : [styles.progressBarList, styles.greyDotsThree]
                  )}
                >
                  <span
                    className={css(
                      step >= 3 ? styles.liSpanSelected : styles.liSpan
                    )}
                  >
                    Payment{' '}
                  </span>
                </li>
              </ul>
            </div>

            <div className={`col-lg-12 col-md-12 col-sm-12`}>
              <form className={css(styles.formContainer)}>
                {/* Step 1 personalInfo*/}

                {step === 0 && (
                  <div className={`row mb-2 ${css(styles.personalInfo)}`}>
                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        First name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="firstName"
                        value={props.firstName}
                        onChange={props.onInputChange}
                        placeholder="John"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.firstNameError}
                      </span>
                    </div>
                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Last name
                      </label>

                      <input
                        type="text"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="lastName"
                        value={props.lastName}
                        onChange={props.onInputChange}
                        placeholder="Smith"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.lastNameError}
                      </span>
                    </div>

                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Work email
                      </label>

                      <input
                        type="email"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="email"
                        value={props.email}
                        onChange={props.onInputChange}
                        placeholder="abc@123.com"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.emailError}
                      </span>
                    </div>

                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Phone number
                      </label>

                      <input
                        type="tel"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="phone"
                        value={props.phone}
                        onChange={props.onInputChange}
                        placeholder="07210310110"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.phoneError}
                      </span>
                    </div>

                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Password
                      </label>

                      <input
                        type="password"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="password"
                        value={props.password}
                        onChange={props.onInputChange}
                        placeholder="******"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.passwordError}
                      </span>
                    </div>

                    <div className={`form-group col-md-4`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="confirmPassword"
                        value={props.confirmPassword}
                        onChange={props.onInputChange}
                        placeholder="******"
                        onKeyDown={e => {
                          if (e.key === 'Enter') nextClick();
                        }}
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.confirmPasswordError}
                      </span>
                    </div>
                  </div>
                )}

                {/* Step 2 Company Info*/}
                {step === 1 && (
                  <div className={`row mb-2 ${css(styles.companyInfo)}`}>
                    <div className={`form-group col-md-6`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Company name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="companyName"
                        value={props.companyName}
                        onChange={props.onInputChange}
                        placeholder="Your company"
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.companyNameError}
                      </span>
                      {/* <span className={`${css(AppStyles.formError)}`}>
                        {props.nameError}
                      </span> */}
                    </div>
                    <div className={`form-group col-md-6`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Company website
                      </label>

                      <input
                        type="text"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="companyWeb"
                        value={props.companyWeb}
                        onChange={props.onInputChange}
                        placeholder="www.yourcompanyname.com"
                        onKeyDown={e => {
                          if (e.key === 'Enter') nextClick();
                        }}
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.companyWebError}
                      </span>
                    </div>

                    <div className={`form-group col-md-6`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Industry
                      </label>

                      <select
                        className={`custom-select mr-sm-2 ${css(
                          styles.selectControl
                        )}`}
                        name="industry"
                        value={props.industry}
                        onChange={props.onInputChange}
                      >
                        <option selected>Choose your industry</option>
                        <option value="Bulky items / 2man delivery">
                          Bulky items / 2man delivery
                        </option>
                        <option value="Beverage">Beverage</option>
                        <option value="Building / construction">
                          Building / construction
                        </option>
                        <option value="Catering">Catering</option>
                        <option value="Concierge">Concierge</option>
                        <option value="Courier">Courier</option>
                        <option value="Field services">Field services</option>
                        <option value="Flowers / Gift">Flowers / Gift</option>
                        <option value="Grocery / Produce">
                          Grocery / Produce
                        </option>
                        <option value="Laundry / Dry cleaning">
                          Laundry / Dry cleaning
                        </option>
                        <option value="Pharmaceutical">Pharmaceutical</option>
                      </select>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.industryError}
                      </span>
                    </div>

                    <div className={`form-group col-md-6`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        Monthly delivery volume
                      </label>

                      <select
                        className={`custom-select mr-sm-2 ${css(
                          styles.selectControl
                        )}`}
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

                    <div className={`form-group col-md-4`}></div>
                  </div>
                )}

                {/* Step 3 Verification Code */}
                {step === 2 && (
                  <div className={`row mb-2 ${css(styles.verifyCode)}`}>
                    <div className={`form-group col-md-7`}>
                      <label className={`mb-2 ${css(styles.labelForm)}`}>
                        A verification code has been sent to your email address.
                      </label>

                      <input
                        type="text"
                        className={`form-control ${css(styles.inputControl)}`}
                        name="verificationCode"
                        value={props.verificationCode}
                        onChange={props.onInputChange}
                        placeholder="Enter your verification code"
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            nextClick();
                          }
                        }}
                      ></input>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.verificationCodeError}
                      </span>
                    </div>
                  </div>
                )}

                {/* Step 4 Stripe Payment */}
                {step === 3 && (
                  <div className={` ${css(styles.paymentStripe)}`}>
                    <StripePayment
                      data={data}
                      onPaymentDone={props.onPaymentDone}
                    />
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className={`row`}>
            <div className={`col-lg-4 col-md-4 col-sm-12`}>
              {step > 0 && step < 2 && (
                <div className={css(styles.prevBtnContainer)}>
                  <button
                    className={css(styles.previousBtn)}
                    onClick={() => previousClick()}
                  >
                    Previous
                  </button>
                </div>
              )}
            </div>

            <div className={`col-lg-8 col-md-8 col-sm-12`}>
              <div>
                {step != 3 && (
                  <div className={css(styles.signinBtnContainer)}>
                    <NavLink
                      className={css(styles.signinText)}
                      to={ROUTES.LOGIN}
                    >
                      Already have an account ?
                    </NavLink>
                    <Button
                      title="Next"
                      isLoading={props.isLoading}
                      className={css(styles.nextBtn)}
                      onClick={() => nextClick()}
                      ripple={false}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
