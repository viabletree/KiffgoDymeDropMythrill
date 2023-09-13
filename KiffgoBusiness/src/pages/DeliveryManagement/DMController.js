// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual';
import moment from 'moment';
import DMView from './DMView';
import {
  getFinalUpdatedFilteredTask,
  getManipulatedAllDriverData,
  getFinalUpdatedDriverTasks
} from '../../helpers/dmHelper';

import {
  getDmFilterDataRequest,
  dmAddNewTask,
  dmUpdateTaskDelay,
  getDmFilterDataSuccess,
  dmOnTaskDeleted
} from '../../actions/DMFilterActions';

import {
  dmGetAllDriversRequest,
  dmDriverUpdateTracking,
  dmDriverCreateSuccess,
  dmDriverDeleteSuccess,
  dmDriverDetailUpdate,
  dmDriverOffDutyAutomatically,
  dmGetDriverTasksSuccess
} from '../../actions/DMDriverActions';
import { dmGetHubListRequest } from '../../actions/DMHubActions';
import { dmGetSingleTaskDetailsRequest } from '../../actions/DMTasksActions';

import {
  dmTaskSequenceChanged,
  dmTaskEtaChanged,
  dmTaskRecentRecordRequest,
  clearTaskList
} from '../../actions/DMTasksActions';

import {
  dmChangeTabSelection,
  dmSetPreviousSocketId
} from '../../actions/UserAction';

import SocketIO from '../../services/SocketIO';
import '../../../src/assets/css/dmStyle.css';
import Util from '../../services/Util';
import {
  DM_MODULES,
  ROUTES,
  DM_MODULE_UPDATE_TIMEOUT_IN_MINUTES
} from '../../constants';
import { getVehiclesRequest } from '../../actions/GeneralActions';

let hidden = null;
let visibilityChange = null;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

