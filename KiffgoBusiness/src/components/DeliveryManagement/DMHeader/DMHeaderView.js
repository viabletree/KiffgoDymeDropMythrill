// @flow
import React from 'react';
import { css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { FlatfileButton } from '@flatfile/react';
import styles from './DMHeaderStyles';
import { AppStyles, Images } from '../../../theme';
import { ROUTES, DM_MODULES, FLAT_FILE_KEY } from '../../../constants';
import DMFileUploader from '../DMFileUploader';
import DMMigration from '../DMMigration';
import Util from '../../../services/Util';

export default class DMHeaderView extends React.PureComponent {
  render() {
    const tabsList = [
      { title: 'Map', slug: 'map', id: 1 },
      { title: 'Table', slug: 'table', id: 2 },
      { title: 'History', slug: 'history', id: 3 }
    ];
    const { setSelectedTab, selectTabIndex, handleUserLogout } = this.props;
    return (
      <header className={`d-flex align-items-center ${css(styles.DMHeader)}`}>
        <div className={`${css([styles.logoWrapper, AppStyles.flex1])}`}>
          <NavLink to={'/'}>
            <img
              className={`${css([styles.logoStyle])}`}
              src={Images.dmKiffgoLogo}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className={`${css([styles.tabsNavs])}`}>
          <ul className="d-flex">
            {tabsList.map((item, index) => {
              return (
                <li
                  className={`${css([
                    styles.linkTag,
                    selectTabIndex === index && styles.activeTabStyle
                  ])}`}
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                  key={item.id}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`justify-content-end d-flex ${css([
            styles.tools,
            AppStyles.flex1
          ])}`}
        >
          <ul className={`d-flex ${css(styles.toolsInner)}`}>
            <li className={`${css(styles.toolWrapper)}`}>
              <NavLink
                to={`${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.TASK.NAME}/${DM_MODULES.TASK.ACTIONS.CREATE}`}
                className={`${css(styles.toolWrapper)}`}
              >
                <img
                  src={Images.createTaskManual}
                  className={css(styles.addTaskIcon)}
                />
              </NavLink>
            </li>
            <li className={`${css(styles.toolWrapper)}`}>
              <DMFileUploader />
            </li>
            <li className={`${css(styles.toolWrapper)}`}>
              <DMMigration />
            </li>
            {/* <li
              className={`${css(styles.toolWrapper)}`}
              onClick={this.props.onQuestionMarkClick}
            >
              <img src={Images.questionMark} className={css(styles.toolImg)} />
            </li> */}
            <li className={`${css(styles.toolWrapper)}`}>
              <NavLink
                to={`${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION}`}
                className={`${css(styles.toolWrapper)}`}
              >
                <img
                  src={Images.settingsSharp}
                  className={css(styles.toolImg)}
                />
              </NavLink>
            </li>
            <li
              className={`${css(styles.toolWrapper)}`}
              onClick={handleUserLogout}
            >
              {/* <h2 className={`${css(styles.profileName)}`}>AA</h2> */}
              <img src={Images.logout} className={css(styles.toolImg)} />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
