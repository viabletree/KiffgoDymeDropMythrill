// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import {
  dmGetHubListRequest,
  dmClearHubInput,
  dmDeleteHubRequest
} from '../../../../actions/DMHubActions';
import DmHubSettingView from './DmHubSettingView';
import {
  ROUTES,
  ARE_YOU_SURE,
  CONFIRM_DELETE_HUB,
  MESSAGE_TYPES
} from '../../../../constants';
import PropTypes from 'prop-types';
import { showHubEditDetail, showCreateHub } from '../../../../helpers/dmHelper';
import Util from '../../../../services/Util';

class DmHubSettingController extends React.Component {
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
      selectedHubId: null
    };
  }

  componentDidMount() {
    this.dmGetHubListRequest();
  }

  onEdit = data => {
    let hubId = this.state.selectedHubId;
    if (!hubId) {
      hubId = data.id;
    }
    if (hubId) return showHubEditDetail(this.props.history, hubId, true);
  };

  onCreate = () => {
    showCreateHub(this.props.history, true);
  };
  dmGetHubListRequest = () => {
    this.props.dmGetHubListRequest(() => {
      this.setState({
        isLoading: false
      });
    });
  };

  onHubClick = data => {
    this.setState({
      selectedHubId: data.id
    });
  };

  onDelete = () => {
    const { selectedHubId } = this.state;
    if (selectedHubId) {
      Util.dmConfirmAlert(
        ARE_YOU_SURE,
        CONFIRM_DELETE_HUB,
        'Yes, Delete',
        () => {
          this.props.dmDeleteHubRequest({ hubId: selectedHubId }, () => {
            this.setState({
              selectedHubId: null
            });
          });
        }
      );
    }
  };

  render() {
    return (
      <DmHubSettingView
        {...this.props}
        selectedHubId={this.state.selectedHubId}
        onHubClick={this.onHubClick}
        isLoading={this.state.isLoading}
        onHubDoubleClick={this.onEdit}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onCreate={this.onCreate}
      />
    );
  }
}

const mapStateToProps = ({ dmHub }) => ({
  hubListing: dmHub.allHubs
});

const actions = {
  dmGetHubListRequest,
  dmDeleteHubRequest,
  dmClearHubInput
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmHubSettingController)));
