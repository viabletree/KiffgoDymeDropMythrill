// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';

import DMCommunicationView from './DMCommunicationView';
import { getSelectedFilterTasksOnly } from '../../../helpers/dmHelper';
import { TASK_FIELDS_NAME } from '../../../constants';
import {
  dmShowCommunicationModal,
  notifyRequest
} from '../../../actions/DMTasksActions';

import Util from '../../../services/Util';

export const COMMUNICATION_STEPS = {
  STEP1: 'step1',
  STEP2: 'step2'
};
/**
 * List of all drivers
 * @typedef Driver
 * @property {number} id
 * @property {[number,number]} time_window
 * @property {[number,number]} start
 * @property {[number,number]} end
 */

/**
 * Vehicle type
 * @typedef Vehicle
 * @property {"car"|"truck"} vehicle
 */

/**
 * Payload for route optimization api
 * @typedef RouteOptimization
 * @property {Driver[]} drivers
 * @property {Vehicle} vehicle
 * @property {string[]} uniqeStrings
 * @property {number} serviceTime
 * @property {number} taskPerDriver
 * @property {number} criteria
 * @property {number} maxAllowedDelay
 * @property {string} date
 */

class DMCommunicationController extends React.Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      isLoading: false,
      calendarVisible: false,
      taskWithContacts: 0,
      taskWithNoContacts: 0,
      communicationStep: COMMUNICATION_STEPS.STEP1,
      showErrors: true,
      respData: {}
    };
  }

  componentDidMount() {
    this.makeData();
  }

  onErrorToggle = () => {
    this.setState({ showErrors: !this.state.showErrors });
  };

  makeData = () => {
    const { selectedTasks, tasksList } = this.props;
    const selectedTasksList = [];
    let taskWithContacts = 0;
    let taskWithNoContacts = 0;

    selectedTasks.forEach(element => {
      const taskIndex = _.findIndex(tasksList, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      });

      if (taskIndex !== -1) selectedTasksList.push(tasksList[taskIndex]);
    });
    selectedTasksList.forEach(element => {
      if (
        element[TASK_FIELDS_NAME.RECIPIENT_EMAIL] ||
        element[TASK_FIELDS_NAME.RECIPIENT_PHONE]
      ) {
        taskWithContacts += 1;
      } else {
        taskWithNoContacts += 1;
      }
    });
    this.setState({
      taskWithContacts,
      taskWithNoContacts
    });
  };

  onSubmitClick = () => {
    const { communicationStep } = this.state;
    if (communicationStep === COMMUNICATION_STEPS.STEP1) {
      // step one
      this.onStepOneSubmit();
    } else if (communicationStep === COMMUNICATION_STEPS.STEP2) {
      // step two
      this.closeCommunicationModal();
    }
  };

  onStepOneSubmit = () => {
    this.setState({ isLoading: true });
    const payload = {
      task: this.props.selectedTasks
    };
    this.props.notifyRequest(payload, (success, data) => {
      const isLoading = false;
      if (success) {
        this.setState({
          isLoading,
          respData: data,
          communicationStep: COMMUNICATION_STEPS.STEP2
        });
      } else {
        this.setState({ isLoading });
      }
    });
  };

  closeCommunicationModal = () => {
    this.props.dmShowCommunicationModal(false);
  };

  changeStep = stepNumber => {
    this.setState({
      communicationStep: stepNumber
    });
  };

  onBackClick = () => {
    const { communicationStep } = this.state;
    if (communicationStep === COMMUNICATION_STEPS.STEP2) {
      //
      this.changeStep(COMMUNICATION_STEPS.STEP1);
    } else if (communicationStep === COMMUNICATION_STEPS.STEP3) {
      //
      this.changeStep(COMMUNICATION_STEPS.STEP2);
    } else if (communicationStep === COMMUNICATION_STEPS.STEP4) {
      //
      this.changeStep(COMMUNICATION_STEPS.STEP3);
    }
  };

  onRetryClick = () => {
    this.onStepOneSubmit();
  };

  render() {
    return (
      <DMCommunicationView
        {...this.props}
        {...this.state}
        onModalCloseClick={this.closeCommunicationModal}
        onSubmitClick={this.onSubmitClick}
        changeStep={this.changeStep}
        onBackClick={this.onBackClick}
        onRetryClick={this.onRetryClick}
        onErrorToggle={this.onErrorToggle}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks }) => ({
  tasksList: getSelectedFilterTasksOnly(dmTasks.tasksList),
  selectedTasks: dmTasks.selectedTasks
});

const actions = {
  dmShowCommunicationModal,
  notifyRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMCommunicationController)));
