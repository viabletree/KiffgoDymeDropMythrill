// @flow
import React from 'react';
import { css } from 'aphrodite';
import { DMTextField } from '../..';
import { AppStyles } from '../../../theme';
import styles from './DMUserSettingsStyles';
import {
  
  getUserFullName,
} from '../../../helpers/userHelper';

export default class DMUserSettingsView extends React.PureComponent {
  render() {
    return (
      <>
      <div>
            <span className={css(AppStyles.heading60)}>Name</span>
            <div className={`${css(AppStyles.mTop10)}`}>
              <span className={css(AppStyles.whiteHeading)}>
                Full Name :
              </span>
            </div>
            <div>
              <div className={css(AppStyles.flexBox)}>
                  <div className={`${css(AppStyles.flex1)}`}>
                    <DMTextField
                      label="Full Name: "
                      value={
                        getUserFullName()
                      }
                      isDisabled
                    />
                  </div>
              </div>
            </div>
       
      </div>
        <div>
          <span className={css(AppStyles.heading60)}>Contact</span>
          <div className={`${css(AppStyles.mTop10)}`}>
            <span className={css(AppStyles.whiteHeading)}>
              Phone :
              </span>
          </div>
          <div>
            <div className={css(AppStyles.flexBox)}>
              <div className={`${css(AppStyles.flex1)}`}>
                <DMTextField
                  isPhoneNumber
                  label="Phone"
                  value={
                    this.props.userDetails.phone
                  }
                  isDisabled
                />
              </div>
            </div>
          </div>
         
          <div className={`${css(AppStyles.mTop10)}`}>
            <span className={css(AppStyles.whiteHeading)}>
              Email  :
              </span>
          </div>
          <div>
            <div className={css(AppStyles.flexBox)}>
              <div className={`${css(AppStyles.flex1)}`}>
                <DMTextField
                  label="Email "
                  value={
                    this.props.userDetails.email
                  }
                  isDisabled
                />
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}
