// @flow
import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import PropTypes from 'prop-types';
import {
  getDmFilterDataRequest,
  dmOnTaskSelect,
  dmUnselectAllTasks,
  dmOnDriverSelect,
  dmUpdateTaskBarExpendedSections
} from '../../../actions/DMFilterActions';
import { dmViewDriver } from '../../../actions/DMDriverActions';
import { updateTaskSequenceRequest } from '../../../actions/DMTasksActions';
import DMTaskBarView from './DMTaskBarView';
import { TASK_FIELDS_NAME, DM_TASK_TYPE } from '../../../constants';
import {
  showTaskDetail,
  getSelectedFilterTasksOnly,
  sortBySequence
} from '../../../helpers/dmHelper';

export const DM_TASK_BAR_SECTIONS = {
  UNASSIGNED: 'unassigned',
  DRIVERS: 'driver'
};
let cmdPress = false;
class DMTaskBarController extends React.Component {
  static propTypes = {
    showEta: PropTypes.bool.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.unassignedCounter = 0;
    this.driverOver = {
      driverId: null,
      count: 0
    };
    this.taskOver = {
      taskId: null,
      count: 0
    };

    this.state = {
      selectedSection: null,
      sequenceChangeLoadingFor: null,
      overedTask: null,
      showETD: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', key => {
      if (key.key === 'Meta' || key.key === 'Control') {
        cmdPress = true;
      }
    });
    document.addEventListener('keyup', key => {
      if (key.key === 'Meta' || key.key === 'Control') {
        cmdPress = false;
      }
    });
  }

  handleMarkerClick = data => {
    if (!this._delayedClick) {
      this._delayedClick = _.debounce(() => this.doClick(data), 200);
    }
    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      // DOUBLE CLICK
      this._delayedClick = null;
      showTaskDetail(this.props.history, data[TASK_FIELDS_NAME.TASK_NUMBER]);
    } else {
      this._delayedClick(data);
      this.clickedOnce = true;
    }
  };

  doClick = data => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK
    if (this.props.selectedTasks.length < 1) {
      this.props.dmOnTaskSelect(data);
    }
    if (cmdPress) {
      this.props.dmOnTaskSelect(data);
    } else {
      this.props.dmUnselectAllTasks();
      this.props.dmOnTaskSelect(data);
    }
  };

  onSelectClick = newSelection => {
    if (this.state.selectedSection === newSelection) {
      this.setState({
        selectedSection: null
      });
    } else {
      this.setState({
        selectedSection: newSelection
      });
    }
  };

  onDriverClick = driverId => {
    if (!this._delayedClick) {
      this._delayedClick = _.debounce(() => this.doSingleClick(driverId), 200);
    }
    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      // DOUBLE CLICK
      this._delayedClick = null;
      this.props.dmViewDriver(driverId);
    } else {
      this.props.dmUnselectAllTasks();
      this.props.dmOnDriverSelect(driverId);
      this._delayedClick(driverId);
      this.clickedOnce = true;
    }
  };

  doSingleClick = () => {
    this.clickedOnce = undefined;
    this._delayedClick = null;
    // SINGLE CLICK

    // this.props.onDriverClick(data);
  };

  _onUnassignDragOver = () => {
    if (this.state.selectedSection !== DM_TASK_BAR_SECTIONS.UNASSIGNED) {
      this.setState({
        selectedSection: DM_TASK_BAR_SECTIONS.UNASSIGNED
      });
    }
  };

  onUnassignDragOver = ev => {
    ev.preventDefault(); // needed for IE
    // ev.stopPropagation();
    this.unassignedCounter++;
    this._onUnassignDragOver();
  };

  _onUnassignDragLeave = () => {
    if (this.state.selectedSection === DM_TASK_BAR_SECTIONS.UNASSIGNED) {
      this.setState({
        selectedSection: null
      });
    }
  };

  onUnassignDragLeave = () => {
    this.unassignedCounter--;
    if (this.unassignedCounter === 0) {
      this._onUnassignDragLeave();
    }
  };

  onDriverDragLeave = driverId => {
    this.driverOver.driverId = driverId;
    this.driverOver.count--;

    if (this.driverOver.count === 0) {
      this._onDriverDragLeave(driverId);
    }
  };

  _onDriverDragLeave = driverId => {
    if (this.state.selectedSection === `driver${driverId}`) {
      this.setState({
        selectedSection: null
      });
    }
  };

  onDriverDragOver = (ev, driverId, data) => {
    ev.preventDefault(); // needed for IE

    this.driverOver.driverId = driverId;
    this.driverOver.count++;

    this._onDriverDragOver(driverId);
  };

  _onDriverDragOver = driverId => {
    if (this.state.selectedSection !== `driver${driverId}`) {
      this.setState({
        selectedSection: `driver${driverId}`
      });
    }
  };

  onDriverDrop = (taskDetailString, driverId) => {
    this.taskOver.taskId = null;
    this.taskOver.count = 0;
    const taskDetail = JSON.parse(taskDetailString);
    const { driverWiseGroupedTasks } = this.props;
    const { overedTask } = this.state;
    const isDroppingOnSamePlace =
      taskDetail[TASK_FIELDS_NAME.TASK_NUMBER] === overedTask;
    const driverAlreadyHasTasks = !_.isNil(driverWiseGroupedTasks[driverId]);
    let sequence = null;
    if (!isDroppingOnSamePlace) {
      // if user is not dropping task on same place from where he dragged

      if (driverAlreadyHasTasks) {
        const taskListForThatDriver = driverWiseGroupedTasks[driverId];
        const indexOfTaskWhereDropped = _.findIndex(taskListForThatDriver, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: overedTask
        });

        if (indexOfTaskWhereDropped !== -1) {
          const droppedBelowLastTask =
            indexOfTaskWhereDropped + 1 ===
            driverWiseGroupedTasks[driverId].length;
          if (!droppedBelowLastTask) {
            const overedTaskSequence =
              taskListForThatDriver[indexOfTaskWhereDropped][
                TASK_FIELDS_NAME.SEQUENCE
              ];

            let isMovingUp = false;

            if (!_.isNil(taskDetail[TASK_FIELDS_NAME.DRIVER_ID])) {
              if (taskDetail[TASK_FIELDS_NAME.DRIVER_ID] === driverId) {
                // is same driver
                const draggedTaskSequence =
                  taskDetail[TASK_FIELDS_NAME.SEQUENCE];

                isMovingUp = draggedTaskSequence > overedTaskSequence;
              } else {
                // is moving to another driver
                isMovingUp = true;
              }
            } else {
              // is moving from unassigned to driver
              isMovingUp = true;
            }

            if (isMovingUp) {
              const innerTaskDetail =
                taskListForThatDriver[indexOfTaskWhereDropped + 1];
              if (innerTaskDetail) {
                sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
              }
            } else {
              const innerTaskDetail =
                taskListForThatDriver[indexOfTaskWhereDropped];
              if (innerTaskDetail) {
                sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
              }
            }
          }
        } else {
          // User is trying to move task on starting of list

          const firstTask = taskListForThatDriver[0];
          if (
            firstTask[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug
          ) {
            // first is in transit, consider next task for sequence
            if (taskListForThatDriver[1]) {
              // if driver have minimum 3 tasks
              sequence = taskListForThatDriver[1][TASK_FIELDS_NAME.SEQUENCE];
            }
          } else {
            sequence = taskListForThatDriver[0][TASK_FIELDS_NAME.SEQUENCE];
          }
        }
      }

      this.updateSequenceRequest(
        taskDetail[TASK_FIELDS_NAME.TASK_NUMBER],
        driverId,
        sequence
      );

      this.setState({
        sequenceChangeLoadingFor: {
          type: DM_TASK_BAR_SECTIONS.DRIVERS,
          value: driverId
        }
      });
    } else {
      // if user is dropping task on same place where he dragged then don't do anything just reset overedtask status

      this.setState({
        overedTask: null
      });
    }
  };

  onUnassignDrop = taskDetailString => {
    this.taskOver.taskId = null;
    this.taskOver.count = 0;
    const taskDetail = JSON.parse(taskDetailString);
    const { unassignedTasksList } = this.props;
    const { overedTask } = this.state;
    const isDroppingOnSamePlace =
      taskDetail[TASK_FIELDS_NAME.TASK_NUMBER] === overedTask;
    let sequence = null;

    const indexOfTaskWhereDropped = _.findIndex(unassignedTasksList, {
      [TASK_FIELDS_NAME.TASK_NUMBER]: overedTask
    });
    if (!isDroppingOnSamePlace) {
      // if user is not dropping task on same place from where he dragged
      if (indexOfTaskWhereDropped !== -1) {
        const droppedBelowLastTask =
          indexOfTaskWhereDropped + 1 === unassignedTasksList.length;
        if (!droppedBelowLastTask) {
          // task is hovered, and user can see line where to drop
          const overedTaskSequence =
            unassignedTasksList[indexOfTaskWhereDropped][
              TASK_FIELDS_NAME.SEQUENCE
            ];

          const draggedTask = taskDetail;
          const draggedTaskSequence = draggedTask[TASK_FIELDS_NAME.SEQUENCE];

          let isMovingUp = false;
          if (!_.isNil(draggedTask[TASK_FIELDS_NAME.DRIVER_ID])) {
            // checking if dragged task was previously assigned then it is moving up
            isMovingUp = true;
          } else {
            // checking if dragged task is moving with in unasign from bottom to top
            isMovingUp = draggedTaskSequence > overedTaskSequence;
          }

          if (isMovingUp) {
            const innerTaskDetail =
              unassignedTasksList[indexOfTaskWhereDropped + 1];
            if (innerTaskDetail) {
              sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
            }
          } else {
            const innerTaskDetail =
              unassignedTasksList[indexOfTaskWhereDropped];
            if (innerTaskDetail) {
              sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
            }
          }
        }
      } else if (unassignedTasksList.length > 0) {
        // User is trying to move task on starting of list
        sequence = unassignedTasksList[0][TASK_FIELDS_NAME.SEQUENCE];
      }

      this.updateSequenceRequest(
        taskDetail[TASK_FIELDS_NAME.TASK_NUMBER],
        null,
        sequence
      );
      this.setState({
        sequenceChangeLoadingFor: {
          type: DM_TASK_BAR_SECTIONS.UNASSIGNED,
          value: null
        }
      });
    } else {
      // if user is dropping task on same place where he dragged then don't do anything just reset overedtask status

      this.setState({
        overedTask: null
      });
    }
  };

  updateSequenceRequest = (taskNumber, driverId, sequence) => {
    //
    const payload = {};
    if (taskNumber) payload['task'] = taskNumber;
    if (driverId) payload['driverId'] = driverId;
    if (sequence) payload['sequence'] = sequence;

    this.props.updateTaskSequenceRequest(payload, status => {
      this.setState({
        selectedSection: null,
        sequenceChangeLoadingFor: null,
        overedTask: null
      });
    });
  };

  onTaskDragLeave = taskId => {
    this.taskOver.taskId = taskId;
    this.taskOver.count--;

    if (this.taskOver.count === 0) {
      this._onTaskDragLeave(taskId);
    }
  };

  _onTaskDragLeave = taskId => {
    if (this.state.overedTask === taskId) {
      this.setState({
        overedTask: null
      });
    }
  };

  onTaskDragOver = (ev, taskId) => {
    ev.preventDefault(); // needed for IE

    this.taskOver.taskId = taskId;
    this.taskOver.count++;

    this._onTaskDragOver(taskId);
  };

  _onTaskDragOver = taskId => {
    if (this.state.overedTask !== taskId) {
      this.setState({
        overedTask: taskId
      });
    }
  };

  onETAClick = ev => {
    let show = this.state.showETD;
    this.setState({
      showETD: !show
    });
  };

  render() {
    return (
      <DMTaskBarView
        {...this.props}
        selectedSection={this.state.selectedSection}
        handleMarkerClick={this.handleMarkerClick}
        onSelectClick={this.onSelectClick}
        onDriverClick={this.onDriverClick}
        onUnassignDragOver={this.onUnassignDragOver}
        onUnassignDragLeave={this.onUnassignDragLeave}
        onUnassignDrop={this.onUnassignDrop}
        onDriverDragLeave={this.onDriverDragLeave}
        onDriverDragOver={this.onDriverDragOver}
        onDriverDrop={this.onDriverDrop}
        sequenceChangeLoadingFor={this.state.sequenceChangeLoadingFor}
        onTaskDragLeave={this.onTaskDragLeave}
        onTaskDragOver={this.onTaskDragOver}
        overedTask={this.state.overedTask}
        onETAClick={this.onETAClick}
        showETD={this.state.showETD}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks, user, dmFilter, dmDriver, general }) => {
  const allFilteredTasks = getSelectedFilterTasksOnly(dmTasks.tasksList);

  const tasksList = sortBySequence([
    ..._.filter(allFilteredTasks, {
      [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.ASSIGNED.slug
    }),
    ..._.filter(allFilteredTasks, {
      [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.IN_TRANSIT.slug
    })
  ]);

  const driverListing = _.filter(dmDriver.allDrivers, function(o) {
    return dmFilter.driversStatus.includes(o.status);
  });

  const driverWiseGroupedTasks = _.chain(tasksList)
    .groupBy('driver_id')
    .value();

  return {
    tasksList,
    driverWiseGroupedTasks,
    unassignedTasksList: sortBySequence(
      _.filter(getSelectedFilterTasksOnly(dmTasks.tasksList), {
        [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.UNASSIGNED.slug
      })
    ),
    isloading: dmFilter.isloading,
    taskBarExpendedSections: user.dmDataPersists.taskBarExpendedSections,
    driverListing,
    selectedDriverId: dmTasks.selectedDriverId,
    selectedTasks: dmTasks.selectedTasks,
    showEta: general.showEta
  };
};

const actions = {
  getDmFilterDataRequest,
  dmOnTaskSelect,
  dmUnselectAllTasks,
  dmUpdateTaskBarExpendedSections,
  dmViewDriver,
  updateTaskSequenceRequest,
  dmOnDriverSelect
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMTaskBarController)));
