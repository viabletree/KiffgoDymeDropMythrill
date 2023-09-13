// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dmChangeMapServiceProviderRequest } from '../../../../actions/UserAction';
import DmMapSettingView from './DmMapSettingView';

class DmMapSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = { google: true, service: props.userDetails.service };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!_.isEqual(nextProps.userDetails.service, prevState.service)) {
      return {
        service: nextProps.userDetails.service
      };
    } else return null; // Triggers no change in the state
  }

  onServiceClick = service => {
    const payload = {
      service
    };
    this.props.dmChangeMapServiceProviderRequest(payload);
  };

  render() {
    const { google, service } = this.state;

    return (
      <DmMapSettingView
        {...this.props}
        google={google}
        service={service}
        onServiceClick={this.onServiceClick}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userDetails: user.data
});

const actions = { dmChangeMapServiceProviderRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmMapSettingController)));
