// @flow
import React from 'react';
import PropTypes from 'prop-types';

import TaskDetailsSectionView from './TaskDetailsSectionView';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class TaskDetailsSectionController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  onPickupClick = () => {
    this.props.dmOnTaskInputUpdate({
      [TASK_FIELDS_NAME.IS_DROPOFF]: false,
      [TASK_FIELDS_NAME.IS_PICKUP]: true
    });
  };

  onDropoffClick = () => {
    this.props.dmOnTaskInputUpdate({
      [TASK_FIELDS_NAME.IS_DROPOFF]: true,
      [TASK_FIELDS_NAME.IS_PICKUP]: false
    });
  };

  render() {
    return (
      <TaskDetailsSectionView
        {...this.props}
        onPickupClick={this.onPickupClick}
        onDropoffClick={this.onDropoffClick}
      />
    );
  }
}
