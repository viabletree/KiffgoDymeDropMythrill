/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { ClipLoader } from 'react-spinners';
import styles from './DMDriverViewerStyles';
import { BlackModal, DMProfilePic } from '../../../components';
import { AppStyles, Colors, Images } from '../../../theme';
import {
  DRIVER_FIELDS_NAME,
  DM_DRIVER_STATUS_TYPE,
  TASK_FIELDS_NAME,
  TIME_FORMAT1,
  DM_TASK_TYPE
} from '../../../constants';
import { MODAL_BOTTOMS_THEME } from '../../BlackModal';
import Util from '../../../services/Util';
import { getLocationText, getTaskTypeDetail } from '../../../helpers/dmHelper';

function SequenceLoading(props) {
  return (
    <div className={`${css(styles.sectionLoading)}`}>
      <ClipLoader sizeUnit="px" size={20} color={Colors.whiteOpaque} />
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
          <p
            id="taskAuthorDriverView"
            className={`${css([
              styles.taskAuthor,
              styles.alto2Color,
              AppStyles.fontSize13,
              isSelected && styles.blackColor
            ])}`}
          >
            {data[TASK_FIELDS_NAME.RECIPIENT_NAME]}
          </p>
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

export default class DMDriverViewerView extends React.PureComponent {
  render() {
    const {
      driverDetail,
      closeViewDriver,
      onEditClick,
      vehicleTypes,
      forceOffDuty,
      forceOffDutyLoader,
      onScheduleClick,
      currentDriverTaskList,
      handleTaskClick,
      onTaskDragOver,
      onTaskDragLeave,
      overedTask,
      onDriverDrop,
      sequenceChangeLoading,
      selectAll,
      showUnassign,
      showDelete,
      showEta,
      onETAClick,
      showETD,
      onDeletePress,
      onUnassignClick,
      loading
    } = this.props;

    const findVehicleIndex = _.findIndex(vehicleTypes, {
      id: driverDetail[DRIVER_FIELDS_NAME.TRANSPORT_TYPE]
    });
    const type =
      driverDetail[DRIVER_FIELDS_NAME.TRANSPORT_TYPE] >= 0
        ? vehicleTypes[findVehicleIndex].title
        : '';
    const makeModel = _.isEmpty(driverDetail[DRIVER_FIELDS_NAME.MAKE_MODEL])
      ? ''
      : Util.capitalizeFirstLetter(driverDetail[DRIVER_FIELDS_NAME.MAKE_MODEL]);
    const year = _.isEmpty(driverDetail[DRIVER_FIELDS_NAME.YEAR])
      ? ''
      : `(${driverDetail[DRIVER_FIELDS_NAME.YEAR]})`;
    const color = _.isEmpty(driverDetail[DRIVER_FIELDS_NAME.COLOR])
      ? ''
      : Util.capitalizeFirstLetter(driverDetail[DRIVER_FIELDS_NAME.COLOR]);
    const numberPlate = _.isEmpty(driverDetail[DRIVER_FIELDS_NAME.NUMBER_PLATE])
      ? ''
      : `${driverDetail[DRIVER_FIELDS_NAME.NUMBER_PLATE]}`;

    const canOffDuty = {
      title: 'Force off Duty',
      onClick: forceOffDuty,
      isLoading: forceOffDutyLoader,
      theme: MODAL_BOTTOMS_THEME.GREY_THEME
    };
    const scheduleButton = {
      title: 'Schedule',
      onClick: onScheduleClick,
      theme: MODAL_BOTTOMS_THEME.GREY_THEME
    };

    canOffDuty.disabled =
      driverDetail[DRIVER_FIELDS_NAME.STATUS] !==
      DM_DRIVER_STATUS_TYPE.ACTIVE.slug;

    return (
      <BlackModal
        open
        hasFooterCancelButton={false}
        onClose={closeViewDriver}
        leftButton={{
          title: 'Edit',
          onClick: onEditClick,
          theme: MODAL_BOTTOMS_THEME.GREY_THEME
        }}
        leftButton2={canOffDuty}
        leftButton3={scheduleButton}
        rightButton={{
          title: 'Done',
          onClick: closeViewDriver
        }}
        width={`${css(styles.width)}`}
      >
        <div
          className={`${css(styles.wrapper)}`}
          onDrop={ev => {
            ev.preventDefault();
            onDriverDrop(
              ev.dataTransfer.getData('taskDetail'),
              driverDetail[DRIVER_FIELDS_NAME.ID]
            );
          }}
        >
          <div className="mt-2 mr-2">
            <DMProfilePic
              image={
                driverDetail[DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]
                  .secure_url
              }
            />
          </div>

          {driverDetail[DRIVER_FIELDS_NAME.DRIVER_NAME] && (
            <div className={`mt-2 ${css(AppStyles.textAlignCenter)}`}>
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_NAME]}
            </div>
          )}

          <div className="mt-4 mr-2">
            <span className={css(AppStyles.heading60)}>Contact</span>
            <p className={`${css(styles.para)}`}>
              {Util.getFormattedPhone(
                driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE]
              )}
            </p>

            <p className={`${css(styles.para)}`}>
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_EMAIL]}
            </p>
          </div>

          <div className="mt-4 mr-2">
            <span className={css(AppStyles.heading60)}>Location view</span>
            <div>
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER] && (
                <span className={`mr-1 ${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER]},
                </span>
              )}
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_STREET_NAME] && (
                <span className={`${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_STREET_NAME]}
                </span>
              )}
            </div>
            <div>
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_CITY] && (
                <span className={`mr-1 ${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_CITY]},
                </span>
              )}
              {driverDetail[DRIVER_FIELDS_NAME.DRIVER_POSTCODE] && (
                <span className={`${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_POSTCODE]}
                </span>
              )}
            </div>
            {driverDetail[DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME] && (
              <p className={`${css(styles.para)}`}>
                {driverDetail[DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME]}
              </p>
            )}
          </div>

          {driverDetail[DRIVER_FIELDS_NAME.STATUS] && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>STATUS</span>
              <div className={`mt-2 ${css(styles.imgDiv)}`}>
                <div style={{ flex: 0, marginRight: 7 }}>
                  <img
                    className={`${css(styles.visibleTaskIcon)}`}
                    src={
                      DM_DRIVER_STATUS_TYPE[
                        driverDetail[DRIVER_FIELDS_NAME.STATUS]
                      ].icon
                    }
                  />
                </div>
                <p className={`${css(styles.para)}`} style={{ flex: 1 }}>
                  {_.startCase(
                    _.toLower(driverDetail[DRIVER_FIELDS_NAME.STATUS])
                  )}{' '}
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_BATTERY] &&
                    `(Battery: ${
                      driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_BATTERY]
                    }%)`}
                </p>
              </div>
            </div>
          )}

          {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_MANUFACTURER] && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Operating system</span>
              <div>
                <p className={`${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_MANUFACTURER] ==
                  'Apple'
                    ? ''
                    : `${
                        driverDetail[
                          DRIVER_FIELDS_NAME.DRIVER_PHONE_MANUFACTURER
                        ]
                      } `}

                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_MODEL]}
                </p>
                <p className={`${css(styles.para)}`}>
                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_OS]}

                  {driverDetail[DRIVER_FIELDS_NAME.DRIVER_PHONE_OS_VERSION]}
                </p>
              </div>
            </div>
          )}

          {driverDetail[DRIVER_FIELDS_NAME.DRIVER_APP_VERSION] && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>
                KIFFGO DRIVER APP VERSION
              </span>

              <p className={`${css(styles.para)}`}>
                {'V'}
                {driverDetail[DRIVER_FIELDS_NAME.DRIVER_APP_VERSION]}
              </p>
            </div>
          )}

          <div className="mt-4 mr-2">
            <span className={css(AppStyles.heading60)}>
              Assigned Vehicle details
            </span>

            {!_.isEmpty(type) && (
              <div>
                <p className={`mt-2 ${css([styles.para])}`}>{`${
                  _.isEmpty(makeModel)
                    ? _.isEmpty(year)
                      ? type
                      : `${type} -`
                    : `${type} -`
                }  ${makeModel} ${year}`}</p>
                <p className={` ${css([styles.para])}`}>{`${
                  !_.isEmpty(color) ? `${color} -` : ''
                }  ${numberPlate}`}</p>
              </div>
            )}

            <p className={`${css([styles.para])}`}>
              <span className={`${css([AppStyles.para])}`}>Capacity :</span>{' '}
              {!_.isEmpty(driverDetail[DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]) &&
              driverDetail[DRIVER_FIELDS_NAME.VEHICLE_CAPACITY] !== 'NaN'
                ? driverDetail[DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]
                : '--'}
            </p>
            {driverDetail[DRIVER_FIELDS_NAME.SPEED] > 0 && (
              <p className={`${css([styles.para])}`}>
                <span className={`${css([AppStyles.para])}`}>
                  Driving Speed :{` ${driverDetail[DRIVER_FIELDS_NAME.SPEED]}%`}
                </span>
              </p>
            )}
          </div>
          <div className="mt-4 mr-2">
            <div className={css(styles.tasksHeading)}>
              <div className={css(AppStyles.flex1)}>
                <span className={css(AppStyles.heading60)}>{`TASKS ${
                  currentDriverTaskList.length
                    ? `(${currentDriverTaskList.length})`
                    : ''
                }`}</span>
              </div>

              <div>
                <span
                  onClick={onDeletePress}
                  className={`mr-2 ${css(styles.optionStyles)}`}
                >
                  {showDelete ? 'Delete' : ''}
                </span>
                <span
                  onClick={onUnassignClick}
                  className={`mr-2 ${css(styles.optionStyles)}`}
                >
                  {showUnassign ? 'Unassign' : ''}
                </span>
                <span
                  onClick={() => selectAll(true)}
                  className={`mr-2 ${css([
                    AppStyles.fontSize13,
                    AppStyles.whiteColor,
                    AppStyles.cursorPointer
                  ])}`}
                >
                  All
                </span>
                <span
                  onClick={() => selectAll(false)}
                  className={`mr-2 ${css([
                    AppStyles.fontSize13,
                    AppStyles.whiteColor,
                    AppStyles.cursorPointer
                  ])}`}
                >
                  None
                </span>
              </div>
            </div>

            {!_.isEmpty(currentDriverTaskList) && (
              <div className={`mt-4 ${css(styles.taskListWrapper)}`}>
                {sequenceChangeLoading && <SequenceLoading />}

                {currentDriverTaskList.map((item, index) => {
                  return (
                    <div
                      className={`${css([styles.driverTaskItemWrapper])}`}
                      key={item.id}
                    >
                      <p
                        id="taskNumber"
                        className={`${css([styles.driverTaskSequence])}`}
                      >
                        {index + 1}
                      </p>
                      <TaskItem
                        data={item}
                        key={item.id}
                        onClick={() => {
                          handleTaskClick(item);
                        }}
                        onTaskDragLeave={onTaskDragLeave}
                        onTaskDragOver={onTaskDragOver}
                        isOvered={
                          overedTask === item[TASK_FIELDS_NAME.TASK_NUMBER]
                        }
                        showEta={showEta}
                        onETAClick={onETAClick}
                        showETD={showETD}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {_.isEmpty(currentDriverTaskList) && !loading && (
              <div className={css(styles.noItem)}>
                <p>No task found</p>
              </div>
            )}
            {loading && (
              <div className={css(styles.noItem)}>
                <ClipLoader sizeUnit="px" size={20} color={Colors.viking} />
              </div>
            )}
          </div>
        </div>
      </BlackModal>
    );
  }
}
