// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './CircuitComparisonStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import {
  DRIVERS_DATA_CIRCUIT,
  DISPATCHER_DATA_CIRCUIT,
  API_DATA_CIRCUIT,
  ZAPIER_DATA_CIRCUIT,
  UNLEASHED_DATA_CIRCUIT,
  SELFSERVICE_DATA_CIRCUIT,
  TIME_WINDOW_CIRCUIT,
  SERVICE_TIME_CIRCUIT,
  VEHICLE_CAPACITY_CIRCUIT,
  DRIVER_SCHEDULE_CIRCUIT,
  TASKS_PER_DRIVER_CIRCUIT,
  DRIVING_SPEED_ADJUSTMENT_CIRCUIT,
  HANDLE_DRIVER_BREAK_CIRCUIT,
  HANDLE_PRIORITY_ORDERS_CIRCUIT,
  SETUP_TIME_CIRCUIT,
  INITIAL_SOLUTION_CIRCUIT,
  INAPP_CALL_CIRCUIT,
  INAPP_SMS_CIRCUIT,
  INAPP_ETA_CIRCUIT,
  BARCODE_SCANNING_CIRCUIT,
  HOURS_WEEKLY_SCHEDULE_CIRCUIT,
  LOCAL_STORAGE_CIRCUIT,
  DRIVER_REROUTE_CIRCUIT,
  LIVE_ORDER_CIRCUIT,
  OPTIONAL_SELF_SCHEDULING_CIRCUIT,
  EMAIL_PROOF_CIRCUIT,
  SCHEDULE_STAGE_CIRCUIT,
  SCHEDULE_STAGE_CUSTOMER_CIRCUIT,
  ROUTES
} from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
export default class CircuitComparisonView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Circuit Alternative</title>
          <meta
            data-react-helmet="true"
            id="kiffgo_vs_circuit"
            name="why circuit for teams sucks"
            content="searching which route planning and dispatch software to use for the first time? The key differences between Kiffgo and Circuit for delivery drivers, dispatchers, route planning and route optimization. Circuit for teams lacks lots of features which can drop the productivity of your dispatchers and drivers and ultimately drop the ROI of your business. Empower your dispatchers and drivers with kiffgo delivery software."
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <ComparisonHeroSection altText="Compare Circuit vs Kiffgo" />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.titleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>Kiffgo vs Circuit</h1>
              <p className={`${css(styles.description)}`}>
                Kiffgo is a better and powerful alternative to Circuit
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
                The route planning is just the tip of the iceberg. There are
                significant differences between Kiffgo and Circuit for delivery
                drivers, dispatchers, route planning and route optimization.
                Circuit for teams lacks lots of features which can drop the
                productivity of your dispatchers and drivers and ultimately drop
                the ROI of your business. Empower your dispatchers and drivers
                with kiffgo.
                <br />
                <br />
                We put together this no-nonsense overview between Kiffgo and
                Circuit for Team. So you can choose the right software for your
                business.
              </p>
            </div>
          </div>
        </div>

        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            {/* plan table */}
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
                      Plan
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
                      Circuit
                    </th>
                  </tr>
                </thead>

                {/* plan heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>Plan</h1>

                {/* drivers data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Drivers
                  </td>
                  {DRIVERS_DATA_CIRCUIT &&
                    DRIVERS_DATA_CIRCUIT.map((item, index) => {
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

                {/* dispatchers data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Dispatcher
                  </td>
                  {DISPATCHER_DATA_CIRCUIT &&
                    DISPATCHER_DATA_CIRCUIT.map((item, index) => {
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
              </tbody>
            </table>

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
                      Circuit
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
                  {API_DATA_CIRCUIT &&
                    API_DATA_CIRCUIT.map((item, index) => {
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
                            item.name
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
                  {ZAPIER_DATA_CIRCUIT &&
                    ZAPIER_DATA_CIRCUIT.map((item, index) => {
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
                  {UNLEASHED_DATA_CIRCUIT &&
                    UNLEASHED_DATA_CIRCUIT.map((item, index) => {
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
                  {SELFSERVICE_DATA_CIRCUIT &&
                    SELFSERVICE_DATA_CIRCUIT.map((item, index) => {
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
                      Circuit
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
                  {TIME_WINDOW_CIRCUIT &&
                    TIME_WINDOW_CIRCUIT.map((item, index) => {
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
                  {SERVICE_TIME_CIRCUIT &&
                    SERVICE_TIME_CIRCUIT.map((item, index) => {
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
                  {VEHICLE_CAPACITY_CIRCUIT &&
                    VEHICLE_CAPACITY_CIRCUIT.map((item, index) => {
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
                  {DRIVER_SCHEDULE_CIRCUIT &&
                    DRIVER_SCHEDULE_CIRCUIT.map((item, index) => {
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
                  {TASKS_PER_DRIVER_CIRCUIT &&
                    TASKS_PER_DRIVER_CIRCUIT.map((item, index) => {
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
                  {DRIVING_SPEED_ADJUSTMENT_CIRCUIT &&
                    DRIVING_SPEED_ADJUSTMENT_CIRCUIT.map((item, index) => {
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
                  {HANDLE_DRIVER_BREAK_CIRCUIT &&
                    HANDLE_DRIVER_BREAK_CIRCUIT.map((item, index) => {
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
                  {HANDLE_PRIORITY_ORDERS_CIRCUIT &&
                    HANDLE_PRIORITY_ORDERS_CIRCUIT.map((item, index) => {
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
                  {SETUP_TIME_CIRCUIT &&
                    SETUP_TIME_CIRCUIT.map((item, index) => {
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
                  {INITIAL_SOLUTION_CIRCUIT &&
                    INITIAL_SOLUTION_CIRCUIT.map((item, index) => {
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
                      Circuit
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
                  {INAPP_CALL_CIRCUIT &&
                    INAPP_CALL_CIRCUIT.map((item, index) => {
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
                  {INAPP_SMS_CIRCUIT &&
                    INAPP_SMS_CIRCUIT.map((item, index) => {
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
                  {INAPP_ETA_CIRCUIT &&
                    INAPP_ETA_CIRCUIT.map((item, index) => {
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
                  {BARCODE_SCANNING_CIRCUIT &&
                    BARCODE_SCANNING_CIRCUIT.map((item, index) => {
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
                  {HOURS_WEEKLY_SCHEDULE_CIRCUIT &&
                    HOURS_WEEKLY_SCHEDULE_CIRCUIT.map((item, index) => {
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
                  {LOCAL_STORAGE_CIRCUIT &&
                    LOCAL_STORAGE_CIRCUIT.map((item, index) => {
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
                  {DRIVER_REROUTE_CIRCUIT &&
                    DRIVER_REROUTE_CIRCUIT.map((item, index) => {
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
                      Circuit
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
                  {LIVE_ORDER_CIRCUIT &&
                    LIVE_ORDER_CIRCUIT.map((item, index) => {
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
                  {OPTIONAL_SELF_SCHEDULING_CIRCUIT &&
                    OPTIONAL_SELF_SCHEDULING_CIRCUIT.map((item, index) => {
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
                  {EMAIL_PROOF_CIRCUIT &&
                    EMAIL_PROOF_CIRCUIT.map((item, index) => {
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
                  {SCHEDULE_STAGE_CIRCUIT &&
                    SCHEDULE_STAGE_CIRCUIT.map((item, index) => {
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
