// @flow
import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import DMFileUploaderView from './DMFileUploaderView';
import {
  verifyTaskPostCodeRequest,
  uploadBulkTaskRequest
} from '../../../actions/DMTasksActions';
import util from '../../../services/Util';
import {
  TASK_FIELDS_NAME,
  DATE_TIME_FORMAT_BULK,
  TIME_ERROR
} from '../../../constants';

class DMFileUploaderController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      modalOpen: false,
      isSuccess: true,
      loading: false,
      data: { failedTask: [], successTask: [] }
    };
  }

  validateRecipientPhone = (phone, name) => {
    let phoneError = false;
    let errorText = '';
    if (_.isEmpty(phone) && !_.isEmpty(name)) {
      phoneError = true;
      errorText = 'Phone Is Required';
      // phone is empty
    } else if (!_.isEmpty(phone)) {
      let number = phone.replace(/ /g, '');
      if (_.isEqual(number.charAt(0), '+')) {
        number = number.substr(1);
      }
      if (!util.isValidMobileNumber(number)) {
        phoneError = true;
        errorText = 'Phone Is Invalid';
      }
      // phone is invalid
    }

    return phoneError ? errorText : phoneError;
  };

  validateRecipientName = (name, phone) => {
    let nameError = false;
    let errorText = '';
    if (_.isEmpty(name) && !_.isEmpty(phone)) {
      nameError = true;
      errorText = 'Name Is Required';
      // name is empty
    } else if (!_.isEmpty(name)) {
      if (!util.isValidName(name)) {
        nameError = true;
        errorText = 'Name Is Invalid';
      }
      // name is invalid
    }

    return nameError ? errorText : nameError;
  };

  validateRecipientEmail = (email, phone) => {
    let emailError = false;
    let errorText = '';
    if (_.isEmpty(email) && !_.isEmpty(phone)) {
      emailError = true;
      errorText = 'Email Is Required';
      // email is empty
    } else if (!_.isEmpty(email)) {
      if (!util.isEmailValid(email)) {
        emailError = true;
        errorText = 'Email Is Invalid';
      }
      // email is invalid
    }

    return emailError ? errorText : emailError;
  };

  onLocationSuccess = (data, index) => {
    const locations = _.cloneDeep(this.state.locations);
    locations[index] = data;
    this.setState({ locations });
  };

  validateTimeRange = record => {
    const errorObj = { isError: false, CAError: '', CBError: '' };
    const caText = record[TASK_FIELDS_NAME.COMPLETE_AFTER];
    const cbText = record[TASK_FIELDS_NAME.COMPLETE_BEFORE];
    if (!_.isEmpty(caText)) {
      if (!util.isTimeFormat(caText)) {
        errorObj.isError = true;
        errorObj.CAError = 'Invalid format';
        errorObj.CBError = '';
      }
    }
    if (!_.isEmpty(cbText)) {
      if (!util.isTimeFormat(cbText)) {
        errorObj.isError = true;
        errorObj.CAError = '';
        errorObj.CBError = 'Invalid format';
      }
    }
    if (errorObj.isError) {
      return errorObj;
    }
    const currentCADate = moment(
      record[TASK_FIELDS_NAME.COMPLETE_AFTER],
      DATE_TIME_FORMAT_BULK
    );
    const currentCBDate = moment(
      record[TASK_FIELDS_NAME.COMPLETE_BEFORE],
      DATE_TIME_FORMAT_BULK
    );
    if (currentCBDate._isValid) {
      const isAfter = moment(currentCBDate).isAfter(moment());
      if (!isAfter) {
        return {
          isError: true,
          CAError: '',
          CBError: TIME_ERROR
        };
      }
    }
    if (currentCADate._isValid && currentCBDate._isValid) {
      const differenceInMinutes = currentCBDate.diff(currentCADate, 'minutes');
      if (differenceInMinutes < 1) {
        return {
          isError: true,
          CAError: 'Must occur before Complete before',
          CBError: 'Must occur after Complete after'
        };
      }

      return {
        isError: false
      };
    }

    return {
      isError: false
    };
  };

  onDataDone = async data => {
    const finalData = [];
    const stateLocations = _.cloneDeep(this.state.locations);
    for (let x = 0; x < data.length; x += 1) {
      if (
        data[x].valid &&
        data[x].data.location_address !== '' &&
        !_.isNil(data[x].data.location_address)
      ) {
        const tempData = {};
        if (
          data[x].data[TASK_FIELDS_NAME.RECIPIENT_PHONE] &&
          data[x].data[TASK_FIELDS_NAME.RECIPIENT_PHONE] !== ''
        ) {
          let number = data[x].data[TASK_FIELDS_NAME.RECIPIENT_PHONE].replace(
            / /g,
            ''
          );
          if (_.isEqual(number.charAt(0), '+')) {
            number = number.substr(1);
          }
          tempData.phone = number;
        } else {
          tempData.phone = '';
        }
        tempData.name = data[x].data[TASK_FIELDS_NAME.RECIPIENT_NAME] || '';
        tempData.email = data[x].data[TASK_FIELDS_NAME.RECIPIENT_EMAIL] || '';
        tempData.recipient_notes =
          data[x].data[TASK_FIELDS_NAME.RECIPIENT_NOTES] || '';
        tempData.isPickup = data[x].data[TASK_FIELDS_NAME.IS_PICKUP] || false;
        tempData.isDropoff = !data[x].data[TASK_FIELDS_NAME.IS_PICKUP];
        tempData.internal_order_number =
          data[x].data[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER] || '';
        tempData.description = data[x].data[TASK_FIELDS_NAME.DESCRIPTION] || '';
        tempData.address =
          data[x].data[TASK_FIELDS_NAME.LOCATION_ADDRESS] || '';
        tempData.building =
          data[x].data[TASK_FIELDS_NAME.LOCATION_BUILDING] || '';
        tempData.business_name =
          data[x].data[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME] || '';
        tempData.postcode =
          data[x].data[TASK_FIELDS_NAME.LOCATION_POSTCODE] || '';
        tempData.city_town = data[x].data[TASK_FIELDS_NAME.LOCATION_TOWN] || '';
        tempData.country = data[x].data[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME];
        tempData.destination_notes =
          data[x].data[TASK_FIELDS_NAME.DESTINATION_NOTES] || '';
        tempData.completeAfter =
          moment(
            data[x].data[TASK_FIELDS_NAME.COMPLETE_AFTER],
            DATE_TIME_FORMAT_BULK
          ) || '';
        tempData.completeBefore =
          moment(
            data[x].data[TASK_FIELDS_NAME.COMPLETE_BEFORE],
            DATE_TIME_FORMAT_BULK
          ) || '';
        tempData.quantity = data[x].data[TASK_FIELDS_NAME.QUANTITY] || '0';
        tempData.serviceMin = data[x].data[TASK_FIELDS_NAME.SERVICE_MIN] || '0';
        tempData.order_value = data[x].data[TASK_FIELDS_NAME.ORDERVALUE] || '0';
        const proof = [];
        if (data[x].data[TASK_FIELDS_NAME.PICTURES]) {
          proof.push('picture');
        }
        if (data[x].data[TASK_FIELDS_NAME.SIGNATURE]) {
          proof.push('signature');
        }
        if (data[x].data[TASK_FIELDS_NAME.NOTE]) {
          proof.push('notes');
        }
        tempData.proof = proof;
        tempData.location =
          (stateLocations &&
            stateLocations[data[x].sequence] &&
            stateLocations[data[x].sequence].id) ||
          0;
        // const location = {};
        // location.id = stateLocations[data[x].sequence].id;
        // location.latitude = stateLocations[data[x].sequence].latitude;
        // location.longitude = stateLocations[data[x].sequence].longitude;
        // tempData.location = location;
        finalData.push(_.cloneDeep(tempData));
      }
    }
    if (finalData.length > 0) {
      this.setState({ modalOpen: true });
      // first
      // last
      /* every response */
      /*
      let isSuccess = true;
      if (status) {
        if (serverData.failedTask.length > 0) {
          isSuccess = false;
        }
        this.setState({ isSuccess, data: serverData });
      }
      */
      const resultData = [];
      const failedTask = [];
      const serverDataArr = {
        successTask: [],
        failedTask: [],
        numberOfRecords: 0
      };
      const asyncArr = [];
      while (finalData.length) {
        resultData.push(finalData.splice(0, 100));
      }
      for (let i = 0; i < resultData.length; i += 1) {
        const payload = { data: resultData[i] };
        if (i === 0) this.setState({ loading: true });
        const a = await this.asyncRequest(payload);

        if (a.status) {
          if (a.serverData.failedTask.length > 0) {
            failedTask.push(...a.serverData.failedTask);
          }
        }
        serverDataArr.successTask.push(...a.serverData.successTask);
        serverDataArr.failedTask.push(...a.serverData.failedTask);
        serverDataArr.numberOfRecords += a.serverData.numberOfRecords;
        // if last request is sending
        if (i === resultData.length - 1) {
          let isSuccess = true;
          if (failedTask.length > 0) {
            isSuccess = false;
          }
          this.setState({ loading: false, isSuccess, data: serverDataArr });
        }
      }
    } else {
      util.dmInformAlert('Error', 'No task to upload');
    }
  };

  asyncRequest = async payload => {
    return new Promise((resolve, reject) => {
      this.props.uploadBulkTaskRequest(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { loading, isSuccess, modalOpen, data } = this.state;
    return (
      <DMFileUploaderView
        {...this.props}
        validateRecipientPhone={this.validateRecipientPhone}
        validateRecipientName={this.validateRecipientName}
        validateRecipientEmail={this.validateRecipientEmail}
        validateTimeRange={this.validateTimeRange}
        onLocationSuccess={this.onLocationSuccess}
        onDataDone={this.onDataDone}
        closeModal={this.closeModal}
        modalOpen={modalOpen}
        loading={loading}
        isSuccess={isSuccess}
        data={data}
      />
    );
  }
}
const mapStateToProps = ({}) => ({});

const actions = { verifyTaskPostCodeRequest, uploadBulkTaskRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMFileUploaderController)));
