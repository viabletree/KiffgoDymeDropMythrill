// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { BlackModal, DMDriverListing, DMButton } from '../../../components';
import styles from './DMUpdateDriveModalStyles';
import { DM_BUTTON_THEME } from '../DMButton';

export default class DMUpdateDriveModalView extends React.PureComponent {
  render() {
    return (
      <BlackModal
        open
        onClose={this.props.onModalCloseClick}
        rightButton={{
          title: 'Assign',
          onClick: this.props.onAssignClick,
          isLoading: this.props.assignLoading
        }}
      >
        <div className={`${css(styles.driverListingWrapper)}`}>
          <DMDriverListing
            driverListing={this.props.driverListing}
            selectedDriverIds={this.props.selectedDriverIds}
            isDetailListing
            onDriverClick={this.props.onDriverClick}
          />
        </div>{' '}
        <DMButton
          title="Unassign"
          theme={DM_BUTTON_THEME.GREY_THEME}
          className={`mt-3 ${css(styles.unassignBtn)}`}
          onClick={this.props.onUnassignClick}
          isLoading={this.props.unassignLoading}
        />
        {/* !_.isNull(this.props.taskDetail.driver_id) && (
          
        ) */}
      </BlackModal>
    );
  }
}
