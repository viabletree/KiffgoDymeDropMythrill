// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import DmUserSettingView from './DmUserSettingView';



class DmUserSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = {foo: 'bar'};
   
  }

  render() {
    return (
      <DmUserSettingView
        {...this.props}
        foo={this.state.foo}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userDetails: user.data
});

const actions = { };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmUserSettingController)));
