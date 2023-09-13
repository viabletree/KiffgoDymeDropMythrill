// @flow
import React from 'react';
import PropTypes from 'prop-types';

import ComparisonHeroSectionView from './ComparisonHeroSectionView';

export default class ComparisonHeroSectionController extends React.Component {
  static propTypes = {
    altText: PropTypes.string
  };

  static defaultProps = {
    altText: ''
  };

  render() {
    return <ComparisonHeroSectionView {...this.props} />;
  }
}
