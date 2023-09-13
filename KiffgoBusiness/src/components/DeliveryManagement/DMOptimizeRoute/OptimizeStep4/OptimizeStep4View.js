// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './OptimizeStep4Styles';
import { AppStyles } from '../../../../theme';
import { DM_TASK_TYPE } from '../../../../constants';

export default class OptimizeStep4View extends React.PureComponent {
  render() {
    const {
      selectedTasks,
      optimizationSuccessSummary,
      optimizationInProgress
    } = this.props;
    const optimizedSuccessfully = optimizationSuccessSummary.length > 0;
    return (
      <>
        <div>
          <div className={'mt-2 text-center'}>
            {optimizationInProgress && (
              <p className={`${css(styles.text)} mb-2`}>
                Optimizing. Do not reload
              </p>
            )}

            {optimizedSuccessfully && (
              <div>
                <FontAwesomeIcon
                  className={css(styles.doneImage)}
                  icon={faCheckCircle}
                />
                <p
                  className={`${css([
                    styles.text,
                    AppStyles.fontBold
                  ])} mt-2 mb-2`}
                >
                  Optimization complete
                </p>
              </div>
            )}

            {optimizedSuccessfully && (
              <div className={'mt-4 text-left'}>
                <p>Summary</p>

                {optimizationSuccessSummary.map((item, index) => {
                  const isUnassignedTask =
                    item.type === DM_TASK_TYPE.UNASSIGNED.slug;
                  return (
                    <div className={'d-flex text-left mt-2'} key={index}>
                      <div className={`${css(AppStyles.flex1)}`}>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className={`${css([
                            styles.summaryItemCircle,
                            isUnassignedTask && styles.greyItemCircle
                          ])}`}
                        />
                      </div>
                      <div
                        className={`${css([
                          AppStyles.flex1,
                          AppStyles.heading61
                        ])}`}
                      >
                        {isUnassignedTask ? 'Unassigned' : item.driverName}
                      </div>
                      <div
                        className={`${css([
                          AppStyles.flex1,
                          AppStyles.heading61
                        ])}`}
                      >
                        {item.tasksCount} task(s)
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
