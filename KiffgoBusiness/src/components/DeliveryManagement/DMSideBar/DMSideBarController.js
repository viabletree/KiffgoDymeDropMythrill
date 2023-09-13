// @flow
import React from 'react';
import PropTypes from 'prop-types';

import DMSideBarView from './DMSideBarView';

export default class DMSideBarController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <DMSideBarView {...this.props} />;
  }
}
