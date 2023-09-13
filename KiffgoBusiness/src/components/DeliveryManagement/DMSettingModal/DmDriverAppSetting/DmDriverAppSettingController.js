// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dmChangeOfflineModeRequest } from '../../../../actions/UserAction';
import DmDriverAppSettingView from './DmDriverAppSettingView';

class DmDriverAppSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = { enabled: false };
  }

  onCheckBoxClick = () => {
    this.props.dmChangeOfflineModeRequest({
      offline_mode: !this.props.userDetails.business.offline_mode
    });
  };

  render() {
    const { enabled } = this.state;

    return (
      <DmDriverAppSettingView
        {...this.props}
        enabled={enabled}
        onCheckBoxClick={this.onCheckBoxClick}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userDetails: user.data
});

const actions = { dmChangeOfflineModeRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmDriverAppSettingController)));
