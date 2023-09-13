// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DMTableHeaderView from './DMTableHeaderView';

export default class DMTableHeaderController extends React.Component {
  static propTypes = {
    showEdit: PropTypes.bool.isRequired,
    showClone: PropTypes.bool.isRequired,
    showDelete: PropTypes.bool.isRequired,
    showChangeAssignment: PropTypes.bool.isRequired,
    showBulkTimeWindow: PropTypes.bool.isRequired,
    showClearSelection: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onClonePress: PropTypes.func.isRequired,
    onDeletePress: PropTypes.func.isRequired,
    onChangeAssignmentPress: PropTypes.func.isRequired,
    onChangePriorityPress: PropTypes.func.isRequired,
    onClearSelectionPress: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    showOptimize: PropTypes.bool.isRequired,
    showNotify: PropTypes.bool.isRequired,
    onOptimizePress: PropTypes.func.isRequired,
    onExportClick: PropTypes.func.isRequired,
    communicationSetting: PropTypes.object.isRequired,
    dmTaskSearchRequest: PropTypes.func,
    dmTaskSearchSuccess: PropTypes.func,
    isHistoryView: PropTypes.bool
  };

  static defaultProps = {
    isHistoryView: false,
    dmTaskSearchRequest: () => {},
    dmTaskSearchSuccess: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      serverSearchText: '',
      loading: false
    };
  }

  onHeaderSearchChange = e => {
    this.setState({
      searchValue: e.target.value
    });

    this.props.onSearchChange(e);
  };

  onServerSearchTextChange = e => {
    this.setState(
      {
        serverSearchText: e.target.value
      },
      () => {
        if (this.state.serverSearchText.length > 2) {
          this.searchRequest();
        }
        if (this.state.serverSearchText.length === 0) {
          this.props.dmTaskSearchSuccess([]);
        }
      }
    );
  };

  //search method for server search history tab
  searchRequest = () => {
    this.setState({ loading: true });
    const payload = {
      internalOrder: this.state.serverSearchText
    };
    this.props.dmTaskSearchRequest(payload, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <DMTableHeaderView
        {...this.props}
        onHeaderSearchChange={this.onHeaderSearchChange}
        onServerSearchTextChange={this.onServerSearchTextChange}
        searchRequest={this.searchRequest}
        searchValue={this.state.searchValue}
        serverSearchText={this.state.serverSearchText}
        loading={this.state.loading}
      />
    );
  }
}
