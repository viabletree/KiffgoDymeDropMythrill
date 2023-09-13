// @flow
import React from 'react';
import { css } from 'aphrodite';
import _ from 'lodash';
import styles from './EmptyStateStyles';
import { Images, AppStyles } from '../../../theme';

export default function EmptyStateView(props) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${css([
        styles.emptyStateHeight,
        props.fullScreen && styles.emptyStateViewHeight,
        props.bgGreen && styles.bgGreen
      ])}`}
    >
      <div className="text-center">
        <img src={Images.empty} alt="" />
        <h2
          className={`mt-3 mb-2 ${css([
            AppStyles.headings31,
            AppStyles.weight7,
            styles.upperCase
          ])}`}
        >
          {props.title}
        </h2>
        <p
          className={`px-5 ${css([
            AppStyles.lineHeight1_3,
            AppStyles.weight6
          ])}`}
        >
          {props.description}
        </p>
        {!_.isEmpty(props.buttonTitle) && (
          <a
            href={props.redirectTo}
            className={`${css([
              styles.dBookingBtn,
              AppStyles.buttonGreen2,
              AppStyles.weight6
            ])}`}
          >
            {props.buttonTitle}
          </a>
        )}
      </div>
    </div>
  );
}
