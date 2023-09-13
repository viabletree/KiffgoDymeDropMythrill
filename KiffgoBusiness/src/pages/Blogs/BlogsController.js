// @flow
import React from 'react';
import PropTypes from 'prop-types';

import BlogsView from './BlogsView';

export default class BlogsController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <BlogsView {...this.props} />;
  }
}
