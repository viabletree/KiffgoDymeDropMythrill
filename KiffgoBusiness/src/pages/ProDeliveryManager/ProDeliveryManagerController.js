// @flow
import React from 'react';
import PropTypes from 'prop-types';

import ProDeliveryManagerView from './ProDeliveryManagerView';

export default class ProDeliveryManagerController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <ProDeliveryManagerView {...this.props} />;
  }
}
