// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DashboardHeaderStyles';
import { AppStyles, Images } from '../../../theme';
import Util from '../../../services/Util';

export default function DashboardHeaderView(props) {
  return (
    <div className={`${css(styles.searchHeader)}`}>
      <div className={`d-flex align-items-center ${css(styles.SearchWrapper)}`}>
        {props.hasSearch && (
          <div className={`${css(styles.searchArea)}`}>
            <input
              className={`${css([styles.searchInput])}`}
              type="text"
              placeholder={`Search ${Util.capitalizeFirstLetter(
                props.searchPlaceholder
              )} Bookings`}
              onChange={props.handleSearchChange}
              value={props.searchKeyword}
            />
            {props.showCancelBtn && (
              <button
                type="button"
                className={`${css(styles.cancelBtn)}`}
                onClick={props.handleCancelBtn}
              >
                <img className="w-100" src={Images.closeBtn} alt="" />
              </button>
            )}
            <button
              type="button"
              className={`${css([AppStyles.buttonGreen, AppStyles.weight6])}`}
              onClick={props.onSearchClick}
            >
              Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
