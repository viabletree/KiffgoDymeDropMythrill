// @flow
import React from 'react';
import PropTypes from 'prop-types';

import LocationSectionView from './LocationSectionView';

export default class LocationSectionController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <LocationSectionView {...this.props} />;
  }
}
