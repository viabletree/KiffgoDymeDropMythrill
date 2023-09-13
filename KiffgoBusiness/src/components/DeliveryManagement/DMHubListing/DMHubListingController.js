// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import DMHubListingView from './DMHubListingView';
import { DRIVER_FIELDS_NAME } from '../../../constants';

const searchOptions = {
  keys: [DRIVER_FIELDS_NAME.DRIVER_NAME, DRIVER_FIELDS_NAME.DRIVER_PHONE]
};

export default class DMHubListingController extends React.Component {
  static propTypes = {
    hubListing: PropTypes.array,
    selectedHubId: PropTypes.number,
    onHubClick: PropTypes.func,
    isDetailListing: PropTypes.bool,
    isLoading: PropTypes.bool,
    onHubDoubleClick: PropTypes.func,
    hasFixedHeight: PropTypes.bool
  };

  static defaultProps = {
    hubListing: [],
    selectedHubId: null,
    onHubClick: () => {},
    onHubDoubleClick: () => {},
    isDetailListing: false,
    isLoading: false,
    hasFixedHeight: false
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  itemClick = data => {
    if (!this._delayedClick) {
      this._delayedClick = _.debounce(() => this.doClick(data), 200);
    }
    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      // DOUBLE CLICK
      this._delayedClick = null;

      this.props.onHubDoubleClick(data);
    } else {
      this._delayedClick(data);
      this.clickedOnce = true;
    }
  };

  doClick = data => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK

    this.props.onHubClick(data);
  };

  render() {
    return <DMHubListingView {...this.props} itemClick={this.itemClick} />;
  }
}
