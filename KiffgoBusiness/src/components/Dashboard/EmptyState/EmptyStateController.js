// @flow
import React from 'react';
import PropTypes from 'prop-types';

import EmptyStateView from './EmptyStateView';
import { ROUTES } from '../../../constants';

export default class EmptyStateController extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonTitle: PropTypes.string,
    redirectTo: PropTypes.string,
    fullScreen: PropTypes.bool
  };

  static defaultProps = {
    fullScreen: false,
    description: '',
    buttonTitle: '',
    redirectTo: ROUTES
  };

  render() {
    return <EmptyStateView {...this.props} />;
  }
}
