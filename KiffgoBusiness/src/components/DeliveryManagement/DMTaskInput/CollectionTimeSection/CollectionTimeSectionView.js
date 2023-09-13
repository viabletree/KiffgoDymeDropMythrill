// @flow
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './CollectionTimeSectionStyles';
import { DMTextField } from '../../../../components';
import { AppStyles } from '../../../../theme';
import Util from '../../../../services/Util';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class CollectionTimeSectionView extends React.PureComponent {
  render() {
    return (
      <div className={`mt-5 ${css(AppStyles.flexColumn)}`}>
        <div className={'mt-3 d-flex'}>
          <div
            className={`dm_taskinput_calendar_wrapper ${css(AppStyles.flex1)}`}
          >
            <span className={css(AppStyles.heading60)}>Complete after</span>
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
              {Util.dateParserTwo(
                this.props.taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER]
              )}
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
            <span className={css(AppStyles.heading60)}>Complete Before</span>
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
              {Util.dateParserTwo(
                this.props.taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE]
              )}
            </label>
            {this.props.showCBCalendar && (
              <OutsideClickHandler
                onOutsideClick={this.props.hideBothCalendars}
              >
                <div className="dmTaskCalenderWrapper">
                  <Calendar onChange={this.props.onCBDateSelect} />
                </div>
              </OutsideClickHandler>
            )}
          </div>
        </div>
      </div>
    );
  }
}
