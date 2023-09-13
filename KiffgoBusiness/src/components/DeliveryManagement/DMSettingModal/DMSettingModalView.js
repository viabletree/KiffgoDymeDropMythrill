// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMSettingModalStyles';
import Modal from 'react-responsive-modal';
import { DM_MODULES, ROUTES, DM_SETTING_TAB } from '../../../constants';
import { NavLink } from 'react-router-dom';
import DmDriverSetting from './DmDriverSetting';
import DmUserSetting from './DmUserSetting';
import DmOrganizationSetting from './DmOrganizationSetting';
import DmHubSetting from './DmHubSetting';
import DmApiWebhooksSetting from './DmApiWebhooksSetting';
import DmDispatcherSetting from './DMDispatcherSetting';
import DmDriverAppSetting from './DmDriverAppSetting';
import DmMapSetting from './DmMapSetting';
import DmCommunicationsSetting from './DmCommunicationsSetting';
import { Colors } from '../../../theme';

export default class DMSettingModalView extends React.PureComponent {
  render() {
    const { closeModal } = this.props;
    return (
      <Modal
        open
        center
        closeOnEsc
        showCloseIcon={false}
        focusTrapped
        closeOnOverlayClick={false}
        onClose={closeModal}
        modalId="settings_modal"
        styles={{
          modal: {
            paddingTop: '0px',
            paddingRight: '0px',
            paddingLeft: '0px',
            paddingBottom: '0px',
            width: '100%',
            maxWidth: '921px',
            borderRadius: '4px',
            overflow: 'hidden',
            background: Colors.mineShafta,
            colors: Colors.white,
            height: '100%',
            maxHeight: '644px'
          },
          overlay: {
            background: Colors.tintedBlack
          }
        }}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div className={`${css([styles.contentContainer])}`}>
            <div className={`${css([styles.tabsContainer])}`}>
              <ul className={`${css(styles.tabUl)}`}>
                {DM_SETTING_TAB.map((item, index) => {
                  return (
                    <li
                      className={`${css(
                        item.route === this.props.selectedTab
                          ? [styles.tab, styles.tabSelected]
                          : styles.tab
                      )}`}
                      key={item.id}
                    >
                      <NavLink
                        to={`${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${item.route}`}
                        className={` ${css(
                          item.route === this.props.selectedTab
                            ? styles.liNav
                            : [styles.liNav, styles.liNavSelected]
                        )}`}
                      >
                        <img
                          src={
                            item.route === this.props.selectedTab
                              ? item.iconSelected
                              : item.icon
                          }
                          alt={'qwe'}
                          className={`mr-2 ${css([styles.imgStyle])}`}
                          style={{
                            maxWidth: '18px',
                            maxHeight: '18px'
                          }}
                        />
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={`${css(styles.tabBody)}`} id="tabBody">
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION && (
                <DmOrganizationSetting />
              )}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS && <DmUserSetting />}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.DISPATCHER && (
                <DmDispatcherSetting />
              )}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.DRIVER && <DmDriverSetting />}
              {this.props.selectedTab === DM_MODULES.SETTINGS.ACTIONS.HUB && (
                <DmHubSetting />
              )}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK && (
                <DmApiWebhooksSetting />
              )}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS && <DmMapSetting />}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS && (
                <DmCommunicationsSetting />
              )}
              {this.props.selectedTab ===
                DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP && (
                <DmDriverAppSetting />
              )}
            </div>
          </div>
          <div className={`${css(styles.footer)}`}>
            <NavLink
              to={`${ROUTES.DELIVERY_MANAGEMENT}`}
              className={`${css(styles.footerButton)}`}
            >
              Done
            </NavLink>
          </div>
        </div>
      </Modal>
    );
  }
}
