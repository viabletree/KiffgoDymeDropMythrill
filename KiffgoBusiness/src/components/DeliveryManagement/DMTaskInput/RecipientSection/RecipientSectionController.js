// @flow
import React from 'react';
import PropTypes from 'prop-types';

import RecipientSectionView from './RecipientSectionView';

export default class RecipientSectionController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <RecipientSectionView {...this.props} />;
  }
}
