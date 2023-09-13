// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './DMDriverSchedulerStyles';
import { BlackModal, DMTextField } from '../../../components';
import { AppStyles } from '../../../theme';
import {
  TIME_FORMAT4,
  DATE_TIME_FORMAT1,
  DRIVER_SCHEDULE_INVALID_TIME
} from '../../../constants';
// import {MODAL_BOTTOMS_THEME} from '../../BlackModal';
import Util from '../../../services/Util';

const startOfDay = moment()
  .startOf('day')
  .format(DATE_TIME_FORMAT1);
const renderTimeFromMinutes = (minutes, format = TIME_FORMAT4) =>
  moment(startOfDay)
    .add(minutes, 'minutes')
    .format(format);
// const getlengthOfNumber = number => number.toString().length;

/**
 *
 * @param {string} time time in string but in 24 hour format
 */
const calculateMinutesFrom24HourFormat = time => {
  if (_.isUndefined(time)) return '';

  const _time = time.padStart(4, '0');
  const hours = Number(_time.substring(0, 2));
  const minutes = Number(_time.substring(2, 4));
  return hours * 60 + minutes;
};
const renderDuration = data => {
  const {
    start_time: startingTime,
    start_time_error: sError,
    end_time: endingTime,
    end_time_error: eError
  } = data;
  const sTotalMinutes = calculateMinutesFrom24HourFormat(startingTime);
  const eTotalMinutes = calculateMinutesFrom24HourFormat(endingTime);
  if (
    _.isNaN(eTotalMinutes) ||
    _.isNaN(sTotalMinutes) ||
    eTotalMinutes < sTotalMinutes ||
    sError ||
    eError
  )
    return '00:00';

  const totalMinutes = eTotalMinutes - sTotalMinutes;

  let hours = Math.floor(totalMinutes / 60).toString();
  hours = hours.length < 2 ? `0${hours}` : hours;
  let minutes = (totalMinutes % 60).toString();
  minutes = minutes.length < 2 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
};

const renderBreakDuration = data => {
  const {
    start_break_time: startingTime,
    start_break_time_error: sError,
    end_break_time: endingTime,
    end_break_time_error: eError
  } = data;

  const sTotalMinutes = calculateMinutesFrom24HourFormat(startingTime);
  const eTotalMinutes = calculateMinutesFrom24HourFormat(endingTime);
  if (
    _.isNaN(eTotalMinutes) ||
    _.isNaN(sTotalMinutes) ||
    eTotalMinutes < sTotalMinutes ||
    sError ||
    eError
  )
    return '00:00';

  const totalMinutes = eTotalMinutes - sTotalMinutes;
  let hours = Math.floor(totalMinutes / 60).toString();
  hours = hours.length < 2 ? `0${hours}` : hours;
  let minutes = (totalMinutes % 60).toString();
  minutes = minutes.length < 2 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
};

const showTime = (error, time) => {
  const totalMinutes = calculateMinutesFrom24HourFormat(time);
  if (error === DRIVER_SCHEDULE_INVALID_TIME)
    return DRIVER_SCHEDULE_INVALID_TIME;

  return time && renderTimeFromMinutes(totalMinutes);
};

