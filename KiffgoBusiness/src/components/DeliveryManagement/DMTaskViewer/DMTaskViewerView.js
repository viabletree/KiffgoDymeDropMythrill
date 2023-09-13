// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import moment from 'moment';
import styles from './DMTaskViewerStyles';
import { BlackModal } from '../../../components';
import { AppStyles } from '../../../theme';
import {
  TASK_FIELDS_NAME,
  DM_TASK_TYPE,
  TIME_FORMAT1
} from '../../../constants';
import {
  getTaskTypeDetail,
  showTaskEditDetail
} from '../../../helpers/dmHelper';
import Util from '../../../services/Util';
import { MODAL_BOTTOMS_THEME } from '../../BlackModal';

export default class DMTaskViewerView extends React.PureComponent {
  render() {
    const {
      taskDetail,
      closeViewTask,
      cloneCurrentTask,
      isCloningTask,
      history
    } = this.props;
    const { delayed_in_minutes, priority } = taskDetail;
    const isDelayed = delayed_in_minutes > 0;
    const isPriority = priority > 0;
    const proofJson = JSON.parse(taskDetail.proof);
    const statusDetails = getTaskTypeDetail(
      taskDetail[TASK_FIELDS_NAME.STATUS]
    );
    const isCompleted =
      taskDetail[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
      taskDetail[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug;

    const _leftButton = isCompleted
      ? null
      : {
          title: 'Edit',
          onClick: () => {
            showTaskEditDetail(
              history,
              taskDetail[TASK_FIELDS_NAME.TASK_NUMBER]
            );
          },
          theme: MODAL_BOTTOMS_THEME.GREY_THEME
        };

    let statusIcon = statusDetails.icon;
    if (isDelayed) {
      statusIcon = statusDetails.delayIcon;
    }
    if (isPriority) {
      statusIcon = statusDetails.priorityIcon;
    }
    if (isPriority && isDelayed) {
      statusIcon = statusDetails.priorityDelayIcon;
    }
    if (statusDetails.slug === 'SUCCESS' || statusDetails.slug === 'FAIL') {
      statusIcon = statusDetails.icon;
    }
    return (
      <BlackModal
        open
        hasFooterCancelButton={false}
        onClose={closeViewTask}
        leftButton={_leftButton}
        leftButton2={{
          title: 'Clone',
          onClick: cloneCurrentTask,
          isLoading: isCloningTask,
          theme: MODAL_BOTTOMS_THEME.GREY_THEME
        }}
        rightButton={{
          title: 'Done',
          onClick: closeViewTask
        }}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div
            className={`mt-2 mb-4 ${css([
              AppStyles.flexBox,
              AppStyles.fontSize18
            ])}`}
          >
            <h2 className={`${css(styles.header)}`}>Task </h2>
            {`${taskDetail[TASK_FIELDS_NAME.TASK_NUMBER]}`}
          </div>
          {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.DRIVER_NAME]) &&
            !_.isEmpty(taskDetail[TASK_FIELDS_NAME.DRIVER_PHONE]) && (
              <div className="mt-4 mr-2">
                <span className={css(AppStyles.heading60)}>Assigned to</span>
                <p className={`mt-2 ${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.DRIVER_NAME]}
                </p>
                <p className={`${css(styles.para)}`}>
                  {Util.getFormattedPhone(
                    taskDetail[TASK_FIELDS_NAME.DRIVER_PHONE]
                  )}
                </p>
              </div>
            )}
          {(!_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_NAME]) ||
            !_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_PHONE]) ||
            !_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_NOTES]) ||
            !_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_EMAIL])) && (
            <div className={`mt-4 mr-2 ${css(styles.bap)}`}>
              <span className={css(AppStyles.heading60)}>Recipient</span>
              {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_NAME]) && (
                <p className={`mt-2 ${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.RECIPIENT_NAME]}
                </p>
              )}

              {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_PHONE]) && (
                <p className={`${css(styles.para)}`}>
                  {Util.getFormattedPhone(
                    taskDetail[TASK_FIELDS_NAME.RECIPIENT_PHONE]
                  )}
                </p>
              )}

