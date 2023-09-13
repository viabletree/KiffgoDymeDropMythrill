// @flow
import React from 'react';
import PropTypes from 'prop-types';

import CartBoxView from './CartBoxView';

export default class CartBoxController extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <CartBoxView {...this.props} />;
  }
}
