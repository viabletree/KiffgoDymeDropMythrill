// @flow
import React from 'react';
import PropTypes from 'prop-types';

import DeliveryExcellenceBlogView from './DeliveryExcellenceBlogView';

export default class DeliveryExcellenceBlogController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <DeliveryExcellenceBlogView {...this.props} />;
  }
}
