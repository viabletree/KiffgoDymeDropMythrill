// @flow
import React from 'react';
import PropTypes from 'prop-types';
import SeamlessCommView from './SeamlessCommView';

export default class SeamlessCommController extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    descTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundGradient: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
    altText: PropTypes.string.isRequired,
    isImageOnLeft: PropTypes.bool
  };

  static defaultProps = {
    isImageOnLeft: true
  };

  render() {
    return <SeamlessCommView {...this.props} />;
  }
}
