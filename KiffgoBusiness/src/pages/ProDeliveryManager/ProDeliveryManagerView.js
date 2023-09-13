// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './ProDeliveryManagerStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import {
  DISPATCHER_DATA_PDM,
  API_DATA_PDM,
  ZAPIER_DATA_PDM,
  TITAN_INT_PDM,
  SELFSERVICE_DATA_PDM,
  TIME_WINDOW_PDM,
  SERVICE_TIME_PDM,
  VEHICLE_CAPACITY_PDM,
  DRIVER_SCHEDULE_PDM,
  TASKS_PER_DRIVER_PDM,
  DRIVING_SPEED_ADJUSTMENT_PDM,
  HANDLE_DRIVER_BREAK_PDM,
  HANDLE_PRIORITY_ORDERS_PDM,
  SETUP_TIME_PDM,
  INITIAL_SOLUTION_PDM,
  INAPP_CALL_PDM,
  INAPP_SMS_PDM,
  INAPP_ETA_PDM,
  BARCODE_SCANNING_PDM,
  HOURS_WEEKLY_SCHEDULE_PDM,
  LOCAL_STORAGE_PDM,
  DRIVER_REROUTE_PDM,
  LIVE_ORDER_PDM,
  OPTIONAL_SELF_SCHEDULING_PDM,
  EMAIL_PROOF_PDM,
  SCHEDULE_STAGE_PDM,
  ROUTES,
  COMPARE_PRO_DELIVERY_LISTING
} from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
export default class ProDeliveryManagerView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Pro Delivery Manager Alternative</title>
          <meta
            data-react-helmet="true"
            id="kiffgo_vs_pro_delivery_manager"
            name="Pro Delivery Manager Alternative"
            content="Most pharmacies using Pro Delivery manager (PDM) are really disappointed with the software. There are several critical issues reported. Here are a few of them: Addresses are not mapped accurately, Application UX is too complex to learn and the driver cannot complete a task when there is no mobile internet. Kiffgo is a powerful alternative for pharmacy delivery.Pharmacy route planning. Driver tracking. Pharmacy delivery software. Delivery management software for pharmacy. Pharmacy Route optimization software"
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <ComparisonHeroSection altText="Compare Pro Delivery Manager vs Kiffgo" />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.titleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>
                Kiffgo vs Pro Delivery Manager
              </h1>
              <p className={`${css(styles.description)}`}>
                Kiffgo delivers much higher value and productivity than Pro
                Delivery manager (PDM)
              </p>
            </div>
          </div>

          <div className={`row`}>
            <div className={`col-12 ${css(styles.detailTextWrapper)}`}>
              <p className={`${css(styles.detailText)}`}>
                Are you a pharmacy looking to streamline your last mile delivery
                operations? Are you using Pro Delivery Manager (PDM)? While it
                is great to switch from “pen and paper” manual route planning to
                a route planning and delivery management software, Pro Delivery
                Manager (PDM) fails to deliver full value and productivity to
                pharmacies. Here is why: most pharmacies using Pro Delivery
                manager (PDM) are really disappointed with the software. There
                are several critical issues reported undermining the
                productivity of your pharmacy while using Pro Delivery manager
                (PDM). <br /> Here are a few of them:
                <ul className={`${css(styles.listingWrapper)}`}>
                  {COMPARE_PRO_DELIVERY_LISTING &&
                    COMPARE_PRO_DELIVERY_LISTING.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={`${css(styles.listingItem)}`}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                </ul>
                <br />
                <br />
                Kiffgo is a powerful alternative for pharmacy delivery. You will
                save of thousands $$$ or £££ every year by switching from Pro
                Delivery Manager (PDM) to Kiffgo pharmacy delivery software.
                <br />
                <br />
                We put together this no-nonsense overview between Kiffgo and Pro
                Delivery Manager (PDM). So you can choose the right software for
                your business.
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
                      Pro Delivery Manager (PDM)
                    </th>
                  </tr>
                </thead>

                {/* plan heading */}
                <h1 className={`${css(styles.responsiveHeading)}`}>Plan</h1>

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
                  {DISPATCHER_DATA_PDM &&
                    DISPATCHER_DATA_PDM.map((item, index) => {
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
                      Pro Delivery Manager (PDM)
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
                  {API_DATA_PDM &&
                    API_DATA_PDM.map((item, index) => {
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
                  {ZAPIER_DATA_PDM &&
                    ZAPIER_DATA_PDM.map((item, index) => {
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

                {/* Titan (PMR) integration data */}
                <tr>
                  <td
                    className={`${css(
                      AppStyles.weight4,
                      AppStyles.fontSize20
                    )}`}
                  >
                    Titan (PMR) integration
                  </td>
                  {TITAN_INT_PDM &&
                    TITAN_INT_PDM.map((item, index) => {
                      return (
                        <td
                          scope="row"
                          data-label={item.key}
                          className={`${css(
                            AppStyles.fontSize20,
                            styles.tableData
                          )}`}
                        >
                          {item.name === 'no' ? (
                            <img src={Images.cross_mark_img} alt="cross mark" />
                          ) : (
                            item.name
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
                  {SELFSERVICE_DATA_PDM &&
                    SELFSERVICE_DATA_PDM.map((item, index) => {
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
                      Pro Delivery Manager (PDM)
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
                  {TIME_WINDOW_PDM &&
                    TIME_WINDOW_PDM.map((item, index) => {
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
                  {SERVICE_TIME_PDM &&
                    SERVICE_TIME_PDM.map((item, index) => {
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
                  {VEHICLE_CAPACITY_PDM &&
                    VEHICLE_CAPACITY_PDM.map((item, index) => {
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
                  {DRIVER_SCHEDULE_PDM &&
                    DRIVER_SCHEDULE_PDM.map((item, index) => {
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
                  {TASKS_PER_DRIVER_PDM &&
                    TASKS_PER_DRIVER_PDM.map((item, index) => {
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
                  {DRIVING_SPEED_ADJUSTMENT_PDM &&
                    DRIVING_SPEED_ADJUSTMENT_PDM.map((item, index) => {
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
                  {HANDLE_DRIVER_BREAK_PDM &&
                    HANDLE_DRIVER_BREAK_PDM.map((item, index) => {
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
                  {HANDLE_PRIORITY_ORDERS_PDM &&
                    HANDLE_PRIORITY_ORDERS_PDM.map((item, index) => {
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
                  {SETUP_TIME_PDM &&
                    SETUP_TIME_PDM.map((item, index) => {
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
                  {INITIAL_SOLUTION_PDM &&
                    INITIAL_SOLUTION_PDM.map((item, index) => {
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
                      Pro Delivery Manager (PDM)
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
                  {INAPP_CALL_PDM &&
                    INAPP_CALL_PDM.map((item, index) => {
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
                  {INAPP_SMS_PDM &&
                    INAPP_SMS_PDM.map((item, index) => {
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
                  {INAPP_ETA_PDM &&
                    INAPP_ETA_PDM.map((item, index) => {
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
                  {BARCODE_SCANNING_PDM &&
                    BARCODE_SCANNING_PDM.map((item, index) => {
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
                  {HOURS_WEEKLY_SCHEDULE_PDM &&
                    HOURS_WEEKLY_SCHEDULE_PDM.map((item, index) => {
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
                  {LOCAL_STORAGE_PDM &&
                    LOCAL_STORAGE_PDM.map((item, index) => {
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
                  {DRIVER_REROUTE_PDM &&
                    DRIVER_REROUTE_PDM.map((item, index) => {
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
                      Pro Delivery Manager (PDM)
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
                  {LIVE_ORDER_PDM &&
                    LIVE_ORDER_PDM.map((item, index) => {
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
                  {OPTIONAL_SELF_SCHEDULING_PDM &&
                    OPTIONAL_SELF_SCHEDULING_PDM.map((item, index) => {
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
                  {EMAIL_PROOF_PDM &&
                    EMAIL_PROOF_PDM.map((item, index) => {
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
                  {SCHEDULE_STAGE_PDM &&
                    SCHEDULE_STAGE_PDM.map((item, index) => {
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
