// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ApiKeyItemView from './ApiKeyItemView';

export default class ApiKeyItemController extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    selected: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func.isRequired
  };

  static defaultProps = {};

  itemClick = data => {
    if (!this._delayedClick) {
      this._delayedClick = _.debounce(() => this.doClick(data), 200);
    }
    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      // DOUBLE CLICK
      this._delayedClick = null;

      this.props.onDoubleClick(data);
    } else {
      this._delayedClick(data);
      this.clickedOnce = true;
    }
  };

  doClick = data => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK

    this.props.onClick(data);
  };

  render() {
    return <ApiKeyItemView {...this.props} itemClick={this.itemClick} />;
  }
}
