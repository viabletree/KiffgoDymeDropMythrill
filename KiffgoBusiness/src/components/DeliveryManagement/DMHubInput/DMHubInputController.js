// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import isValidCoordinates from 'is-valid-coordinates';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import DMHubInputView from './DMHubInputView';
import {
  dmOnHubInputUpdate,
  dmClearHubInput,
  dmHubCreateRequest,
  dmUpdateHubRequest
} from '../../../actions/DMHubActions';
import Util from '../../../services/Util';
import {
  ROUTES,
  HUB_FIELDS_NAME,
  INVALID_NAME_ERROR,
  DM_MODULES,
  NAME_IS_REQUIRED_ERROR,
  LATITUDE_IS_REQUIRED_ERROR,
  LONGITUDE_IS_REQUIRED_ERROR,
  INVALID_LAT,
  INVALID_LNG,
  ADDRESS_IS_REQUIRED_ERROR
} from '../../../constants';
import {
  getHubDetailFromReducer,
  showCreateHub
} from '../../../helpers/dmHelper';

class DMHubInputController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      noDRIVER: false,
      isError: false,
      [HUB_FIELDS_NAME.NAME_ERROR]: '',
      [HUB_FIELDS_NAME.LATITUDE_ERROR]: '',
      [HUB_FIELDS_NAME.LONGITUDE_ERROR]: '',
      hubDetail: this.getHubIfEdit(),
      useCoordinates: false,
      editHubName: '',
      isCordDataValid: true,
      showEditLocation: false,
      hasBusinessName: true,
      noBusinessName: false
    };
  }

  componentDidMount() {
    this.redirectToCreate();
    if (!_.isEmpty(this.state.hubDetail)) {
      this.setState({
        editHubName: this.state.hubDetail[HUB_FIELDS_NAME.NAME]
      });
      if (_.isEmpty(this.state.hubDetail[HUB_FIELDS_NAME.ADDRESS])) {
        this.setState({ useCoordinates: true });
      }
    }
  }

  redirectToCreate = () => {
    // redirect to create task if no data for edit task

    if (
      this.props.match.params.moduleAction === DM_MODULES.HUB.ACTIONS.EDIT &&
      _.isNull(this.state.hubDetail)
    ) {
      showCreateHub(this.props.history, true);
    }
  };

  getHubIfEdit = () => {
    const { actionData } = this.props.match.params;

    if (this.isEditMode()) {
      const returnReducer = getHubDetailFromReducer(
        this.props.hubList,
        parseInt(actionData)
      );
      if (returnReducer === null) return returnReducer;
      this.props.dmOnHubInputUpdate({
        [HUB_FIELDS_NAME.ID]: returnReducer[HUB_FIELDS_NAME.ID],
        [HUB_FIELDS_NAME.NAME]: returnReducer[HUB_FIELDS_NAME.NAME],
        [HUB_FIELDS_NAME.LOCATION]: returnReducer[HUB_FIELDS_NAME.LOCATION],
        [HUB_FIELDS_NAME.ADDRESS]: returnReducer[HUB_FIELDS_NAME.ADDRESS],
        [HUB_FIELDS_NAME.BUILDING]: returnReducer[HUB_FIELDS_NAME.BUILDING],
        [HUB_FIELDS_NAME.POST_CODE]: returnReducer[HUB_FIELDS_NAME.POST_CODE],
        [HUB_FIELDS_NAME.STREET_NAME]:
          returnReducer[HUB_FIELDS_NAME.STREET_NAME],
        [HUB_FIELDS_NAME.STREET_NUMBER]:
          returnReducer[HUB_FIELDS_NAME.STREET_NUMBER],
        [HUB_FIELDS_NAME.COUNTRY]: returnReducer[HUB_FIELDS_NAME.COUNTRY],
        [HUB_FIELDS_NAME.CITY_TOWN]: returnReducer[HUB_FIELDS_NAME.CITY_TOWN],
        [HUB_FIELDS_NAME.SERVICE_TIME]:
          returnReducer[HUB_FIELDS_NAME.SERVICE_TIME]
      });

      return returnReducer;
    }
  };

  onCancelClick = () => {
    this.props.dmClearHubInput();
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

  validateLocationAddress = () => {
    const { hubInput } = this.props;
    let isValid = true;

    if (_.isEmpty(hubInput[HUB_FIELDS_NAME.ADDRESS])) {
      isValid = false;
    }

    return this.state.useCoordinates || isValid;
  };

  validateHubName = () => {
    const { hubInput } = this.props;
    let isValid = true;

    const intialErrorState = {
      [HUB_FIELDS_NAME.NAME_ERROR]: ''
    };

    // NAME VALIDATION
    if (_.isEmpty(hubInput[HUB_FIELDS_NAME.NAME])) {
      // name is empty

      intialErrorState[HUB_FIELDS_NAME.NAME_ERROR] = NAME_IS_REQUIRED_ERROR;
      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  validateHubLatitude = () => {
    const { hubInput } = this.props;
    let isValid = true;

    const intialErrorState = {
      [HUB_FIELDS_NAME.LATITUDE_ERROR]: ''
    };
    // Latitude VALIDATION
    if (_.isNull(hubInput[HUB_FIELDS_NAME.LOCATION].latitude)) {
      // Latitude is empty

      intialErrorState[
        HUB_FIELDS_NAME.LATITUDE_ERROR
      ] = LATITUDE_IS_REQUIRED_ERROR;

      isValid = false;
    } else if (!this.isValidLatitude()) {
      // Latitude is invalid

      intialErrorState[HUB_FIELDS_NAME.LATITUDE_ERROR] = INVALID_LAT;

      isValid = false;
    }

    this.setState(intialErrorState);
    return isValid;
  };

  validateHubLongitude = () => {
    const { hubInput } = this.props;
    let isValid = true;

    const intialErrorState = {
      [HUB_FIELDS_NAME.LONGITUDE_ERROR]: ''
    };

    // Longitude VALIDATION
    if (_.isNull(hubInput[HUB_FIELDS_NAME.LOCATION].longitude)) {
      // Longitude is empty

      intialErrorState[
        HUB_FIELDS_NAME.LONGITUDE_ERROR
      ] = LONGITUDE_IS_REQUIRED_ERROR;
      isValid = false;
    } else if (!this.isValidLongitude()) {
      // Longitude is invalid

      intialErrorState[HUB_FIELDS_NAME.LONGITUDE_ERROR] = INVALID_LNG;

      isValid = false;
    }

    this.setState(intialErrorState);

    return isValid;
  };

  isValidLatitude = () => {
    const bol = isValidCoordinates.latitude(
      parseFloat(this.props.hubInput[HUB_FIELDS_NAME.LOCATION].latitude)
    );
    return bol;
  };

  isValidLongitude = () => {
    const bol = isValidCoordinates.longitude(
      parseFloat(this.props.hubInput[HUB_FIELDS_NAME.LOCATION].longitude)
    );

    return bol;
  };

  isValidCordData = () => {
    const { hubInput } = this.props;
    let isValid = true;
    if (
      _.isEmpty(
        hubInput[HUB_FIELDS_NAME.COUNTRY] && hubInput[HUB_FIELDS_NAME.CITY_TOWN]
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
    const isNameValid = this.validateHubName();
    const isValidLatitude = this.validateHubLatitude();
    const isValidLongitude = this.validateHubLongitude();
    const isFormValid =
      isNameValid &&
      isValidLatitude &&
      isCordDataValid &&
      isValidLongitude &&
      isLocationValid;

    setTimeout(() => {
      if (!isFormValid) {
        let text = '';
        if (!isNameValid) {
          text = this.state[HUB_FIELDS_NAME.NAME_ERROR];
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
    this.props.match.params.moduleName === DM_MODULES.HUB.NAME &&
    this.props.match.params.moduleAction === DM_MODULES.HUB.ACTIONS.EDIT;

  onSubmitClick = () => {
    if (this.validateForm()) {
      const { hubInput } = this.props;
      // submit request
      const payload = {};
      payload[HUB_FIELDS_NAME.NAME] = hubInput[HUB_FIELDS_NAME.NAME];
      payload[HUB_FIELDS_NAME.ADDRESS] = hubInput[HUB_FIELDS_NAME.ADDRESS];
      payload[HUB_FIELDS_NAME.LOCATION] =
        hubInput[HUB_FIELDS_NAME.LOCATION] || null;
      payload[HUB_FIELDS_NAME.BUILDING] = hubInput[HUB_FIELDS_NAME.BUILDING];
      payload[HUB_FIELDS_NAME.POST_CODE] = hubInput[HUB_FIELDS_NAME.POST_CODE];
      payload[HUB_FIELDS_NAME.STREET_NUMBER] =
        hubInput[HUB_FIELDS_NAME.STREET_NUMBER];
      payload[HUB_FIELDS_NAME.STREET_NAME] =
        hubInput[HUB_FIELDS_NAME.STREET_NAME];
      payload[HUB_FIELDS_NAME.COUNTRY] = hubInput[HUB_FIELDS_NAME.COUNTRY];
      payload[HUB_FIELDS_NAME.CITY_TOWN] = hubInput[HUB_FIELDS_NAME.CITY_TOWN];
      payload[HUB_FIELDS_NAME.SERVICE_TIME] =
        hubInput[HUB_FIELDS_NAME.SERVICE_TIME];

      this.setState({ isLoading: true });
      if (this.isEditMode()) {
        payload[HUB_FIELDS_NAME.ID] = hubInput[HUB_FIELDS_NAME.ID];
        payload[HUB_FIELDS_NAME.LOCATION] = {
          latitude: payload[HUB_FIELDS_NAME.LOCATION].latitude,
          longitude: payload[HUB_FIELDS_NAME.LOCATION].longitude
        };
        this.props.dmUpdateHubRequest(payload, status => {
          this.setState({ isLoading: false });
          if (status) {
            this.props.dmClearHubInput();
            this.onModalCloseClick();
          }
        });
      } else {
        this.props.dmHubCreateRequest(payload, status => {
          this.setState({ isLoading: false });
          if (status) {
            this.props.dmClearHubInput();
            this.onModalCloseClick();
          }
        });
      }
    }
  };

  onUseCoordinatesToggle = () => {
    const { useCoordinates } = this.state;
    if (useCoordinates) {
      this.props.dmOnHubInputUpdate({
        [HUB_FIELDS_NAME.LOCATION]: {}
      });
    } else {
      this.props.dmOnHubInputUpdate({
        [HUB_FIELDS_NAME.ADDRESS]: '',
        [HUB_FIELDS_NAME.BUILDING]: ''
      });
    }

    this.setState({ useCoordinates: !useCoordinates });
  };

  onEditDetailsPress = () => {
    this.setState({
      showEditLocation: true
    });
  };

  onCancelEditLocation = () => {
    this.setState({
      showEditLocation: false
    });
  };

  onSubmitEditLocation = () => {
    if (this.state.useCoordinates) {
      if (this.validateCountryCity()) {
        this.setState({
          showEditLocation: false
        });
      }
    } else {
      this.setState({
        showEditLocation: false
      });
    }
  };

  validateCountryCity = () => {
    const { cityTown, countryName } = this.state;
    if (cityTown === '' || cityTown === undefined) {
      Util.topAlertError('City is required');
      return false;
    }
    if (countryName === '' || countryName === undefined) {
      Util.topAlertError('Country is required');
      return false;
    }
    return true;
  };

  onBusinessNameToggle = () => {
    this.setState(prevstate => ({
      noBusinessName: !prevstate.noBusinessName,
      businessName: ''
    }));
  };

  render() {
    console.log({ props: this.props });
    return (
      <DMHubInputView
        {...this.props}
        {...this.state}
        onModalCloseClick={this.onModalCloseClick}
        onSubmitClick={this.onSubmitClick}
        onNameChange={this.validateHubName}
        onLatitudeChange={this.validateHubLatitude}
        onLongitudeChange={this.validateHubLongitude}
        onCancelClick={this.onCancelClick}
        isEdit={this.isEditMode()}
        useCoordinates={this.state.useCoordinates}
        editHubName={this.state.editHubName}
        onUseCoordinatesToggle={this.onUseCoordinatesToggle}
        onEditDetailsPress={this.onEditDetailsPress}
        onCancelEditLocation={this.onCancelEditLocation}
        onSubmitEditLocation={this.onSubmitEditLocation}
        onBusinessNameToggle={this.onBusinessNameToggle}
      />
    );
  }
}

const mapStateToProps = ({ dmHub }) => ({
  hubInput: dmHub.hubInput,
  hubList: dmHub.allHubs
});

const actions = {
  dmOnHubInputUpdate,
  dmHubCreateRequest,
  dmClearHubInput,
  dmUpdateHubRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMHubInputController)));
