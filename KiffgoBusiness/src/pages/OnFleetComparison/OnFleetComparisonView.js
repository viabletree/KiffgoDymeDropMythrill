// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './OnFleetComparisonStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import {
  API_DATA_ONFLEET,
  ZAPIER_DATA_ONFLEET,
  UNLEASHED_DATA_ONFLEET,
  SELFSERVICE_DATA_ONFLEET,
  TIME_WINDOW_ONFLEET,
  SERVICE_TIME_ONFLEET,
  VEHICLE_CAPACITY_ONFLEET,
  DRIVER_SCHEDULE_ONFLEET,
  TASKS_PER_DRIVER_ONFLEET,
  DRIVING_SPEED_ADJUSTMENT_ONFLEET,
  HANDLE_DRIVER_BREAK_ONFLEET,
  HANDLE_PRIORITY_ORDERS_ONFLEET,
  SETUP_TIME_ONFLEET,
  INITIAL_SOLUTION_ONFLEET,
  INAPP_CALL_ONFLEET,
  INAPP_SMS_ONFLEET,
  INAPP_ETA_ONFLEET,
  BARCODE_SCANNING_ONFLEET,
  HOURS_WEEKLY_SCHEDULE_ONFLEET,
  LOCAL_STORAGE_ONFLEET,
  DRIVER_REROUTE_ONFLEET,
  LIVE_ORDER_ONFLEET,
  OPTIONAL_SELF_SCHEDULING_ONFLEET,
  EMAIL_PROOF_ONFLEET,
  SCHEDULE_STAGE_ONFLEET,
  SCHEDULE_STAGE_CUSTOMER_ONFLEET,
  ROUTES
} from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
export default class OnFleetComparisonView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Better than Onfleet</title>
          <meta
            data-react-helmet="true"
            id="kiffgo_vs_onfleet"
            name="why onfleet sucks"
            content="Optimize for any constraint Driver shift, Fleet capacity, Vehicle payload, delivery time window, set-up time, service time, traffic and roadworks. Capture proof of delivery. Track drivers. the differences between Kiffgo and Onfleet for delivery drivers, dispatchers and route planning. Onfleet driver app sucks as it doesn’t work in area with internet connection"
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <ComparisonHeroSection altText="Compare Onfleet vs Kiffgo" />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.titleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>Kiffgo vs Onfleet</h1>
              <p className={`${css(styles.description)}`}>
                Kiffgo is a powerful alternative to Onfleet
              </p>
            </div>
          </div>

          <div className={`row`}>
            <div className={`col-12 ${css(styles.detailTextWrapper)}`}>
              <p className={`${css(styles.detailText)}`}>
                <span style={{ fontWeight: 700 }}>Hey there</span>
                , thinking about moving over to Kiffgo? Or trying to decide
                which route planning and dispatch software to use for the first
                time?
                <br />
                <br />
                Onfleet isn’t for everyone. They may not be the right fit for
                all businesses. It is predominantly designed for same day
                delivery in mind. If you plan your deliveries days in advance
                there is no communication tool in the software to notify the
                customer when their delivery is arriving. Onfleet driver app is
                not able to handle job completion without internet connection -
                it means your driver has to complete the delivery without the
                driver app and stop again when the internet connection is back
                to complete the job in app and upload pics and proof of
                delivery. That’s a big loss of productivity and adding delays to
                the route. Kiffgo works even when there is no internet and
                automatically updates the dispatcher web app when internet
                connection is back.
                <br />
                <br />
                Let’s look at what the key differences are between Kiffgo and
                Onfleet for delivery drivers and dispatchers, we put together
                this no-nonsense overview.
              </p>
            </div>
          </div>
        </div>

        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            {/* api integration table */}
            <table
              className={`comparisonTableWrapperStyle ${css(
                styles.comparisonTableWrapper
              )}`}
            >
              <tbody>
                <thead>
                  <tr>
                    <th
                      scope={'col'}
                      className={`${css(styles.tableMainHeading)}`}
                    >
                      API & Integration
                    </th>
                    <th scope={'col'}>
                      <div className={`${css(styles.kiffgoImgWrapper)}`}>
                        <img
                          src={Images.logo_green}
                          className={`${css(styles.kiffgoImg)}`}
                        />
                      </div>
                    </th>
                    <th
                      scope={'col'}
                      className={`${css(
                        AppStyles.fontBold,
                        AppStyles.fontSize25
                      )}`}
                    >
                      Onfleet
                    </th>
                  </tr>
                </thead>

                {/* api intregation heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>
                  API & Integration
                </h1>

                {/* api data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    API
                  </td>
                  {API_DATA_ONFLEET &&
                    API_DATA_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* zapier data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Zapier integration
                  </td>
                  {ZAPIER_DATA_ONFLEET &&
                    ZAPIER_DATA_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* unleashed data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Unleashed integration
                  </td>
                  {UNLEASHED_DATA_ONFLEET &&
                    UNLEASHED_DATA_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* self service data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    API Selfservice auto scheduler
                  </td>
                  {SELFSERVICE_DATA_ONFLEET &&
                    SELFSERVICE_DATA_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>
              </tbody>
            </table>

            {/* route optimization engine */}
            <table
              className={`comparisonTableWrapperStyle ${css(
                styles.comparisonTableWrapper
              )}`}
            >
              <tbody>
                <thead>
                  <tr>
                    <th
                      scope={'col'}
                      className={`${css(styles.tableMainHeading)}`}
                    >
                      Route optimization engine
                    </th>
                    <th scope={'col'}>
                      <div className={`${css(styles.kiffgoTwoImgWrapper)}`}>
                        &nbsp;
                      </div>
                    </th>
                    <th
                      scope={'col'}
                      className={`${css(
                        AppStyles.fontBold,
                        AppStyles.fontSize25,
                        AppStyles.whiteColor
                      )}`}
                    >
                      Onfleet
                    </th>
                  </tr>
                </thead>

                {/* route optimization heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>
                  Route optimization engine
                </h1>

                {/* time window data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Delivery time window
                  </td>
                  {TIME_WINDOW_ONFLEET &&
                    TIME_WINDOW_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Service time data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Service time
                  </td>
                  {SERVICE_TIME_ONFLEET &&
                    SERVICE_TIME_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Vehicle capacity (payload) data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Vehicle capacity (payload)
                  </td>
                  {VEHICLE_CAPACITY_ONFLEET &&
                    VEHICLE_CAPACITY_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Driver’s schedule data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Driver’s schedule
                  </td>
                  {DRIVER_SCHEDULE_ONFLEET &&
                    DRIVER_SCHEDULE_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Max tasks per driver data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Max tasks per driver
                  </td>
                  {TASKS_PER_DRIVER_ONFLEET &&
                    TASKS_PER_DRIVER_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Driving speed adjustment data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Driving speed adjustment
                  </td>
                  {DRIVING_SPEED_ADJUSTMENT_ONFLEET &&
                    DRIVING_SPEED_ADJUSTMENT_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Handle driver break data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Handle driver break
                  </td>
                  {HANDLE_DRIVER_BREAK_ONFLEET &&
                    HANDLE_DRIVER_BREAK_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Handle priority orders data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Handle priority orders
                  </td>
                  {HANDLE_PRIORITY_ORDERS_ONFLEET &&
                    HANDLE_PRIORITY_ORDERS_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Set-up time required at hub data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Set-up time required at hub
                  </td>
                  {SETUP_TIME_ONFLEET &&
                    SETUP_TIME_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Solving from an initial solution (existing route) data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Solving from an initial solution (existing route)
                  </td>
                  {INITIAL_SOLUTION_ONFLEET &&
                    INITIAL_SOLUTION_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>
              </tbody>
            </table>

            {/* driver app */}
            <table
              className={`comparisonTableWrapperStyle ${css(
                styles.comparisonTableWrapper
              )}`}
            >
              <tbody>
                <thead>
                  <tr>
                    <th
                      scope={'col'}
                      className={`${css(styles.tableMainHeading)}`}
                    >
                      Driver App
                    </th>
                    <th scope={'col'}>
                      <div className={`${css(styles.kiffgoTwoImgWrapper)}`}>
                        &nbsp;
                      </div>
                    </th>
                    <th
                      scope={'col'}
                      className={`${css(
                        AppStyles.fontBold,
                        AppStyles.fontSize25,
                        AppStyles.whiteColor
                      )}`}
                    >
                      Onfleet
                    </th>
                  </tr>
                </thead>

                {/* driver app heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>
                  Driver App
                </h1>

                {/* in app call data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    In app call
                  </td>
                  {INAPP_CALL_ONFLEET &&
                    INAPP_CALL_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* In app SMS data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    In app SMS
                  </td>
                  {INAPP_SMS_ONFLEET &&
                    INAPP_SMS_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* In app ETA data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    In app ETA
                  </td>
                  {INAPP_ETA_ONFLEET &&
                    INAPP_ETA_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* QR code & Barecode scanning data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    QR code & Barecode scanning
                  </td>
                  {BARCODE_SCANNING_ONFLEET &&
                    BARCODE_SCANNING_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* View worked hours and weekly schedule  in driver app data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    View worked hours and weekly schedule in driver app
                  </td>
                  {HOURS_WEEKLY_SCHEDULE_ONFLEET &&
                    HOURS_WEEKLY_SCHEDULE_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Local storage for areas with no cell service data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Local storage for areas with no cell service
                  </td>
                  {LOCAL_STORAGE_ONFLEET &&
                    LOCAL_STORAGE_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Driver can reroute and see impact in app data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Driver can reroute and see impact in app
                  </td>
                  {DRIVER_REROUTE_ONFLEET &&
                    DRIVER_REROUTE_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>
              </tbody>
            </table>

            {/* Customer communication */}
            <table
              className={`comparisonTableWrapperStyle ${css(
                styles.comparisonTableWrapper
              )}`}
            >
              <tbody>
                <thead>
                  <tr>
                    <th
                      scope={'col'}
                      className={`${css(styles.tableMainHeading)}`}
                    >
                      Customer communication
                    </th>
                    <th scope={'col'}>
                      <div className={`${css(styles.kiffgoTwoImgWrapper)}`}>
                        &nbsp;
                      </div>
                    </th>
                    <th
                      scope={'col'}
                      className={`${css(
                        AppStyles.fontBold,
                        AppStyles.fontSize25,
                        AppStyles.whiteColor
                      )}`}
                    >
                      Onfleet
                    </th>
                  </tr>
                </thead>

                {/* customer communication heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>
                  Customer communication
                </h1>

                {/* Live order tracker for customers data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Live order tracker for customers
                  </td>
                  {LIVE_ORDER_ONFLEET &&
                    LIVE_ORDER_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Optional self scheduling functionality data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Optional self scheduling functionality
                  </td>
                  {OPTIONAL_SELF_SCHEDULING_ONFLEET &&
                    OPTIONAL_SELF_SCHEDULING_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>

                {/* Email proof of delivery with pic data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Email proof of delivery with pic
                  </td>
                  {EMAIL_PROOF_ONFLEET &&
                    EMAIL_PROOF_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>
                {/* Scheduled stage communication days in advance data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Scheduled stage communication days in advance
                  </td>
                  {SCHEDULE_STAGE_ONFLEET &&
                    SCHEDULE_STAGE_ONFLEET.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'yes' ? (
                            <img
                              src={Images.check_mark_img}
                              alt="green check"
                            />
                          ) : (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          )}
                        </td>
                      );
                    })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.additionalParaWrapper)}`}>
              <p className={`${css(styles.additionalPara)}`}>
                <a href={ROUTES.HOME} className={`${css(styles.kiffgoLink)}`}>
                  Kiffgo{' '}
                </a>
                is a leading SaaS that provides end-to-end optimization of
                operations and customer experiences in last-mile delivery.
                Kiffgo platform includes tools like : self-scheduling, route
                optimization, customer communication, real-time tracking and
                ETA, proof of delivery, delivery network intelligence and
                analytics.
              </p>
            </div>
          </div>
        </div>

        <WebFooter />
      </div>
    );
  }
}
