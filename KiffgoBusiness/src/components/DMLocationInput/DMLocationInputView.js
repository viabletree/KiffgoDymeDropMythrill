// @flow
import React from 'react';
import { css } from 'aphrodite';
import { ClipLoader } from 'react-spinners';
import OutsideClickHandler from 'react-outside-click-handler';
import _ from 'lodash';
import TooltipTrigger from 'react-popper-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { DMTextField, Checkbox, BlackModal } from '../../components';
import { CHECKBOX_THEME } from '../Checkbox/CheckboxController';
import styles from './DMLocationInputStyles';
import { AppStyles, Colors } from '../../theme';
import 'react-popper-tooltip/dist/styles.css';

const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container'
        })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement,
              fontSize: 12
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);
export default class DMLocationInputView extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.showEditCoordinates && (
          <div className={css(styles.headWrapper)}>
            <span className={css([AppStyles.heading60, AppStyles.mRight20])}>
              Location
            </span>

            <span className={css([AppStyles.flexBox, AppStyles.flex1])}>
              <Checkbox
                name="coordinatesCheckbox"
                title="Coordinates"
                isChecked={this.props.useCoordinates}
                theme={CHECKBOX_THEME.THEME2}
                onClick={this.props.onUseCoordinatesToggle}
                isDisabled={this.props.isDisabled}
              />
            </span>

            <span
              className={css(styles.headerActions)}
              onClick={this.props.onEditDetailsPress}
            >
              Edit location
            </span>
            {!this.props.isCordDataValid && (
              <div className={css(styles.errorIconWrapper)}>
                <Tooltip
                  placement="top"
                  trigger="hover"
                  tooltip="Enter city and country details"
                >
                  <FontAwesomeIcon
                    className={css(styles.errorIcon)}
                    icon={faExclamationTriangle}
                  />
                </Tooltip>
              </div>
            )}
          </div>
        )}

        {this.props.showEditLocation && (
          <BlackModal
            open
            onClose={this.props.onCancelEditLocation}
            rightButton={{
              title: 'Done',
              onClick: this.props.onSubmitEditLocation
            }}
          >
            <p className={css(styles.modalTitle)}>Edit Location Details</p>
            <>
              <p className={`mt-1 ${css(styles.subTitle)}`}>
                Display purposes only
              </p>

              <div className={'d-flex justify-content-between mt-2 mb-1'}>
                <span className={css(styles.title)}>Address</span>
              </div>
              <div className={'d-flex mb-2'}>
                <div className={`mr-1 ${css(AppStyles.flex2)}`}>
                  <DMTextField
                    name="streetNumber"
                    value={this.props.street_number}
                    label="Street number"
                    onChange={e =>
                      this.props.onStreetNumberChange(e.target.value)
                    }
                  />
                </div>
                <div className={`ml-2 ${css(AppStyles.flex3)}`}>
                  <DMTextField
                    name="streetName"
                    value={this.props.street_name}
                    label="Street name"
                    onChange={e =>
                      this.props.onStreetNameChange(e.target.value)
                    }
                  />
                </div>
              </div>
            </>

            {!_.isUndefined(this.props.business_name) &&
              this.props.hasBusinessName && (
                <>
                  <div className={'d-flex justify-content-between mt-3 mb-2'}>
                    <span className={css(styles.title)}></span>
                    <Checkbox
                      name="businessNameCheckbox"
                      title="No business name"
                      isChecked={this.props.noBusinessName}
                      theme={CHECKBOX_THEME.THEME2}
                      onClick={this.props.onBusinessNameToggle}
                      isDisabled={this.props.isDisabled}
                    />
                  </div>
                  <DMTextField
                    name="businessName"
                    label="Business name"
                    isDisabled={
                      this.props.noBusinessName || this.props.isDisabled
                    }
                    value={this.props.business_name}
                    onChange={e =>
                      this.props.onBusinessNameChange(e.target.value)
                    }
                  />
                </>
              )}

            {!_.isUndefined(this.props.building) && (
              <DMTextField
                name="building"
                isDisabled={this.props.isDisabled}
                label="Apartment, Building, Suite"
                value={this.props.building}
                onChange={e => this.props.onBuildingChange(e.target.value)}
              />
            )}
            {!_.isUndefined(this.props.city_town) && (
              <DMTextField
                name="town"
                isDisabled={this.props.isDisabled}
                label={
                  this.props.useCoordinates
                    ? 'City/Town (Required)'
                    : 'City/Town'
                }
                value={this.props.city_town}
                onChange={e => this.props.onTownChange(e.target.value)}
              />
            )}

            <div className={'d-flex'}>
              {!_.isUndefined(this.props.postcode) && (
                <div className={`mr-1 ${css(AppStyles.flex2)}`}>
                  <DMTextField
                    name="postcode"
                    label="Postcode"
                    value={this.props.postcode}
                    onChange={e => this.props.onPostcodeChange(e.target.value)}
                    isDisabled={this.props.isDisabled}
                  />
                </div>
              )}
              {!_.isUndefined(this.props.country_name) && (
                <div className={`ml-2 ${css(AppStyles.flex4)}`}>
                  <DMTextField
                    name="country"
                    label={
                      this.props.useCoordinates
                        ? 'Country (Required)'
                        : 'Country'
                    }
                    value={this.props.country_name}
                    onChange={e =>
                      this.props.onCountryNameChange(e.target.value)
                    }
                    isDisabled={this.props.isDisabled}
                  />
                </div>
              )}
            </div>
          </BlackModal>
        )}
        {!this.props.useCoordinates && (
          <>
            <div className={'mt-2 position-relative'}>
              <DMTextField
                name="address"
                value={this.props.address}
                label="Address"
                onChange={this.props.onSearchChange}
                isDisabled={this.props.isDisabled}
              />
              {this.props.isLoadingAddress && (
                <div className={css(styles.addressLoaderWrapper)}>
                  <ClipLoader
                    sizeUnit={'px'}
                    size={12}
                    color={Colors.kgGreen}
                  />
                </div>
              )}

              {this.props.addressSuggestions.length > 0 &&
                this.props.searchValue.length >= 3 && (
                  <div className={css(styles.suggestionsWrapper)}>
                    <OutsideClickHandler
                      onOutsideClick={this.props.hideSuggestions}
                    >
                      {this.props.addressSuggestions.map((item, index) => (
                        <p
                          key={index}
                          className={css(styles.suggestionsItem)}
                          onClick={() => this.props.onLocationSelect(item)}
                        >
                          {item.description}
                        </p>
                      ))}
                    </OutsideClickHandler>
                  </div>
                )}
            </div>

            {!_.isUndefined(this.props.building) && (
              <DMTextField
                name="suite"
                isDisabled={this.props.isDisabled}
                label="Apartment, Building, Suite"
                value={this.props.building}
                onChange={e => this.props.onBuildingChange(e.target.value)}
              />
            )}
          </>
        )}
        {this.props.useCoordinates && (
          <>
            <>
              <p className={`mt-2 ${css(styles.subTitle)}`}>
                Coordinates used to navigate the driver to location
              </p>
            </>
            <div className={'d-flex mb-2'}>
              <div className={`mr-1 ${css(AppStyles.flex1)}`}>
                <DMTextField
                  name="latitude"
                  isDisabled={
                    this.props.isDisabled || !this.props.useCoordinates
                  }
                  label="Latitude"
                  value={this.props.lat}
                  maxLength="8"
                  onChange={e =>
                    this.props.onCoordinatesChange({
                      latitude: e.target.value,
                      longitude: this.props.lng
                    })
                  }
                />
              </div>
              <div className={`ml-2 ${css(AppStyles.flex1)}`}>
                <DMTextField
                  name="longitude"
                  isDisabled={
                    this.props.isDisabled || !this.props.useCoordinates
                  }
                  label="Longitude"
                  value={this.props.lng}
                  maxLength="8"
                  onChange={e =>
                    this.props.onCoordinatesChange({
                      longitude: e.target.value,
                      latitude: this.props.lat
                    })
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
