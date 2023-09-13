// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMTaskInputStyles';
import {
  BlackModal,
  DMTextField,
  DMButton,
  DMDriverListing
} from '../../../components';
import RecipientSection from './RecipientSection';
import LocationSection from './LocationSection';
import TaskDetailsSection from './TaskDetailsSection';
import RequirementsSection from './RequirementsSection';
import CollectionTimeSection from './CollectionTimeSection';
import { AppStyles } from '../../../theme';

import Util from '../../../services/Util';
import {
  TASK_FIELDS_NAME,
  DATE_TIME_FORMAT4,
  DM_TASK_TYPE
} from '../../../constants';
import { DM_BUTTON_THEME } from '../DMButton';

export default class DMTaskInputView extends React.PureComponent {
  render() {
    const isCreate = _.isNull(this.props.taskDetail);
    let taskInputReducerIsFilled = false;
    if (this.props.useCoordinates) {
      taskInputReducerIsFilled = true;
    } else {
      taskInputReducerIsFilled = !_.isEmpty(
        this.props.taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS]
      );
    }

    const diriverListIsLoading =
      this.props.driverListing.length === 0 && this.props.isActiveDriverLoading;

    return (
      <BlackModal
        open
        onClose={this.props.onModalCloseClick}
        rightButton={{
          title: isCreate ? 'Create' : 'Save',
          onClick: this.props.onSubmitClick,
          isLoading: this.props.isLoading
        }}
      >
        {!isCreate && (
          <div className={`${css(styles.wrapper)}`}>
            <p className={`${css(styles.editTaskHeading)}`}>
              Task {this.props.taskInput[TASK_FIELDS_NAME.TASK_NUMBER]}
            </p>
            <p className={`${css(styles.taskDate)}`}>
              Created on{' '}
              {Util.getFormattedDateTime(
                this.props.taskDetail.created_at,
                DATE_TIME_FORMAT4
              )}
              by {this.props.taskInput[TASK_FIELDS_NAME.OWNER]}
            </p>
          </div>
        )}
        <div className={`${css(styles.wrapper)}`}>
          <RecipientSection
            {...this.props}
            disabled={!isCreate && this.props.isInTransit()}
          />
          <TaskDetailsSection
            {...this.props}
            disabled={!isCreate && this.props.isInTransit()}
          />
          <LocationSection
            {...this.props}
            disabled={!isCreate && this.props.isInTransit()}
          />
          {((!isCreate && taskInputReducerIsFilled) || isCreate) && (
            <CollectionTimeSection
              {...this.props}
              onError={this.props.setTimeError}
              disabled={!isCreate && this.props.isInTransit()}
            />
          )}
          <div className={'d-flex mt-4 mr-2'}>
            <div className={`${css(AppStyles.flex1)} mr-2`}>
              <span className={css(AppStyles.heading60)}>Quantity</span>
              <div className={'mt-3'}>
                <DMTextField
                  name="quantity"
                  value={this.props.taskInput[TASK_FIELDS_NAME.QUANTITY]}
                  type="number"
                  isDisabled={!isCreate && this.props.isInTransit()}
                  min="0"
                  onChange={e =>
                    this.props.dmOnTaskInputUpdate({
                      [TASK_FIELDS_NAME.QUANTITY]: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className={`${css(AppStyles.flex1)} ml-2`}>
              <span className={css(AppStyles.heading60)}>
                Service time (min)
              </span>
              <div className={'mt-3'}>
                <DMTextField
                  name="serviceTime"
                  value={this.props.taskInput[TASK_FIELDS_NAME.SERVICE_MIN]}
                  type="number"
                  isDisabled={!isCreate && this.props.isInTransit()}
                  min="0"
                  onChange={e =>
                    this.props.dmOnTaskInputUpdate({
                      [TASK_FIELDS_NAME.SERVICE_MIN]: e.target.value
                    })
                  }
                />
              </div>
            </div>
          </div>
        
            <div className={`${css(AppStyles.flex1)} mt-4`}>
              <span className={css(AppStyles.heading60)}>Order Value</span>
              <div className={'mt-3'}>
                <DMTextField
                  name="serviceTime"
                  value={this.props.taskInput[TASK_FIELDS_NAME.ORDERVALUE]}
                  type="number"
                  isDisabled={!isCreate && this.props.isInTransit()}
                  min="0"
                  step="0.1"
                  onChange={e =>
                    this.props.dmOnTaskInputUpdate({
                      [TASK_FIELDS_NAME.ORDERVALUE]: e.target.value
                    })
                  }
                />
              </div>
            </div>
       
          <RequirementsSection
            {...this.props}
            disabled={!isCreate && this.props.isInTransit()}
          />

          <div className={`${css(AppStyles.flex1)} mr-2 mt-5`}>
            <span className={css(AppStyles.heading60)}>Assigned To</span>
            <div className={'mt-2'}>
              {!isCreate && this.props.isInTransit() && (
                <div>
                  <p className={`${css(AppStyles.para1)}`}>
                    {this.props.taskInput[TASK_FIELDS_NAME.DRIVER_NAME]}
                  </p>
                  <p className={`${css(AppStyles.para1)}`}>
                    {this.props.taskInput[TASK_FIELDS_NAME.DRIVER_PHONE]}
                  </p>
                </div>
              )}
              {!isCreate && !this.props.isInTransit() && (
                <div className={`${css(styles.driverListingWrapper)}`}>
                  <DMDriverListing
                    {...this.props}
                    isLoading={diriverListIsLoading}
                    selectedDriverIds={[
                      this.props.taskInput[TASK_FIELDS_NAME.DRIVER_ID]
                    ]}
                    isDetailListing
                    hasFixedHeight
                  />
                </div>
              )}
              {isCreate && (
                <div className={`${css(styles.driverListingWrapper)}`}>
                  <DMDriverListing
                    {...this.props}
                    isLoading={diriverListIsLoading}
                    selectedDriverIds={[
                      this.props.taskInput[TASK_FIELDS_NAME.DRIVER_ID]
                    ]}
                    isDetailListing
                    hasFixedHeight
                  />
                </div>
              )}
            </div>
          </div>

          {!isCreate &&
            this.props.taskInput[TASK_FIELDS_NAME.STATUS] !==
              DM_TASK_TYPE.IN_TRANSIT.slug && (
              <div
                className={`${css([
                  AppStyles.flexBox,
                  AppStyles.justifyCenter
                ])}`}
              >
                <DMButton
                  className={`${css([styles.deleteButton])} mt-3`}
                  theme={DM_BUTTON_THEME.GREY_THEME}
                  title="Delete Task"
                  onClick={this.props.removeTask}
                  isLoading={this.props.isDeleting}
                />
              </div>
            )}
        </div>
      </BlackModal>
    );
  }
}
