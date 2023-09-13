// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import DashboardHeaderView from './DashboardHeaderView';

export default class DashboardHeaderController extends React.Component {
  static propTypes = {
    hasSearch: PropTypes.bool
  };

  static defaultProps = {
    hasSearch: false,
    showCancelBtn: false
  };

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: ''
    };
  }

  handleSearchChange = e => {
    const val = e.target.value;
    this.setState({
      searchKeyword: val,
      showCancelBtn: !_.isEmpty(val)
    });
  };

  onSearchClick = () => {
    this.props.handleSearchButton(this.state.searchKeyword);
  };

  clearSearch = () => {
    this.setState(
      {
        searchKeyword: '',
        showCancelBtn: false
      },
      () => {
        this.props.handleSearchButton(this.state.searchKeyword);
      }
    );
  };

  render() {
    return (
      <DashboardHeaderView
        {...this.props}
        handleSearchChange={this.handleSearchChange}
        onSearchClick={this.onSearchClick}
        showCancelBtn={this.state.showCancelBtn}
        handleCancelBtn={this.clearSearch}
        searchKeyword={this.state.searchKeyword}
      />
    );
  }
}
