// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import DMOrganizationView from './DMOrganizationView';
import { dmUpdateOrganizationRequest } from '../../../actions/UserAction';
import { DRIVER_FIELDS_NAME } from '../../../constants';

class DMOrganizationController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  timezoneOnchange = data => {
    const payload = {
      timezone: data.value
    };
    this.props.dmUpdateOrganizationRequest(payload);
  };

  render() {
    return (
      <DMOrganizationView
        {...this.props}
        timezoneOnchange={this.timezoneOnchange}
      />
    );
  }
}

const mapStateToProps = () => ({});
const actions = { dmUpdateOrganizationRequest };

export default connect(mapStateToProps, actions)(DMOrganizationController);
