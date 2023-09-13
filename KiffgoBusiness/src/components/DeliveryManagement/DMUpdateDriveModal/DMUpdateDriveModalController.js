// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMUpdateDriveModalView from './DMUpdateDriveModalView';
import {
  dmAssignTaskRequest,
  dmUnassignTaskRequest
} from '../../../actions/DMTasksActions';
import Util from '../../../services/Util';
import { TASK_FIELDS_NAME } from '../../../constants';
import { getActiveDrivers } from '../../../helpers/dmHelper';

class DMUpdateDriveModalController extends React.Component {
  static propTypes = {
    tasksList: PropTypes.array.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedDriverIds: [], // props.taskDetail.driver_id,
      unassignLoading: false,
      assignLoading: false
    };
  }

  onDriverClick = data => {
    this.setState({ selectedDriverIds: [data.id] });
  };

  onAssignClick = async () => {
    const { selectedDriverIds } = this.state;

    if (selectedDriverIds.length === 0) {
      Util.dmInformAlert('Error', 'Please select driver any driver to assign');
    } else {
      // update driver

      const resultData = [];
      const { tasksList } = this.props;
      while (tasksList.length) {
        resultData.push(tasksList.splice(0, 100));
      }
      for (let i = 0; i < resultData.length; i += 1) {
        const payload = {
          tasks: resultData[i],
          driver: selectedDriverIds[0]
        };
        if (i === 0) this.setState({ assignLoading: true });
        const a = await this.asyncDmAssignTaskRequest(payload);
      }
      this.setState({
        assignLoading: false
      });

      this.props.onModalCloseClick();
    }
  };

  asyncDmAssignTaskRequest = async payload => {
    return new Promise((resolve, reject) => {
      this.props.dmAssignTaskRequest(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  asyncDmUnassignTaskRequest = async payload => {
    return new Promise((resolve, reject) => {
      this.props.dmUnassignTaskRequest(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  onUnassignClick = async () => {
    const { selectedDriverIds } = this.state;

    const resultData = [];
    const { tasksList } = this.props;
    while (tasksList.length) {
      resultData.push(tasksList.splice(0, 100));
    }
    for (let i = 0; i < resultData.length; i += 1) {
      const payload = {
        tasks: resultData[i]
      };
      if (i === 0) this.setState({ unassignLoading: true });
      const a = await this.asyncDmUnassignTaskRequest(payload);
    }
    this.setState({
      unassignLoading: false
    });

    this.props.onModalCloseClick();
  };

  render() {
    const { selectedDriverIds, unassignLoading, assignLoading } = this.state;
    return (
      <DMUpdateDriveModalView
        {...this.props}
        selectedDriverIds={selectedDriverIds}
        onDriverClick={this.onDriverClick}
        onAssignClick={this.onAssignClick}
        onUnassignClick={this.onUnassignClick}
        unassignLoading={unassignLoading}
        assignLoading={assignLoading}
      />
    );
  }
}

const mapStateToProps = ({ dmDriver }) => ({
  driverListing: getActiveDrivers(dmDriver.allDrivers)
});

const actions = { dmAssignTaskRequest, dmUnassignTaskRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(DMUpdateDriveModalController));
