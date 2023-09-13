// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DmOrganizationSettingStyles';
import { DMOrganization } from '../../../../components';
export default class DmOrganizationSettingView extends React.PureComponent {
  render() {
    return <DMOrganization {...this.props} />;
  }
}
