// @flow
import _ from 'lodash';
import React, { useState, useCallback } from 'react';
import { css } from 'aphrodite';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './DMStyles';
import {
  DMHeader,
  DMSideBar,
  DMMap,
  DMFilterBar,
  DMLoader,
  DMTaskBar,
  DMTaskInput,
  DMSettingModal,
  DMDriverInput,
  DMTaskViewer,
  DMDriverViewer,
  DMDriverScheduler,
  DMTable,
  DMHistory,
  DMOptimizeRoute,
  DMHubInput,
  DMCommunication
} from '../../components';
import Util from '../../services/Util';

const FScreen = ({ children = null, onFullscreen }) => {
  const screen1 = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const reportChange = useCallback(
    (state, handle) => {
      if (handle === screen1) {
        if (Util.checkDev()) console.log('Screen 1 went to', state, handle);
        setIsFullScreen(perviouslyIsFullScreen => state);
      }
    },
    [screen1]
  );

  return (
    <div>
      <FullScreen handle={screen1} onChange={reportChange}>
        {/* <button
          className={`${css(styles.fullscreenButton)}`}
          onClick={() => {
            if (isFullScreen) {
              screen1.exit();
            } else {
              screen1.enter();
            }
          }}
        >
          <FontAwesomeIcon
            className={css(styles.fullscreenIcon)}
            icon={isFullScreen ? faCompressAlt : faExpandAlt}
          />
        </button> */}
        {children}
      </FullScreen>
    </div>
  );
};

export default class DeliveryManagementView extends React.PureComponent {
  render() {
    const {
      setSelectedTab,
      selectTabIndex,
      isloading,
      gettingData,
      enterFullScreen
    } = this.props;
    return (
      <div>
        <FScreen>
          <DMLoader isloading={isloading} />

          <DMHeader
            setSelectedTab={setSelectedTab}
            selectTabIndex={selectTabIndex}
          />
          <div className={`d-flex ${css(styles.adjuctSpace)}`}>
            <DMSideBar />

            {selectTabIndex === 0 && <DMMap />}
            {selectTabIndex === 1 && <DMTable gettingData={gettingData} />}
            {selectTabIndex === 2 && <DMHistory gettingData={gettingData} />}
            {/* more tabs define here */}
            {selectTabIndex === 0 && <DMTaskBar />}
          </div>
          {selectTabIndex !== 2 && <DMFilterBar />}
          {this.props.showTaskInput && !isloading && <DMTaskInput />}
          {this.props.showTaskViewer && !isloading && <DMTaskViewer />}
          {this.props.showSetting && (
            <DMSettingModal selectedTab={this.props.selectedSettingTab} />
          )}
          {this.props.showDriverInput && <DMDriverInput />}
          {this.props.showOptimizeTaskModal && <DMOptimizeRoute />}
          {this.props.showCommunicationModal && <DMCommunication />}
          {this.props.showHubInput && <DMHubInput />}
          {!_.isNull(this.props.viewDriverId) && <DMDriverViewer />}
          {!_.isNil(this.props.scheduleDriverId) && <DMDriverScheduler />}
        </FScreen>
      </div>
    );
  }
}
