// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import DMSettingModalView from './DMSettingModalView';
import { ROUTES } from '../../../constants';

class DMSettingModalController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.string.isRequired
  };

  closeModal = () => {
    this.props.history.push(ROUTES.DELIVERY_MANAGEMENT);
  };

  render() {
    return <DMSettingModalView {...this.props} closeModal={this.closeModal} />;
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMSettingModalController)));
