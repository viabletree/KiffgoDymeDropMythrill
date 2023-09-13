// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DmUserSettingStyles';
import { DMUserSettings } from '../../../../components';
export default class DmUserSettingView extends React.PureComponent {
  render() {
    return (
      <div className={`${css(styles.wrapper)}`}>

        <DMUserSettings
            {...this.props}
          />
      </div>
    );
  }
}
