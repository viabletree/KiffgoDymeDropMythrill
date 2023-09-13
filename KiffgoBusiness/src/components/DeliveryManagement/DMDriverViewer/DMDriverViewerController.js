/* eslint-disable no-else-return */
// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import DMDriverViewerView from './DMDriverViewerView';
import {
  dmHideDriverViewer,
  dmDriverOffDuty,
  dmScheduleDriver,
  dmGetDriverTasksRequest,
  dmSelectBulkDriverTasks,
  dmUnselectAllDriverTasks,
  dmOnDriverTaskSelect
} from '../../../actions/DMDriverActions';
import {
  ARE_YOU_SURE,
  CONFIRM_DELETE_TASK,
  DM_TASK_TYPE,
  DRIVER_FIELDS_NAME,
  TASK_FIELDS_NAME
} from '../../../constants';
import {
  getSelectedFilterTasksOnly,
  showDriverEditDetail,
  showTaskDetail,
  sortBySequence
} from '../../../helpers/dmHelper';
import {
  updateTaskSequenceRequest,
  dmTaskDeleteRequest,
  dmUnassignTaskRequest
} from '../../../actions/DMTasksActions';
import { DM_TASK_BAR_SECTIONS } from '../DMTaskBar/DMTaskBarController';
import Util from '../../../services/Util';

let cmdPress = false;
const getManipulatedOptionControls = (selectedRowIDs, dataSet) => {
  let showDelete = true;
  let showUnassign = true;

  // Handling delete button
  if (selectedRowIDs.length === 0) {
    showDelete = false;
  } else {
    selectedRowIDs.forEach(element => {
      const item = _.filter(dataSet, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      })[0];

      if (item) {
        if (
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug
        ) {
          //
          showDelete = false;
        }
      }
    });
  }

  // Handling change assignment button

  if (selectedRowIDs.length === 0 /* || selectedRowIDs.length > 1 */) {
    showUnassign = false;
  } else {
    selectedRowIDs.forEach(element => {
      const item = _.filter(dataSet, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      })[0];

      if (item) {
        if (
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug
        ) {
          //
          showUnassign = false;
        }
      }
    });
  }

  return {
    showDelete,
    showUnassign
  };
};

