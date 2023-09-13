// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';
import DMTableView from './DMHistoryView';
import {
  dmTaskDeleteRequest,
  dmShowOptimizeTaskModal,
  dmShowCommunicationModal,
  dmTaskSearchRequest,
  dmTaskSearchSuccess
} from '../../../actions/DMTasksActions';
import { dmViewDriver } from '../../../actions/DMDriverActions';
import {
  dmOnTaskSelect,
  dmUnselectAllTasks,
  dmSelectBulkTasks
} from '../../../actions/DMFilterActions';
import {
  TASK_FIELDS_NAME,
  DM_TASK_TYPE,
  CONFIRM_DELETE_TASK,
  ARE_YOU_SURE
} from '../../../constants';
import Util from '../../../services/Util';
import {
  showTaskEditDetail,
  cloneTask,
  getSelectedFilterTasksOnly,
  showTaskDetail
} from '../../../helpers/dmHelper';

const getManipulatedActionbarControls = (selectedRowIDs, dataSet) => {
  let showEdit = true;
  let showDelete = true;
  let showClone = true;
  let showChangeAssignment = true;
  let showClearSelection = true;
  let showOptimize = true;
  let showBulkTimeWindow = true;
  let showNotify = true;

  // Handling edit button
  if (selectedRowIDs.length === 0 || selectedRowIDs.length > 1) {
    showEdit = false;
  }
  if (selectedRowIDs.length === 1) {
    const item = _.filter(dataSet, {
      [TASK_FIELDS_NAME.TASK_NUMBER]: selectedRowIDs[0]
    })[0];
    if (item) {
      if (
        item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug ||
        item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
        item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug
      ) {
        showEdit = false;
      }
    }
  }

  // Handling clone button
  if (selectedRowIDs.length === 0 || selectedRowIDs.length > 1) {
    showClone = false;
  }

  // Handling optimize button
  if (selectedRowIDs.length < 2) {
    showOptimize = false;
  }

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

  // Handling clear selection button
  if (selectedRowIDs.length === 0) {
    showClearSelection = false;
    showNotify = false;
  }

  // Handling change assignment button

  if (selectedRowIDs.length === 0 /* || selectedRowIDs.length > 1 */) {
    showChangeAssignment = false;
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
          showChangeAssignment = false;
        }
      }
    });
  }

  // Handling showBulkTimeWindow button

  if (selectedRowIDs.length === 0 /* || selectedRowIDs.length > 1 */) {
    showBulkTimeWindow = false;
  } else {
    selectedRowIDs.forEach(element => {
      const item = _.filter(dataSet, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      })[0];

      if (item) {
        if (
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.SUCCESS.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.FAIL.slug ||
          item[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.ASSIGNED.slug
        ) {
          //
          showBulkTimeWindow = false;
        }
      }
    });
  }

  return {
    showEdit,
    showClone,
    showDelete,
    showClearSelection,
    showChangeAssignment,
    selectedRowIDs,
    showOptimize,
    showBulkTimeWindow,
    showNotify
  };
};

const searchOptions = {
  keys: [
    TASK_FIELDS_NAME.RECIPIENT_NAME,
    TASK_FIELDS_NAME.TASK_NUMBER,
    TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER,
    TASK_FIELDS_NAME.DRIVER_NAME,
    TASK_FIELDS_NAME.LOCATION_ADDRESS,
    TASK_FIELDS_NAME.LOCATION_POSTCODE,
    TASK_FIELDS_NAME.CREATED_BY,
    TASK_FIELDS_NAME.STATUS
  ],
  threshold: 0.3
};

