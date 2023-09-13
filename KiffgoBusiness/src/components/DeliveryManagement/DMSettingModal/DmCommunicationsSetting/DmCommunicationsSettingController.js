/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import DmCommunicationsSettingView from './DmCommunicationsSettingView';
import {
  COMMUNICATIONS_DEFAULTS,
  COMMUNICATIONS_MESSAGE_TYPE,
  COMMUNICATIONS_TASK_TYPE
} from '../../../../constants';
import { updateCommunicationSettingRequest } from '../../../../actions/SettingsActions';
import Util from '../../../../services/Util';
import _ from 'lodash';

class DmCommunicationsSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    const {
      completed_content,
      completed_stage,
      eta_range,
      intransit_content,
      intransit_stage,
      message_type,
      schedule_content,
      schedule_stage,
      task_type
    } = props.settings.communicationSetting;
    const sms =
      message_type === COMMUNICATIONS_MESSAGE_TYPE.SMS ||
      message_type === COMMUNICATIONS_MESSAGE_TYPE.ALL;
    const email =
      message_type === COMMUNICATIONS_MESSAGE_TYPE.EMAIL ||
      message_type === COMMUNICATIONS_MESSAGE_TYPE.ALL;
    const pickup =
      task_type === COMMUNICATIONS_TASK_TYPE.PICK_UP ||
      task_type === COMMUNICATIONS_TASK_TYPE.ALL;
    const dropoff =
      task_type === COMMUNICATIONS_TASK_TYPE.DROP_OFF ||
      task_type === COMMUNICATIONS_TASK_TYPE.ALL;
    super(props);
    this.state = {
      loading: false,
      sms,
      email,
      dropoff,
      pickup,
      schedule_stage,
      schedule_content,
      intransit_stage,
      intransit_content,
      completed_stage,
      completed_content,
      eta_range
    };
  }

  componentDidMount() {}

  onCheckBoxClick = (key, value) => {
    this.setState({ [key]: value });
  };

  onReset = () => {
    const {
      sms,
      email,
      dropoff,
      pickup,
      schedule_stage,
      schedule_content,
      intransit_stage,
      intransit_content,
      completed_stage,
      completed_content,
      eta_range
    } = COMMUNICATIONS_DEFAULTS;
    this.setState({
      sms,
      email,
      dropoff,
      pickup,
      schedule_stage,
      schedule_content,
      intransit_stage,
      intransit_content,
      completed_stage,
      completed_content,
      eta_range
    });
  };

  onAllNoneClick = (action, all) => {
    let { dropoff, pickup, sms, email } = this.state;

    if (action && all) {
      dropoff = true;
      pickup = true;
    } else if (action && !all) {
      dropoff = false;
      pickup = false;
    } else if (!action && all) {
      sms = true;
      email = true;
    } else {
      sms = false;
      email = false;
    }
    this.setState({ dropoff, pickup, sms, email });
  };

  onTextChange = (key, value) => {
    this.setState({ [key]: value.target.value });
  };

  validate = () => {
    const {
      sms,
      email,
      dropoff,
      pickup,
      schedule_content,
      schedule_stage,
      intransit_content,
      intransit_stage,
      completed_content,
      completed_stage,
      eta_range
    } = this.state;
    if (sms || email || dropoff || pickup) {
      if (!schedule_stage && !intransit_stage && !completed_stage) {
        Util.topAlertError('All stages cannot be disabled');
        return false;
      }
      if (schedule_stage) {
        if (_.isEmpty(schedule_content)) {
          Util.topAlertError('Schedule stage content cannot be empty');
          return false;
        }
        if (eta_range < 0) {
          Util.topAlertError('ETA time range cannot be negative');
          return false;
        }
      }
      if (intransit_stage && _.isEmpty(intransit_content)) {
        Util.topAlertError('In-transit stage content cannot be empty');
        return false;
      }
      if (completed_stage && _.isEmpty(completed_content)) {
        Util.topAlertError('Complete stage content cannot be empty');
        return false;
      }
    }
    return true;
  };

  onSave = () => {
    const {
      sms,
      email,
      dropoff,
      pickup,
      schedule_content,
      schedule_stage,
      intransit_content,
      intransit_stage,
      completed_content,
      completed_stage,
      eta_range
    } = this.state;
    if (this.validate()) {
      const payload = {};
      let task_type = COMMUNICATIONS_TASK_TYPE.NONE;
      if (dropoff && pickup) {
        task_type = COMMUNICATIONS_TASK_TYPE.ALL;
      } else if (dropoff) {
        task_type = COMMUNICATIONS_TASK_TYPE.DROP_OFF;
      } else if (pickup) {
        task_type = COMMUNICATIONS_TASK_TYPE.PICK_UP;
      }
      payload.task_type = task_type;
      let message_type = COMMUNICATIONS_MESSAGE_TYPE.NONE;
      if (sms && email) {
        message_type = COMMUNICATIONS_MESSAGE_TYPE.ALL;
      } else if (sms) {
        message_type = COMMUNICATIONS_MESSAGE_TYPE.SMS;
      } else if (email) {
        message_type = COMMUNICATIONS_MESSAGE_TYPE.EMAIL;
      }
      payload.message_type = message_type;
      payload.schedule_content = schedule_content;
      payload.schedule_stage = schedule_stage;
      payload.intransit_stage = intransit_stage;
      payload.intransit_content = intransit_content;
      payload.completed_content = completed_content;
      payload.completed_stage = completed_stage;
      payload.eta_range = eta_range;
      this.props.updateCommunicationSettingRequest(() => {
        console.log('save done');
      }, payload);
    }
  };

  render() {
    const {
      loading,
      sms,
      email,
      dropoff,
      pickup,
      schedule_content,
      schedule_stage,
      intransit_content,
      intransit_stage,
      completed_content,
      completed_stage,
      eta_range
    } = this.state;

    return (
      <DmCommunicationsSettingView
        {...this.props}
        loading={loading}
        sms={sms}
        email={email}
        dropoff={dropoff}
        pickup={pickup}
        schedule_stage={schedule_stage}
        schedule_content={schedule_content}
        intransit_stage={intransit_stage}
        intransit_content={intransit_content}
        completed_stage={completed_stage}
        completed_content={completed_content}
        eta_range={eta_range}
        onCheckBoxClick={this.onCheckBoxClick}
        onAllNoneClick={this.onAllNoneClick}
        onTextChange={this.onTextChange}
        onReset={this.onReset}
        onSave={this.onSave}
      />
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  settings
});

const actions = { updateCommunicationSettingRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmCommunicationsSettingController)));
