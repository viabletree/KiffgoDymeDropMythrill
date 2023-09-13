// @flow
import React from 'react';
import { css } from 'aphrodite';

import styles from './TaskDetailsSectionStyles';
import { DMTextField, Checkbox } from '../../../../components';
import { AppStyles } from '../../../../theme';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class TaskDetailsSectionView extends React.PureComponent {
  render() {
    return (
      <div className={'mt-5'}>
        <div className={css(styles.headWrapper)}>
          <span className={css(AppStyles.heading60)}>Task details</span>

          <div className={'d-flex'}>
            <div className={'mr-3'}>
              <Checkbox
                title="Pickup"
                name="pickupCheckbox"
                isChecked={this.props.taskInput[TASK_FIELDS_NAME.IS_PICKUP]}
                theme={CHECKBOX_THEME.THEME3}
                onClick={this.props.onPickupClick}
                isDisabled={this.props.disabled}
              />
            </div>
            <Checkbox
              title="Dropoff"
              name="dropoffCheckbox"
              isChecked={this.props.taskInput[TASK_FIELDS_NAME.IS_DROPOFF]}
              theme={CHECKBOX_THEME.THEME3}
              onClick={this.props.onDropoffClick}
              isDisabled={this.props.disabled}
            />
          </div>
        </div>

        <DMTextField
          value={this.props.taskInput[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]}
          label="Internal Order ID"
          name="internalOrderId"
          isDisabled={this.props.disabled}
          onChange={e => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]: e.target.value
            });
            setTimeout(() => {
              this.props.onNameChange();
            }, 200);
          }}
        />

        <DMTextField
          value={this.props.taskInput[TASK_FIELDS_NAME.DESCRIPTION]}
          label="Description:"
          name="description"
          isTextArea
          isDisabled={this.props.disabled}
          onChange={e =>
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.DESCRIPTION]: e.target.value
            })
          }
        />
      </div>
    );
  }
}
