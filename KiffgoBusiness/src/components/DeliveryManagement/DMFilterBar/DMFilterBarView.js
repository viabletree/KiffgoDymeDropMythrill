/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMFilterBarStyles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  DM_TASK_TYPE,
  DM_FILTER_TYPE,
  DM_FILTER_TAB,
  DM_TASK_STATUS_LENGTH,
  DM_DRIVER_STATUS_TYPE,
  DM_DRIVER_STATUS_LENGTH
} from '../../../constants';
import DMTimeSlider from './DMTimeSlider';
import { Images, AppStyles } from '../../../theme';
import { Alert } from 'react-bootstrap';
import { Checkbox } from '../../';
import { CHECKBOX_THEME } from '../../Checkbox/CheckboxController';

const getSubTitle = (index, selectedFinalDateTime, selectedTasks) => {
  let subTitle = '';
  if (index === 0) {
    subTitle = selectedFinalDateTime;
  } else if (index === 1) {
    if (selectedTasks.length === 0) {
      subTitle = 'No Tasks';
    } else if (selectedTasks.length === 5) {
      //
      subTitle = 'All Tasks';
    } else {
      selectedTasks.forEach(item => {
        const taskKey = item.toUpperCase();

        if (_.isEmpty(subTitle)) {
          subTitle = `${DM_TASK_TYPE[taskKey].title}`;
        } else {
          subTitle = `${subTitle}, ${DM_TASK_TYPE[taskKey].title}`;
        }
      });
    }
  }

  return subTitle;
};

