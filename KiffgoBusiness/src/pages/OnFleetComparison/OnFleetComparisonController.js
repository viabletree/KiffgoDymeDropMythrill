// @flow
import React from 'react';
import PropTypes from 'prop-types';

import OnFleetComparisonView from './OnFleetComparisonView';

export default class OnFleetComparisonController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <OnFleetComparisonView {...this.props} />;
  }
}
