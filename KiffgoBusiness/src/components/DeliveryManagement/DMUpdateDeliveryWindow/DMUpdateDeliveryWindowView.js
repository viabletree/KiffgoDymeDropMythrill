// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import {
  BlackModal,
  DMDriverListing,
  DMButton,
  DMTextField
} from '../../../components';

import styles from './DMUpdateDeliveryWindowStyles';
import { AppStyles } from '../../../theme';
import { DM_BUTTON_THEME } from '../DMButton';
import { TASK_FIELDS_NAME } from '../../../constants';
import Util from '../../../services/Util';

export default class DMUpdateDeliveryWindowModalView extends React.PureComponent {
  render() {
    return (
      <BlackModal
        open
        onClose={this.props.onModalCloseClick}
        rightButton={{
          title: this.props.step === 1 ? 'Next' : 'Confirm',
          onClick: this.props.onNextClick,
          isLoading: this.props.loading,
          disabled: this.props.timeError
        }}
        width="510px"
        modalStyle={{ overflow: 'initial' }}
        overRideOverFlow
      >
        <div className={css(styles.wrapper)}>
          <div className={css(styles.heading)}>
            <span>Change completion Date/Time</span>
          </div>
          {this.props.step === 1 && (
            <div className={css(styles.infoText)}>
              <span>
                {`${this.props.tasksList.length ||
                  4} task(s) selected will be affected
              by the change`}
              </span>
            </div>
          )}
          {this.props.step === 2 && (
            <div className={css([styles.infoText, AppStyles.font14])}>
              <span>
                {`${this.props.tasksList.length ||
                  0} task(s) completion date/time will be changed to: `}
              </span>
            </div>
          )}
          {/* calendar view start */}
          {this.props.step === 1 && (
            <div className={`mt-2 ${css(AppStyles.flexColumn)}`}>
              <div className={'mt-3 d-flex'}>
                <div
                  className={`dm_taskinput_calendar_wrapper ${css(
                    AppStyles.flex1
                  )}`}
                >
                  <span className={css(AppStyles.heading60)}>
                    Complete after
                  </span>
                  <div className="d-flex align-items-end pr-4 mt-1">
                    <DMTextField
                      name="caTime"
                      value={this.props.CATime}
                      onChange={this.props.onCAChange}
                      maxLength={5}
                      isDisabled={this.props.disabled}
                      error={this.props.CAError}
                      placeHolder="Time"
                    />
                    <button
                      className={`${css(styles.calendarBtn)}`}
                      onClick={this.props.onCACalendarClick}
                    >
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className={css(styles.calendarIcon)}
                      />
                    </button>
                  </div>
                  <label className={`${css(styles.dtText)}`}>
                    {Util.dateParserTwo(this.props.CADate)}
                  </label>
                  {this.props.showCACalendar && (
                    <OutsideClickHandler
                      onOutsideClick={this.props.hideBothCalendars}
                    >
                      <div className="dmTaskCalenderWrapper">
                        <Calendar onChange={this.props.onCADateSelect} />
                      </div>
                    </OutsideClickHandler>
                  )}
                </div>
                <div
                  className={`dm_taskinput_calendar_wrapper dm_taskinput_calendar_wrapper_right ${css(
                    AppStyles.flex1
                  )}`}
                >
                  <span className={css(AppStyles.heading60)}>
                    Complete Before
                  </span>
                  <div className="d-flex align-items-end pr-4 mt-1">
                    <DMTextField
                      name="cbTime"
                      value={this.props.CBTime}
                      onChange={this.props.onCBChange}
                      maxLength={5}
                      error={this.props.CBError}
                      isDisabled={this.props.disabled}
                      placeHolder="Time"
                    />
                    <button
                      className={`${css(styles.calendarBtn)}`}
                      onClick={this.props.onCBCalendarClick}
                    >
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className={css(styles.closeIcon)}
                      />
                    </button>
                  </div>
                  <label className={`${css(styles.dtText)}`}>
                    {Util.dateParserTwo(this.props.CBDate)}
                  </label>
                  {this.props.showCBCalendar && (
                    <OutsideClickHandler
                      onOutsideClick={this.props.hideBothCalendars}
                    >
                      <div className={`dmTaskCalenderWrapper`}>
                        <Calendar onChange={this.props.onCBDateSelect} />
                      </div>
                    </OutsideClickHandler>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* calendar view end */}
          {this.props.step === 2 && (
            <div className={css(styles.infoText)}>
              <span>{`Between ${Util.dateParserTwo(
                this.props.CADate
              )} and ${Util.dateParserTwo(this.props.CBDate)}`}</span>
            </div>
          )}
        </div>
      </BlackModal>
    );
  }
}
// {
// tasks : [
//   "asdasdasd",
//   "asdasdasd",
//   "asdasdasd",
//   "asdasdasd",
// ],
// startTime : "isoString",
// endTime : "isoString"}
