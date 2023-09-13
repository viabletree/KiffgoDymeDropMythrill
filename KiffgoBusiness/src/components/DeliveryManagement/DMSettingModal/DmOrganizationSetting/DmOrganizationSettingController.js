// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import { userUploadLogoRequest } from '../../../../actions/UserAction';
import DmOrganizationSettingView from './DmOrganizationSettingView';
import {
  ROUTES,
  ARE_YOU_SURE,
  CONFIRM_DELETE_DRIVER,
  MESSAGE_TYPES
} from '../../../../constants';
import PropTypes from 'prop-types';
import {
  showDriverEditDetail,
  deleteDriverRequest
} from '../../../../helpers/dmHelper';
import Util from '../../../../services/Util';

class DmOrganizationSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = { foo: 'bar' };
  }

  render() {
    return <DmOrganizationSettingView {...this.props} foo={this.state.foo} />;
  }
}

const mapStateToProps = ({ user }) => ({
  userDetails: user.data
});

const actions = { userUploadLogoRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmOrganizationSettingController)));
