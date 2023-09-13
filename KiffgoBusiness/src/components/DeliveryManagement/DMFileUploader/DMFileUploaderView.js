// @flow
import React from 'react';
import { css } from 'aphrodite';
import _ from 'lodash';
import { FlatfileButton } from '@flatfile/react';
import Modal from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';
import { faFileMedical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BeatLoader } from 'react-spinners';
import { FLAT_FILE_KEY, TASK_FIELDS_NAME } from '../../../constants';
import {
  BASE_URL,
  DM_VERIFY_BULK_TASK_POSTCODE
} from '../../../config/WebService';
import { Colors, Images } from '../../../theme';
import { DMLoader } from '../../../components';
import styles from './DMFileUploaderStyles';

export default function DMFileUploaderView(props) {
  const {
    validateRecipientPhone,
    validateRecipientName,
    validateRecipientEmail,
    onLocationSuccess,
    validateTimeRange,
    onDataDone,
    modalOpen,
    isSuccess,
    loading,
    closeModal,
    data
  } = props;
  return (
    <div>
      <FlatfileButton
        className={css(styles.container)}
        licenseKey={FLAT_FILE_KEY}
        customer={{
          companyId: 'Kiffgo-id',
          companyName: 'Kiffgo',
          email: 'tools@kiffgo.io',
          name: 'Kiffgo-frontend',
          userId: '1'
        }}
        settings={{
          managed: true,
          type: 'Tasks',
          fields: [
            {
              label: 'Customer Phone',
              key: TASK_FIELDS_NAME.RECIPIENT_PHONE,
              description: 'Recipient Phone'
            },
            {
              label: 'Customer Name',
              key: TASK_FIELDS_NAME.RECIPIENT_NAME,
              description: 'Recipient Name'
            },
            {
              label: 'Customer Email',
              key: TASK_FIELDS_NAME.RECIPIENT_EMAIL,
              description: 'Recipient Email'
            },
            {
              label: 'Recipient Notes',
              key: TASK_FIELDS_NAME.RECIPIENT_NOTES
            },
            {
              label: 'Pickup',
              key: TASK_FIELDS_NAME.IS_PICKUP,
              type: 'checkbox'
            },
            {
              label: 'Internal Order Id',
              key: TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER
            },
            { label: 'Task Description', key: TASK_FIELDS_NAME.DESCRIPTION },
            {
              label: 'Address',
              key: TASK_FIELDS_NAME.LOCATION_ADDRESS,
              validators: [
                {
                  validate: 'required',
                  error: 'Address is required'
                }
              ]
            },
            {
              label: 'Apartment, Building, Suite',
              key: TASK_FIELDS_NAME.LOCATION_BUILDING
            },
            {
              label: 'Country',
              key: TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME
            },
            {
              label: 'Business Name',
              key: TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME
            },
            { label: 'Postcode', key: TASK_FIELDS_NAME.LOCATION_POSTCODE },
            { label: 'City/Town', key: TASK_FIELDS_NAME.LOCATION_TOWN },
            {
              label: 'Destination Notes',
              key: TASK_FIELDS_NAME.DESTINATION_NOTES
            },
            {
              label: 'Complete After',
              key: TASK_FIELDS_NAME.COMPLETE_AFTER,
              description: 'Formate should be 26/08/2020 13:00'
            },
            {
              label: 'Complete Before',
              key: TASK_FIELDS_NAME.COMPLETE_BEFORE,
              description: 'Formate should be 26/08/2020 13:00'
            },
            {
              label: 'Quantity',
              key: TASK_FIELDS_NAME.QUANTITY,
              validators: [
                {
                  validate: 'regex_matches',
                  regex: '^[0-9]+$',
                  error: 'Quantity should be number only'
                }
              ]
            },
            {
              label: 'Service Time (min)',
              key: TASK_FIELDS_NAME.SERVICE_MIN,
              validators: [
                {
                  validate: 'regex_matches',
                  regex: '^[0-9]+$',
                  error: 'Service Time should be number only'
                }
              ]
            },
            {
              label: 'Order Value',
              key: TASK_FIELDS_NAME.ORDERVALUE,
              validators: [
                {
                  validate: 'regex_matches',
                  regex: '^[0-9]+(.?[0-9]+)*$',
                  error: 'Order Value should be number only'
                }
              ]
            },
            {
              label: 'Picture',
              key: TASK_FIELDS_NAME.PICTURES,
              type: 'checkbox',
              description: 'Is picture required on perform task'
            },
            {
              label: 'Signature',
              key: TASK_FIELDS_NAME.SIGNATURE,
              type: 'checkbox',
              description: 'Is signature required on perform task'
            },
            {
              label: 'Driver Notes',
              key: TASK_FIELDS_NAME.NOTE,
              type: 'checkbox',
              description: 'Is notes required on perform task'
            }
          ]
        }}
        onRecordInit={async (record, index) => {
          const out = {};
          const phoneValid = validateRecipientPhone(
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE],
            record[TASK_FIELDS_NAME.RECIPIENT_NAME]
          );
          if (phoneValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_PHONE] = {
              info: [
                {
                  message: phoneValid,
                  level: 'error'
                }
              ]
            };
          }
          const nameValid = validateRecipientName(
            record[TASK_FIELDS_NAME.RECIPIENT_NAME],
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE]
          );
          if (nameValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_NAME] = {
              info: [
                {
                  message: nameValid,
                  level: 'error'
                }
              ]
            };
          }
          const emailValid = validateRecipientEmail(
            record[TASK_FIELDS_NAME.RECIPIENT_EMAIL],
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE]
          );
          if (emailValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_EMAIL] = {
              info: [
                {
                  message: emailValid,
                  level: 'error'
                }
              ]
            };
          }
          const options = { method: 'POST' };
          const requestData = {
            postcode: record[TASK_FIELDS_NAME.LOCATION_POSTCODE] || '',
            address: record[TASK_FIELDS_NAME.LOCATION_ADDRESS] || ''
          };
          options.body = JSON.stringify(requestData);
          await fetch(
            `${BASE_URL + DM_VERIFY_BULK_TASK_POSTCODE.route}`,
            options
          )
            .then(response => response.json())
            .then(json => {
              if (json.status) {
                onLocationSuccess(json.data, index);
              } else {
                if (!_.isEmpty(record[TASK_FIELDS_NAME.LOCATION_POSTCODE])) {
                  out[TASK_FIELDS_NAME.LOCATION_POSTCODE] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
                if (!_.isEmpty(record[TASK_FIELDS_NAME.LOCATION_ADDRESS])) {
                  out[TASK_FIELDS_NAME.LOCATION_ADDRESS] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
                if (
                  _.isEmpty(record[TASK_FIELDS_NAME.LOCATION_POSTCODE]) &&
                  _.isEmpty(record[TASK_FIELDS_NAME.LOCATION_ADDRESS])
                ) {
                  out[TASK_FIELDS_NAME.LOCATION_POSTCODE] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                  out[TASK_FIELDS_NAME.LOCATION_ADDRESS] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
              }
            });
          const timeError = validateTimeRange(record);
          if (timeError.isError) {
            if (!_.isEmpty(timeError.CBError)) {
              out[TASK_FIELDS_NAME.COMPLETE_BEFORE] = {
                info: [
                  {
                    message: timeError.CBError,
                    level: 'error'
                  }
                ]
              };
            }
            if (!_.isEmpty(timeError.CAError)) {
              out[TASK_FIELDS_NAME.COMPLETE_AFTER] = {
                info: [
                  {
                    message: timeError.CAError,
                    level: 'error'
                  }
                ]
              };
            }
          }
          return out;
        }}
        onRecordChange={async (record, index) => {
          const out = {};
          const phoneValid = validateRecipientPhone(
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE],
            record[TASK_FIELDS_NAME.RECIPIENT_NAME]
          );
          if (phoneValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_PHONE] = {
              info: [
                {
                  message: phoneValid,
                  level: 'error'
                }
              ]
            };
          }
          const nameValid = validateRecipientName(
            record[TASK_FIELDS_NAME.RECIPIENT_NAME],
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE]
          );
          if (nameValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_NAME] = {
              info: [
                {
                  message: nameValid,
                  level: 'error'
                }
              ]
            };
          }
          const emailValid = validateRecipientEmail(
            record[TASK_FIELDS_NAME.RECIPIENT_EMAIL],
            record[TASK_FIELDS_NAME.RECIPIENT_PHONE]
          );
          if (emailValid) {
            out[TASK_FIELDS_NAME.RECIPIENT_EMAIL] = {
              info: [
                {
                  message: emailValid,
                  level: 'error'
                }
              ]
            };
          }
          const options = { method: 'POST' };
          const requestData = {
            postcode: record[TASK_FIELDS_NAME.LOCATION_POSTCODE] || '',
            address: record[TASK_FIELDS_NAME.LOCATION_ADDRESS] || ''
          };
          options.body = JSON.stringify(requestData);
          await fetch(
            `${BASE_URL + DM_VERIFY_BULK_TASK_POSTCODE.route}`,
            options
          )
            .then(response => response.json())
            .then(json => {
              if (json.status) {
                onLocationSuccess(json.data, index);
              } else {
                if (!_.isEmpty(record[TASK_FIELDS_NAME.LOCATION_POSTCODE])) {
                  out[TASK_FIELDS_NAME.LOCATION_POSTCODE] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
                if (!_.isEmpty(record[TASK_FIELDS_NAME.LOCATION_ADDRESS])) {
                  out[TASK_FIELDS_NAME.LOCATION_ADDRESS] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
                if (
                  _.isEmpty(record[TASK_FIELDS_NAME.LOCATION_POSTCODE]) &&
                  _.isEmpty(record[TASK_FIELDS_NAME.LOCATION_ADDRESS])
                ) {
                  out[TASK_FIELDS_NAME.LOCATION_POSTCODE] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                  out[TASK_FIELDS_NAME.LOCATION_ADDRESS] = {
                    info: [
                      {
                        message: json.message,
                        level: 'error'
                      }
                    ]
                  };
                }
              }
            });
          const timeError = validateTimeRange(record);
          if (timeError.isError) {
            if (timeError.CBError !== '') {
              out[TASK_FIELDS_NAME.COMPLETE_BEFORE] = {
                info: [
                  {
                    message: timeError.CBError,
                    level: 'error'
                  }
                ]
              };
            }
            if (timeError.CAError !== '') {
              out[TASK_FIELDS_NAME.COMPLETE_AFTER] = {
                info: [
                  {
                    message: timeError.CAError,
                    level: 'error'
                  }
                ]
              };
            }
          }
          return out;
        }}
        onData={async results => {
          // Do something with the data here
          onDataDone(results.$data);
        }}
      >
        <img src={Images.bulkUploadTask} className={css(styles.toolImg)} />
      </FlatfileButton>
      <Modal
        open={modalOpen}
        showCloseIcon={false}
        focusTrapped
        closeOnOverlayClick={false}
        onClose={() => {}}
        modalId="settings_modal"
        styles={{
          modal: {
            paddingTop: '0px',
            paddingRight: '0px',
            paddingLeft: '0px',
            paddingBottom: '0px',
            width: '50%',
            borderRadius: '4px',
            overflow: 'hidden',
            background: Colors.mineShafta,
            colors: Colors.white,
            height: '70%'
          },
          overlay: {
            background: Colors.tintedBlack
          }
        }}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div className={`${css(styles.header)}`}>
            <span className={`${css([styles.titleText])}`}>
              {loading ? 'Uploading...' : 'Import Complete'}
            </span>
          </div>
          <div className={`${css([styles.contentContainer])}`}>
            {loading && (
              <div className={`${css(styles.loadingWrapper)}`}>
                <img
                  src={Images.logoKiffgoK}
                  className={`${css(styles.logo)}`}
                />
                <BeatLoader size={10} color={Colors.bgGreen} />
                <span className={`${css(styles.successText)}`}>
                  Importing Tasks
                </span>
              </div>
            )}
            {isSuccess && !loading && (
              <div className={`${css(styles.successContainer)}`}>
                <img
                  src={Images.tickCircle}
                  className={`${css(styles.successImage)}`}
                />
                <span className={`${css(styles.successText)}`}>
                  {`${data.numberOfRecords} tasks out of ${data.numberOfRecords} were successfully imported.`}
                </span>
              </div>
            )}
            {!isSuccess && !loading && (
              <div className={`${css([styles.failContainer])}`}>
                <div className={`${css([styles.failCounterContainer])}`}>
                  <img
                    src={Images.errorRed}
                    className={`${css(styles.failImage)}`}
                  />
                  <span className={`${css(styles.failText)}`}>
                    {`Errors: ${data.failedTask.length} task(s) out of ${data.numberOfRecords} cannot be uploaded to
                    dashboard.`}
                  </span>
                </div>
                <div className={`${css(styles.errorParent)}`}>
                  {data.failedTask.map(item => {
                    return (
                      <div className={`${css(styles.errorText)}`}>
                        {`Row ${item.taskIndex} : `}
                        {item.errors.map(error => `${error}, `)}
                      </div>
                    );
                  })}
                </div>
                <div className={`${css(styles.copyTextParent)}`}>
                  <div>
                    <div
                      className={`${css(styles.copyText)}`}
                    >{`${data.successTask.length} task(s) out ${data.numberOfRecords}  uploaded successfully to dashboard`}</div>
                    <div className={`${css(styles.copyText)}`}>
                      copy rows number with error(s ), correct your file and
                      re-upload
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${css(styles.footer)}`}>
            {!loading && (
              <div className={`${css(styles.buttonsParent)}`}>
                {/* isSuccess && (
                  <div
                    onClick={closeModal}
                    className={`${css(styles.footerButtonImport)}`}
                  >
                    {'New import'}
                  </div>
                ) */}
                {!isSuccess && (
                  <div
                    onClick={closeModal}
                    className={`${css(styles.footerButtonCopy)}`}
                  >
                    {'Copy'}
                  </div>
                )}
                <div
                  onClick={closeModal}
                  className={`${css(styles.footerButton)}`}
                >
                  {'Done'}
                </div>
              </div>
            )}
            <NavLink to="/"></NavLink>
          </div>
        </div>
      </Modal>
    </div>
  );
}
