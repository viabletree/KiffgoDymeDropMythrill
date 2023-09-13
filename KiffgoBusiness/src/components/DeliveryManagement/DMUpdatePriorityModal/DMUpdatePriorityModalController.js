/* eslint-disable no-undef */
// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMUpdatePriorityModalView from './DMUpdatePriorityModalView';
import { changePriorityRequest } from '../../../actions/DMTasksActions';
import { getActiveDrivers } from '../../../helpers/dmHelper';

class DMUpdatePriorityModalController extends React.Component {
  static propTypes = {
    tasksList: PropTypes.array.isRequired,
    onModalCloseClick: PropTypes.func.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      priority: false,
      loading: false
    };
  }

  onPriorityChange = () => {
    this.setState(prevState => {
      return { priority: !prevState.priority };
    });
  };

  submitClick = () => {
    this.setState({ loading: true });
    const payload = {};
    payload.uniqeStrings = this.props.tasksList;
    payload.priority = this.state.priority ? 1 : 0;
    this.props.changePriorityRequest(payload, () => {
      this.setState({ loading: false }, () => {
        this.props.onModalCloseClick();
      });
    });
  };

  render() {
    const { priority, loading } = this.state;
    return (
      <DMUpdatePriorityModalView
        {...this.props}
        loading={loading}
        priority={priority}
        onPriorityChange={this.onPriorityChange}
        submitClick={this.submitClick}
      />
    );
  }
}

const mapStateToProps = () => ({});

const actions = {
  changePriorityRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(DMUpdatePriorityModalController));
