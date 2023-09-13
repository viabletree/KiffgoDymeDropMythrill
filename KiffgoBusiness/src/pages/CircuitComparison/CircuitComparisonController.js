// @flow
import React from 'react';
import PropTypes from 'prop-types';

import CircuitComparisonView from './CircuitComparisonView';

export default class CircuitComparisonController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <CircuitComparisonView {...this.props} />;
  }
}