class DMDriverViewerController extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...getManipulatedOptionControls(
        nextProps.selectedDriverTasks,
        nextProps.currentDriverTaskList
      )
    };
  }

  static propTypes = {};

  constructor(props) {
    super(props);
    this.taskOver = {
      taskId: null,
      count: 0
    };
    this.state = {
      forceOffDutyLoader: false,
      overedTask: null,
      sequenceChangeLoading: false,
      selectAll: false,
      showDelete: false,
      showUnassign: false,
      showETD: false,
      loading: true
    };
  }

  componentDidMount() {
    const { driverDetail } = this.props;
    if (_.isNull(driverDetail)) this.closeViewDriver();

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
    this.getDriverTasks();
  }

  getDriverTasks = () => {
    const payload = {};
    payload.driver = this.props.driverDetail[DRIVER_FIELDS_NAME.ID];
    this.props.dmGetDriverTasksRequest(payload, () => {
      this.setState({ loading: false });
    });
  };

  onUnassignClick = async () => {
    const resultData = [];
    const { selectedDriverTasks } = this.props;
    const selectedClone = _.cloneDeep(selectedDriverTasks);
    while (selectedClone.length) {
      resultData.push(selectedClone.splice(0, 100));
    }
    for (let i = 0; i < resultData.length; i += 1) {
      const payload = {
        tasks: resultData[i]
      };

      const a = await this.asyncDmUnassignTaskRequest(payload);
    }
  };

  asyncDmUnassignTaskRequest = async payload => {
    return new Promise((resolve, reject) => {
      this.props.dmUnassignTaskRequest(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  onDeletePress = async () => {
    Util.dmConfirmAlert(
      ARE_YOU_SURE,
      CONFIRM_DELETE_TASK,
      'Yes, Delete',
      async () => {
        const resultData = [];
        const assignedData = [];
        const { selectedDriverTasks } = this.props;
        const tasksList = _.cloneDeep(selectedDriverTasks);
        const tasksListAssigned = _.map(
          this.getAllselectedDriverTasks(),
          TASK_FIELDS_NAME.STATUS
        );

        while (tasksList.length) {
          resultData.push(tasksList.splice(0, 100));
          assignedData.push(tasksListAssigned.splice(0, 100));
        }

        for (let i = 0; i < resultData.length; i += 1) {
          const payload = {
            tasks: resultData[i],
            isAssigned: assignedData[i].includes('ASSIGNED')
          };

          const a = await this.asyncdmTaskDeleteRequest(payload);
        }
      }
    );
  };

  asyncdmTaskDeleteRequest = async payload => {
    return new Promise((resolve, reject) => {
      this.props.dmTaskDeleteRequest(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  getAllselectedDriverTasks = () => {
    return _.filter(this.props.currentDriverTaskList, o => {
      return _.includes(
        this.props.selectedDriverTasks,
        o[TASK_FIELDS_NAME.TASK_NUMBER]
      );
    });
  };

  selectAll = select => {
    if (!select) {
      this.props.dmUnselectAllDriverTasks();
    } else {
      this.props.dmSelectBulkDriverTasks(
        _.map(this.props.currentDriverTaskList, TASK_FIELDS_NAME.TASK_NUMBER)
      );
    }
  };

  handleTaskClick = data => {
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
    this.setState({ selectAll: false });
    // SINGLE CLICK
    if (this.props.selectedDriverTasks.length < 1) {
      this.props.dmOnDriverTaskSelect(data);
    }
    if (cmdPress) {
      this.props.dmOnDriverTaskSelect(data);
    } else {
      this.props.dmUnselectAllDriverTasks();
      this.props.dmOnDriverTaskSelect(data);
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

  updateSequenceRequest = (taskNumber, driverId, sequence) => {
    //
    const payload = {};
    if (taskNumber) payload['task'] = taskNumber;
    if (driverId) payload['driverId'] = driverId;
    if (sequence) payload['sequence'] = sequence;

    this.props.updateTaskSequenceRequest(payload, status => {
      this.setState({
        sequenceChangeLoading: false,
        overedTask: null
      });
    });
  };

  onDriverDrop = (taskDetailString, driverId) => {
    this.taskOver.taskId = null;
    this.taskOver.count = 0;
    const taskDetail = JSON.parse(taskDetailString);
    const { driverWiseGroupedTasks, currentDriverTaskList } = this.props;
    const { overedTask } = this.state;
    const isDroppingOnSamePlace =
      taskDetail[TASK_FIELDS_NAME.TASK_NUMBER] === overedTask;
    const driverAlreadyHasTasks = currentDriverTaskList.length > 0;
    let sequence = null;
    if (!isDroppingOnSamePlace) {
      // if user is not dropping task on same place from where he dragged

      if (driverAlreadyHasTasks) {
        const indexOfTaskWhereDropped = _.findIndex(currentDriverTaskList, {
          [TASK_FIELDS_NAME.TASK_NUMBER]: overedTask
        });

        if (indexOfTaskWhereDropped !== -1) {
          const droppedBelowLastTask =
            indexOfTaskWhereDropped + 1 === currentDriverTaskList.length;
          if (!droppedBelowLastTask) {
            const overedTaskSequence =
              currentDriverTaskList[indexOfTaskWhereDropped][
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
                currentDriverTaskList[indexOfTaskWhereDropped + 1];
              if (innerTaskDetail) {
                sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
              }
            } else {
              const innerTaskDetail =
                currentDriverTaskList[indexOfTaskWhereDropped];
              if (innerTaskDetail) {
                sequence = innerTaskDetail[TASK_FIELDS_NAME.SEQUENCE];
              }
            }
          }
        } else {
          // User is trying to move task on starting of list

          const firstTask = currentDriverTaskList[0];
          if (
            firstTask[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug
          ) {
            // first is in transit, consider next task for sequence
            if (currentDriverTaskList[1]) {
              // if driver have minimum 3 tasks
              sequence = currentDriverTaskList[1][TASK_FIELDS_NAME.SEQUENCE];
            }
          } else {
            sequence = currentDriverTaskList[0][TASK_FIELDS_NAME.SEQUENCE];
          }
        }
      }

      this.updateSequenceRequest(
        taskDetail[TASK_FIELDS_NAME.TASK_NUMBER],
        driverId,
        sequence
      );

      this.setState({
        sequenceChangeLoading: true
      });
    } else {
      // if user is dropping task on same place where he dragged then don't do anything just reset overedtask status

      this.setState({
        overedTask: null
      });
    }
  };

  closeViewDriver = () => {
    this.props.dmHideDriverViewer();
  };

  onScheduleClick = () => {
    this.props.dmScheduleDriver(
      this.props.driverDetail[DRIVER_FIELDS_NAME.ID],
      true
    );
  };

  onEditClick = () => {
    showDriverEditDetail(
      this.props.history,
      this.props.driverDetail[DRIVER_FIELDS_NAME.ID],
      this.props.navigateToListingOnEditClose
    );
    this.closeViewDriver();
  };

  forceOffDuty = () => {
    this.setState({
      forceOffDutyLoader: true
    });
    this.props.dmDriverOffDuty(
      {
        driver: this.props.driverDetail[DRIVER_FIELDS_NAME.ID]
      },
      data => {
        this.setState({
          forceOffDutyLoader: false
        });
      }
    );
  };

  onETAClick = ev => {
    const show = this.state.showETD;
    this.setState({
      showETD: !show
    });
  };

  render() {
    const { driverDetail } = this.props;
    const {
      showDelete,
      showUnassign,
      forceOffDutyLoader,
      sequenceChangeLoading,
      selectAll,
      overedTask,
      showETD,
      loading
    } = this.state;

    if (driverDetail) {
      return (
        <DMDriverViewerView
          {...this.props}
          closeViewDriver={this.closeViewDriver}
          driverDetail={driverDetail}
          history={this.props.history}
          onEditClick={this.onEditClick}
          onScheduleClick={this.onScheduleClick}
          forceOffDuty={this.forceOffDuty}
          forceOffDutyLoader={forceOffDutyLoader}
          sequenceChangeLoading={sequenceChangeLoading}
          handleTaskClick={this.handleTaskClick}
          onTaskDragLeave={this.onTaskDragLeave}
          onTaskDragOver={this.onTaskDragOver}
          overedTask={overedTask}
          onDriverDrop={this.onDriverDrop}
          selectAll={this.selectAll}
          showDelete={showDelete}
          showUnassign={showUnassign}
          showETD={showETD}
          loading={loading}
          onETAClick={this.onETAClick}
          onDeletePress={this.onDeletePress}
          onUnassignClick={this.onUnassignClick}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ dmDriver, general }) => {
  const allFilteredTasks = dmDriver.allTasks;
  const tasksList = sortBySequence([
    ..._.filter(allFilteredTasks, {
      [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.ASSIGNED.slug
    }),
    ..._.filter(allFilteredTasks, {
      [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.IN_TRANSIT.slug
    })
  ]);
  const driverWiseGroupedTasks = _.chain(tasksList)
    .groupBy('driver_id')
    .value();

  const { allDrivers, viewDriverId } = dmDriver;
  const driverIndex = _.findIndex(allDrivers, {
    [DRIVER_FIELDS_NAME.ID]: viewDriverId
  });
  let driverDetail = null;
  if (driverIndex >= 0) {
    driverDetail = _.cloneDeep(allDrivers[driverIndex]);
  }
  const currentDriverTaskList = driverWiseGroupedTasks[driverDetail.id] || [];

  return {
    driverDetail,
    vehicleTypes: general.vehicleTypes,
    navigateToListingOnEditClose: dmDriver.viewDriverOpenedFromListing,
    currentDriverTaskList,
    selectedDriverTasks: dmDriver.selectedDriverTasks,
    showEta: general.showEta
  };
};
const actions = {
  dmHideDriverViewer,
  dmDriverOffDuty,
  dmScheduleDriver,
  dmOnDriverTaskSelect,
  dmUnselectAllDriverTasks,
  updateTaskSequenceRequest,
  dmSelectBulkDriverTasks,
  dmTaskDeleteRequest,
  dmUnassignTaskRequest,
  dmGetDriverTasksRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMDriverViewerController)));