class DMTableController extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...{ selectedRowIDs: nextProps.selectedTasks },
      ...{ dataSet: nextProps.tasksList },
      ...getManipulatedActionbarControls(
        nextProps.selectedTasks,
        nextProps.tasksList
      )
    };
  }

  static propTypes = {
    tasksList: PropTypes.array.isRequired,
    gettingData: PropTypes.bool.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedRowIDs: props.selectedTasks,
      showEdit: false,
      showClone: false,
      showDelete: false,
      showChangeAssignment: false,
      showBulkTimeWindow: false,
      showClearSelection: false,
      showChangeAssignmentModal: true,
      tasksListForChangeAssigment: null,
      tasksListForChangeTimeWindow: null,
      dataSet: props.tasksList,
      searchText: '',
      showOptimize: false,
      showNotify: false
    };
  }

  handleSelectedChange = data => {
    this.props.dmOnTaskSelect(data);
    /* const selectedRowIDs = _.xor(this.state.selectedRowIDs, [selectedTaskId]);
    this.setState(
      getManipulatedActionbarControls(selectedRowIDs, this.state.dataSet)
    ); */
  };

  onDeletePress = async () => {
    Util.dmConfirmAlert(
      ARE_YOU_SURE,
      CONFIRM_DELETE_TASK,
      'Yes, Delete',
      async () => {
        const resultData = [];
        const assignedData = [];
        const tasksList = _.map(
          this.getAllSelectedTasks(),
          TASK_FIELDS_NAME.TASK_NUMBER
        );
        const tasksListAssigned = _.map(
          this.getAllSelectedTasks(),
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

  onEditPress = () => {
    showTaskEditDetail(
      this.props.history,
      this.getFirstSelectedTask()[TASK_FIELDS_NAME.TASK_NUMBER]
    );
  };

  onClonePress = () => {
    cloneTask(this.getFirstSelectedTask(), null, null, this.props.history);
  };

  getAllSelectedTasks = () => {
    return _.filter(this.state.dataSet, o => {
      return _.includes(
        this.state.selectedRowIDs,
        o[TASK_FIELDS_NAME.TASK_NUMBER]
      );
    });
  };

  getFirstSelectedTask = () => this.getAllSelectedTasks()[0];

  onClearSelectionPress = () => {
    this.setState({
      showEdit: false,
      showClone: false,
      showDelete: false,
      showClearSelection: false,
      showChangeAssignment: false,
      showBulkTimeWindow: false,
      showOptimize: false,
      showNotify: false
      // selectedRowIDs: []
    });

    this.props.dmUnselectAllTasks();
  };

  onChangeAssignmentPress = () => {
    this.setState({
      tasksListForChangeAssigment: _.map(
        this.getAllSelectedTasks(),
        TASK_FIELDS_NAME.TASK_NUMBER
      )
    });
  };

  showBulkTimeWindowPress = () => {
    this.setState({
      tasksListForChangeTimeWindow: _.map(
        this.getAllSelectedTasks(),
        TASK_FIELDS_NAME.TASK_NUMBER
      )
    });
  };

  onDMUpdateDriveModalCloseClick = () => {
    this.setState({
      tasksListForChangeAssigment: null,
      tasksListForChangeTimeWindow: null
    });
  };

  handleSelectAllToggle = data => {
    const { selectedRowIDs, dataSet } = this.state;
    const allSelected = selectedRowIDs.length === dataSet.length;
    if (allSelected) {
      // unselect all
      this.props.dmUnselectAllTasks();
    } else {
      // select all
      this.props.dmSelectBulkTasks(_.map(data, TASK_FIELDS_NAME.TASK_NUMBER));
    }
  };

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  onTaskNumberClick = taskNumber => {
    showTaskDetail(this.props.history, taskNumber);
  };

  onOptimizePress = () => {
    let isValidToOptimize = true;
    this.props.selectedTasks.forEach(element => {
      const item = _.filter(this.props.tasksList, {
        [TASK_FIELDS_NAME.TASK_NUMBER]: element
      })[0];

      if (item) {
        if (item[TASK_FIELDS_NAME.STATUS] !== DM_TASK_TYPE.UNASSIGNED.slug) {
          //
          isValidToOptimize = false;
        }
      }
    });

    if (isValidToOptimize) {
      this.props.dmShowOptimizeTaskModal(true);
    } else {
      Util.dmInformAlert(
        'Error',
        'One or more tasks are already assigned to workers, please unassign them first'
      );
    }
  };

  onNotifyPress = () => {
    this.props.dmShowCommunicationModal(true);
  };

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  convertArrayOfObjectsToCSV = array => {
    let result;

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    const keys = Object.keys(this.props.tableSettings.columns);
    keys.push(TASK_FIELDS_NAME.LOCATION_LATITUDE);
    keys.push(TASK_FIELDS_NAME.LOCATION_LONGITUDE);
    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach(item => {
      let ctr = 0;
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter;

        result += `"${item[key]}"`;
        ctr += 1;
      });
      result += lineDelimiter;
    });

    return result;
  };

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  downloadCSV = () => {
    const link = document.createElement('a');
    let searchedDataSet = _.cloneDeep(this.state.dataSet);
    if (!_.isEmpty(this.state.searchText)) {
      const fuse = new Fuse(this.state.dataSet, searchOptions);
      searchedDataSet = fuse.search(this.state.searchText);
    }
    let csv = this.convertArrayOfObjectsToCSV(searchedDataSet);
    if (csv == null) return;

    const filename = 'kiffgoExport.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
  };

  render() {
    const {
      showEdit,
      showClone,
      showDelete,
      showChangeAssignment,
      showBulkTimeWindow,
      showClearSelection,
      showChangeAssignmentModal,
      tasksListForChangeAssigment,
      tasksListForChangeTimeWindow,
      dataSet,
      selectedRowIDs,
      searchText,
      showOptimize,
      showNotify
    } = this.state;

    let searchedDataSet = _.cloneDeep(dataSet);

    if (!_.isEmpty(searchText)) {
      const fuse = new Fuse(dataSet, searchOptions);
      searchedDataSet = fuse.search(searchText);
    }

    return (
      <DMTableView
        {...this.props}
        dataSet={searchedDataSet}
        realDataSet={dataSet}
        selectedCount={selectedRowIDs.length}
        handleSelectedChange={this.handleSelectedChange}
        showEdit={showEdit}
        showClone={showClone}
        showDelete={showDelete}
        showChangeAssignment={showChangeAssignment}
        showBulkTimeWindow={showBulkTimeWindow}
        showClearSelection={showClearSelection}
        onEditPress={this.onEditPress}
        onClonePress={this.onClonePress}
        onDeletePress={this.onDeletePress}
        onChangeAssignmentPress={this.onChangeAssignmentPress}
        showBulkTimeWindowPress={this.showBulkTimeWindowPress}
        onClearSelectionPress={this.onClearSelectionPress}
        showChangeAssignmentModal={showChangeAssignmentModal}
        onDMUpdateDriveModalCloseClick={this.onDMUpdateDriveModalCloseClick}
        tasksListForChangeAssigment={tasksListForChangeAssigment}
        tasksListForChangeTimeWindow={tasksListForChangeTimeWindow}
        handleSelectAllToggle={this.handleSelectAllToggle}
        onSearchChange={this.onSearchChange}
        onTaskNumberClick={this.onTaskNumberClick}
        showOptimize={showOptimize}
        showNotify={showNotify}
        onOptimizePress={this.onOptimizePress}
        onNotifyPress={this.onNotifyPress}
        downloadCSV={this.downloadCSV}
      />
    );
  }
}

const mapStateToProps = ({ dmTasks, dmFilter, dmPersist, settings }) => {
  return {
    tasksList: dmTasks.searchedTasks,
    dmLoading: dmFilter.isloading,
    selectedTasks: dmTasks.selectedTasks,
    gettingData: dmFilter.isGettingData,
    tableSettings: dmPersist.tableSettings,
    communicationSetting: settings.communicationSetting
  };
};

const actions = {
  dmTaskDeleteRequest,
  dmViewDriver,
  dmOnTaskSelect,
  dmUnselectAllTasks,
  dmSelectBulkTasks,
  dmShowOptimizeTaskModal,
  dmShowCommunicationModal,
  dmTaskSearchRequest,
  dmTaskSearchSuccess
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMTableController)));
