// @flow
import React from 'react';
import { css } from 'aphrodite';
import TimezoneSelect from 'react-timezone-select';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppStyles } from '../../../theme';
import styles from './DMOrganizationStyles';
import { DRIVER_FIELDS_NAME } from '../../../constants';
import { DMTextField, DMProfilePic } from '../../../components';
import {
  isLoggedIn,
  getUserFullName,
  getUserFirstLetter,
  isKiffgoAdmin,
  userLogout
} from '../../../helpers/userHelper';
import _ from 'lodash';
export default function DMDriverListingView(props) {
  return (
    <div className={`${css(styles.container)}`}>
      <DMProfilePic
        // onClick={() => alert('click')}
        wrapperStyles={styles.picWrapper}
        onDoneUpload={picture => {
          const payload = {
            public_id: picture.public_id,
            version: picture.version,
            width: picture.width,
            height: picture.height,
            format: picture.format,
            bytes: picture.bytes,
            url: picture.secure_url,
            secure_url: picture.secure_url
          };
          props.userUploadLogoRequest(payload);
        }}
        image={
          _.isNil(props.userDetails.logo)
            ? ''
            : props.userDetails.logo.secure_url
        }
        editable
      />
      <div className={css(styles.innerContainer)}>
        <span className={css([AppStyles.heading60])}>Business Name</span>

        <div>
          <div className={css(AppStyles.flexBox)}>
            <div className={`${css(AppStyles.flex1)}`}>
              <DMTextField
                label="Business Name: "
                value={props.userDetails.business.name || ''}
                isDisabled
              />
            </div>
          </div>
        </div>
        <div className={css(AppStyles.mTop15)}>
          <span className={css([AppStyles.heading60])}>
            Search & Choose Time Zone
          </span>
          <p className={css([styles.desc, AppStyles.pera12])}>
            Time zone is used to calculate time related outputs like Estimated
            Arrival Time, Optimization output….Make sure to set up it to your
            operating country{' '}
          </p>
          <div className={css([AppStyles.mTop10])}>
            <div className={css(AppStyles.flexBox)}>
              <div className={`${css(AppStyles.flex1)}`}>
                <div className="select-wrapper">
                  <TimezoneSelect
                    value={
                      props.userDetails.timezone
                        ? props.userDetails.timezone
                        : ''
                    }
                    onChange={props.timezoneOnchange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
