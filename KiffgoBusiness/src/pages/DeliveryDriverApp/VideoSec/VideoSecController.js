// @flow
import React from 'react';
import ReactGA from 'react-ga';

import VideoSecView from './VideoSecView';

export default class VideoSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <VideoSecView {...this.props} />;
  }
}
