// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './OptimizeStep3Styles';
import { AppStyles, Images } from '../../../../theme';

export default class OptimizeStep3View extends React.PureComponent {
  render() {
    const { selectedTasks, optimizeFormData } = this.props;
    return (
      <>
        <div className={'text-center'}>
          <img src={Images.optimusIcon} />
          <p className={`${css(styles.text)} mb-2`}>
            Hello I am Optimus. I am ready to dispatch
          </p>
          <p className={`${css(styles.text)} mt-4 mb-2`}>
            You have{' '}
            <span className={css(AppStyles.fontBold)}>
              {selectedTasks.length} task(s)
            </span>{' '}
            to optimize across{' '}
            <span className={css(AppStyles.fontBold)}>
              {optimizeFormData.drivers.length} driver(s)
            </span>
          </p>
        </div>
      </>
    );
  }
}
