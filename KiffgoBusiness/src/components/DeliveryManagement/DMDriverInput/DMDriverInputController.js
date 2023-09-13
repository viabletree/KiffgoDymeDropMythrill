// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import isValidCoordinates from 'is-valid-coordinates';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import DMDriverInputView from './DMDriverInputView';
import {
  dmOnDriverInputUpdate,
  dmDriverCreateRequest,
  dmDriverEditRequest,
  dmClearDriverInput,
  dmGetAllDriversRequest
} from '../../../actions/DMDriverActions';
import Util from '../../../services/Util';
import {
  ROUTES,
  DRIVER_FIELDS_NAME,
  INVALID_NAME_ERROR,
  INVALID_PHONE_ERROR,
  DRIVER_TRANSPORT_TYPES,
  DM_MODULES,
  ARE_YOU_SURE,
  CONFIRM_DELETE_DRIVER,
  NAME_IS_REQUIRED_ERROR,
  PHONE_IS_REQUIRED_ERROR,
  INVALID_EMAIL_ERROR,
  INVALID_LAT,
  INVALID_LNG,
  ADDRESS_IS_REQUIRED_ERROR
} from '../../../constants';
import {
  getDriverDetailFromReducer,
  deleteDriverRequest,
  showCreateDriver
} from '../../../helpers/dmHelper';

