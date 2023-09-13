// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import Slider, { SliderTooltip } from 'rc-slider';
import styles from './DMDriverInputStyles';

import {
  BlackModal,
  DMTextField,
  DMProfilePic,
  DMLocationInput,
  DMButton
} from '../../../components';

import { AppStyles, Colors } from '../../../theme';
import Util from '../../../services/Util';
import { DRIVER_FIELDS_NAME } from '../../../constants';
import { DM_BUTTON_THEME } from '../DMButton';
import '../../../../node_modules/rc-slider/assets/index.css';
import { MyHandle } from './handle';

const { createSliderWithTooltip } = Slider;
const NewSlider = createSliderWithTooltip(Slider);

const { Handle } = Slider;

const marks = {
  10: {
    style: {
      color: '#ffffff',
      left: '9%',
      fontSize: '12px',
      top: '5px'
    },
    label: 'Slow (10%)'
  },
  100: {
    style: {
      color: '#ffffff',
      fontSize: '12px',
      top: '5px'
    },
    label: 'Normal (100%)'
  },
  200: {
    style: {
      color: '#ffffff',
      left: '90%',
      fontSize: '12px',
      top: '5px',
      width: '75px'
    },
    label: 'Fast (200%)'
  }
};

export default class DMDriverInputView extends React.PureComponent {
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
            <h2>
              <FontAwesomeIcon
                className={`mr-3 ${css(styles.topIcon)}`}
                icon={this.props.isEdit ? faPenAlt : faPlus}
              />
              {this.props.isEdit ? 'Edit driver' : 'Create a new driver'}
            </h2>
          </div>
          {!this.props.isEdit && (
            <div className={` ${css(styles.subHeader)}`}>
              A text message will be sent to the driver with a link to download
              the driver app
            </div>
          )}
          <DMProfilePic
            onClick={() => alert('click')}
            wrapperStyles={styles.picWrapper}
            onDoneUpload={picture => {
              this.props.dmOnDriverInputUpdate({
                [DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]: picture
              });
            }}
            image={
              this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]
                .secure_url
            }
            editable
          />
          {this.props.isEdit && (
            <div className={css(AppStyles.textAlignCenter, AppStyles.mTopBase)}>
              <p className={css(AppStyles.para1)}>
                {Util.getFormattedPhone(
                  this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_PHONE]
                )}
              </p>
              <p className={css(AppStyles.para1)}>
                {this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_NAME]}
              </p>
            </div>
          )}

          <div className={'d-flex mt-4'}>
            <div className={`${css(AppStyles.flex1)}`}>
              <span className={css(AppStyles.heading60)}>Contact</span>
              <div>
                <div className={css(AppStyles.flexBox)}>
                  {!this.props.isEdit && (
                    <div className={`${css(AppStyles.flex1)}`}>
                      <DMTextField
                        isPhoneNumber
                        label="Phone"
                        value={
                          this.props.driverInput[
                            DRIVER_FIELDS_NAME.DRIVER_PHONE
                          ]
                        }
                        onChange={e => {
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.DRIVER_PHONE]: e
                          });

                          setTimeout(() => {
                            this.props.onPhoneChange();
                          }, 200);
                        }}
                        error={
                          this.props[DRIVER_FIELDS_NAME.DRIVER_PHONE_ERROR]
                        }
                      />
                    </div>
                  )}
                </div>

                <DMTextField
                  type="text"
                  label="Full name"
                  value={this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_NAME]}
                  onChange={e => {
                    {
                      this.props.dmOnDriverInputUpdate({
                        [DRIVER_FIELDS_NAME.DRIVER_NAME]: e.target.value
                      });

                      setTimeout(() => {
                        this.props.onNameChange();
                      }, 200);
                    }
                  }}
                  error={this.props[DRIVER_FIELDS_NAME.DRIVER_NAME_ERROR]}
                />
              </div>
            </div>
          </div>
          <div className={'d-flex mt-4'}>
            <div className={`${css(AppStyles.flex1)}`}>
              {/* <span className={css(AppStyles.heading60)}>Home Location</span> */}
              <div>
                <DMLocationInput
                  {...this.props}
                  onCoordinatesChange={cords => {
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_LOCATION]: cords
                    });
                  }}
                  address={
                    this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_ADDRESS]
                  }
                  country_name={
                    this.props.driverInput[
                      DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME
                    ]
                  }
                  street_name={
                    this.props.driverInput[
                      DRIVER_FIELDS_NAME.DRIVER_STREET_NAME
                    ]
                  }
                  street_number={
                    this.props.driverInput[
                      DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER
                    ]
                  }
                  onAddressChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_ADDRESS]: value
                    })
                  }
                  postcode={
                    this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_POSTCODE]
                  }
                  onPostcodeChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_POSTCODE]: value
                    })
                  }
                  city_town={
                    this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_CITY]
                  }
                  onTownChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_CITY]: value
                    })
                  }
                  onStreetNumberChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER]: value
                    })
                  }
                  onStreetNameChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_STREET_NAME]: value
                    })
                  }
                  onCountryNameChange={value =>
                    this.props.dmOnDriverInputUpdate({
                      [DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME]: value
                    })
                  }
                  lat={
                    this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_LOCATION]
                      .latitude
                  }
                  lng={
                    this.props.driverInput[DRIVER_FIELDS_NAME.DRIVER_LOCATION]
                      .longitude
                  }
                />
              </div>
            </div>
          </div>
          <div className={`${css(styles.line)}`} />
          <div className={'d-flex mt-4'}>
            <div className={`${css(AppStyles.flex1)}`}>
              <span className={css(AppStyles.heading60)}>Transportation</span>
              <div className={`${css(styles.transportListWrapper)}`}>
                <ul className={`${css(styles.transportList)}`}>
                  {this.props.vehicleTypes.map((item, index) => {
                    let selected =
                      this.props.driverInput[
                        DRIVER_FIELDS_NAME.TRANSPORT_TYPE
                      ] === item.id;
                    return (
                      <li
                        className={`${css([
                          styles.transportItemLi,
                          selected && styles.transportItemLiSelected
                        ])}`}
                        onClick={() => {
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.TRANSPORT_TYPE]: item.id
                          });
                        }}
                      >
                        <img
                          src={!selected ? item.icon : item.iconSelected}
                          className={`${css(styles.iconStyle)}`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              {this.props.driverInput[DRIVER_FIELDS_NAME.TRANSPORT_TYPE] >
                2 && (
                <div className={`${css(AppStyles.mTop30)}`}>
                  <span className={css(AppStyles.whiteHeading)}>
                    Capacity | max quantity you can fit in
                  </span>
                  <div className={`${css(AppStyles.flexBox)}`}>
                    <DMTextField
                      type="number"
                      min="0"
                      label="Capacity | max quantity you can fit in"
                      value={
                        this.props.driverInput[
                          DRIVER_FIELDS_NAME.VEHICLE_CAPACITY
                        ]
                      }
                      onChange={e =>
                        this.props.dmOnDriverInputUpdate({
                          [DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]: e.target.value
                        })
                      }
                    />
                  </div>

                  <div className={css(styles.speedWrapper)}>
                    <div
                      className={css([AppStyles.mTop10, AppStyles.mBottom15])}
                    >
                      <span className={css(AppStyles.whiteHeading)}>
                        Driving speed
                      </span>
                    </div>

                    <Slider
                      value={this.props.driverInput[DRIVER_FIELDS_NAME.SPEED]}
                      tipFormatter={value => `${value}%`}
                      onChange={valAfter => {
                        this.props.dmOnDriverInputUpdate({
                          [DRIVER_FIELDS_NAME.SPEED]: valAfter
                        });
                      }}
                      min={10}
                      max={200}
                      step={5}
                      marks={marks}
                      handle={MyHandle}
                      trackStyle={{
                        backgroundColor: Colors.bgGreen,
                        height: '8px',
                        marginBottom: '10px'
                      }}
                      railStyle={{
                        backgroundColor: `${Colors.text.quaternary}`,
                        height: '8px',
                        marginBottom: '10px'
                      }}
                      dotStyle={{
                        borderColor: Colors.transparent,
                        backgroundColor: Colors.transparent,
                        height: -1,
                        width: -1,
                        marginBottom: '-3px'
                      }}
                      handleStyle={{
                        borderColor: Colors.white,
                        backgroundColor: '#fff',
                        height: 16,
                        width: 16,
                        marginTop: -4
                      }}
                    />
                  </div>
                  <div className={`${css(AppStyles.mTop10)}`}>
                    <span className={css(AppStyles.whiteHeading)}>
                      Vehicle details
                    </span>
                  </div>
                  <div className={`${css(AppStyles.flexBox)}`}>
                    <div className={css(styles.flexHalf)}>
                      <DMTextField
                        type="text"
                        label="Make & Model"
                        value={
                          this.props.driverInput[DRIVER_FIELDS_NAME.MAKE_MODEL]
                        }
                        onChange={e =>
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.MAKE_MODEL]: e.target.value
                          })
                        }
                      />
                    </div>

                    <div className={css([AppStyles.flex1, AppStyles.mLeft5])}>
                      <DMTextField
                        type="text"
                        label="Year"
                        value={this.props.driverInput[DRIVER_FIELDS_NAME.YEAR]}
                        onChange={e =>
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.YEAR]: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className={`${css(AppStyles.flexBox)}`}>
                    <div className={css(styles.flexHalf)}>
                      <DMTextField
                        type="text"
                        label="Number plate"
                        value={
                          this.props.driverInput[
                            DRIVER_FIELDS_NAME.NUMBER_PLATE
                          ]
                        }
                        onChange={e =>
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.NUMBER_PLATE]: e.target.value
                          })
                        }
                      />
                    </div>

                    <div className={css([AppStyles.flex1, AppStyles.mLeft5])}>
                      <DMTextField
                        type="text"
                        label="Color"
                        value={this.props.driverInput[DRIVER_FIELDS_NAME.COLOR]}
                        onChange={e =>
                          this.props.dmOnDriverInputUpdate({
                            [DRIVER_FIELDS_NAME.COLOR]: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {this.props.isEdit && (
                <div
                  className={css(AppStyles.textAlignCenter, AppStyles.mTop30)}
                >
                  <DMButton
                    className={`${css([styles.deleteButton])}`}
                    theme={DM_BUTTON_THEME.GREY_THEME}
                    title="Delete Driver"
                    onClick={this.props.onDelete}
                    isLoading={this.props.isDeleting}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </BlackModal>
    );
  }
}
