// @flow
import React from 'react';
import { css } from 'aphrodite';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Images, AppStyles } from '../../theme';
import styles from './PricingStyles';
import { WebHeader, WebFooter, ToggleSwitch } from '../../components';
import {
  CURRENCY_KEYS,
  DRIVERS_DATA,
  PRICING_KEYS,
  PRICING_TABLE_DATA,
  ROUTES,
  USERS_DATA,
  ZAPIER_INT_DATA,
  API_DATA,
  ROUTE_ENGINE_OPT_DATA,
  CHAT_DATA,
  PREDICTIVE_ETA_DATA,
  PREDICTIVE_RECIPIENT_NOTIFICATION,
  FULLY_AUTONOMOUS,
  BARCODE_SCANNING,
  AGE_VERIFICATION,
  DEDICATED_PHONE_NUMBER,
  SCHEDULE_PHONE_SUPPORT,
  PRIVATE_LABEL_TRACKING,
  PRIORITY_SUPPORT,
  DEDICATED_SUCCESS_TEAM,
  CONCIERGE_ONBOARDING,
  PRICING_KEYS_DRIVER,
  PRICING_DRIVER_TABLE_DATA
} from '../../constants';
import { Helmet } from 'react-helmet';

export default function PricingView(props) {
  const {
    yearly,
    onChangeYearly,
    onCurrencyClick,
    selectedCurrencyKey,
    usagePricing,
    onChangePricing
  } = props;

  const getPriceText = _item => {
    const { key } = _item;
    let str =
      PRICING_KEYS[selectedCurrencyKey][key]['symbol'] +
      PRICING_KEYS[selectedCurrencyKey][key]['currencyMonthly'];
    if (!yearly) {
      str =
        PRICING_KEYS[selectedCurrencyKey][key]['symbol'] +
        PRICING_KEYS[selectedCurrencyKey][key]['currencyAnnually'];
    }
    return str;
  };

  const getPriceTextDriver = _item => {
    const { key } = _item;
    let str =
      PRICING_KEYS_DRIVER[selectedCurrencyKey][key]['symbol'] +
      PRICING_KEYS_DRIVER[selectedCurrencyKey][key]['currencyMonthly'];
    if (!yearly) {
      str =
        PRICING_KEYS_DRIVER[selectedCurrencyKey][key]['symbol'] +
        PRICING_KEYS_DRIVER[selectedCurrencyKey][key]['currencyAnnually'];
    }
    return str;
  };

  const getPriceAdditionalText = _item => {
    const { key } = _item;
    let str =
      PRICING_KEYS[selectedCurrencyKey][key]['symbol'] +
      PRICING_KEYS[selectedCurrencyKey][key]['additionalTasks'];
    if (!yearly) {
      str =
        PRICING_KEYS[selectedCurrencyKey][key]['symbol'] +
        PRICING_KEYS[selectedCurrencyKey][key]['additionalTasks'];
    }
    return str;
  };

  return (
    <div>
      <Helmet>
        <title>Pricing</title>
        <meta
          data-react-helmet="true"
          id="pricing"
          name="Route Optimization software pricing"
          content="Pricing for kiffgo route planning and dispatch software. Kiffgo route optimization, customer notification and driver tracking. Route optimization engine that takes into account Driver shift, Fleet capacity, Delivery time window, Traffic, and Roadworks. Optimize your delivery route planning and save time and money now!"
        />
        <meta
          name="google-site-verification"
          content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
        />
      </Helmet>
      <WebHeader />
      <section
        className={` py-0 ${css([styles.heroSection, AppStyles.pxy_12])}`}
      >
        <div
          className={`container ${css(AppStyles.container)} ${css(
            styles.HeightVhs
          )}`}
        >
          <div className={`row`}>
            <div className={`col-lg-12 col-md-12 col-sm-12`}>
              <h2
                className={`my-3 mb-4 ${css([
                  AppStyles.blackColor,
                  AppStyles.fontSize25,
                  AppStyles.weight5,
                  AppStyles.lineHeight1_5,
                  styles.lineHeight12
                ])}`}
              >
                Unlimited users with all plans. <br />
                Get Kiffgo for delightful logistics management
              </h2>
            </div>
            <div className={css(styles.toggleContainer)}>
              <p className={css(styles.billingText)}>Billed yearly</p>
              <ToggleSwitch value={yearly} onChangValue={onChangeYearly} />
              <p className={css(styles.billingText)}>Billed monthly</p>
            </div>
          </div>
        </div>

        <div className={`${css(styles.currencyOuterWrapper)}`}>
          <p className={css(styles.pricingPageToggleText)}>Choose currency</p>
          <div className={`${css(styles.currencyWrapper)}`}>
            <span
              className={`${css([
                styles.currencyWrapperStartBorder,
                selectedCurrencyKey == CURRENCY_KEYS.USD
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="USD"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.USD)}
            >
              USD $
            </span>
            <span
              className={`${css([
                selectedCurrencyKey == CURRENCY_KEYS.GBP
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="GBP"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.GBP)}
            >
              GBP £
            </span>
            <span
              className={`${css([
                selectedCurrencyKey == CURRENCY_KEYS.AUD
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="AUD"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.AUD)}
            >
              AUD $
            </span>
            <span
              className={`${css([
                styles.currencyWrapperEndBorder,
                selectedCurrencyKey == CURRENCY_KEYS.EUR
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="EUR"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.EUR)}
            >
              EUR €
            </span>
          </div>
        </div>

        <div className={css(styles.pricingPageToggleOuterWrapper)}>
          <p className={css(styles.pricingPageToggleText)}>
            Choose the type of plan that suits your business
          </p>
          <div className={css(styles.pricingPageToggleWrapper)}>
            <span
              className={`${css([
                styles.pricingWrapperStartBorder,
                usagePricing === true
                  ? styles.selectedPricingColor
                  : styles.pricingSwitcherBtn
              ])}`}
              id="per-usage-price"
              onClick={onChangePricing}
            >
              Per Usage Price
            </span>
            <span
              className={`${css([
                styles.pricingWrapperEndBorder,
                usagePricing === false
                  ? styles.selectedPricingColor
                  : styles.pricingSwitcherBtn
              ])}`}
              id="per-driver-price"
              onClick={onChangePricing}
            >
              Per Driver Price
            </span>
          </div>
        </div>
      </section>

      <section className={` ${css([styles.pricingSection, AppStyles.pxy_12])}`}>
        <div
          className={`container ${css(styles.container)} ${css(
            styles.HeightVhs
          )}`}
        >
          <div className={`row`}>
            {usagePricing
              ? PRICING_TABLE_DATA &&
                PRICING_TABLE_DATA.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`col-xl-3 col-lg-6 col-md-6 col-sm-12`}
                    >
                      <div className={`${css(styles.pricingContainer)}`}>
                        {/* pricing title */}
                        <div
                          className={`${css(styles.pricingTitleWrapper)}`}
                          style={{ backgroundImage: item.bgColor }}
                        >
                          <h1 className={`${css(styles.pricingTitle)}`}>
                            {item.title}
                          </h1>
                        </div>

                        {/* pricing image */}
                        <div className={`${css(styles.pricingImgWrapper)}`}>
                          <img
                            src={item.image}
                            alt={item.altText}
                            className={`${css(styles.pricingImg)}`}
                          />
                        </div>

                        {/* pricing amount */}
                        <div className={`${css(styles.pricingAmountWrapper)}`}>
                          <p className={`${css(styles.pricingAmount)}`}>
                            {getPriceText(item)}

                            <span className={`${css(styles.perMonthText)}`}>
                              per month
                            </span>
                          </p>
                        </div>

                        {/* pricing desc */}
                        <div className={`${css(styles.pricingDescWrapper)}`}>
                          <p className={`${css(styles.pricingDesc)}`}>
                            {item.description}
                          </p>
                        </div>

                        {/* pricing tasks */}
                        <div className={`${css(styles.pricingTasksWrapper)}`}>
                          <p className={`${css(styles.pricingTasks)}`}>
                            <img
                              src={Images.green_arrow_img}
                              alt="green arrow"
                              className={`${css(styles.grrenArrow)}`}
                            />
                            {`${item.tasksCount} tasks`}
                          </p>
                        </div>

                        <div className={`${css(styles.mostPopBtnWrapper)}`}>
                          {item.mostPopularButtonText &&
                          item.mostPopulatBtnIcon ? (
                            <button
                              type="button"
                              className={`mt-3 ${css(styles.buttonMostPop)} `}
                            >
                              <img
                                className={css(styles.heartIcon)}
                                src={
                                  item.mostPopulatBtnIcon == null
                                    ? ''
                                    : item.mostPopulatBtnIcon
                                }
                              />{' '}
                              {item.mostPopularButtonText}
                            </button>
                          ) : (
                            ''
                          )}
                        </div>

                        {/* pricing button */}
                        <a href={item.buttonURL}>
                          <button
                            type="button"
                            className={`mt-3 ${css(styles.buttonOne)} `}
                          >
                            {item.buttonText}
                          </button>
                        </a>
                      </div>
                    </div>
                  );
                })
              : PRICING_DRIVER_TABLE_DATA &&
                PRICING_DRIVER_TABLE_DATA.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`col-xl-3 col-lg-6 col-md-6 col-sm-12`}
                    >
                      <div className={`${css(styles.pricingContainer)}`}>
                        {/* pricing title */}
                        <div
                          className={`${css(styles.pricingTitleWrapper)}`}
                          style={{ backgroundImage: item.bgColor }}
                        >
                          <h1 className={`${css(styles.pricingTitle)}`}>
                            {item.title}
                          </h1>
                        </div>

                        {/* pricing image */}
                        <div className={`${css(styles.pricingImgWrapper)}`}>
                          <img
                            src={item.image}
                            alt={item.altText}
                            className={`${css(styles.pricingImg)}`}
                          />
                        </div>

                        {/* pricing amount */}
                        <div className={`${css(styles.pricingAmountWrapper)}`}>
                          <p className={`${css(styles.pricingAmount)}`}>
                            {getPriceTextDriver(item)}

                            <span className={`${css(styles.perMonthText)}`}>
                              per month / driver
                            </span>
                          </p>
                        </div>

                        {/* pricing desc */}
                        <div className={`${css(styles.pricingDescWrapper)}`}>
                          <p className={`${css(styles.pricingDesc)}`}>
                            {item.description}
                          </p>
                        </div>

                        {/* pricing tasks */}
                        {item.tasksCount && (
                          <div className={`${css(styles.pricingTasksWrapper)}`}>
                            <p className={`${css(styles.pricingTasks)}`}>
                              <img
                                src={Images.green_arrow_img}
                                alt="green arrow"
                                className={`${css(styles.grrenArrow)}`}
                              />
                              {`${item.tasksCount} tasks`}
                            </p>
                          </div>
                        )}

                        <div className={`${css(styles.mostPopBtnWrapper)}`}>
                          {item.mostPopularButtonText &&
                          item.mostPopulatBtnIcon ? (
                            <button
                              type="button"
                              className={`mt-3 ${css(styles.buttonMostPop)} `}
                            >
                              <img
                                className={css(styles.heartIcon)}
                                src={
                                  item.mostPopulatBtnIcon == null
                                    ? ''
                                    : item.mostPopulatBtnIcon
                                }
                              />{' '}
                              {item.mostPopularButtonText}
                            </button>
                          ) : (
                            ''
                          )}
                        </div>

                        {/* pricing button */}
                        <a href={item.buttonURL}>
                          <button
                            type="button"
                            className={`mt-3 ${css(styles.buttonOne)} `}
                          >
                            {item.buttonText}
                          </button>
                        </a>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      <section
        className={` py-0 ${css([styles.heroSection, AppStyles.pxy_12])}`}
      >
        <div
          className={`container ${css(AppStyles.container)} ${css(
            styles.HeightVhs
          )}`}
        >
          <div className={`row`}>
            <div className={`col-lg-12 col-md-12 col-sm-12`}>
              <h2
                className={`my-3 mb-4 ${css([
                  AppStyles.headingBig,
                  AppStyles.blackColor,
                  styles.lineHeight12
                ])}`}
              >
                Compare Plans
              </h2>
            </div>
            <div className={css(styles.toggleContainer)}>
              <p className={css(styles.billingText)}>Billed yearly</p>
              <ToggleSwitch value={yearly} onChangValue={onChangeYearly} />
              <p className={css(styles.billingText)}>Billed monthly</p>
            </div>
          </div>
        </div>

        <div className={`${css(styles.currencyOuterWrapper)}`}>
          <p className={css(styles.pricingPageToggleText)}>Choose currency</p>
          <div className={`${css(styles.currencyWrapper)}`}>
            <span
              className={`${css([
                styles.currencyWrapperStartBorder,
                selectedCurrencyKey == CURRENCY_KEYS.USD
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="USD"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.USD)}
            >
              USD $
            </span>
            <span
              className={`${css([
                selectedCurrencyKey == CURRENCY_KEYS.GBP
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="GBP"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.GBP)}
            >
              GBP £
            </span>
            <span
              className={`${css([
                selectedCurrencyKey == CURRENCY_KEYS.AUD
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="AUD"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.AUD)}
            >
              AUD $
            </span>
            <span
              className={`${css([
                styles.currencyWrapperEndBorder,
                selectedCurrencyKey == CURRENCY_KEYS.EUR
                  ? styles.selectedCurencyColor
                  : styles.switcherBtn
              ])}`}
              id="EUR"
              onClick={() => onCurrencyClick(CURRENCY_KEYS.EUR)}
            >
              EUR €
            </span>
          </div>
        </div>

        <div className={css(styles.pricingPageToggleOuterWrapper)}>
          <p className={css(styles.pricingPageToggleText)}>
            Choose the type of plan that suits your business
          </p>
          <div className={css(styles.pricingPageToggleWrapper)}>
            <span
              className={`${css([
                styles.pricingWrapperStartBorder,
                usagePricing === true
                  ? styles.selectedPricingColor
                  : styles.pricingSwitcherBtn
              ])}`}
              id="per-usage-price"
              onClick={onChangePricing}
            >
              Per Usage Price
            </span>
            <span
              className={`${css([
                styles.pricingWrapperEndBorder,
                usagePricing === false
                  ? styles.selectedPricingColor
                  : styles.pricingSwitcherBtn
              ])}`}
              id="per-driver-price"
              onClick={onChangePricing}
            >
              Per Driver Price
            </span>
          </div>
        </div>
      </section>

      <section className={` ${css([styles.pricingSection, AppStyles.pxy_12])}`}>
        <div
          className={`container ${css(styles.container)} ${css(
            styles.HeightVhs
          )}`}
          style={{ overflow: 'auto' }}
        >
          <div className={`row`}>
            {usagePricing ? (
              <table
                className={`tableWrapperStyle ${css(styles.tableWrapper)}`}
              >
                <tbody>
                  <thead>
                    <tr>
                      <th scope={'col'}> &nbsp;</th>
                      {PRICING_TABLE_DATA &&
                        PRICING_TABLE_DATA.map((item, index) => {
                          return (
                            <th
                              scope={'col'}
                              className={`${css(
                                AppStyles.fontBold,
                                AppStyles.fontSize25
                              )}`}
                            >
                              {item.title}
                            </th>
                          );
                        })}
                    </tr>
                  </thead>

                  {/* Price Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Price
                    </td>
                    {PRICING_TABLE_DATA &&
                      PRICING_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {getPriceText(item)}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Included Tasks */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Included Tasks
                    </td>
                    {PRICING_TABLE_DATA &&
                      PRICING_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.tasksCount}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Additional Tasks */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Additional Tasks
                    </td>
                    {PRICING_TABLE_DATA &&
                      PRICING_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {getPriceAdditionalText(item)}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Drivers Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Drivers
                    </td>
                    {DRIVERS_DATA &&
                      DRIVERS_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Users Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Users
                    </td>
                    {USERS_DATA &&
                      USERS_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Zapier Integration Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Zapier integration
                    </td>
                    {ZAPIER_INT_DATA &&
                      ZAPIER_INT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              item.name
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Api Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      API
                    </td>
                    {API_DATA &&
                      API_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              item.name
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Route Engine Optimization Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Route optimization engine
                    </td>
                    {ROUTE_ENGINE_OPT_DATA &&
                      ROUTE_ENGINE_OPT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Chat Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Chat
                    </td>
                    {CHAT_DATA &&
                      CHAT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Predictive ETA Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Predictive ETA
                    </td>
                    {PREDICTIVE_ETA_DATA &&
                      PREDICTIVE_ETA_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Predictive recipient notification */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Predictive recipient notification
                    </td>
                    {PREDICTIVE_RECIPIENT_NOTIFICATION &&
                      PREDICTIVE_RECIPIENT_NOTIFICATION.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Fully Autonomous*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Fully autonomous dispatch and routing
                    </td>
                    {FULLY_AUTONOMOUS &&
                      FULLY_AUTONOMOUS.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Bar code scanning*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      QR/Barcode Scanning
                    </td>
                    {BARCODE_SCANNING &&
                      BARCODE_SCANNING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* age verification*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Age verification
                    </td>
                    {AGE_VERIFICATION &&
                      AGE_VERIFICATION.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* dedicated phone number*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Dedicated phone number
                    </td>
                    {DEDICATED_PHONE_NUMBER &&
                      DEDICATED_PHONE_NUMBER.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* schedule phone support*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Scheduled phone support
                    </td>
                    {SCHEDULE_PHONE_SUPPORT &&
                      SCHEDULE_PHONE_SUPPORT.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Private label tracking page */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Private label tracking page
                    </td>
                    {PRIVATE_LABEL_TRACKING &&
                      PRIVATE_LABEL_TRACKING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Priority support  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Priority support
                    </td>
                    {PRIORITY_SUPPORT &&
                      PRIORITY_SUPPORT.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Dedicated success Team  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Dedicated success Team
                    </td>
                    {DEDICATED_SUCCESS_TEAM &&
                      DEDICATED_SUCCESS_TEAM.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Concierge onboarding  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Concierge onboarding
                    </td>
                    {CONCIERGE_ONBOARDING &&
                      CONCIERGE_ONBOARDING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>
                  {/* actions button */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    ></td>
                    {PRICING_TABLE_DATA &&
                      PRICING_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            <a href={item.buttonURL}>
                              <button
                                type="button"
                                className={`mt-3 ${css([
                                  styles.buttonOneTable,
                                  AppStyles.mTop0
                                ])} `}
                              >
                                {item.buttonText}
                              </button>
                            </a>
                          </td>
                        );
                      })}
                  </tr>
                </tbody>
              </table>
            ) : (
              <table
                className={`tableWrapperStyle ${css(styles.tableWrapper)}`}
              >
                <tbody>
                  <thead>
                    <tr>
                      <th scope={'col'}> &nbsp;</th>
                      {PRICING_DRIVER_TABLE_DATA &&
                        PRICING_DRIVER_TABLE_DATA.map((item, index) => {
                          return (
                            <th
                              scope={'col'}
                              className={`${css(
                                AppStyles.fontBold,
                                AppStyles.fontSize25
                              )}`}
                            >
                              {item.title}
                            </th>
                          );
                        })}
                    </tr>
                  </thead>

                  {/* Price Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Price
                    </td>
                    {PRICING_DRIVER_TABLE_DATA &&
                      PRICING_DRIVER_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {getPriceTextDriver(item)}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Users Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Users
                    </td>
                    {USERS_DATA &&
                      USERS_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Zapier Integration Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Zapier integration
                    </td>
                    {ZAPIER_INT_DATA &&
                      ZAPIER_INT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              item.name
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Api Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      API
                    </td>
                    {API_DATA &&
                      API_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              item.name
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Route Engine Optimization Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Route optimization engine
                    </td>
                    {ROUTE_ENGINE_OPT_DATA &&
                      ROUTE_ENGINE_OPT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Chat Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Chat
                    </td>
                    {CHAT_DATA &&
                      CHAT_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Predictive ETA Data */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Predictive ETA
                    </td>
                    {PREDICTIVE_ETA_DATA &&
                      PREDICTIVE_ETA_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Predictive recipient notification */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Predictive recipient notification
                    </td>
                    {PREDICTIVE_RECIPIENT_NOTIFICATION &&
                      PREDICTIVE_RECIPIENT_NOTIFICATION.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Fully Autonomous*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Fully autonomous dispatch and routing
                    </td>
                    {FULLY_AUTONOMOUS &&
                      FULLY_AUTONOMOUS.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Bar code scanning*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      QR/Barcode Scanning
                    </td>
                    {BARCODE_SCANNING &&
                      BARCODE_SCANNING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* age verification*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Age verification
                    </td>
                    {AGE_VERIFICATION &&
                      AGE_VERIFICATION.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* dedicated phone number*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Dedicated phone number
                    </td>
                    {DEDICATED_PHONE_NUMBER &&
                      DEDICATED_PHONE_NUMBER.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* schedule phone support*/}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Scheduled phone support
                    </td>
                    {SCHEDULE_PHONE_SUPPORT &&
                      SCHEDULE_PHONE_SUPPORT.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Private label tracking page */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Private label tracking page
                    </td>
                    {PRIVATE_LABEL_TRACKING &&
                      PRIVATE_LABEL_TRACKING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Priority support  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Priority support
                    </td>
                    {PRIORITY_SUPPORT &&
                      PRIORITY_SUPPORT.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Dedicated success Team  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Dedicated success Team
                    </td>
                    {DEDICATED_SUCCESS_TEAM &&
                      DEDICATED_SUCCESS_TEAM.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>

                  {/* Concierge onboarding  */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    >
                      Concierge onboarding
                    </td>
                    {CONCIERGE_ONBOARDING &&
                      CONCIERGE_ONBOARDING.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.key}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            {item.name == 'yes' ? (
                              <img
                                src={Images.check_mark_img}
                                alt="green check"
                              />
                            ) : (
                              <img
                                src={Images.cross_mark_img}
                                alt="cross mark"
                              />
                            )}
                          </td>
                        );
                      })}
                  </tr>
                  {/* actions button */}
                  <tr>
                    <td
                      className={`${css(
                        AppStyles.weight6,
                        AppStyles.fontSize20
                      )}`}
                    ></td>
                    {PRICING_DRIVER_TABLE_DATA &&
                      PRICING_DRIVER_TABLE_DATA.map((item, index) => {
                        return (
                          <td
                            scope="row"
                            data-label={item.title}
                            className={`${css(
                              AppStyles.fontSize20,
                              styles.tableData
                            )}`}
                          >
                            <a href={item.buttonURL}>
                              <button
                                type="button"
                                className={`mt-3 ${css([
                                  styles.buttonOneTable,
                                  AppStyles.mTop0
                                ])} `}
                              >
                                {item.buttonText}
                              </button>
                            </a>
                          </td>
                        );
                      })}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
      <WebFooter />
    </div>
  );
}
