// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import DMDriverListingView from './DMDriverListingView';
import { DRIVER_FIELDS_NAME } from '../../../constants';

const searchOptions = {
  keys: [DRIVER_FIELDS_NAME.DRIVER_NAME, DRIVER_FIELDS_NAME.DRIVER_PHONE]
};

const getSearchedDriverList = (driverList, searchKeyword) => {
  if (driverList.length === 0) return [];
  if (_.isEmpty(searchKeyword)) return driverList;
  const fuse = new Fuse(driverList, searchOptions);
  return fuse.search(searchKeyword);
};

export default class DMDriverListingController extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.driverListing.length) {
      return {
        searchedList: getSearchedDriverList(
          nextProps.driverListing,
          prevState.searchValue
        )
      };
    } else return { searchedList: [] }; // Triggers no change in the state
  }

  static propTypes = {
    driverListing: PropTypes.array,
    selectedDriverIds: PropTypes.array,
    onDriverClick: PropTypes.func,
    isDetailListing: PropTypes.bool,
    isLoading: PropTypes.bool,
    onDriverDoubleClick: PropTypes.func,
    hasFixedHeight: PropTypes.bool,
    multiSelect: PropTypes.bool,
    showNoneAll: PropTypes.bool,
    onAllPress: PropTypes.func,
    onNonePress: PropTypes.func
  };

  static defaultProps = {
    driverListing: [],
    selectedDriverIds: [],
    onDriverClick: () => {},
    onDriverDoubleClick: () => {},
    isDetailListing: false,
    isLoading: false,
    hasFixedHeight: false,
    multiSelect: false,
    showNoneAll: false,
    onAllPress: () => {},
    onNonePress: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchedList: getSearchedDriverList(props.driverListing, '')
    };
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

      this.props.onDriverDoubleClick(data);
    } else {
      this._delayedClick(data);
      this.clickedOnce = true;
    }
  };

  doClick = data => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK

    this.props.onDriverClick(data);
  };

  onSearchChange = e => {
    const searchValue = e.target.value;
    this.setState({
      searchValue
    });
  };

  render() {
    return (
      <DMDriverListingView
        {...this.props}
        searchValue={this.state.searchValue}
        onSearchChange={this.onSearchChange}
        searchedList={this.state.searchedList}
        itemClick={this.itemClick}
        onAllPress={this.props.onAllPress}
        onNonePress={this.props.onNonePress}
      />
    );
  }
}
