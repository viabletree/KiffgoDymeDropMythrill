// @flow

import React from 'react';
import { css } from 'aphrodite';
import styles from './DmMapSettingStyles';
import { Checkbox } from '../../../../components';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';
import { MAP_SERVICE_PROVIDERS } from '../../../../constants';

export default class DmDriverSettingView extends React.PureComponent {
  render() {
    return (
      <div className={`${css(styles.wrapper)}`}>
        <h1 className={css(styles.title)}>Realtime ETA calculation:</h1>
        <h2 className={css(styles.description)}>
          Google Maps and Mapbox are the most solid options available.
        </h2>
        <div className="d-flex mt-4">
          <div className="mr-5">
            <Checkbox
              title="Mapbox API"
              name="mapbox"
              isChecked={this.props.service === MAP_SERVICE_PROVIDERS.mapbox}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() =>
                this.props.onServiceClick(MAP_SERVICE_PROVIDERS.mapbox)
              }
              isDisabled={this.props.disabled}
            />
          </div>
          <div className="ml-5">
            <Checkbox
              title="Google Maps API"
              name="google"
              isChecked={this.props.service === MAP_SERVICE_PROVIDERS.google}
              theme={CHECKBOX_THEME.THEME3}
              onClick={() =>
                this.props.onServiceClick(MAP_SERVICE_PROVIDERS.google)
              }
              isDisabled={this.props.disabled}
            />
          </div>
        </div>
      </div>
    );
  }
}
