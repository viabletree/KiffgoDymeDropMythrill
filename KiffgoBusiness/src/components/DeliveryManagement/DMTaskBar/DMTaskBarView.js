/* eslint-disable prefer-template */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { ClipLoader } from 'react-spinners';
import styles from './DMTaskBarStyles';
import { AppStyles, Colors, Images } from '../../../theme';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Util from '../../../services/Util';
import {
  TIME_FORMAT1,
  TASK_FIELDS_NAME,
  DM_TASK_TYPE,
  DM_DRIVER_STATUS_TYPE,
  DATE_TIME_FORMAT3,
  DATE_TIME_FORMAT6,
  DATE_TIME_FORMAT2
} from '../../../constants';
import {
  getTaskTypeDetail,
  getLocationText,
  getDriverStatusDetail,
  sortBySequence
} from '../../../helpers/dmHelper';
import { DM_TASK_BAR_SECTIONS } from './DMTaskBarController';

function SectionHeader({
  title,
  subTitle,
  isSelected,
  isExpended,
  onSelectClick,
  onExpandCollapseClick,
  isExpendable
}) {
  return (
    <div
      className={`${css([
        styles.sectionHeaderWrapper,
        AppStyles.flexBox,
        isSelected && styles.sectionHeaderWrapperSelected,
        isExpendable && isExpended && styles.sectionHeaderWrapperExpended
      ])}`}
    >
      {isExpendable && (
        <div
          onClick={onExpandCollapseClick}
          className={`${css([styles.sectionIconWrapper])}`}
        >
          <FontAwesomeIcon
            className={`mr-2 no-selection ${css(
              isSelected && styles.sectionIconSelected
            )}`}
            icon={isExpended ? faCaretDown : faCaretRight}
          />
        </div>
      )}
      <div
        className={`${css([styles.sectionTitleWrapper])}`}
        onClick={onSelectClick}
      >
        <p
          className={`no-selection ${css([
            styles.sectionTitleText,
            isSelected && styles.sectionTitleTextSelected
          ])}`}
        >
          {title}
        </p>
        {!_.isUndefined(subTitle) && (
          <p
            className={`no-selection ${css([
              styles.sectionSubTitleText,
              isSelected && styles.sectionSubTitleTextSelected
            ])}`}
          >
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
}

function DriverHeader({
  status,
  driver_name,
  id,
  isSelected,
  isExpended,
  onSelectClick,
  onExpandCollapseClick,
  isExpendable,
  taskList,
  onDriverClick,
  taskCount,
  showEta,
  vehicle_capacity,
  driverWiseGroupedTasks
}) {
  let delayedTaskCount = [];
  if (showEta) {
    delayedTaskCount = _.filter(taskList, function(taskList) {
      return taskList.delayed_in_minutes > 0;
    });
  }

  if (delayedTaskCount.length > 0) {
    if (status == DM_DRIVER_STATUS_TYPE.ACTIVE.slug) {
      status = DM_DRIVER_STATUS_TYPE.ACTIVE_DELAY.slug;
    }
    if (status == DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug) {
      status = DM_DRIVER_STATUS_TYPE.IN_TRANSIT_DELAY.slug;
    }
    if (status == DM_DRIVER_STATUS_TYPE.INACTIVE.slug) {
      status = DM_DRIVER_STATUS_TYPE.INACTIVE_DELAY.slug;
    }
  }
  const sum = a => a.reduce((x, y) => x + y);
  let taskLoadSum = 0;
  if (!_.isEmpty(taskList)) {
    taskLoadSum = sum(taskList.map(x => Number(x.quantity)));
  }

  const statusDetail = getDriverStatusDetail(status);
  let subTitleText = '';
  if (delayedTaskCount.length > 0) {
    subTitleText = `${delayedTaskCount.length} delayed`;
  }
  return (
    <div
      className={`${css([
        styles.driverHeaderWrapper,
        AppStyles.flexBox,
        // isSelected && styles.driverHeaderWrapperSelected,
        isSelected && styles.sectionHeaderWrapperSelected,
        isExpended && styles.driverHeaderWrapperExpended
      ])}`}
      onClick={() => {
        onDriverClick(id);
      }}
    >
      <img
        className={`${css(styles.driverHeaderStatusIcon)}`}
        src={statusDetail.icon}
        src={
          delayedTaskCount > 0
            ? statusDetail.delayIcon || statusDetail.icon
            : statusDetail.icon
        }
        draggable={false}
      />
      <div
        className={`no-selection ${css([
          styles.sectionTitleWrapper,
          styles.nameWrapper
        ])}`}
        onClick={onSelectClick}
      >
        <div>
          <p
            className={`no-selection ${css([
              styles.sectionTitleText,
              isSelected && styles.sectionTitleTextSelected
            ])}`}
          >
            {driver_name}
          </p>

          {taskCount > 0 && (
            <p
              className={`no-selection ${css([
                styles.sectionSubTitleText,
                isSelected && styles.sectionSubTitleTextSelected
                // taskLoadSum > vehicle_capacity && styles.redText
              ])}`}
            >
              {taskCount} Task{taskCount > 1 ? 's' : ''}{' '}
              {/* - Load {taskLoadSum} /{' '}
              {vehicle_capacity} */}
            </p>
          )}
          {showEta && (
            <p
              className={`no-selection ${css([
                styles.sectionSubTitleText,
                isSelected && styles.sectionSubTitleTextSelected
                // taskLoadSum > vehicle_capacity && styles.redText
              ])}`}
            >
              {taskList.length > 0
                ? taskList[taskList.length - 1][TASK_FIELDS_NAME.MILEAGE] > 0
                  ? Math.ceil(
                      taskList[taskList.length - 1][TASK_FIELDS_NAME.MILEAGE] /
                        1609
                    ) + ' Miles'
                  : ''
                : ''}
              {/* - Load {taskLoadSum} /{' '}
              {vehicle_capacity} */}
            </p>
          )}
        </div>

        {!_.isEmpty(subTitleText) && (
          <div
            className={`no-selection ${css([
              styles.sectionSubTitleText,
              isSelected && styles.sectionSubTitleTextSelected,
              AppStyles.flexBox
            ])}`}
          >
            <img
              className={`${css(styles.driverHeaderStatusIcon)}`}
              src={Images.delayedIcon}
              draggable={false}
            />
            {subTitleText}
          </div>
        )}
      </div>

      {isExpendable && (
        <div
          onClick={onExpandCollapseClick}
          className={`${css([
            styles.sectionIconWrapper,
            styles.driverSectionIconWrapper
          ])}`}
        >
          <FontAwesomeIcon
            className={`mr-2 no-selection ${css(
              isSelected && styles.sectionIconSelected
            )}`}
            icon={isExpended ? faCaretDown : faCaretRight}
          />
        </div>
      )}
    </div>
  );
}

function SectionLoading(props) {
  if (props.isLoading) {
    return (
      <div className={`${css(styles.sectionLoading)}`}>
        <ClipLoader sizeUnit={'px'} size={20} color={Colors.whiteOpaque} />
      </div>
    );
  } else {
    return null;
  }
}

function DriverSection(props) {
  const {
    isExpended,
    taskList,
    onTaskClick,
    onDriverDragOver,
    onDriverDragLeave,
    id,
    onDriverDrop,
    isLoading,
    onTaskDragLeave,
    onTaskDragOver,
    overedTask,
    showEta,
    onETAClick,
    showETD
  } = props;
  return (
    <div
      className={`${css([styles.driverSectionWrapper])}`}
      onDragEnter={ev => {
        ev.preventDefault();

        onDriverDragOver(ev, id, ev.dataTransfer.getData('taskDetails'));
      }}
      onDragLeave={() => {
        onDriverDragLeave(id);
      }}
      onDragOver={ev => {
        ev.preventDefault();
      }}
      onDrop={ev => {
        ev.preventDefault();
        onDriverDrop(ev.dataTransfer.getData('taskDetail'), id);
      }}
    >
      <DriverHeader {...props} taskCount={taskList.length} />

      {!_.isUndefined(taskList) && isExpended && (
        <div className={`pl-2 pr-2 ${css([styles.driverTasklistWrapper])}`}>
          <SectionLoading isLoading={isLoading} />

          {taskList.map((item, index) => {
            return (
              <div
                className={` ${css([styles.driverTaskItemWrapper])}`}
                key={item.id}
              >
                <p
                  id="taskNumber"
                  className={` ${css([styles.driverTaskSequence])}`}
                >
                  {index + 1}
                </p>
                <TaskItem
                  data={item}
                  key={item.id}
                  onClick={() => onTaskClick(item)}
                  onTaskDragLeave={onTaskDragLeave}
                  onTaskDragOver={onTaskDragOver}
                  isOvered={overedTask === item[TASK_FIELDS_NAME.TASK_NUMBER]}
                  showEta={showEta}
                  onETAClick={onETAClick}
                  showETD={showETD}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TaskItem({
  data,
  onClick,
  onTaskDragOver,
  onTaskDragLeave,
  onTaskDrop,
  isOvered,
  showEta,
  onETAClick,
  showETD
}) {
  //
  const { status, delayed_in_minutes, isSelected, isDropoff, priority } = data;

  const isDelayed = delayed_in_minutes > 0;
  const isPriority = priority > 0;

  let statusIcon = getTaskTypeDetail(status).icon;
  if (isDelayed) {
    statusIcon =
      getTaskTypeDetail(status).delayIcon || getTaskTypeDetail(status).icon;
  }
  if (isPriority) {
    statusIcon = getTaskTypeDetail(status).priorityIcon;
  }
  if (isPriority && isDelayed) {
    statusIcon = getTaskTypeDetail(status).priorityDelayIcon;
  }

  return (
    <div
      className={`row mx-0 ${css([
        styles.singleTask,
        isSelected && styles.activeSingleTask,
        isOvered && styles.overedSingleTask
      ])}`}
      onClick={onClick}
      draggable={data[TASK_FIELDS_NAME.STATUS] !== DM_TASK_TYPE.IN_TRANSIT.slug}
      onDragStart={ev => {
        ev.dataTransfer.setData('taskDetail', JSON.stringify(data));
      }}
      onDragEnter={ev => {
        ev.preventDefault();
        onTaskDragOver(ev, data[TASK_FIELDS_NAME.TASK_NUMBER]);
      }}
      onDragLeave={() => {
        onTaskDragLeave(data[TASK_FIELDS_NAME.TASK_NUMBER]);
      }}
      onDragOver={ev => {
        ev.preventDefault();
      }}
      onDrop={ev => {
        ev.preventDefault();

        /* onTaskDrop(
          ev.dataTransfer.getData('taskDetail'),
          data[TASK_FIELDS_NAME.TASK_NUMBER]
        ); */
      }}
    >
      <div className={css(styles.someStyle)}>
        <img
          className={`${css(styles.taskIcon)}`}
          src={showEta ? statusIcon : getTaskTypeDetail(status).icon}
          draggable={false}
        />
        <img
          className={`${css(styles.pickUpIcon)}`}
          src={isDropoff ? Images.dropoff_arrow : Images.pickup_arrow}
          draggable={false}
        />
      </div>
      <div className={`${css([styles.taskDetailWrapper])}`}>
        <div
          className={`${css([AppStyles.flexBox, AppStyles.alignItemsCenter])}`}
        >
          <h2
            className={`${css([
              styles.taskTitle,
              AppStyles.fontSize12,
              AppStyles.whiteColor,
              AppStyles.weight7,
              isSelected && styles.blackColor
            ])}`}
          >
            {getLocationText(data)}
          </h2>
        </div>
        <p
          className={`${css([
            styles.taskDate,
            styles.alto2Color,
            isSelected && styles.blackColor,
            AppStyles.fontSize12
          ])}`}
        >
          {/* {data[TASK_FIELDS_NAME.IS_PICKUP] ? 'Pickup ' : 'Dropoff '} */}

          {data[TASK_FIELDS_NAME.COMPLETE_AFTER] &&
            data[TASK_FIELDS_NAME.COMPLETE_BEFORE] && (
              <>
                {Util.timeWindowDateParser(
                  data[TASK_FIELDS_NAME.COMPLETE_AFTER] ||
                    data[TASK_FIELDS_NAME.CREATED_AT]
                )}
                {!_.isEmpty(data[TASK_FIELDS_NAME.COMPLETE_AFTER]) && (
                  <span>
                    {` - `}
                    {Util.timeWindowDateParser(
                      data[TASK_FIELDS_NAME.COMPLETE_BEFORE] ||
                        data[TASK_FIELDS_NAME.CREATED_AT]
                    )}
                  </span>
                )}
              </>
            )}
          {data[TASK_FIELDS_NAME.COMPLETE_AFTER] &&
            !data[TASK_FIELDS_NAME.COMPLETE_BEFORE] && (
              <>
                {'After '}
                {Util.getFormattedDateTime(
                  data[TASK_FIELDS_NAME.COMPLETE_AFTER] ||
                    data[TASK_FIELDS_NAME.CREATED_AT],
                  TIME_FORMAT1
                )}
              </>
            )}
          {!data[TASK_FIELDS_NAME.COMPLETE_AFTER] &&
            data[TASK_FIELDS_NAME.COMPLETE_BEFORE] && (
              <>
                {'Before '}
                {Util.getFormattedDateTime(
                  data[TASK_FIELDS_NAME.COMPLETE_BEFORE] ||
                    data[TASK_FIELDS_NAME.CREATED_AT],
                  TIME_FORMAT1
                )}
              </>
            )}
          {!data[TASK_FIELDS_NAME.COMPLETE_AFTER] &&
            !data[TASK_FIELDS_NAME.COMPLETE_BEFORE] && <>Anytime</>}
        </p>
        <div className={css(styles.recipientEtaContainer)}>
          <div
            id="taskAuthor"
            className={`${css([
              styles.taskAuthor,
              styles.alto2Color,
              AppStyles.fontSize13,
              isSelected && styles.blackColor
            ])}`}
          >
            {data[TASK_FIELDS_NAME.RECIPIENT_NAME]}
          </div>
          {data[TASK_FIELDS_NAME.STATUS] !== DM_TASK_TYPE.UNASSIGNED.slug &&
            !_.isEmpty(data[TASK_FIELDS_NAME.ETA]) &&
            !_.isNil(data[TASK_FIELDS_NAME.ETA]) &&
            showEta && (
              <div
                onClick={ev => {
                  ev.stopPropagation();
                  onETAClick(ev);
                }}
                className={`${css([
                  styles.etaDiv,
                  AppStyles.fontSize10,
                  isSelected && styles.blackColor
                ])}`}
              >
                <img
                  className={`${css(styles.tasketaIcon)}`}
                  src={
                    !isDelayed
                      ? !showETD
                        ? Images.timeOfArrival
                        : Images.timeOfDeparture
                      : !showETD
                      ? Images.delayedTimeOfArrival
                      : Images.delayedTimeOfDeparture
                  }
                  draggable={false}
                />

                {Util.dateParserThree(
                  !showETD
                    ? data[TASK_FIELDS_NAME.ETA]
                    : data[TASK_FIELDS_NAME.ETD]
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default class DMTaskBarView extends React.PureComponent {
  render() {
    const {
      taskBarExpendedSections,
      tasksList,
      isloading,
      handleMarkerClick,
      unassignedTasksList,
      selectedSection,
      onSelectClick,
      dmUpdateTaskBarExpendedSections,
      driverListing,
      onDriverClick,
      onUnassignDragOver,
      onUnassignDragLeave,
      onDriverDragOver,
      onDriverDragLeave,
      onDriverDrop,
      onUnassignDrop,
      sequenceChangeLoadingFor,
      onTaskDragOver,
      onTaskDragLeave,
      overedTask,
      driverWiseGroupedTasks,
      selectedDriverId,
      showEta,
      onETAClick,
      showETD
    } = this.props;

    const unassginedExpended = _.includes(
      taskBarExpendedSections,
      DM_TASK_BAR_SECTIONS.UNASSIGNED
    );

    const driversExpended = _.includes(
      taskBarExpendedSections,
      DM_TASK_BAR_SECTIONS.DRIVERS
    );

    const isUnassignedSelected =
      selectedSection === DM_TASK_BAR_SECTIONS.UNASSIGNED;

    const isDriversSelected = selectedSection === DM_TASK_BAR_SECTIONS.DRIVERS;

    const isUnassignedExpendable = unassignedTasksList.length > 0;

    const isDriversExpendable = driverListing.length > 0;

    // Managing sequence loading state
    let sequenceChangeLoadingUnassigned = false;

    if (
      sequenceChangeLoadingFor !== null &&
      sequenceChangeLoadingFor.type === DM_TASK_BAR_SECTIONS.UNASSIGNED
    ) {
      sequenceChangeLoadingUnassigned = true;
    }

    return (
      <div className={`dmTaskBarScroll ${css(styles.DMTaskBar)}`}>
        {/* <CustomScroll heightRelativeToParent="calc(100vh - 103px)"> */}

        <div className={`${css(styles.DMTaskBarWrapper)}`}>
          {/* tasksList.length === 0 && !isloading && (
            <p className={`${css(styles.emptyState)}`}>No tasks available</p>
          ) */}
          {/* isloading && (
            <p className={`${css(styles.emptyState)}`}>Loading...</p>
          ) */}

          {/* UNASSIGNED Started */}
          {!isloading && (
            <div
              className={`${css([styles.sectionWrapper])}`}
              onDragEnter={onUnassignDragOver}
              onDragLeave={onUnassignDragLeave}
              onDragOver={ev => {
                ev.preventDefault();
              }}
              onDrop={ev => {
                ev.preventDefault();
                onUnassignDrop(ev.dataTransfer.getData('taskDetail'));
              }}
            >
              <SectionLoading isLoading={sequenceChangeLoadingUnassigned} />
              <SectionHeader
                title="Unassigned"
                subTitle={`${
                  unassignedTasksList.length
                } ${Util.getSingularPluralText(
                  unassignedTasksList.length,
                  'Task'
                )}`}
                isSelected={isUnassignedSelected}
                isExpended={unassginedExpended}
                onSelectClick={() => {
                  onSelectClick(DM_TASK_BAR_SECTIONS.UNASSIGNED);
                }}
                onExpandCollapseClick={() => {
                  dmUpdateTaskBarExpendedSections(
                    DM_TASK_BAR_SECTIONS.UNASSIGNED
                  );
                }}
                isExpendable={isUnassignedExpendable}
              />

              {unassginedExpended && isUnassignedExpendable && (
                <div
                  className={`${css([
                    styles.sectionInnerWrapper,
                    isUnassignedSelected && styles.sectionInnerWrapperSelected
                  ])}`}
                >
                  {unassignedTasksList.map((item, index) => {
                    return (
                      <TaskItem
                        data={item}
                        key={item.id}
                        onClick={() => handleMarkerClick(item)}
                        onTaskDragLeave={onTaskDragLeave}
                        onTaskDragOver={onTaskDragOver}
                        isOvered={
                          overedTask === item[TASK_FIELDS_NAME.TASK_NUMBER]
                        }
                        showEta={showEta}
                        onETAClick={onETAClick}
                        showETD={showETD}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {/* UNASSIGNED Ended */}

          {/* DRIVER Started */}
          <div className={`mt-2 ${css([styles.sectionWrapper])}`}>
            <SectionHeader
              title="Drivers"
              subTitle={`${driverListing.length} ${Util.getSingularPluralText(
                driverListing.length,
                'Driver'
              )}`}
              isSelected={isDriversSelected}
              isExpended={driversExpended}
              onSelectClick={() => {
                onSelectClick(DM_TASK_BAR_SECTIONS.DRIVERS);
              }}
              onExpandCollapseClick={() => {
                dmUpdateTaskBarExpendedSections(DM_TASK_BAR_SECTIONS.DRIVERS);
              }}
              isExpendable={isDriversExpendable}
            />

            {driversExpended && isDriversExpendable && (
              <div
                className={`${css([
                  styles.sectionInnerWrapper,
                  isDriversSelected && styles.sectionInnerWrapperSelected
                ])}`}
              >
                {driverListing.map((item, index) => {
                  const driverIdInString = JSON.stringify(item.id);
                  const isExpended = _.includes(
                    taskBarExpendedSections,
                    driverIdInString
                  );
                  let sequenceChangeLoading = false;
                  if (
                    sequenceChangeLoadingFor !== null &&
                    sequenceChangeLoadingFor.type ===
                      DM_TASK_BAR_SECTIONS.DRIVERS &&
                    sequenceChangeLoadingFor.value === item.id
                  ) {
                    sequenceChangeLoading = true;
                  }

                  let taskList = [];

                  if (!_.isNil(driverWiseGroupedTasks[item.id])) {
                    // sorting data and showing intransit task first

                    taskList = driverWiseGroupedTasks[item.id];

                    /* driverWiseGroupedTasks[item.id].forEach(element => {
                      if (
                        element[TASK_FIELDS_NAME.STATUS] ===
                        DM_TASK_TYPE.IN_TRANSIT.slug
                      ) {
                        taskList.unshift(element);
                      } else {
                        taskList.push(element);
                      }
                    }); */
                  }

                  return (
                    <DriverSection
                      {...item}
                      driverWiseGroupedTasks={driverWiseGroupedTasks}
                      taskList={taskList}
                      key={item.id}
                      isSelected={selectedDriverId === item.id}
                      isExpended={isExpended}
                      onSelectClick={() => {
                        // onSelectClick(`driver${item.id}`);
                      }}
                      onExpandCollapseClick={() => {
                        dmUpdateTaskBarExpendedSections(driverIdInString);
                      }}
                      onTaskClick={handleMarkerClick}
                      isExpendable={
                        !_.isUndefined(taskList) && taskList.length > 0
                      }
                      onDriverClick={onDriverClick}
                      onDriverDragLeave={onDriverDragLeave}
                      onDriverDragOver={onDriverDragOver}
                      onDriverDrop={onDriverDrop}
                      isLoading={sequenceChangeLoading}
                      onTaskDragLeave={onTaskDragLeave}
                      onTaskDragOver={onTaskDragOver}
                      overedTask={overedTask}
                      showEta={showEta}
                      onETAClick={onETAClick}
                      showETD={showETD}
                    />
                  );
                })}
              </div>
            )}
          </div>
          {/* DRIVER Ended */}
        </div>
        {/* </CustomScroll> */}
      </div>
    );
  }
}
