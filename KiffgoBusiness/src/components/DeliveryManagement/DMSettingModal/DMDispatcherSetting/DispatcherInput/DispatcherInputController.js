// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DispatcherInputView from './DispatcherInputView';

export default class DispatcherInputController extends React.Component {
  static defaultProps = {};

  itemClick = data => {
    if (!this._delayedClick) {
      this._delayedClick = _.debounce(() => this.doClick(()=>{}), 200);
    }
    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      // DOUBLE CLICK
      this._delayedClick = null;

      this.props.onDoubleClick(()=>{});
    } else {
      this._delayedClick(()=>{});
      this.clickedOnce = true;
    }
  };

  doClick = data => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK

    this.props.onClick(()=>{});
  };

  render() {
    return <DispatcherInputView {...this.props} itemClick={this.itemClick} />;
  }
}