              {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_EMAIL]) && (
                <p className={`${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.RECIPIENT_EMAIL]}
                </p>
              )}

              {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.RECIPIENT_NOTES]) && (
                <p className={`${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.RECIPIENT_NOTES]}
                </p>
              )}
            </div>
          )}
          <div className="mt-4 mr-2">
            <span className={css(AppStyles.heading60)}>Location</span>

            {taskDetail[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME] && (
              <p className={`mt-2 ${css([styles.para, AppStyles.fontBold])}`}>
                {taskDetail[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]}
              </p>
            )}
            <div>
              {taskDetail[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER] && (
                <span className={`mr-1 ${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]},
                </span>
              )}

              {taskDetail[TASK_FIELDS_NAME.LOCATION_STREET_NAME] && (
                <span className={`${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.LOCATION_STREET_NAME]}
                </span>
              )}
            </div>

            {taskDetail[TASK_FIELDS_NAME.LOCATION_BUILDING] && (
              <p className={`${css(styles.para)}`}>
                {taskDetail[TASK_FIELDS_NAME.LOCATION_BUILDING]}
              </p>
            )}
            {/* {taskDetail[TASK_FIELDS_NAME.LOCATION_ADDRESS] && (
              <p className={`${css(styles.para)}`}>
                {taskDetail[TASK_FIELDS_NAME.LOCATION_ADDRESS]}
              </p>
            )} */}
            <div>
              {taskDetail[TASK_FIELDS_NAME.LOCATION_TOWN] && (
                <span className={`mr-1 ${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.LOCATION_TOWN]},
                </span>
              )}

              {taskDetail[TASK_FIELDS_NAME.LOCATION_POSTCODE] && (
                <span className={`${css(styles.para)}`}>
                  {taskDetail[TASK_FIELDS_NAME.LOCATION_POSTCODE]}
                </span>
              )}
            </div>

            {taskDetail[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME] && (
              <p className={`${css(styles.para)}`}>
                {taskDetail[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]}
              </p>
            )}
            {taskDetail[TASK_FIELDS_NAME.DESTINATION_NOTES] && (
              <div>
                <p className={`${css(styles.para)}`}>
                  <span className={`${css(AppStyles.fontBold)}`}>Notes : </span>
                  {taskDetail[TASK_FIELDS_NAME.DESTINATION_NOTES]}
                </p>
              </div>
            )}
          </div>
          {(taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER] ||
            taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE]) && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>
                Delivery Time WIndow
              </span>
              {taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER] &&
                !taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE] && (
                  <p className={`mt-2 ${css(styles.para)}`}>
                    <span className={`${css(AppStyles.fontBold)}`}>
                      Complete After :
                    </span>{' '}
                    {Util.dateParserTwo(
                      taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER]
                    )}
                  </p>
                )}

              {taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE] &&
                !taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER] && (
                  <p className={`mt-2 ${css(styles.para)}`}>
                    <span className={`${css(AppStyles.fontBold)}`}>
                      Complete Before :
                    </span>{' '}
                    {Util.dateParserTwo(
                      taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE]
                    )}
                  </p>
                )}
              {taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE] &&
                taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER] && (
                  <p className={`mt-2 ${css(styles.para)}`}>
                    <span>Between</span>{' '}
                    {Util.dateParserTwo(
                      taskDetail[TASK_FIELDS_NAME.COMPLETE_AFTER]
                    )}{' '}
                    <span>and</span>{' '}
                    {Util.dateParserTwo(
                      taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE]
                    )}
                  </p>
                )}
            </div>
          )}
          {taskDetail[TASK_FIELDS_NAME.QUANTITY] !== 0 && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Quantity</span>
              <p className={`mt-2 ${css(styles.para)}`}>
                {taskDetail[TASK_FIELDS_NAME.QUANTITY]}
              </p>
            </div>
          )}
          {taskDetail[TASK_FIELDS_NAME.ORDERVALUE] !== 0 && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Order Value</span>
              <p className={`mt-2 ${css(styles.para)}`}>
                {taskDetail[TASK_FIELDS_NAME.ORDERVALUE]}
              </p>
            </div>
          )}
          {taskDetail[TASK_FIELDS_NAME.SERVICE_MIN] !== 0 && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Service time</span>
              <p className={`mt-2 ${css(styles.para)}`}>
                {`${taskDetail[TASK_FIELDS_NAME.SERVICE_MIN]} minutes`}
              </p>
            </div>
          )}
          <div className="mt-4 mr-2">
            <span className={css(AppStyles.heading60)}>Task details</span>

            <p className={`mt-2 ${css(styles.para)}`}>
              <span className={`${css(AppStyles.fontBold)}`}>Type : </span>
              {taskDetail[TASK_FIELDS_NAME.IS_PICKUP] ? 'Pickup' : 'Dropoff'}
            </p>

            {taskDetail[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER] && (
              <p className={`${css(styles.para)}`}>
                <span className={`${css(AppStyles.fontBold)}`}>
                  {`Internal Order ID : `}
                </span>
                {taskDetail[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]}
              </p>
            )}

            {taskDetail[TASK_FIELDS_NAME.DESCRIPTION] && (
              <p className={`${css(styles.para)}`}>
                <span className={`${css(AppStyles.fontBold)}`}>
                  Description :{' '}
                </span>
                {taskDetail[TASK_FIELDS_NAME.DESCRIPTION]}
              </p>
            )}
          </div>

          {isCompleted && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Task metrics</span>

              <p className={`mt-2 ${css(styles.para)}`}>
                <span className={`${css(AppStyles.fontBold)}`}>
                  Duration :{' '}
                </span>
                {moment
                  .utc(
                    moment
                      .duration(
                        taskDetail[TASK_FIELDS_NAME.DURATION],
                        'seconds'
                      )
                      .asMilliseconds()
                  )
                  .format(TIME_FORMAT1)}
              </p>
            </div>
          )}
          {proofJson.length > 0 && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Requirements</span>
              {proofJson.map(item => {
                return (
                  <p
                    className={`mt-2 ${css([
                      styles.para,
                      AppStyles.capitalize
                    ])}`}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          )}

          {taskDetail[TASK_FIELDS_NAME.STATUS] && (
            <div className="mt-4 mr-2">
              <span className={css(AppStyles.heading60)}>Status</span>
              <p className={`mt-2 ${css(styles.paraOther)}`}>
                <img
                  src={statusIcon}
                  alt="status icon"
                  className={`mr-1 ${css(styles.locationIcon)}`}
                />
                {statusDetails.title}
              </p>
            </div>
          )}
          {taskDetail[TASK_FIELDS_NAME.TIMELINE].length > 0 && (
            <div className="mt-4 mr-2">
              <div className={css(AppStyles.mBottom20)}>
                <span className={css(AppStyles.heading60)}>Timeline</span>
              </div>
              {taskDetail[TASK_FIELDS_NAME.TIMELINE].map((item, index) => {
                let barData = {};
                if (item.key === 'added_barcode') {
                  try {
                    barData = JSON.parse(item.value);
                  } catch (error) {
                    if (Util.checkDev()) {
                      console.log(
                        `error parsing barcode data   >>>>>   ${error}`
                      );
                    }
                  }
                }
                console.log({ barData });

                return (
                  <div className={`${css(styles.sideLine)}`}>
                    <div className={`${css(styles.circleLineParent)}`}>
                      <div className={`${css(styles.circleView)}`} />
                      <div
                        className={`${css(
                          index ===
                            taskDetail[TASK_FIELDS_NAME.TIMELINE].length - 1
                            ? styles.lineHide
                            : styles.lineView
                        )}`}
                      />
                    </div>
                    <div className={`${css(styles.contentView)}`}>
                      <p
                        className={`${css([
                          AppStyles.capitalize,
                          AppStyles.fontBold,
                          AppStyles.fontSize13
                        ])}`}
                      >
                        {item.title}
                      </p>
                      <p className={`${css([styles.para])}`}>
                        {Util.dateParserTwo(item.createdAt)}
                      </p>

                      {item.key === 'note_added' && (
                        <div>
                          <p>{taskDetail[TASK_FIELDS_NAME.NOTE]}</p>
                        </div>
                      )}
                      {item.key === 'task_ended' &&
                        item.title === 'Task ended unsuccessfully' && (
                          <div>
                            <p>{taskDetail[TASK_FIELDS_NAME.FAILURE_REASON]}</p>
                          </div>
                        )}
                      {item.key === 'added_barcode' &&
                        barData.isCaptured != null && (
                          <div className={css(AppStyles.mTop5)}>
                            <p className={css(AppStyles.fontSize10)}>
                              {Buffer.from(
                                barData.barcodeString || 'ZmFsc2UgZGF0YQ==',
                                'base64'
                              ).toString()}
                            </p>
                            <p className={css(AppStyles.fontSize10)}>
                              Capture method:{' '}
                              {barData.isCaptured ? 'scanned ' : 'Manual'}
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {taskDetail[TASK_FIELDS_NAME.PICTURES].length > 0 && (
            <div className="mr-2">
              <span className={css(AppStyles.heading60)}>PHOTO</span>
              <div className={`${css(styles.itemImageParent)}`}>
                {taskDetail[TASK_FIELDS_NAME.PICTURES].map(item => {
                  return (
                    <img
                      src={item.secure_url}
                      className={`mt-2 ${css(styles.ItemImage)}`}
                      alt="item"
                    />
                  );
                })}
              </div>
            </div>
          )}
          {!_.isEmpty(taskDetail[TASK_FIELDS_NAME.SIGNATURE].secure_url) && (
            <div className="mr-2 mt-2">
              <span className={css(AppStyles.heading60)}>signature</span>
              <div className={`mt-2 ${css(styles.signatureParent)}`}>
                <img
                  src={taskDetail[TASK_FIELDS_NAME.SIGNATURE].secure_url}
                  className={`${css(styles.ItemImage)}`}
                  alt="item"
                />
              </div>
            </div>
          )}
        </div>
      </BlackModal>
    );
  }
}
