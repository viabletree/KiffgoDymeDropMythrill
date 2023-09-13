// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import Calendar from 'react-calendar';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './OptimizeStep1Styles';
import { DMTextField, DMDriverListing, Checkbox } from '../../../../components';
import { AppStyles } from '../../../../theme';
import Util from '../../../../services/Util';
import { HUB_FIELDS_NAME, DATE_FORMAT3,OPTIMIZE_TYPE_VALUES } from '../../../../constants';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';

export const OPTIMIZE_TO = [
  {
    title: 'Always on time',
    id: 1
  },
  { title: 'Minimize drive time', id: 2 }
];
export const OPTIMIZE_TYPE = [
  {
    title: 'Multiple trips - Shipments',
    id: OPTIMIZE_TYPE_VALUES.SHIPMENT
  },
  { title: 'Single Trip - Job', id: OPTIMIZE_TYPE_VALUES.JOB }
  
];
export default class OptimizeStep1View extends React.PureComponent {
  render() {
    const {
      hubListing,
      optimizeFormData,
      showDateCalendar,
      hideDateCalendar,
      calendarVisible,
      onDateSelect,
      onDriverClick,
      onAllDriverPress,
      onNoneDriverPress,
      onStartFromChange,
      onEndAtChange,

      onOptimizeToChange,
      onOptimizeTypeChange,
      onServiceTimeChange,
      onMaxDelayChange,
      ontaskPerDriverChange
    } = this.props;
    const {endToIndex,startFromIndex} = optimizeFormData;


    return (
      <>
        <div
          className="dm_taskinput_calendar_wrapper dm_optimizeinput_calendar_wrapper"
        >
          <span className={css(AppStyles.heading61)}>Date</span>
          <div className={css(styles.dateWrapper)}>
            <div className={css(AppStyles.flex1)}>
              <DMTextField
                value={Util.getFormattedDateTime(
                  optimizeFormData.date,
                  DATE_FORMAT3
                )}
                isReadOnly
              />
            </div>
            <button
              className={`${css(styles.calendarBtn)}`}
              onClick={showDateCalendar}
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className={css(styles.calendarIcon)}
              />
            </button>
          </div>
          {calendarVisible && (
            <OutsideClickHandler onOutsideClick={hideDateCalendar}>
              <div className="dmTaskCalenderWrapper">
                <Calendar onChange={onDateSelect} minDate={new Date()} />
              </div>
            </OutsideClickHandler>
          )}
        </div>

        <div className="mt-2">
          <span className={`${css(AppStyles.heading61)}`}>Drivers</span>

          <div className={`${css(styles.driverListingWrapper)} mt-2`}>
            <DMDriverListing
              {...this.props}
              // isLoading={diriverListIsLoading}
              selectedDriverIds={optimizeFormData.drivers}
              hasFixedHeight
              multiSelect
              onDriverClick={onDriverClick}
              showNoneAll
              onAllPress={onAllDriverPress}
              onNonePress={onNoneDriverPress}
            />
          </div>
        </div>

        <div className="d-flex mt-4">
          {/* <div className={`${css([AppStyles.flex1, AppStyles.hide])} mr-2`}>
            <span className={css(AppStyles.heading61)}>
              Max tasks per driver{' '}
            </span>
            <div className="mt-1">
              <DMTextField
                value={optimizeFormData.taskPerDriver}
                type="number"
                min="0"
                onChange={ontaskPerDriverChange}
              />
            </div>
          </div> */}

          <div className={`${css(AppStyles.flex1)} ml-2`}>
            <span className={css(AppStyles.heading61)}>Service time (min)</span>
            <div className="mt-1">
              <DMTextField
                value={optimizeFormData.serviceTime}
                type="number"
                min="1"
                onChange={onServiceTimeChange}
              />
            </div>
          </div>
          <div className={`${css(AppStyles.flex1)} ml-2`}>
            <span className={css(AppStyles.heading61)}>
              Max allowed delay (min)
            </span>
            <div className="mt-1">
              <DMTextField
                value={optimizeFormData.maxAllowedDelay}
                type="number"
                min="0"
                onChange={onMaxDelayChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-4">
          {/* <div className={`${css(AppStyles.flex2)} mr-2`}>
            <span className={css(AppStyles.heading61)}>
              Max allowed delay (min)
            </span>
            <div className="mt-1">
              <DMTextField
                value={optimizeFormData.maxAllowedDelay}
                type="number"
                min="0"
                onChange={onMaxDelayChange}
              />
            </div>
          </div> */}
          <div className={`${css(AppStyles.flex2)} mr-2`} />
        </div>

        <div className="d-flex mt-4">
          <div className={`${css(AppStyles.flex2)}`}>
            <span className={css(AppStyles.heading61)}>Route should...</span>
            <div className="d-flex mt-3">
              <span
                className={css([AppStyles.heading61, styles.hubSelectionLeft])}
              >
                Start from:
              </span>
              <select
                className={css(styles.selectOptions)}
                onChange={onStartFromChange}
              >
                <option>Select</option>;
                {hubListing.map((item, index) => {
                  return (
                    <option
                      key={item.id}
                      data-latitude={item.hub_location.latitude}
                      data-longitude={item.hub_location.longitude}
                      selected={item.id === startFromIndex}
                      value={item.id}
                    >
                      {item[HUB_FIELDS_NAME.NAME]}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="d-flex mt-2">
              <span
                className={css([AppStyles.heading61, styles.hubSelectionLeft])}
              >
                End at:
              </span>
              <select
                className={css(styles.selectOptions)}
                onChange={onEndAtChange}
              >
                <option>Select</option>;
                {hubListing.map((item, index) => {
                  return (
                    <option
                      selected={item.id === endToIndex}
                      data-latitude={item.hub_location.latitude}
                      data-longitude={item.hub_location.longitude}
                      key={item.id}
                      value={item.id}
                    >
                      {item[HUB_FIELDS_NAME.NAME]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex mt-4">
          <div className={`${css(AppStyles.flex2)}`}>
            <span className={css(AppStyles.heading61)}>Optimize to...</span>
            <div className="mt-3">
              {OPTIMIZE_TO.map(item => {
                return (
                  <div className="mb-2">
                    <Checkbox
                       key={item.id}
                      title={item.title}
                      isChecked={item.id === optimizeFormData.optimizeTo}
                      theme={CHECKBOX_THEME.THEME3}
                      onClick={() => {
                        onOptimizeToChange(item.id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div className={`${css(AppStyles.flex2)}`}>
            <span className={css(AppStyles.heading61)}>Optimization type: </span>
            <div className={`${css([AppStyles.flexBox,AppStyles.spaceBetween])} mt-3`}>
              {OPTIMIZE_TYPE.map(item => {
                return (
                  <div>
                    <Checkbox
                      key={item.id}
                      title={item.title}
                      isChecked={item.id === optimizeFormData.optimizationType}
                      theme={CHECKBOX_THEME.THEME3}
                      onClick={() => {
                        onOptimizeTypeChange(item.id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
