// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import {
  dmGetAllDriversRequest,
  dmViewDriver,
  dmDriverDeleteRequest
} from '../../../../actions/DMDriverActions';
import DmDriverSettingView from './DmDriverSettingView';
import {
  ROUTES,
  ARE_YOU_SURE,
  CONFIRM_DELETE_DRIVER,
  MESSAGE_TYPES
} from '../../../../constants';
import PropTypes from 'prop-types';
import {
  showDriverEditDetail,
  deleteDriverRequest,
  showCreateDriver
} from '../../../../helpers/dmHelper';
import Util from '../../../../services/Util';

class DmDriverSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedDriverIds: []
    };
  }

  componentDidMount() {
    this.dmGetAllDriversRequest();
  }

  onEdit = () => {
    const { selectedDriverIds } = this.state;
    if (selectedDriverIds.length > 0)
      return showDriverEditDetail(
        this.props.history,
        selectedDriverIds[0],
        true
      );
  };

  dmGetAllDriversRequest = () => {
    this.props.dmGetAllDriversRequest(() => {
      this.setState({
        isLoading: false
      });
    });
  };

  onDriverClick = data => {
    this.setState({
      selectedDriverIds: [data.id]
    });
  };

  onDelete = () => {
    const { selectedDriverIds } = this.state;
    if (selectedDriverIds.length > 0) {
      Util.dmConfirmAlert(
        ARE_YOU_SURE,
        CONFIRM_DELETE_DRIVER,
        'Yes, Delete',
        () => {
          deleteDriverRequest(selectedDriverIds[0], () => {
            this.setState({
              selectedDriverIds: []
            });
          });
        }
      );
    }
  };

  onDriverDoubleClick = data => {
    this.props.dmViewDriver(data.id, true);
  };

  onCreate = () => {
    showCreateDriver(this.props.history, true);
  };

  render() {
    return (
      <DmDriverSettingView
        {...this.props}
        selectedDriverIds={this.state.selectedDriverIds}
        onDriverClick={this.onDriverClick}
        isLoading={this.state.isLoading}
        onDriverDoubleClick={this.onDriverDoubleClick}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onCreate={this.onCreate}
      />
    );
  }
}

const mapStateToProps = ({ dmDriver }) => ({
  driverListing: dmDriver.allDrivers
});

const actions = { dmGetAllDriversRequest, dmViewDriver, dmDriverDeleteRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmDriverSettingController)));
