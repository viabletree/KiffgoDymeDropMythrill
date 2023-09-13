// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMSideBarStyles';
import { Images } from '../../../theme';

export default class DMSideBarView extends React.PureComponent {
  render() {
    return (
      <div className={`${css(styles.DMSideBar)}`}>
        <div
          className={`h-100 d-flex align-items-center flex-column justify-content-between ${css()}`}
        >
          {/* <div className={`${css(styles.sideBarOption)}`}>
            <img src={Images.notifications} className={css(styles.optionImg)} />
          </div> */}
          <div className={`${css([styles.sideBarOption, styles.chatOption])}`}>
            {/* <img src={Images.message} className={css(styles.optionImg)} /> */}
            {/* <span className={css(styles.chatCounter)}>2</span> */}
          </div>
        </div>
      </div>
    );
  }
}