class DMController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  initalState = {
    showTaskInput: false,
    showDriverInput: false,
    showHubInput: false,
    showSetting: false,
    selectedSettingTab: 0,
    showTaskViewer: false,
    showDriverViewer: false,
    enterFullScreen: false,
    actions: []
  };

  constructor(props) {
    super(props);
    this.state = _.cloneDeep(this.initalState);
  }

  componentDidMount() {
    const { userData } = this.props;
    document.addEventListener(
      visibilityChange,
      this.handleVisibilityChange,
      false
    );
    this.initSocket();
    this.manageChildRouting(this.props.match.params);
    Util.addFocusListener(this.onScreenFocus);
    document.body.classList.add('dm_wrapper');
    this.props.getVehiclesRequest();
    this.props.dmGetHubListRequest();
    SocketIO.changeAvailibilityStatus(
      { availability: true, businessId: userData.business.id },
      data => {
        if (Util.checkDev()) {
          console.log(data.message);
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    this.manageChildRouting(this.props.match.params);
    if (prevProps.isFilterVisble && !this.props.isFilterVisble) {
      this.getDmFilterDataRequest();
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('dm_wrapper');
    SocketIO.disconnect();
    window.removeEventListener('focus', this.onScreenFocus);
    document.removeEventListener(visibilityChange, this.handleVisibilityChange);
  }

  handleVisibilityChange = () => {
    const { userData } = this.props;
    if (document[hidden]) {
      console.log('hidden');
      SocketIO.changeAvailibilityStatus(
        { availability: false, businessId: userData.business.id },
        data => {
          console.log(data.message);
        }
      );
    } else {
      if (Util.checkDev()) {
        console.log('visible');
      }

      SocketIO.changeAvailibilityStatus(
        { availability: true, businessId: userData.business.id },
        data => {
          if (Util.checkDev()) {
            console.log(data.message);
          }
        }
      );
    }
  };

  manageChildRouting = routingData => {
    const newState = _.cloneDeep({
      ...this.initalState
    });

    if (routingData.moduleName) {
      if (routingData.moduleName === DM_MODULES.TASK.NAME) {
        // is task module
        if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.CREATE) {
          newState.showTaskInput = true;
        } else if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.EDIT) {
          newState.showTaskInput = true;
        } else if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.VIEW) {
          if (routingData.actionData) {
            newState.showTaskViewer = true;
          }
        }
      } else if (routingData.moduleName === DM_MODULES.DRIVER.NAME) {
        // is driver module
        if (routingData.moduleAction === DM_MODULES.DRIVER.ACTIONS.CREATE) {
          newState.showDriverInput = true;
        } else if (
          routingData.moduleAction === DM_MODULES.DRIVER.ACTIONS.EDIT
        ) {
          newState.showDriverInput = true;
        }
      } else if (routingData.moduleName === DM_MODULES.HUB.NAME) {
        //For hub midule
        if (routingData.moduleAction === DM_MODULES.HUB.ACTIONS.CREATE) {
          newState.showHubInput = true;
        } else if (routingData.moduleAction === DM_MODULES.HUB.ACTIONS.EDIT) {
          newState.showHubInput = true;
        }
      } else if (routingData.moduleName === DM_MODULES.SETTINGS.NAME) {
        //is setting module
        newState.showSetting = true;
        if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.DRIVER
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.DRIVER;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.HUB
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.HUB;
        } else if (
          routingData.moduleAction ===
          DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS;
        }
      }

      if (
        !newState.showTaskInput &&
        !newState.showSetting &&
        !newState.showDriverInput &&
        !newState.showTaskViewer &&
        !newState.showHubInput
      ) {
        // no valid routing found, redirect to main delivey managment
        this.props.history.push(ROUTES.DELIVERY_MANAGEMENT);
      }
    }

    if (!_.isEqual(newState, this.state)) {
      this.setState(newState);
    }
  };

  setSelectedTab = index => {
    this.props.dmChangeTabSelection(index);
  };

  onScreenFocus = () => {
    // refresh screen on focus if specific time is passed
    const { lastFilterUpdatedTime } = this.props;
    const differenctInMinutes = moment().diff(
      moment(lastFilterUpdatedTime),
      'minutes'
    );
    if (differenctInMinutes > DM_MODULE_UPDATE_TIMEOUT_IN_MINUTES) {
      setTimeout(() => {
        // getting data from server once internet connected on machine. Delay is to decrease probability of no-internet connection
        this.getDmFilterDataRequest(true);
        this.props.dmGetHubListRequest();
      }, 1000);
    }
  };

  getDmFilterDataRequest = (showLoader: true, endId: null) => {
    this.props.getDmFilterDataRequest(
      showLoader,
      endId,
      (status, count, lastId) => {
        if (status) {
          if (count > 0) {
            this.getDmFilterDataRequest(false, lastId);
          }
        }
      }
    );
  };

  dmGetAllDriversRequest = () => {
    this.props.dmGetAllDriversRequest(() => {
      const { userData } = this.props;
      /* SocketIO.getAllDrivers({ userID: userData.id }, data => {
        this.props.dmDriverUpdateTracking(data.driverList);
      }); // Intiallay getting all active drivers list */
    });
  };

  initSocket = () => {
    SocketIO.disconnect();
    SocketIO.connect(
      () => {
        console.log('client is connected.');
        // connect callback
        const { userData, isAdmin } = this.props;
        if (isAdmin) {
          SocketIO.emit('kiffgo', { businessId: userData.business.id });
        } else {
          SocketIO.emit(
            'business',
            { businessId: userData.business.id },
            data => {
              this.props.dmSetPreviousSocketId(data.id);
            }
          );
        }

        // removing previous socketId from server
        SocketIO.removePreviousSocketIDFromSerVer(this.props.previousSocketId);

        // event listners
        SocketIO.onDisconnect();
        SocketIO.stillConnected();

        SocketIO.onTrackingInfo(this.props.dmDriverUpdateTracking); // Continous driver tracking
        SocketIO.onTaskDelay(this.props.dmUpdateTaskDelay); // Continous delay update
        SocketIO.onDriverInactiveAutomatically(
          this.props.dmDriverOffDutyAutomatically
        ); // when drivers inactive automaitcally
        SocketIO.onDriverUpdated(({ data }) => {
          debugger;
          this.props.dmDriverDetailUpdate(getManipulatedAllDriverData([data]));
        }); // Changes the invited driver to active after driver login for the first time
        SocketIO.onTaskRequest(data => {
          // call updated task request
          this.props.dmGetSingleTaskDetailsRequest({
            task: data.data
          });
        });
        SocketIO.onAllTaskRequest(() => {
          this.props.clearTaskList();
          this.getDmFilterDataRequest(true);
        });
        SocketIO.onDriverDeleted(({ data }) => {
          // Driver deleted
          this.props.dmDriverDeleteSuccess(data.driverId);
        });

        SocketIO.onDriverCreated(({ data }) => {
          // Driver created
          this.props.dmDriverCreateSuccess(getManipulatedAllDriverData([data]));
        });

        SocketIO.onTaskDeleted(data => {
          // Delete task
          this.props.dmOnTaskDeleted(data.data.tasks);
        });

        SocketIO.onTaskUpdated(({ data }) => {
          // On task update
          const finalUpdatedFilteredTasks = getFinalUpdatedFilteredTask(data);
          const finalUpdatedDriverTasks = getFinalUpdatedDriverTasks(data);

          this.props.getDmFilterDataSuccess(
            {
              tasksList: finalUpdatedFilteredTasks
            },
            true
          );
          this.props.dmGetDriverTasksSuccess(finalUpdatedDriverTasks);
        });

        SocketIO.onTaskSequenceChanged(data => {
          // Task sequence updated

          this.props.dmTaskSequenceChanged(data.data);
        });

        // this is existing emit on which showEta flag in general reducer will be true
        SocketIO.onTaskEtaUpdate(data => {
          // Task Eta updated
          this.props.dmTaskEtaChanged(data.data, true);
        });
        // this is new emit on which showEta flag in general reducer should not be changed
        SocketIO.onPreviousTaskEtaUpdate(data => {
          // Task Eta updated
          this.props.dmTaskEtaChanged(data.data, false);
        });
        SocketIO.onMigrationEnded(data => {
          // Task Eta updated
          if (Util.checkDev()) console.log(data);
          Util.dmInformAlert('Migration', 'Migration ended.');
        });

        /* SocketIO.onTaskCreated(({ data }) => {
          // On new text added
          const newFilteredTask = getNewFilteredTask([data]);
          if (newFilteredTask.length) this.props.dmAddNewTask(newFilteredTask);
        }); */

        // get filter data
        console.log('fetching updated data after reconnection.');
        this.getDmFilterDataRequest(true);
        this.dmGetAllDriversRequest();
        this.props.dmGetHubListRequest();
      },
      () => {
        // connection error callback
        // console.log('Error connection socket');
      }
    );
  };

  dmGetAllDriversRequest = () => {
    this.props.dmGetAllDriversRequest(() => {
      const { userData } = this.props;
      /* SocketIO.getAllDrivers({ userID: userData.id }, data => {
        this.props.dmDriverUpdateTracking(data.driverList);
      }); // Intiallay getting all active drivers list */
    });
  };

  manageChildRouting = routingData => {
    const newState = _.cloneDeep({
      ...this.initalState
    });

    if (routingData.moduleName) {
      if (routingData.moduleName === DM_MODULES.TASK.NAME) {
        // is task module
        if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.CREATE) {
          newState.showTaskInput = true;
        } else if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.EDIT) {
          newState.showTaskInput = true;
        } else if (routingData.moduleAction === DM_MODULES.TASK.ACTIONS.VIEW) {
          if (routingData.actionData) {
            newState.showTaskViewer = true;
          }
        }
      } else if (routingData.moduleName === DM_MODULES.DRIVER.NAME) {
        // is driver module
        if (routingData.moduleAction === DM_MODULES.DRIVER.ACTIONS.CREATE) {
          newState.showDriverInput = true;
        } else if (
          routingData.moduleAction === DM_MODULES.DRIVER.ACTIONS.EDIT
        ) {
          newState.showDriverInput = true;
        }
      } else if (routingData.moduleName === DM_MODULES.HUB.NAME) {
        //For hub midule
        if (routingData.moduleAction === DM_MODULES.HUB.ACTIONS.CREATE) {
          newState.showHubInput = true;
        } else if (routingData.moduleAction === DM_MODULES.HUB.ACTIONS.EDIT) {
          newState.showHubInput = true;
        }
      } else if (routingData.moduleName === DM_MODULES.SETTINGS.NAME) {
        //is setting module
        newState.showSetting = true;
        if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.DRIVER
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.DRIVER;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.HUB
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.HUB;
        } else if (
          routingData.moduleAction ===
          DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS
        ) {
          newState.selectedSettingTab =
            DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS;
        } else if (
          routingData.moduleAction === DM_MODULES.SETTINGS.ACTIONS.DISPATCHER
        ) {
          newState.selectedSettingTab = DM_MODULES.SETTINGS.ACTIONS.DISPATCHER;
        }
      }

      if (
        !newState.showTaskInput &&
        !newState.showSetting &&
        !newState.showDriverInput &&
        !newState.showTaskViewer &&
        !newState.showHubInput
      ) {
        // no valid routing found, redirect to main delivey managment
        this.props.history.push(ROUTES.DELIVERY_MANAGEMENT);
      }
    }

    if (!_.isEqual(newState, this.state)) {
      this.setState(newState);
    }
  };

  render() {
    const {
      showTaskInput,
      showDriverInput,
      showSetting,
      selectedSettingTab,
      showTaskViewer,
      showHubInput,
      enterFullScreen
    } = this.state;

    return (
      <DMView
        {...this.props}
        showTaskInput={showTaskInput}
        showSetting={showSetting}
        selectedSettingTab={selectedSettingTab}
        showDriverInput={showDriverInput}
        showHubInput={showHubInput}
        setSelectedTab={this.setSelectedTab}
        showTaskViewer={showTaskViewer}
        enterFullScreen={enterFullScreen}
      />
    );
  }
}

