// @flow
import React from 'react';
import PropTypes from 'prop-types';

import DMLoaderView from './DMLoaderView';

export default class DMLoaderController extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    isloading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    backgroundColor: '#000000b0'
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.loading !== nextProps.isloading) {
      return {
        loading: nextProps.isloading
      };
    } else return null; // Triggers no change in the state
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: props.isloading
    };
  }

  render() {
    return <DMLoaderView {...this.props} loading={this.state.loading} />;
  }
}
