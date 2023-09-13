// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import Util from '../../../services/Util';
import DMFilterBarView from './DMFilterBarView';
import {
  updateTaskDMFilter,
  dmFilterModalVisible,
  getActiveTabSlug,
  setDelayMin,
  unselectedAllTaskStatus,
  selectedAllTaskStatus,
  unselectedAllDriverStatus,
  selectedAllDriverStatus,
  updateDateDMFilter,
  dmLoader,
  updateDriverDMFilter,
  dmUpdateFilterNotificationType
} from '../../../actions/DMFilterActions';
import { DM_TASK_TYPE, DM_DRIVER_STATUS_TYPE } from '../../../constants';

class DMFilterBarController extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedFinalDateTime: ''
    };
  }

  // set state when user change in selected date time
  setSelectedDateTime = () => {
    this.setState({
      selectedFinalDateTime:
        Util.findDay(this.props.dateStartingFrom) +
        ' - ' +
        Util.findDay(this.props.dateEndingTill)
    });
  };

  componentDidMount() {
    this.setSelectedDateTime();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dateStartingFrom !== prevProps.dateStartingFrom ||
      this.props.dateEndingTill !== prevProps.dateEndingTill
    ) {
      this.setSelectedDateTime();
    }
  }

  // handle click on task
  handleTaskClick = taskType => {
    this.props.updateTaskDMFilter(taskType);
  };

  // show modal on btn filter click
  handleModalVisibility = val => {
    this.props.dmFilterModalVisible(val);
  };

  //getActiveTabSlug
  getActiveTabSlug = slug => {
    this.props.getActiveTabSlug(slug);
  };

  // handle to click filter bar detail
  handleFilterBarOption = slug => {
    // when click any option filterbar must open
    this.props.dmFilterModalVisible(true);
    //
    this.getActiveTabSlug(slug);
  };

  handleDelayMinActive = () => {
    const { showOnlyDelayedTasks } = this.props;
    this.props.setDelayMin({ showOnlyDelayedTasks: !showOnlyDelayedTasks });
  };

  //on change get delay min value
  onChangeGetDelayMin = e => {
    let val = e.target.value;
    this.props.setDelayMin({ delayedInMinutes: parseInt(val) });
  };

  // unselect all task
  handleUnselectedAllTaskStatus = () => {
    this.props.unselectedAllTaskStatus();
  };

  // unselect all drivers
  handleUnselectedAllDriverStatus = () => {
    this.props.unselectedAllDriverStatus();
  };

  // select all task
  handleSelectAllTaskStatus = () => {
    const payload = [
      DM_TASK_TYPE.UNASSIGNED.slug,
      DM_TASK_TYPE.ASSIGNED.slug,
      DM_TASK_TYPE.IN_TRANSIT.slug,
      DM_TASK_TYPE.SUCCESS.slug,
      DM_TASK_TYPE.FAIL.slug
    ];
    this.props.selectedAllTaskStatus(payload);
  };

  // select all drivers
  handleSelectAllDriverStatus = () => {
    const payload = [
      DM_DRIVER_STATUS_TYPE.ACTIVE.slug,
      DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug,
      DM_DRIVER_STATUS_TYPE.INACTIVE.slug
    ];
    this.props.selectedAllDriverStatus(payload);
  };

  // handle time date on change
  handleDateTimeOnChange = moment => {
    this.props.updateDateDMFilter(moment.toISOString());
  };

  // handle click on task
  handleDriverClick = driverStatusType => {
    this.props.updateDriverDMFilter(driverStatusType);
  };

  onCheckBoxClick = (key, value) => {
    this.props.dmUpdateFilterNotificationType({ key, value });
  };

  onAllNoneClick = all => {
    let { notified, nonNotified } = this.state;

    if (all) {
      notified = true;
      nonNotified = true;
    } else {
      notified = false;
      nonNotified = false;
    }
    this.setState({ notified, nonNotified });
  };

  render() {
    const { selectedFinalDateTime, notified, nonNotified } = this.state;

    const { showOnlyDelayedTasks, delayedInMinutes } = this.props;

    return (
      <DMFilterBarView
        {...this.props}
        onTaskClick={this.handleTaskClick}
        onDriverClick={this.handleDriverClick}
        handleModalVisibility={this.handleModalVisibility}
        handleClickHideModal={this.handleClickHideModal}
        getActiveTabSlug={this.getActiveTabSlug}
        handleFilterBarOption={this.handleFilterBarOption}
        showOnlyDelayedTasks={showOnlyDelayedTasks}
        handleDelayMinActive={this.handleDelayMinActive}
        onChangeGetDelayMin={this.onChangeGetDelayMin}
        delayedInMinutes={delayedInMinutes}
        handleUnselectedAllTaskStatus={this.handleUnselectedAllTaskStatus}
        handleSelectAllTaskStatus={this.handleSelectAllTaskStatus}
        handleSelectAllDriverStatus={this.handleSelectAllDriverStatus}
        handleUnselectedAllDriverStatus={this.handleUnselectedAllDriverStatus}
        handleDateTimeOnChange={this.handleDateTimeOnChange}
        onCheckBoxClick={this.onCheckBoxClick}
        onAllNoneClick={this.onAllNoneClick}
        selectedFinalDateTime={selectedFinalDateTime}
      />
    );
  }
}

const mapStateToProps = ({ dmFilter, settings }) => ({
  selectedTasks: dmFilter.tasksStatus,
  selectedDrivers: dmFilter.driversStatus,
  isFilterVisble: dmFilter.isFilterVisble,
  activeTab: dmFilter.activeTab,
  calendarDate: dmFilter.calendarDate,
  dateStartingFrom: dmFilter.dateStartingFrom,
  dateEndingTill: dmFilter.dateEndingTill,
  delayedInMinutes: dmFilter.delayedInMinutes,
  showOnlyDelayedTasks: dmFilter.showOnlyDelayedTasks,
  communicationSettings: settings.communicationSetting,
  notificationStatus: dmFilter.notificationStatus
});

const actions = {
  updateTaskDMFilter,
  dmFilterModalVisible,
  getActiveTabSlug,
  setDelayMin,
  unselectedAllTaskStatus,
  selectedAllTaskStatus,
  updateDateDMFilter,
  dmLoader,
  updateDriverDMFilter,
  unselectedAllDriverStatus,
  selectedAllDriverStatus,
  dmUpdateFilterNotificationType
};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(DMFilterBarController));
