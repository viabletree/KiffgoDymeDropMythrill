/* eslint-disable camelcase */
// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  faPlus,
  faMinus,
  faPencilAlt,
  faDownload,
  faClipboard,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TooltipTrigger from 'react-popper-tooltip';
import styles from './DmCommunicationsSettingStyles';
import { DM_MODULES, ROUTES } from '../../../../constants';
import { AppStyles } from '../../../../theme';
import { BlackModal, DMTextField, Checkbox, TextField } from '../../..';

import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';

const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container'
        })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement,
              fontSize: 12
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);

export default class DmCommunicationsSettingView extends React.PureComponent {
  render() {
    const {
      loading,
      sms,
      email,
      dropoff,
      pickup,
      onCheckBoxClick,
      onAllNoneClick,
      schedule_stage,
      schedule_content,
      onTextChange,
      intransit_content,
      intransit_stage,
      completed_content,
      completed_stage,
      eta_range,
      onReset,
      onSave
    } = this.props;

    return (
      <div
        className={css([
          AppStyles.flexBox,
          AppStyles.flexColumn,
          AppStyles.pLeft20,
          AppStyles.pRight20,
          AppStyles.widthFull
        ])}
      >
        {/*  Option selection part*/}
        {/* Task type selection*/}
        <div className={css([AppStyles.flexBox])}>
          <div className={css([AppStyles.heading60, AppStyles.flex1])}>
            TASK TYPE
          </div>
          <div
            className={css([
              AppStyles.flexBox,
              AppStyles.flex1,
              AppStyles.justifyEnd
            ])}
          >
            <div className={css(styles.saveView)} onClick={onSave}>
              Save
            </div>
            <div
              onClick={onReset}
              className={css([styles.saveView, AppStyles.pLeft5])}
            >
              Reset
            </div>
          </div>
        </div>
        <div className={css(styles.taskTypeParent)}>
          {/* Selection */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])} />
            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <div
                className={css(AppStyles.mRight5)}
                onClick={() => onAllNoneClick(true, true)}
              >
                All
              </div>
              <div onClick={() => onAllNoneClick(true, false)}>None</div>
            </div>
          </div>
          {/* Drop-off */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])}>
              Delivery (Drop-off)
            </div>
            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <Checkbox
                title=""
                name="dropOff"
                isChecked={dropoff}
                theme={CHECKBOX_THEME.THEME3}
                onClick={() => onCheckBoxClick('dropoff', !dropoff)}
              />
            </div>
          </div>
          {/* Drop-off */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])}>
              Collection (Pick-up)
            </div>
            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <Checkbox
                title=""
                name="pickUp"
                isChecked={pickup}
                theme={CHECKBOX_THEME.THEME3}
                onClick={() => onCheckBoxClick('pickup', !pickup)}
              />
            </div>
          </div>
        </div>
        {/*Message Type*/}
        <div className={css([AppStyles.heading60, AppStyles.mTop20])}>
          MESSAGE TYPE
        </div>
        <div className={css(styles.taskTypeParent)}>
          {/* Selection */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])} />

            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <div
                className={css(AppStyles.mRight5)}
                onClick={() => onAllNoneClick(false, true)}
              >
                All
              </div>
              <div onClick={() => onAllNoneClick(false, false)}>None</div>
            </div>
          </div>
          {/* Drop-off */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])}>
              SMS notification
            </div>
            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <Checkbox
                title=""
                name="sms"
                isChecked={sms}
                theme={CHECKBOX_THEME.THEME3}
                onClick={() => onCheckBoxClick('sms', !sms)}
              />
            </div>
          </div>
          {/* Drop-off */}
          <div className={css(styles.topSectionInnerWrapper)}>
            <div className={css([AppStyles.mRight30, AppStyles.flex1])}>
              Email notification
            </div>
            <div className={css([AppStyles.flexBox, AppStyles.pointer])}>
              <Checkbox
                title=""
                name="email"
                isChecked={email}
                theme={CHECKBOX_THEME.THEME3}
                onClick={() => onCheckBoxClick('email', !email)}
              />
            </div>
          </div>
        </div>
        {/*  end Option selection part */}

        {/* Sms email content */}
        <div className={css(AppStyles.heading60, AppStyles.mTop30)}>
          Sms/EMAIL CONTENT
        </div>
        {/* Scheduled stage */}
        <div>
          <div className={css([AppStyles.mTop20, AppStyles.flexBox])}>
            <Checkbox
              title="Scheduled stage"
              name="email"
              isChecked={schedule_stage}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() => onCheckBoxClick('schedule_stage', !schedule_stage)}
            />
            <span
              className={`ml-3 ${css([
                AppStyles.fontSize13,
                AppStyles.fontBold,
                schedule_stage
                  ? AppStyles.activeColor
                  : AppStyles.inActiveColor,
                AppStyles.lineHeight1_5
              ])}`}
            >{`${schedule_stage ? 'Active' : 'Inactive'}`}</span>
          </div>
          <div className="mt-2">
            <TextField
              onChange={event => onTextChange('schedule_content', event)}
              value={schedule_content}
              isTextArea
              styles={styles.textArea}
              disabled={!schedule_stage}
            />
          </div>

          <div className={css(styles.etaHeading)}>
            ETA time range buffer (in min)
          </div>
          <div
            className={css([
              AppStyles.flexBox,
              AppStyles.alignItemsCenter,
              AppStyles.whiteColor,
              AppStyles.fontSize12,
              AppStyles.mTop10
            ])}
          >
            <TextField
              type="number"
              value={eta_range}
              disabled={!schedule_stage}
              styles={styles.etaInput}
              onChange={event => {
                onTextChange('eta_range', event);
              }}
            />
            <div
              className={css([
                AppStyles.flexBox,
                AppStyles.mTop5,
                AppStyles.pLeft10,
                !schedule_stage && AppStyles.disableColor
              ])}
            >
              <span>{`Earliest arrival: ETA - ${eta_range}min`}</span>
              <div className={css([AppStyles.mLeft5, AppStyles.mRight5])}>
                /
              </div>
              <span>{`Latest arrival: ETA + ${eta_range}min`}</span>
            </div>
          </div>
        </div>
        {/*In-intransit_stage stage*/}
        <div>
          <div className={css([AppStyles.mTop20, AppStyles.flexBox])}>
            <Checkbox
              title="In-transit stage"
              name="email"
              isChecked={intransit_stage}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() =>
                onCheckBoxClick('intransit_stage', !intransit_stage)
              }
            />
            <span
              className={`ml-3 ${css([
                AppStyles.fontSize13,
                AppStyles.fontBold,
                intransit_stage
                  ? AppStyles.activeColor
                  : AppStyles.inActiveColor,
                AppStyles.lineHeight1_5
              ])}`}
            >{`${intransit_stage ? 'Active' : 'Inactive'}`}</span>
          </div>
          <div className="mt-2">
            <TextField
              onChange={event => onTextChange('intransit_content', event)}
              value={intransit_content}
              isTextArea
              styles={styles.textArea}
              disabled={!intransit_stage}
            />
          </div>
        </div>
        {/*Completed stage*/}
        <div className={css(AppStyles.pBottom20)}>
          <div className={css([AppStyles.mTop20, AppStyles.flexBox])}>
            <Checkbox
              title="Completed stage"
              name="email"
              isChecked={completed_stage}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() =>
                onCheckBoxClick('completed_stage', !completed_stage)
              }
            />
            <Tooltip>
              <span
                className={`ml-3 ${css([
                  AppStyles.fontSize13,
                  AppStyles.fontBold,
                  completed_stage
                    ? AppStyles.activeColor
                    : AppStyles.inActiveColor,
                  AppStyles.lineHeight1_5
                ])}`}
              >{`${completed_stage ? 'Active' : 'Inactive'}`}</span>
            </Tooltip>
          </div>
          <div className="mt-2">
            <TextField
              onChange={event => onTextChange('completed_content', event)}
              value={completed_content}
              isTextArea
              styles={styles.textArea}
              disabled={!completed_stage}
            />
          </div>
        </div>
      </div>
    );
  }
}
