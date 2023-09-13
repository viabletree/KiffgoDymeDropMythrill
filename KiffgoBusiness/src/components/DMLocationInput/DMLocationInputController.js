// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import isValidCoordinates from 'is-valid-coordinates';
import DMLocationInputView from './DMLocationInputView';
import {
  addressAutoCompleteRequest,
  validateAddressRequest
} from '../../actions/BookingActions';
import Util from '../../services/Util';
import { INVALID_LAT, INVALID_LNG } from '../../constants';

function limitTo8Characters(value) {
  let val = value ? value.toString() : '';
  return val.substring(0, 9);
}

class DMLocationInputController extends React.Component {
  static propTypes = {
    hasBusinessName: PropTypes.bool,
    address: PropTypes.string,
    business_name: PropTypes.string,
    postcode: PropTypes.string,
    city_town: PropTypes.string,
    country_name: PropTypes.string,
    building: PropTypes.string,
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onAddressChange: PropTypes.func,
    onBusinessNameChange: PropTypes.func,
    onPostcodeChange: PropTypes.func,
    onCoordinatesChange: PropTypes.func,
    onBuildingChange: PropTypes.func,
    onTownChange: PropTypes.func,
    addressError: PropTypes.string,
    dmOnTaskInputUpdateInner: PropTypes.func,
    clearBusinessField: PropTypes.func,
    showEditCoordinates: PropTypes.bool,
    onStreetNumberChange: PropTypes.func,
    onStreetNameChange: PropTypes.func,
    onCountryNameChange: PropTypes.func

    // useCoordinates: PropTypes.bool,
    // onUseCoordinatesToggle: PropTypes.func
  };

  static defaultProps = {
    hasBusinessName: false,
    address: '',
    business_name: '',
    postcode: undefined,
    city_town: undefined,
    country_name: undefined,
    building: undefined,
    lat: '',
    lng: '',
    onAddressChange: () => {},
    onBusinessNameChange: () => {},
    onPostcodeChange: () => {},
    onCoordinatesChange: () => {},
    onBuildingChange: () => {},
    onTownChange: () => {},
    addressError: '',
    clearBusinessField: () => {},
    onStreetNumberChange: () => {},
    onCountryNameChange: () => {},
    onStreetNameChange: () => {},
    showEditCoordinates: true,
    dmOnTaskInputUpdateInner: () => {}
    // useCoordinates: false,
    // onUseCoordinatesToggle: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      addressValue: '',
      addressSuggestions: [],
      isLoadingAddress: false,
      noBusinessName: false,
      showEditLocation: false,
      useCoordinates: false
    };
  }

  onBusinessNameToggle = () => {
    this.setState(prevstate => ({ noBusinessName: !prevstate.noBusinessName }));
    this.props.clearBusinessField();
  };

  onSearchChange = e => {
    let val = e.target.value;
    this.setState({ searchValue: val });
    this.props.onAddressChange(val);
    if (!_.isEmpty(val) && val.length >= 3) {
      this.setState({ isLoadingAddress: true });
      this.props.addressAutoCompleteRequest({ line: e.target.value }, data => {
        if (data && _.isArray(data)) {
          this.setState({
            addressSuggestions: data,
            isLoadingAddress: false
          });
        }
      });
    }
  };

  hideSuggestions = () => {
    this.setState({
      addressSuggestions: []
    });
  };

  onLocationSelect = locationData => {
    this.validateLocation(locationData);
    this.setState({
      locationData,
      // addressValue: locationData.description,
      addressSuggestions: []
    });
  };

  validateLocation = initialData => {
    this.setState({ isLoadingAddress: true });
    if (initialData) {
      this.props.validateAddressRequest(
        {
          place_id: initialData.place_id,
          fullAddress: initialData.description
        },
        data => {
          if (data !== null) {
            this.setState({
              isLoadingAddress: false,
              searchValue: data.fullAddress
            });

            this.props.onAddressChange(
              data.fullAddress
              /* Util.makeAddressString(
                initialData.description,
                data.business_name
              ) */
            );
            this.props.onBusinessNameChange(data.business_name);
            this.props.onPostcodeChange(data.postcode);
            this.props.onCoordinatesChange({
              latitude: limitTo8Characters(data.latitude),
              longitude: limitTo8Characters(data.longitude)
            });
            this.props.onTownChange(data.city_town);
            this.props.onStreetNumberChange(data.street_number);
            this.props.onStreetNameChange(data.street_name);
            this.props.onCountryNameChange(data.country_name);
          } else {
            this.setState({
              isLoadingAddress: false,
              searchValue: initialData.description
            });
          }
        }
      );
    }
  };

  validateCountryCity = () => {
    if (this.props.city_town === '' || this.props.city_town === undefined) {
      Util.topAlertError('City is required');
      return false;
    } else if (
      this.props.country_name === '' ||
      this.props.country_name === undefined
    ) {
      Util.topAlertError('Country is required');
      return false;
    }
    return true;
  };

  onCancelEditLocation = () => {
    this.setState({
      showEditLocation: false
    });
  };

  onEditDetailsPress = () => {
    this.setState({
      showEditLocation: true
    });
  };

  onUseCoordinatesToggle = () => {
    this.setState({
      useCoordinates: !this.state.useCoordinates
    });
  };

  useLatLngPress = () => {
    this.setState({
      useCoordinates: true,
      showEditLocation: true
    });
  };

  onSubmitEditLocation = () => {
    if (this.props.useCoordinates) {
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

  hideEditLocationModal = () => {
    this.setState({
      showEditLocation: false
    });
  };

  showEditLocationModal = () => {
    this.setState({
      showEditLocation: true
    });
  };

  render() {
    const {
      searchValue,
      addressSuggestions,
      isLoadingAddress,
      noBusinessName,
      showEditLocation
    } = this.state;
    return (
      <DMLocationInputView
        {...this.props}
        searchValue={searchValue}
        addressSuggestions={addressSuggestions}
        isLoadingAddress={isLoadingAddress}
        noBusinessName={noBusinessName}
        onLocationSelect={this.onLocationSelect}
        onSearchChange={this.onSearchChange}
        hideSuggestions={this.hideSuggestions}
        onBusinessNameToggle={this.onBusinessNameToggle}
        onCancelEditLocation={this.onCancelEditLocation}
        showEditLocation={showEditLocation}
        onEditDetailsPress={this.onEditDetailsPress}
        useLatLngPress={this.useLatLngPress}
        onSubmitEditLocation={this.onSubmitEditLocation}
      />
    );
  }
}

const actions = {
  addressAutoCompleteRequest,
  validateAddressRequest
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actions)(DMLocationInputController);
