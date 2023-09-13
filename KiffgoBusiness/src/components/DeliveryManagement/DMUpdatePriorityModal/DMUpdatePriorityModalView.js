// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { BlackModal, DMDriverListing, DMButton } from '../../../components';
import styles from './DMUpdatePriorityModalStyles';
import { DM_BUTTON_THEME } from '../DMButton';
import { AppStyles } from '../../../theme';

export default class DMUpdatePriorityModalView extends React.PureComponent {
  render() {
    return (
      <BlackModal
        open
        onClose={this.props.onModalCloseClick}
        rightButton={{
          title: 'Confirm',
          onClick: this.props.submitClick,
          isLoading: this.props.loading
        }}
      >
        <div className={`${css(styles.heading)}`}>
          <p>Set priority for Task(s)</p>
        </div>
        <div className={`${css(styles.description)}`}>
          <p>
            When fleet capacity is maxed out, you may want to tell Optimus to
            prioritize some tasks over others as they may be urgent or
            important.
          </p>
        </div>
        <div className={`${css(styles.taskCount)}`}>
          <p>
            {`${this.props.tasksList.length} task(s) will be changed to Priority`}
          </p>
        </div>
        <div className={css(AppStyles.mTop20)}>
          <div
            className={css(styles.actionItem)}
            onClick={this.props.onPriorityChange}
          >
            <div className={css(styles.outerCheck)}>
              {this.props.priority && (
                <div className={css(styles.innerCheck)} />
              )}
            </div>
            <div className={css([AppStyles.flex1, AppStyles.mLeft5])}>
              Priority
            </div>
          </div>
          <div
            className={css(styles.actionItem)}
            onClick={this.props.onPriorityChange}
          >
            <div className={css(styles.outerCheck)}>
              {!this.props.priority && (
                <div className={css(styles.innerCheck)} />
              )}
            </div>
            <div className={css([AppStyles.flex1, AppStyles.mLeft5])}>
              No priority
            </div>
          </div>
        </div>
        {/* !_.isNull(this.props.taskDetail.driver_id) && (
          
        ) */}
      </BlackModal>
    );
  }
}
