// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';

import {
  dmGetDispatcherRequest,
  dmCreateDispatcherRequest,
  dmDeleteDispatcherRequest
} from '../../../../actions/DispatcherActions';
import DmDispatcherSettingView from './DmDispatcherSettingView';
import {
  ARE_YOU_SURE,
  INVALID_EMAIL_ERROR,
  INVALID_NAME_ERROR
} from '../../../../constants';
import Util from '../../../../services/Util';

class DmDispatcherSettingController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isdispatcherLoading: true,
      createdispatcherLoading: false,
      isdispatcherModalVisible: false,
      isEditdispatcherModalVisible: false,
      DispatcherName: '',
      DispatcherEmail: '',
      selectedUserId: -1,
      searchValue: '',
      filteredList: [],
      nameError: '',
      emailError: ''
      //dispatcherList:[]
    };
  }

  componentDidMount() {
    this.getDispatchers();
  }

  validateForm = () => {
    let isError = false;
    const errors = {
      nameError: '',
      emailError: ''
    };

    const { DispatcherName, DispatcherEmail } = this.state;

    if (!Util.isValidName(DispatcherName)) {
      isError = true;
      errors.nameError = INVALID_NAME_ERROR;
    }

    if (!Util.isEmailValid(DispatcherEmail)) {
      isError = true;
      errors.emailError = INVALID_EMAIL_ERROR;
    }

    this.setState({
      ...errors
    });
    return isError;
  };
  // get list

  getDispatchers = () => {
    this.setState({ isdispatcherLoading: true });
    console.log('dispatcher start');
    this.props.dmGetDispatcherRequest(() => {
      console.log('dispatcher complete');
      this.setState({
        isdispatcherLoading: false,
        filteredList: this.props.dispatcherList
      });
    });
  };

  // Create api key request

  createdispatcher = () => {
    if (!this.validateForm()) {
      const { DispatcherName, DispatcherEmail } = this.state;

      if (DispatcherName == '' || DispatcherEmail == '') return;

      const payload = {
        name: DispatcherName,
        emailaddress: DispatcherEmail
      };
      this.setState({
        isCreatedispatcherModalVisible: false,
        isdispatcherLoading: true
      });
      this.props.dmCreateDispatcherRequest(payload, status => {
        if (status) {
          console.log('completed created');
          console.log(status);
          console.log(payload);
         
        }
          this.getDispatchers();
      });
    }
  };

  // Edit api key button press listener

  onEditdispatcher = () => {
    const { selectedUserId } = this.state;
    console.log(selectedUserId);
    this.setState({
      isEditdispatcherModalVisible: true,
      DispatcherName: selectedUserId.firstName + ' ' + selectedUserId.lastName,
      DispatcherEmail: selectedUserId.email,
      nameError: '',
      emailError: ''
    });
  };

  // Edit api key request

  editdispatcher = () => {
    if (!this.validateForm()) {
      const { DispatcherName, DispatcherEmail, selectedUserId } = this.state;

      if (DispatcherName == '' || DispatcherEmail == '') return;

      const payload = {
        id: selectedUserId.id,
        name: DispatcherName,
        emailaddress: DispatcherEmail
      };
      this.props.dmCreateDispatcherRequest(payload, status => {
        if (status) {
          console.log('completed created');
          console.log(status);
          console.log(payload);
          this.getDispatchers();
          this.setState({ isEditdispatcherModalVisible: false });
        }
      });
    }
  };

  // Delete api key request

  onDeletedispatcher = () => {
    const { selectedUserId } = this.state;
    if (selectedUserId !== -1) {
      Util.dmConfirmAlert(
        ARE_YOU_SURE,
        `The dispatcher '${selectedUserId.firstName}' will be permanently deleted and any code using it will no longer function properly.`,
        'Yes, Delete',
        () => {
          const payload = { id: selectedUserId.id };
          this.props.dmDeleteDispatcherRequest(payload, () => {
            this.setState({
              selectedUserId: -1
            });
            this.getDispatchers();
          });
        }
      );
    }
  };

  // Api key item single click

  ondispatcherClick = val => {
    this.setState({
      selectedUserId: val
    });
  };

  onDoubleClickdispatcher = val => {
    this.setState({
      selectedUserId: val,
      DispatcherName: val.firstName + ' ' + val.lastName,
      DispatcherEmail: val.email,
      isEditdispatcherModalVisible: true,
      nameError: '',
      emailError: ''
    });
  };

  onPlusKeyClick = () => {
    this.setState({
      isCreatedispatcherModalVisible: true,
      selectedUserId: -1,
      DispatcherName: '',
      DispatcherEmail: '',
      nameError: '',
      emailError: ''
    });
  };

  // Api key create modal close

  createdispatcherModalClose = () => {
    this.setState({
      isCreatedispatcherModalVisible: false
    });
  };

  // Api key edit modal close

  editdispatcherModalClose = () => {
    this.setState({
      isEditdispatcherModalVisible: false,
      DispatcherName: '',
      DispatcherEmail: ''
    });
  };

  //name change listener

  onDispatcherNameChange = DispatcherName => {
    this.setState({ DispatcherName });
  };

  onDispatcherEmailChange = DispatcherEmail => {
    this.setState({ DispatcherEmail });
  };

  onSearchChange = e => {
    const searchValue = e.target.value;
    this.setState({
      searchValue
    });

    const { dispatcherList } = this.props;

    if (searchValue.length >= 3) {
      const searchOptions = {
        keys: ['firstName', 'email', 'lastName']
      };
      const fuse = new Fuse(dispatcherList, searchOptions);
      const searchedlst = fuse.search(searchValue);

      this.setState({
        filteredList: searchedlst
      });
    }

    if (searchValue.length == 0) {
      this.setState({
        filteredList: dispatcherList
      });
    }
  };

  // get Webhook list

  render() {
    const {
      selectedUserId,
      isdispatcherLoading,
      isCreatedispatcherModalVisible,
      isEditdispatcherModalVisible,
      DispatcherName,
      DispatcherEmail,
      createdispatcherLoading,
      searchValue,
      filteredList,
      nameError,
      emailError
    } = this.state;
    return (
      <DmDispatcherSettingView
        {...this.props}
        ondispatcherClick={this.ondispatcherClick}
        onEditdispatcher={this.onEditdispatcher}
        onDeletedispatcher={this.onDeletedispatcher}
        onPlusKeyClick={this.onPlusKeyClick}
        createdispatcherModalClose={this.createdispatcherModalClose}
        onDispatcherNameChange={this.onDispatcherNameChange}
        onDispatcherEmailChange={this.onDispatcherEmailChange}
        createdispatcher={this.createdispatcher}
        editdispatcherModalClose={this.editdispatcherModalClose}
        editdispatcher={this.editdispatcher}
        onDoubleClickdispatcher={this.onDoubleClickdispatcher}
        DispatcherName={DispatcherName}
        DispatcherEmail={DispatcherEmail}
        createdispatcherLoading={createdispatcherLoading}
        selectedUserId={selectedUserId}
        isdispatcherLoading={isdispatcherLoading}
        isCreatedispatcherModalVisible={isCreatedispatcherModalVisible}
        isEditdispatcherModalVisible={isEditdispatcherModalVisible}
        searchValue={searchValue}
        onSearchChange={this.onSearchChange}
        filteredList={filteredList}
        nameError={nameError}
        emailError={emailError}
      />
    );
  }
}

const mapStateToProps = ({ dmdispatcher }) => ({
  dispatcherList: dmdispatcher.dispatcherlst
});

const actions = {
  dmGetDispatcherRequest,
  dmCreateDispatcherRequest,
  dmDeleteDispatcherRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmDispatcherSettingController)));
