// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import RequirementsSectionView from './RequirementsSectionView';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class RequirementsSectionController extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  checkboxClick = type => {
    const cloneProofs = this.props.taskInput[TASK_FIELDS_NAME.PROOF];

    this.props.dmOnTaskInputUpdate({
      [TASK_FIELDS_NAME.PROOF]: _.xor(cloneProofs, [type])
    });
  };

  render() {
    return (
      <RequirementsSectionView
        {...this.props}
        checkboxClick={this.checkboxClick}
      />
    );
  }
}