const MAX_NUMBER = 4;
const TimeComponent = ({
  name,
  onTimeChange,
  onBreakTimeChange,
  data,
  index
}) => {
  return (
    <div className={`${css(styles.scheduleWrapper)}`}>
      <div className={`${css(styles.titleWrapper)}`}>
        {moment.weekdays(index)}
      </div>
      <div
        className={`${css([
          styles.titleWrapper,
          AppStyles.fontSize13,
          AppStyles.mTop5
        ])}`}
      >
        Driver’s working hours with break included
      </div>
      <div className={css(styles.innerWrapper)}>
        <div className={`${css(styles.timeWrapper)}`}>
          <div className={css(styles.timeField)}>
            <p className={css(styles.smallFont)}>Start</p>
            <DMTextField
              value={data.start_time}
              onChange={v => onTimeChange('start_time', name, v.target.value)}
              error={data.start_time_error}
              styles={styles.mTopMinusTen}
              maxLength={MAX_NUMBER}
            />
            <p className={css(styles.smallFont)}>
              {data.default_start_time &&
                showTime(data.start_time_error, data.default_start_time)}
            </p>
          </div>
          <div className={css(styles.timeField)}>
            <p className={css(styles.smallFont)}>End</p>

            <DMTextField
              value={data.end_time}
              onChange={v => onTimeChange('end_time', name, v.target.value)}
              error={data.end_time_error}
              styles={styles.mTopMinusTen}
              maxLength={MAX_NUMBER}
            />
            <p className={css(styles.smallFont)}>
              {data.default_end_time &&
                showTime(data.end_time_error, data.default_end_time)}
            </p>
          </div>
          <div>
            <p className={css(AppStyles.fontSize13)}>Duration</p>
            <p
              className={css([AppStyles.fontSize11, AppStyles.textAlignCenter])}
            >
              {renderDuration(data)}
            </p>
          </div>
        </div>
        <div
          className={`${css([
            styles.titleWrapper,
            AppStyles.fontSize13,
            AppStyles.mTop10
          ])}`}
        >
          Driver’s break
        </div>
        <div className={`${css([styles.timeWrapper, AppStyles.mTop5])}`}>
          <div className={css(styles.timeField)}>
            <p className={css(styles.smallFont)}>Start</p>
            <DMTextField
              value={data.start_break_time}
              onChange={v =>
                onBreakTimeChange('start_break_time', name, v.target.value)
              }
              error={data.start_break_time_error}
              styles={styles.mTopMinusTen}
              maxLength={MAX_NUMBER}
            />
            <p className={css(styles.smallFont)}>
              {data.default_start_break_time &&
                showTime(
                  data.start_break_time_error,
                  data.default_start_break_time
                )}
            </p>
          </div>
          <div className={css(styles.timeField)}>
            <p className={css(styles.smallFont)}>End</p>

            <DMTextField
              value={data.end_break_time}
              onChange={v =>
                onBreakTimeChange('end_break_time', name, v.target.value)
              }
              error={data.end_break_time_error}
              styles={styles.mTopMinusTen}
              maxLength={MAX_NUMBER}
            />
            <p className={css(styles.smallFont)}>
              {data.default_end_break_time &&
                showTime(
                  data.end_break_time_error,
                  data.default_end_break_time
                )}
            </p>
          </div>
          <div>
            <p className={css(AppStyles.fontSize13)}>Duration</p>
            <p
              className={css([AppStyles.fontSize11, AppStyles.textAlignCenter])}
            >
              {renderBreakDuration(data)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TimeComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default class DMDriverSchedulerView extends React.PureComponent {
  render() {
    const {
      driverDetail: { driver_name: name, driver_phone: phone },
      closeViewDriver,
      onTimeChange,
      onBreakTimeChange,
      weekObject,
      submitSchedule,
      isLoading
    } = this.props;
    return (
      <BlackModal
        open
        onClose={closeViewDriver}
        rightButton={{
          title: 'Done',
          onClick: submitSchedule,
          isLoading
        }}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div>
            <p className={`${css(styles.topHeading)}`}>
              Edit driver’s Break & Schedule
            </p>
            <p
              className={`${css([
                AppStyles.fontSize16,
                AppStyles.pBottom10,
                AppStyles.pTop10
              ])}`}
            >
              {name} {Util.getFormattedPhone(phone)}
            </p>
            <p className={css(styles.contentText)}>
              Kiffgo’s route optimization algorithm considers hubs, delivery
              locations, time windows, driver schedules, break, traffic and
              vehicle capacities.
            </p>
          </div>
          <div className={css(AppStyles.mTop10)}>
            {weekObject.map((o, i) => (
              <TimeComponent
                name={o.name}
                index={i}
                key={o.name}
                data={o}
                onTimeChange={onTimeChange}
                onBreakTimeChange={onBreakTimeChange}
              />
            ))}
          </div>
        </div>
      </BlackModal>
    );
  }
}
