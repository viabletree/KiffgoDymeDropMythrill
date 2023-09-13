// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import FlatfileImporter from '@flatfile/adapter';

import DMHeaderView from './DMHeaderView';
import { userLogoutRequest } from '../../../actions/UserAction';
import Util from '../../../services/Util';
import SocketIO from '../../../services/SocketIO';

import { FLAT_FILE_KEY, ARE_YOU_SURE } from '../../../constants';
const options = {};
const importer = new FlatfileImporter(FLAT_FILE_KEY, options);

class DMHeaderController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  handleUserLogout = () => {
    Util.dmConfirmAlert(
      'Log out',
      ARE_YOU_SURE,
      'Log out',
      this.props.userLogoutRequest,
      true
    );
  };

  onQuestionMarkClick = () => {
    // SocketIO.disconnect();
  };

  onFileImportClick = async () => {
    try {
      const results = await importer.requestDataFromUser();
    } catch (e) {
      // handle a failed upload
    }
  };

  render() {
    return (
      <DMHeaderView
        {...this.props}
        handleUserLogout={this.handleUserLogout}
        onQuestionMarkClick={this.onQuestionMarkClick}
        onFileImportClick={this.onFileImportClick}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {
  userLogoutRequest
};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(DMHeaderController));
