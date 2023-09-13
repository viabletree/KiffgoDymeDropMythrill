// @flow
import React from 'react';
import { css } from 'aphrodite';

import styles from './RecipientSectionStyles';
import { DMTextField, Checkbox } from '../../../../components';
import { AppStyles } from '../../../../theme';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class RecipientSectionView extends React.PureComponent {
  render() {
    return (
      <div className={'mt-2'}>
        <div className={css(styles.headWrapper)}>
          <span className={css(AppStyles.heading60)}>CONTACT</span>

          <Checkbox
            name="recipientCheckbox"
            title="No recipient"
            isChecked={this.props.noRecipient}
            theme={CHECKBOX_THEME.THEME2}
            onClick={this.props.onNoRecipientToggle}
          />
        </div>
        <div className={css(AppStyles.flex1)}>
          <DMTextField
            value={this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE]}
            label="Phone"
            name="recipientPhone"
            isPhoneNumber
            onBlur={this.props.getRecentRecords}
            onChange={e => {
              this.props.dmOnTaskInputUpdate({
                [TASK_FIELDS_NAME.RECIPIENT_PHONE]: e
              });

              setTimeout(() => {
                this.props.onPhoneChange();
              }, 200);
            }}
            isDisabled={this.props.noRecipient}
            error={this.props[TASK_FIELDS_NAME.RECIPIENT_PHONE_ERROR]}
          />
        </div>
        <div className={css(AppStyles.flex1)}>
          <DMTextField
            value={this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_EMAIL]}
            label="Email"
            name="recipientEmail"
            onBlur={this.props.getRecentRecords}
            onChange={e => {
              this.props.dmOnTaskInputUpdate({
                [TASK_FIELDS_NAME.RECIPIENT_EMAIL]: e.target.value
              });
            }}
            isDisabled={this.props.noRecipient}
            error={this.props[TASK_FIELDS_NAME.RECIPIENT_EMAIL_ERROR]}
          />
        </div>
        <div className={css([AppStyles.flex1])}>
          <DMTextField
            value={this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME]}
            label="Name"
            name="recipientName"
            onChange={e => {
              this.props.dmOnTaskInputUpdate({
                [TASK_FIELDS_NAME.RECIPIENT_NAME]: e.target.value
              });
              setTimeout(() => {
                this.props.onNameChange();
              }, 200);
            }}
            isDisabled={this.props.noRecipient}
            error={this.props[TASK_FIELDS_NAME.RECIPIENT_NAME_ERROR]}
          />
        </div>
        <DMTextField
          value={this.props.taskInput[TASK_FIELDS_NAME.RECIPIENT_NOTES]}
          label="Recipient notes:"
          name="recipientNotes"
          isTextArea
          onChange={e =>
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.RECIPIENT_NOTES]: e.target.value
            })
          }
          isDisabled={this.props.noRecipient}
        />
      </div>
    );
  }
}
