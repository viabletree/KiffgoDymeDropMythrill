// @flow
import React from 'react';
import { DMTextField, DMLocationInput } from '../../../../components';
import { TASK_FIELDS_NAME } from '../../../../constants';

export default class LocationSectionView extends React.PureComponent {
  render() {
    return (
      <div className={'mt-5'}>
        <DMLocationInput
          {...this.props}
          hasBusinessName
          address={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS]}
          business_name={
            this.props.taskInput[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]
          }
          postcode={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_POSTCODE]}
          city_town={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_TOWN]}
          building={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_BUILDING]}
          lat={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE]}
          lng={this.props.taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE]}
          addressError={
            this.props.taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS_ERROR]
          }
          street_name={
            this.props.taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NAME]
          }
          street_number={
            this.props.taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]
          }
          country_name={
            this.props.taskInput[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]
          }
          isDisabled={this.props.disabled}
          dmOnTaskInputUpdateInner={data => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_ADDRESS]: data.description,
              [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: data.business_name,
              [TASK_FIELDS_NAME.LOCATION_POSTCODE]: data.postcode,
              [TASK_FIELDS_NAME.LOCATION_TOWN]: data.city_town,
              [TASK_FIELDS_NAME.LOCATION_LATITUDE]: data.lat,
              [TASK_FIELDS_NAME.LOCATION_LONGITUDE]: data.lng,
              [TASK_FIELDS_NAME.LOCATION_STREET_NAME]: data.street_name,
              [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]: data.street_number,
              [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]: data.country_name
            });
          }}
          clearBusinessField={() =>
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: ''
            })
          }
          onAddressChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_ADDRESS]: value
            });
            /* setTimeout(() => {
            this.props.onAddressChange();
          }, 200); */
          }}
          onBusinessNameChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: value
            });
          }}
          onPostcodeChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_POSTCODE]: value
            });
          }}
          onCoordinatesChange={data => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_LATITUDE]: data.latitude,
              [TASK_FIELDS_NAME.LOCATION_LONGITUDE]: data.longitude
            });
          }}
          onBuildingChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_BUILDING]: value
            });
          }}
          onTownChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_TOWN]: value
            });
          }}
          onStreetNumberChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]: value
            });
          }}
          onStreetNameChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_STREET_NAME]: value
            });
          }}
          onCountryNameChange={value => {
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]: value
            });
          }}
        />
        <DMTextField
          value={this.props.taskInput[TASK_FIELDS_NAME.DESTINATION_NOTES]}
          label="Destination notes"
          name="destinationNotes"
          isTextArea
          onChange={value =>
            this.props.dmOnTaskInputUpdate({
              [TASK_FIELDS_NAME.DESTINATION_NOTES]: value.currentTarget.value
            })
          }
        />
      </div>
    );
  }
}
