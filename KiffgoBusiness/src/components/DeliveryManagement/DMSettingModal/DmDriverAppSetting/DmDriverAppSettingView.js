// @flow

import React from 'react';
import { css } from 'aphrodite';
import styles from './DmDriverAppSettingStyles';
import { Checkbox } from '../../../../components';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';

export default class DmDriverAppSettingView extends React.PureComponent {
  render() {
    return (
      <div className={`${css(styles.wrapper)}`}>
        <h2 className={css(styles.title)}>OFFLINE MODE</h2>
        <div className="d-flex mt-4">
          <div className="mr-5">
            <Checkbox
              title="Enable drivers to complete tasks without internet"
              name="offline_enabled"
              isChecked={this.props?.userDetails?.business?.offline_mode}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() => this.props.onCheckBoxClick()}
            />
          </div>
          <div
            className={`${css(
              this.props?.userDetails?.business?.offline_mode
                ? styles.status
                : styles.statusRed
            )}`}
          >
            {' '}
            {this.props?.userDetails?.business?.offline_mode
              ? 'Active'
              : 'Inactive'}
          </div>
        </div>
      </div>
    );
  }
}
