// @flow
import React from 'react';
import { css } from 'aphrodite';
import { Images, AppStyles, Colors } from '../../../theme';
import styles from './BespokeLogisitcsStyles';
import { WebHeader, WebFooter, Button } from '../../../components';

export default function BespokeLogisitcsView(props) {
  return (
    <div>
      <WebHeader />
      <section className={` ${css([styles.heroSection, AppStyles.pxy_12])}`}>
        <div
          className={`container ${css(styles.container)} ${css(
            styles.HeightVhs
          )}`}
        >
          <div className={`row mt-5`}>
            <div className={`col-lg-6 col-md-12 col-sm-12 mt-3`}>
              <h2
                className={`my-3 mb-4 ${css([
                  AppStyles.headingOne,
                  AppStyles.blackColor,
                  styles.lineHeight12
                ])}`}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: `${Colors.text.titleColorTwo}`
                  }}
                >
                  Bespoke Logistiscs{' '}
                </span>
                and
                <span
                  style={{
                    fontWeight: 700,
                    color: `${Colors.text.titleColorTwo}`
                  }}
                >
                  {' '}
                  Delivery software expert.
                </span>
              </h2>

              <p
                className={`my-3 pr-5 ${css([
                  AppStyles.peraOne,
                  AppStyles.weight5,
                  styles.desription
                ])}`}
              >
                We build webapp and phone app for logistics providers. Kiffgo
                Product and Technology team deliver software that exceeds your
                expectations.
                <span style={{ display: 'block' }}>
                  We handles the heavy lifting so you can focus on your
                  customers.
                </span>
              </p>
              <br />

              <div className={css(styles.heroBtnContainer)}>
                <button
                  type="button"
                  onClick={props.getInTouch}
                  className={`mt-3 ${css(styles.buttonOne)} `}
                >
                  Schedule a meeting
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 position-static px-0 pr-2">
              <img
                className={css(styles.headerGraphics)}
                src={Images.Bespoke_Hero_Image}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-5 ${css(AppStyles.pxy_12, styles.contactSec)}`}
        id={`contactForm`}
      >
        <div className={`container ${css(AppStyles.container)}`}>
          <div className={`row align-items-center`}>
            <div className={`col-lg-6 col-md-12 `}>
              <img
                className={`${css(styles.contactImg)}`}
                src={Images.Contact_tech}
                alt="Delivery management software"
              />
            </div>
            <div className={`col-lg-6 col-md-12`}>
              <h2
                className={`my-3 mb-4 ${css([
                  AppStyles.headingOne,
                  AppStyles.blackColor,
                  AppStyles.weight7
                ])} `}
              >
                Contact our Tech &amp; Product expert
              </h2>

              <p
                className={`my-3 mb-5 ${css([
                  AppStyles.heading16,
                  AppStyles.blackColor,
                  AppStyles.weight4
                ])} `}
              >
                We’ll get back to you within one business day
              </p>
              <form id="contactForm" onSubmit={props.onSubmit}>
                <div className={`form-row mb-2`}>
                  <div className={`form-group col-md-6`}>
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
                    ></input>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.nameError}
                    </span>
                  </div>
                  <div className={`form-group col-md-6`}>
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
                    ></input>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.phoneNumberError}
                    </span>
                  </div>
                </div>
                <div className={`form-row mb-2`}>
                  <div className={`form-group col-md-6`}>
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
                    ></input>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.businessEmailError}
                    </span>
                  </div>
                  <div className={`form-group col-md-6`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
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
                  </div>
                </div>

                <div className={`form-row mb-2`}>
                  <div className={`form-group col-md-6`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
                      Company website
                    </label>
                    <input
                      type="text"
                      className={`form-control ${css(styles.inputControl)}`}
                      name="web"
                      value={props.web}
                      onChange={props.onInputChange}
                      placeholder="www.yourcompanyname.com"
                    ></input>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.webError}
                    </span>
                  </div>
                  <div className={`form-group col-md-6`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
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
                    </select>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.industryError}
                    </span>
                  </div>
                </div>
                <div className={`form-row mb-2`}>
                  <div className={`form-group col-md-6`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
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
                  <div className={`form-group col-md-6`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
                      Budget
                    </label>
                    <select
                      className={`custom-select mr-sm-2 ${css(
                        styles.selectControl
                      )}`}
                      name="budget"
                      value={props.budget}
                      onChange={props.onInputChange}
                    >
                      <option selected>Choose your budget</option>
                      <option value="Food">£5k-£9k </option>
                      <option value="Food1">£10k to £15k</option>
                      <option value="Food2">£20k to £40k</option>
                      <option value="Food3">£50k to £70k</option>
                      <option value="Food3">£80k to £110k</option>
                      <option value="Food3">£120k to £150k</option>
                      <option value="Food3">£160k to £200k</option>
                      <option value="Food3">+£210k</option>
                    </select>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.budgetError}
                    </span>
                  </div>
                </div>
                <div className={`form-row align-items-center mb-3`}>
                  <div className={`form-group col-md-12`}>
                    <label
                      className={`mb-2 ${css(
                        AppStyles.weight5,
                        AppStyles.heading16
                      )}`}
                    >
                      Your Message
                    </label>
                    <textarea
                      placeholder="Hi Kiffgo!"
                      className={`form-control ${css(styles.textArea)}`}
                      name="hearAbout"
                      value={props.hearAbout}
                      onChange={props.onInputChange}
                      onKeyDown={e => {
                        if (e.key === 'Enter') props.onSubmit();
                      }}
                    ></textarea>
                    <span className={`${css(AppStyles.formError)}`}>
                      {props.hearAboutError}
                    </span>
                  </div>
                  <div className={`form-group col-md-7`}></div>
                  <div className={`form-group col-md-5 mb-0 text-right`}>
                    {/* <button className={css(styles.sendBtn)}>Send</button> */}
                  </div>
                </div>
              </form>
              <div className={css(styles.formSubmitBtnContainer)}>
                <Button
                  title="Send"
                  isLoading={props.isLoading}
                  className={css(styles.sendBtn)}
                  onClick={() => props.onSubmit()}
                  ripple={false}
                />
              </div>
              {props.successStatus && (
                <p className={`alert alert-success mt-3`}>{props.successMsg}</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <WebFooter />
    </div>
  );
}