class DMDriverInputController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      noDRIVER: false,
      isError: false,
      [DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR]: '',
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR]: '',
      [DRIVER_FIELDS_NAME.DRIVER_EMAIL_ERROR]: '',
      driverDetail: this.getDriverIfEdit(),
      useCoordinates: false,
      isCordDataValid: true
    };
  }

  componentDidMount() {
    this.redirectToCreate();
    this.isUseCords();
  }

  redirectToCreate = () => {
    // redirect to create task if no data for edit task

    if (
      this.props.match.params.moduleAction === DM_MODULES.DRIVER.ACTIONS.EDIT &&
      _.isNull(this.state.driverDetail)
    ) {
      showCreateDriver(this.props.history, true);
    }
  };

  onDelete = () => {
    const { actionData } = this.props.match.params;

    if (this.isEditMode()) {
      const selectedDriverIds = [actionData];
      if (selectedDriverIds.length > 0) {
        Util.dmConfirmAlert(
          ARE_YOU_SURE,
          CONFIRM_DELETE_DRIVER,
          'Yes, Delete',
          () => {
            this.props.dmClearDriverInput();
            this.onModalCloseClick();
            deleteDriverRequest(selectedDriverIds[0]);
          }
        );
      }
    }
  };

  getDriverIfEdit = () => {
    const { actionData } = this.props.match.params;

    if (this.isEditMode()) {
      const returnReducer = getDriverDetailFromReducer(
        this.props.allDrivers,
        parseInt(actionData)
      );
      if (returnReducer === null) return returnReducer;
      this.props.dmOnDriverInputUpdate({
        [DRIVER_FIELDS_NAME.DRIVER_PHONE]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_PHONE],
        [DRIVER_FIELDS_NAME.DRIVER_NAME]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_NAME],
        [DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE],
        [DRIVER_FIELDS_NAME.DRIVER_EMAIL]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_EMAIL],
        [DRIVER_FIELDS_NAME.DRIVER_LOCATION]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_LOCATION],
        [DRIVER_FIELDS_NAME.DRIVER_ADDRESS]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_ADDRESS],
        [DRIVER_FIELDS_NAME.DRIVER_POSTCODE]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_POSTCODE],
        [DRIVER_FIELDS_NAME.DRIVER_CITY]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_CITY],
        [DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME],
        [DRIVER_FIELDS_NAME.DRIVER_STREET_NAME]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_STREET_NAME],
        [DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER]:
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER],
        [DRIVER_FIELDS_NAME.NUMBER_PLATE]:
          returnReducer[DRIVER_FIELDS_NAME.NUMBER_PLATE],
        [DRIVER_FIELDS_NAME.MAKE_MODEL]:
          returnReducer[DRIVER_FIELDS_NAME.MAKE_MODEL],
        [DRIVER_FIELDS_NAME.YEAR]: returnReducer[DRIVER_FIELDS_NAME.YEAR],
        [DRIVER_FIELDS_NAME.COLOR]: returnReducer[DRIVER_FIELDS_NAME.COLOR],
        [DRIVER_FIELDS_NAME.TRANSPORT_TYPE]:
          returnReducer[DRIVER_FIELDS_NAME.TRANSPORT_TYPE],
        [DRIVER_FIELDS_NAME.ID]: returnReducer[DRIVER_FIELDS_NAME.ID],
        [DRIVER_FIELDS_NAME.STATUS]: returnReducer[DRIVER_FIELDS_NAME.STATUS],
        [DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]:
          returnReducer[DRIVER_FIELDS_NAME.VEHICLE_CAPACITY],
        [DRIVER_FIELDS_NAME.SPEED]: returnReducer[DRIVER_FIELDS_NAME.SPEED]
      });
      return returnReducer;
    }
  };

  onCancelClick = () => {
    this.props.dmClearDriverInput();
    this.onModalCloseClick();
  };

  onModalCloseClick = () => {
    const values = queryString.parse(this.props.location.search);
    if (values.redirect) {
      this.props.history.push(values.redirect);
    } else {
      this.props.history.push(`${ROUTES.DELIVERY_MANAGEMENT}`);
    }
  };

  validateDriverPhone = () => {
    const { driverInput } = this.props;

    let isValid = true;

    const intialErrorState = {
      [DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR]: ''
    };

    // PHONE VALIDATION
    if (_.isEmpty(driverInput[DRIVER_FIELDS_NAME.DRIVER_PHONE])) {
      // phone is empty

      intialErrorState[
        DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR
      ] = PHONE_IS_REQUIRED_ERROR;
      isValid = false;
    } else if (
      !Util.isValidMobileNumber(driverInput[DRIVER_FIELDS_NAME.DRIVER_PHONE])
    ) {
      // phone is invalid

      intialErrorState[
        DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR
      ] = INVALID_PHONE_ERROR;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  validateLocationAddress = () => {
    const { driverInput } = this.props;
    let isValid = true;

    if (_.isEmpty(driverInput[DRIVER_FIELDS_NAME.DRIVER_ADDRESS])) {
      isValid = false;
    }

    return isValid;
  };

  validateDriverName = () => {
    const { driverInput } = this.props;
    let isValid = true;

    const intialErrorState = {
      [DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR]: ''
    };

    // NAME VALIDATION
    if (_.isEmpty(driverInput[DRIVER_FIELDS_NAME.DRIVER_NAME])) {
      // name is empty

      intialErrorState[
        DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR
      ] = NAME_IS_REQUIRED_ERROR;
      isValid = false;
    } else if (!Util.isValidName(driverInput[DRIVER_FIELDS_NAME.DRIVER_NAME])) {
      // name is invalid
      intialErrorState[
        DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR
      ] = INVALID_NAME_ERROR;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  validateDriverEmail = () => {
    const { driverInput } = this.props;
    let isValid = true;

    const intialErrorState = {
      [DRIVER_FIELDS_NAME.DRIVER_EMAIL_ERROR]: ''
    };

    // EMAIL VALIDATION
    if (
      !_.isEmpty(driverInput[DRIVER_FIELDS_NAME.DRIVER_EMAIL]) &&
      !Util.isEmailValid(driverInput[DRIVER_FIELDS_NAME.DRIVER_EMAIL])
    ) {
      // email is invalid
      intialErrorState[
        DRIVER_FIELDS_NAME.DRIVER_EMAIL_ERROR
      ] = INVALID_EMAIL_ERROR;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  isValidLatitude = () =>
    isValidCoordinates.latitude(
      parseFloat(
        this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_LOCATION].latitude
      )
    );

  isValidLongitude = () =>
    isValidCoordinates.longitude(
      parseFloat(
        this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_LOCATION].longitude
      )
    );

  isValidCordData = () => {
    const { driverInput } = this.props;
    let isValid = true;
    if (
      _.isEmpty(
        driverInput[DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME] &&
          driverInput[DRIVER_FIELDS_NAME.DRIVER_CITY]
      )
    ) {
      isValid = false;
      this.setState({ isCordDataValid: false });
    }
    return isValid;
  };

  validateForm = () => {
    const { useCoordinates } = this.state;
    const isLocationValid = useCoordinates || this.validateLocationAddress();
    const isCordDataValid = useCoordinates ? this.isValidCordData() : true;
    const isNameValid = this.validateDriverName();
    const isPhoneValid = this.validateDriverPhone();
    const isEmailValid = this.validateDriverEmail();
    const isValidLatitude = this.isValidLatitude();
    const isValidLongitude = this.isValidLongitude();

    const isFormValid =
      isPhoneValid &&
      isNameValid &&
      isEmailValid &&
      isValidLatitude &&
      isValidLongitude &&
      isLocationValid &&
      isCordDataValid;

    setTimeout(() => {
      if (!isFormValid) {
        let text = '';
        if (!isPhoneValid) {
          text = this.state[DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR];
        } else if (!isNameValid) {
          text = this.state[DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR];
        } else if (!isEmailValid) {
          text = this.state[DRIVER_FIELDS_NAME.DRIVER_EMAIL_ERROR];
        } else if (!isLocationValid) {
          text = ADDRESS_IS_REQUIRED_ERROR; // this.state[TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR];
        } else if (!isCordDataValid) {
          text = 'Coordinates Data is required';
        } else if (!isValidLatitude) {
          text = INVALID_LAT;
        } else if (!isValidLongitude) {
          text = INVALID_LNG;
        }

        Util.dmInformAlert('Error', text, null, null);
      }
    }, 200);
    return isFormValid;
  };

  isEditMode = () =>
    this.props.match.params.moduleName === DM_MODULES.DRIVER.NAME &&
    this.props.match.params.moduleAction === DM_MODULES.TASK.ACTIONS.EDIT;

  onSubmitClick = () => {
    if (this.validateForm()) {
      const { driverInput } = this.props;
      // submit request
      const payload = {};
      payload.name = driverInput[DRIVER_FIELDS_NAME.DRIVER_NAME];
      payload.phone = driverInput[DRIVER_FIELDS_NAME.DRIVER_PHONE];
      payload.email = driverInput[DRIVER_FIELDS_NAME.DRIVER_EMAIL];
      payload.town = driverInput[DRIVER_FIELDS_NAME.DRIVER_CITY];
      payload.city = driverInput[DRIVER_FIELDS_NAME.DRIVER_CITY];
      payload.address = driverInput[DRIVER_FIELDS_NAME.DRIVER_ADDRESS];
      payload.postcode = driverInput[DRIVER_FIELDS_NAME.DRIVER_POSTCODE];
      payload.location =
        driverInput[DRIVER_FIELDS_NAME.DRIVER_LOCATION] || null;
      payload.image = !_.isEmpty(
        driverInput[DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]
      )
        ? driverInput[DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]
        : null;

      payload.capacity = driverInput[DRIVER_FIELDS_NAME.VEHICLE_CAPACITY];
      payload.country = driverInput[DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME];
      payload.street_name = driverInput[DRIVER_FIELDS_NAME.DRIVER_STREET_NAME];
      payload.street_number =
        driverInput[DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER];

      const transport = {};
      const selectedTransport = _.find(this.props.vehicleTypes, item => {
        return item.id === driverInput[DRIVER_FIELDS_NAME.TRANSPORT_TYPE];
      });
      transport.transport_name = selectedTransport
        ? selectedTransport.title
        : '';
      transport.number_plate = driverInput[DRIVER_FIELDS_NAME.NUMBER_PLATE];
      transport.make_and_model = driverInput[DRIVER_FIELDS_NAME.MAKE_MODEL];
      transport.year = driverInput[DRIVER_FIELDS_NAME.YEAR];
      transport.color = driverInput[DRIVER_FIELDS_NAME.COLOR];
      transport.transport_id = driverInput[DRIVER_FIELDS_NAME.TRANSPORT_TYPE];
      payload.transport = transport;
      payload.speed = driverInput[DRIVER_FIELDS_NAME.SPEED];
      this.setState({ isLoading: true });
      if (this.isEditMode()) {
        payload.phone = driverInput[DRIVER_FIELDS_NAME.DRIVER_PHONE];
        payload.driverId = driverInput[DRIVER_FIELDS_NAME.ID];
        this.props.dmDriverEditRequest(payload, status => {
          this.setState({ isLoading: false });
          if (status) {
            this.props.dmClearDriverInput();
            this.onModalCloseClick();
          }
        });
      } else {
        this.props.dmDriverCreateRequest(payload, status => {
          this.setState({ isLoading: false });
          if (status) {
            this.props.dmClearDriverInput();
            this.onModalCloseClick();
          }
        });
      }
    }
  };

  onUseCoordinatesToggle = () => {
    this.setState(
      {
        useCoordinates: !this.state.useCoordinates,
        isCordDataValid: true
      },
      () => {
        this.props.dmOnDriverInputUpdate({
          [DRIVER_FIELDS_NAME.DRIVER_ADDRESS]: ''
        });
      }
    );
  };

  isUseCords() {
    const { actionData } = this.props.match.params;
    if (this.isEditMode()) {
      const returnReducer = getDriverDetailFromReducer(
        this.props.allDrivers,
        parseInt(actionData)
      );
      if (returnReducer != null) {
        if (
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_ADDRESS] === '' &&
          returnReducer[DRIVER_FIELDS_NAME.DRIVER_LOCATION].latitude !== ''
        ) {
          this.setState({ useCoordinates: true });
        }
      }
    }
  }

  render() {
    return (
      <DMDriverInputView
        {...this.props}
        {...this.state}
        onModalCloseClick={this.onModalCloseClick}
        onSubmitClick={this.onSubmitClick}
        onPhoneChange={this.validateDriverPhone}
        onNameChange={this.validateDriverName}
        onEmailChange={this.validateDriverEmail}
        onCancelClick={this.onCancelClick}
        onDelete={this.onDelete}
        isEdit={this.isEditMode()}
        useCoordinates={this.state.useCoordinates}
        isCordDataValid={this.state.isCordDataValid}
        onUseCoordinatesToggle={this.onUseCoordinatesToggle}
      />
    );
  }
}

const mapStateToProps = ({ dmDriver, general }) => ({
  driverInput: dmDriver.driverInput,
  allDrivers: dmDriver.allDrivers,
  vehicleTypes: general.vehicleTypes
});

const actions = {
  dmOnDriverInputUpdate,
  dmDriverCreateRequest,
  dmDriverEditRequest,
  dmClearDriverInput,
  dmGetAllDriversRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMDriverInputController)));