const mapStateToProps = ({ dmFilter, dmDriver, dmTasks, user, dmPersist }) => ({
  isloading: dmFilter.isloading,
  viewDriverId: dmDriver.viewDriverId,
  scheduleDriverId: dmDriver.scheduleDriverId,
  isFilterVisble: dmFilter.isFilterVisble,
  isAdmin: user.data.admin,
  driversList: dmDriver.allDrivers,
  userData: user.data,
  lastFilterUpdatedTime: dmFilter.lastUpdatedTime,
  filterDelayMinutes: dmFilter.delayedInMinutes,
  selectTabIndex: user.dmDataPersists.selectTabIndex,
  showOptimizeTaskModal: dmTasks.showOptimizeTaskModal,
  showCommunicationModal: dmTasks.showCommunicationModal,
  previousSocketId: dmPersist.previousSocketId
});

const actions = {
  getDmFilterDataRequest,
  dmAddNewTask,
  dmUpdateTaskDelay,
  getDmFilterDataSuccess,
  dmOnTaskDeleted,
  getVehiclesRequest,
  dmGetAllDriversRequest,
  dmDriverUpdateTracking,
  dmDriverCreateSuccess,
  dmDriverDeleteSuccess,
  dmDriverDetailUpdate,
  dmChangeTabSelection,
  dmTaskSequenceChanged,
  dmDriverOffDutyAutomatically,
  dmGetHubListRequest,
  dmTaskEtaChanged,
  dmTaskRecentRecordRequest,
  dmGetSingleTaskDetailsRequest,
  dmSetPreviousSocketId,
  dmGetDriverTasksSuccess,
  clearTaskList
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMController)));