export default class DMFilterBarView extends React.PureComponent {
  render() {
    const {
      isFilterVisble,
      handleModalVisibility,
      getActiveTabSlug,
      activeTab,
      handleFilterBarOption,
      showOnlyDelayedTasks,
      handleDelayMinActive,
      selectedTasks,
      onChangeGetDelayMin,
      delayedInMinutes,
      handleUnselectedAllTaskStatus,
      handleSelectAllTaskStatus,
      handleDateTimeOnChange,
      calendarDate,
      selectedFinalDateTime,
      selectedDrivers,
      handleSelectAllDriverStatus,
      handleUnselectedAllDriverStatus,
      onCheckBoxClick,
      communicationSettings,
      notificationStatus
    } = this.props;

    const date = new Date(calendarDate);

    return (
      <>
        <div className={`${css(styles.filterWrapper)}`}>
          <div className={css(styles.filterBox)}>
            <h2
              className={css([
                styles.filterBoxText,
                isFilterVisble && styles.activeFilterModal
              ])}
              onClick={() => {
                handleModalVisibility(true);
              }}
            >
              Filter
            </h2>
          </div>
          {/* filter selected detail start  */}
          <div className={`d-flex ${css()}`}>
            {/* filter detail about date time start  */}
            <div
              className={`${css(styles.selectedFilterDetail)}`}
              onClick={() => {
                handleFilterBarOption(DM_FILTER_TYPE.DATE);
              }}
            >
              <img
                className={css(styles.dateTimeIcon)}
                src={Images.filterClock}
                alt="filter clock"
              />
              <h2
                className={`${css([
                  AppStyles.fontSize13,
                  styles.filterDetailBox
                ])}`}
              >
                {selectedFinalDateTime}
              </h2>
            </div>
            {/* filter detail about date time end */}
            {/* filter detail about  tasks start  */}
            <div
              className={`selectedTaskWrap ${css(styles.selectedFilterDetail)}`}
              onClick={() => {
                handleFilterBarOption(DM_FILTER_TYPE.TASK);
              }}
            >
              {selectedTasks.length !== 0 &&
              selectedTasks.length !== DM_TASK_STATUS_LENGTH ? (
                selectedTasks.map((item, index) => {
                  const itemUpperCase = item.toUpperCase();
                  const isLastItem = index + 1 === selectedTasks.length;
                  return (
                    <React.Fragment key={index}>
                      <img
                        className={`visibleTaskIcon`}
                        src={DM_TASK_TYPE[itemUpperCase].icon}
                      />
                      <h2
                        className={`visibleTaskTitle ${css([
                          AppStyles.fontSize13,
                          styles.filterDetailBox
                        ])}`}
                      >
                        {selectedTasks.length > 1 && isLastItem ? 'and ' : ''}
                        {`${DM_TASK_TYPE[itemUpperCase].title}`}
                        {selectedTasks.length > 1 && !isLastItem ? ',' : ''}
                      </h2>
                    </React.Fragment>
                  );
                })
              ) : selectedTasks.length === DM_TASK_STATUS_LENGTH ? (
                <>
                  <img
                    className={css(styles.dateTimeIcon)}
                    src={Images.taskIcon}
                  />
                  <h2
                    className={`${css([
                      AppStyles.fontSize13,
                      styles.filterDetailBox
                    ])}`}
                  >
                    All task selected
                  </h2>
                </>
              ) : (
                <>
                  <img
                    className={css(styles.dateTimeIcon)}
                    src={Images.taskIcon}
                  />
                  <h2
                    className={`${css([
                      AppStyles.fontSize13,
                      styles.filterDetailBox
                    ])}`}
                  >
                    No task
                  </h2>
                </>
              )}
            </div>
            {/* filter detail about tasks end */}

            {/* filter detail about  driver start  */}
            <div
              className={`selectedTaskWrap ${css(styles.selectedFilterDetail)}`}
              onClick={() => {
                handleFilterBarOption(DM_FILTER_TYPE.DRIVER);
              }}
            >
              {selectedDrivers.length !== 0 &&
              selectedDrivers.length !== DM_DRIVER_STATUS_LENGTH ? (
                selectedDrivers.map((item, index) => {
                  const itemUpperCase = item.toUpperCase();
                  const isLastItem = index + 1 === selectedTasks.length;
                  return (
                    <React.Fragment key={index}>
                      <img
                        className={`visibleTaskIcon`}
                        src={DM_DRIVER_STATUS_TYPE[itemUpperCase].icon}
                      />
                      <h2
                        className={`visibleTaskTitle ${css([
                          AppStyles.fontSize13,
                          styles.filterDetailBox
                        ])}`}
                      >
                        {selectedDrivers.length > 1 && isLastItem ? 'and ' : ''}
                        {`${DM_DRIVER_STATUS_TYPE[itemUpperCase].title}`}
                        {selectedDrivers.length > 1 && !isLastItem ? ',' : ''}
                      </h2>
                    </React.Fragment>
                  );
                })
              ) : selectedDrivers.length === DM_DRIVER_STATUS_LENGTH ? (
                <>
                  <img
                    className={css(styles.dateTimeIcon)}
                    src={Images.allDriveStatusIcon}
                  />
                  <h2
                    className={`${css([
                      AppStyles.fontSize13,
                      styles.filterDetailBox
                    ])}`}
                  >
                    All drivers selected
                  </h2>
                </>
              ) : (
                <>
                  <img
                    className={css([
                      styles.dateTimeIcon,
                      styles.noSelectionIcon
                    ])}
                    src={Images.offileDriverIcon}
                  />
                  <h2
                    className={`${css([
                      AppStyles.fontSize13,
                      styles.filterDetailBox
                    ])}`}
                  >
                    No drivers
                  </h2>
                </>
              )}
            </div>
            {/* filter detail about driver end */}
          </div>
          {/* filter selected detail end  */}
        </div>
        {/* filter modal overlay start */}
        {isFilterVisble && (
          <div
            className={css(styles.filterModalOverly)}
            onClick={() => {
              handleModalVisibility(false);
            }}
          />
        )}
        {/* filter modal overlay end*/}
        {/* filter modal start  */}
        {isFilterVisble && (
          <div className={css([styles.filterModal])}>
            <div className="d-flex h-100">
              <div className={css(styles.leftColumn)}>
                <ul>
                  {DM_FILTER_TAB.map((item, index) => {
                    return (
                      <li
                        className={css([
                          styles.colOption,
                          activeTab === item.slug && styles.activeTab
                        ])}
                        onClick={() => {
                          getActiveTabSlug(item.slug);
                        }}
                        key={index}
                      >
                        <img
                          className={css(styles.colOptionImg)}
                          src={item.icon}
                        />
                        <div>
                          <p
                            className={css([
                              AppStyles.fontSize16,
                              AppStyles.whiteColor
                            ])}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`mt-1 ${css([
                              AppStyles.fontSize14,
                              AppStyles.whiteColor,
                              styles.paraWidth,
                              AppStyles.fontItalic
                            ])}`}
                          >
                            {getSubTitle(
                              index,
                              selectedFinalDateTime,
                              selectedTasks
                            )}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={css(styles.rightColumn)}>
                {activeTab === DM_FILTER_TYPE.DATE && (
                  <div className={css(styles.calendarWrap)}>
                    <div className="wrapper dmCalenderWrapper">
                      <Calendar
                        onChange={handleDateTimeOnChange}
                        value={date}
                      />
                    </div>
                    <DMTimeSlider />
                  </div>
                )}
                {/* task list start */}
                {activeTab === DM_FILTER_TYPE.TASK && (
                  <div className={css(styles.taskWrapper)}>
                    <div className="d-flex justify-content-end mb-3 mt-1">
                      <h2
                        className={css([
                          AppStyles.fontSize13,
                          AppStyles.whiteColor,
                          AppStyles.cursorPointer,
                          AppStyles.mRight10
                        ])}
                        onClick={handleSelectAllTaskStatus}
                      >
                        All
                      </h2>
                      <h2
                        className={css([
                          AppStyles.fontSize13,
                          AppStyles.whiteColor,
                          AppStyles.cursorPointer
                        ])}
                        onClick={handleUnselectedAllTaskStatus}
                      >
                        None
                      </h2>
                    </div>
                    {Object.keys(DM_TASK_TYPE).map((data, id) => {
                      const isSelectedState = this.props.selectedTasks.includes(
                        DM_TASK_TYPE[data].slug
                      );
                      return (
                        <div
                          className={`d-flex align-items-center justify-content-between ${css(
                            styles.taskList
                          )}`}
                          key={id}
                          onClick={() =>
                            this.props.onTaskClick(DM_TASK_TYPE[data].slug)
                          }
                        >
                          <div className={`d-flex align-items-center ${css()}`}>
                            <img
                              className={css(styles.taskIcon)}
                              src={DM_TASK_TYPE[data].icon}
                            />
                            <div className={`${css(styles.taskTitle)}`}>
                              {DM_TASK_TYPE[data].title}
                            </div>
                          </div>
                          <div
                            className={`${css([
                              styles.notSelected,
                              isSelectedState && styles.selectedState
                            ])}`}
                          ></div>
                        </div>
                      );
                    })}

                    {/* task list end */}
                    {/* delay section start */}

                    {/* delay section start */}
                    <div className="mt-4">
                      <div
                        className={`d-flex justify-content-between ${css()}`}
                      >
                        <h2 className={`${css(styles.taskTitle)}`}>delayed</h2>
                        {/* <h2 className={`${css(styles.delayText)}`}>No delay</h2> */}
                      </div>
                      <div
                        className={`d-flex align-items-center mt-3 ${css(
                          styles.delayWrapper
                        )}`}
                      >
                        <div
                          className={`${css([
                            styles.delayCheckbox,
                            showOnlyDelayedTasks && styles.activeDelayField
                          ])}`}
                          onClick={handleDelayMinActive}
                        />
                        <p
                          className={`${css([
                            AppStyles.fontSize12,
                            AppStyles.whiteColor,
                            AppStyles.cursorPointer
                          ])}`}
                          onClick={handleDelayMinActive}
                        >
                          Show only
                        </p>
                        <input
                          type="number"
                          className={`mx-2 ${css([
                            styles.delayInput,
                            !showOnlyDelayedTasks && styles.disableBg
                          ])}`}
                          min={1}
                          disabled={!showOnlyDelayedTasks}
                          value={delayedInMinutes}
                          onChange={e => {
                            onChangeGetDelayMin(e);
                          }}
                        />
                        <p
                          className={`${css([
                            AppStyles.fontSize12,
                            AppStyles.whiteColor,
                            AppStyles.cursorPointer
                          ])}`}
                          onClick={handleDelayMinActive}
                        >
                          min delayed
                        </p>
                      </div>
                    </div>
                    {/* delay section end */}
                    {/* notification/communication section start */}

                    {communicationSettings.schedule_stage && (
                      <div className="mt-4">
                        <div className={`d-flex  ${css()}`}>
                          <h2 className={`${css(styles.taskTitle)}`}>
                            Notification
                          </h2>

                          {/* <h2 className={`${css(styles.delayText)}`}>No delay</h2> */}
                        </div>

                        <div
                          className={`d-flex align-items-center mt-3  ${css([
                            AppStyles.flexColumn,
                            AppStyles.alignItemsStart
                          ])}`}
                        >
                          <div
                            className={css([
                              AppStyles.flexBox,
                              AppStyles.whiteColor,
                              AppStyles.fontSize14,
                              AppStyles.pLeft20,
                              AppStyles.fullWidth
                            ])}
                          >
                            <span className={css(AppStyles.flex1)}>
                              Notified
                            </span>
                            <Checkbox
                              title=""
                              name="notified"
                              isChecked={notificationStatus.notified}
                              theme={CHECKBOX_THEME.THEME3}
                              onClick={() =>
                                onCheckBoxClick(
                                  'notified',
                                  !notificationStatus.notified
                                )
                              }
                            />
                          </div>
                          <div
                            className={css([
                              AppStyles.flexBox,
                              AppStyles.fullWidth,
                              AppStyles.whiteColor,
                              AppStyles.fontSize14,
                              AppStyles.pLeft20,
                              AppStyles.mTop10
                            ])}
                          >
                            <span className={css(AppStyles.flex1)}>
                              Non notified
                            </span>
                            <Checkbox
                              title=""
                              name="nonNotified"
                              isChecked={notificationStatus.nonNotified}
                              theme={CHECKBOX_THEME.THEME3}
                              onClick={() =>
                                onCheckBoxClick(
                                  'nonNotified',
                                  !notificationStatus.nonNotified
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* notification/communication section end */}
                  </div>
                )}

                {/* Driver Filters */}

                {activeTab === DM_FILTER_TYPE.DRIVER && (
                  <div className={css(styles.taskWrapper)}>
                    <div className="d-flex justify-content-end mb-3 mt-1">
                      <h2
                        className={css([
                          AppStyles.fontSize13,
                          AppStyles.whiteColor,
                          AppStyles.cursorPointer,
                          AppStyles.mRight10
                        ])}
                        onClick={handleSelectAllDriverStatus}
                      >
                        All
                      </h2>
                      <h2
                        className={css([
                          AppStyles.fontSize13,
                          AppStyles.whiteColor,
                          AppStyles.cursorPointer
                        ])}
                        onClick={handleUnselectedAllDriverStatus}
                      >
                        None
                      </h2>
                    </div>
                    {Object.keys(DM_DRIVER_STATUS_TYPE).map((data, id) => {
                      if (
                        _.isUndefined(DM_DRIVER_STATUS_TYPE[data].delayed) &&
                        _.isEmpty(DM_DRIVER_STATUS_TYPE[data].delayed)
                      ) {
                        const isSelectedState = this.props.selectedDrivers.includes(
                          DM_DRIVER_STATUS_TYPE[data].slug
                        );

                        if (data === DM_DRIVER_STATUS_TYPE.INVITED.slug) {
                          return null;
                        }
                        return (
                          <div
                            className={`d-flex align-items-center justify-content-between ${css(
                              styles.taskList
                            )}`}
                            key={id}
                            onClick={() =>
                              this.props.onDriverClick(
                                DM_DRIVER_STATUS_TYPE[data].slug
                              )
                            }
                          >
                            <div
                              className={`d-flex align-items-center ${css()}`}
                              // eslint-disable-next-line react/jsx-no-comment-textnodes
                            >
                              <img
                                className={css(styles.allDriveStatusIcon)}
                                src={DM_DRIVER_STATUS_TYPE[data].icon}
                              />
                              <div className={`${css(styles.taskTitle)}`}>
                                {DM_DRIVER_STATUS_TYPE[data].title}
                              </div>
                            </div>
                            <div
                              className={`${css([
                                styles.notSelected,
                                isSelectedState && styles.selectedState
                              ])}`}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* filter modal end  */}
      </>
    );
  }
}
