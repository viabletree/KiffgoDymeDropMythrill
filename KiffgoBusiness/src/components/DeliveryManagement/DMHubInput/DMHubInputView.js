// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import TooltipTrigger from 'react-popper-tooltip';
import styles from './DMHubInputStyles';

import {
  BlackModal,
  DMTextField,
  DMLocationInput,
  Checkbox
} from '../../../components';

import { AppStyles } from '../../../theme';
import { HUB_FIELDS_NAME } from '../../../constants';
import { CHECKBOX_THEME } from '../../Checkbox/CheckboxController';

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
export default class DMHubInputView extends React.PureComponent {
  render() {
    return (
      <BlackModal
        open
        onClose={this.props.onCancelClick}
        rightButton={{
          title: this.props.isEdit ? 'Save' : 'Create',
          icon: faPlus,
          onClick: this.props.onSubmitClick,
          isLoading: this.props.isLoading
        }}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div className={`mt-2 ${css(styles.header)}`}>
            <p>
              {this.props.isEdit
                ? `Editing ${this.props.editHubName} hub`
                : 'New Hub'}
            </p>
            <p className={` ${css(styles.subHeader)}`}>
              Edit hub's details below
            </p>
          </div>

          <div className="mt-2">
            <DMTextField
              type="text"
              label="Hub name"
              value={this.props.hubInput[HUB_FIELDS_NAME.NAME]}
              onChange={e => {
                this.props.dmOnHubInputUpdate({
                  [HUB_FIELDS_NAME.NAME]: e.target.value
                });

                setTimeout(() => {
                  this.props.onNameChange();
                }, 200);
              }}
              error={this.props[HUB_FIELDS_NAME.NAME_ERROR]}
            />
          </div>

          <div className={'d-flex mt-4'}>
            <div className={`${css(AppStyles.flex1)}`}>
              <div>
                <DMLocationInput
                  {...this.props}
                  hasBusinessName={false}
                  onCoordinatesChange={cords => {
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.LOCATION]: cords
                    });
                  }}
                  address={this.props.hubInput[HUB_FIELDS_NAME.ADDRESS]}
                  onAddressChange={value => {
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.ADDRESS]: value
                    });
                  }}
                  country_name={this.props.hubInput[HUB_FIELDS_NAME.COUNTRY]}
                  street_name={this.props.hubInput[HUB_FIELDS_NAME.STREET_NAME]}
                  street_number={
                    this.props.hubInput[HUB_FIELDS_NAME.STREET_NUMBER]
                  }
                  postcode={this.props.hubInput[HUB_FIELDS_NAME.POST_CODE]}
                  city_town={this.props.hubInput[HUB_FIELDS_NAME.CITY_TOWN]}
                  business_name={
                    this.props.hubInput[HUB_FIELDS_NAME.HUB_BUSINESS_NAME]
                  }
                  building={this.props.hubInput[HUB_FIELDS_NAME.BUILDING]}
                  onBusinessNameChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.HUB_BUSINESS_NAME]: value
                    })
                  }
                  onBuildingChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.BUILDING]: value
                    })
                  }
                  onPostcodeChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.POST_CODE]: value
                    })
                  }
                  onTownChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.CITY_TOWN]: value
                    })
                  }
                  onStreetNumberChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.STREET_NUMBER]: value
                    })
                  }
                  onStreetNameChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.STREET_NAME]: value
                    })
                  }
                  onCountryNameChange={value =>
                    this.props.dmOnHubInputUpdate({
                      [HUB_FIELDS_NAME.COUNTRY]: value
                    })
                  }
                  lat={this.props.hubInput[HUB_FIELDS_NAME.LOCATION].latitude}
                  lng={this.props.hubInput[HUB_FIELDS_NAME.LOCATION].longitude}
                />
              </div>
              <div className="mt-3">
                <span className={css(AppStyles.heading60)}>
                  Service time (min)
                </span>
                <div className={`${css(AppStyles.flexBox)}`}>
                  <DMTextField
                    type="number"
                    min="0"
                    value={this.props.hubInput[HUB_FIELDS_NAME.SERVICE_TIME]}
                    onChange={e => {
                      this.props.dmOnHubInputUpdate({
                        [HUB_FIELDS_NAME.SERVICE_TIME]: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${css(styles.line)}`} />
        </div>
      </BlackModal>
    );
  }
}
