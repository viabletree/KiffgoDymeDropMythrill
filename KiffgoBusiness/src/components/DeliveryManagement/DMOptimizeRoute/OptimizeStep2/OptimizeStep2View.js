// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styles from './OptimizeStep2Styles';
import { AppStyles } from '../../../../theme';
import { showTaskEditDetail } from '../../../../helpers/dmHelper';

export default class OptimizeStep2View extends React.PureComponent {
  render() {
    const {
      onErrorToggle,
      onWarningToggle,
      optimizeServerErrors,
      optimizeServerWarning,
      showErrors,
      showWarning
    } = this.props;
    return (
      <>
        <div>
          <div className={'mt-2'}>
            <span className={css(styles.errorHeading)}>
              {optimizeServerErrors.length} errors
            </span>{' '}
            and{' '}
            <span className={css(styles.warningsHeading)}>
              {optimizeServerWarning.length} warnings
            </span>{' '}
            found
          </div>
        </div>

        <div className={'d-flex mt-2'}>
          <div className={css(AppStyles.flex1)}>
            <h1 className={css(styles.heading)}>Issues</h1>

            <div className={`${css(styles.innerWrapper)} mt-2`}>
              {optimizeServerErrors.length > 0 && (
                <>
                  <div
                    className={`${css(AppStyles.cursorPointer)} mb-2`}
                    onClick={onErrorToggle}
                  >
                    <FontAwesomeIcon
                      className={css(styles.removeImage)}
                      icon={showErrors ? faCaretDown : faCaretRight}
                    />{' '}
                    <span className={css(styles.toggleBtnText)}>
                      Errors ({optimizeServerErrors.length})
                    </span>
                  </div>
                  {showErrors &&
                    optimizeServerErrors.map((item, index) => {
                      return (
                        <div
                          className={`${css(styles.evItem)} d-flex mb-2`}
                          key={index}
                        >
                          <p
                            className={`${css([
                              AppStyles.heading61,
                              AppStyles.flex1
                            ])} `}
                          >
                            {index + 1}) {item.title}
                          </p>
                          <button
                            type='button'
                            className={`${css(styles.fixBtn)}`}
                            onClick={() =>{
                              this.props.onFixClick(item);
                            }
                              
                            }
                          >
                            Fix
                          </button>
                        </div>
                      );
                    })}
                </>
              )}

              {optimizeServerWarning.length > 0 && (
                <>
                  <div
                    className={`${css([
                      AppStyles.cursorPointer,
                      optimizeServerErrors.length > 0 && AppStyles.mTop20
                    ])} mb-2`}
                    onClick={onWarningToggle}
                  >
                    <FontAwesomeIcon
                      className={css(styles.removeImage)}
                      icon={showWarning ? faCaretDown : faCaretRight}
                    />{' '}
                    <span className={css(styles.toggleBtnText)}>
                      Warnings ({optimizeServerWarning.length})
                    </span>
                  </div>
                  {showWarning &&
                    optimizeServerWarning.map((item, index) => {
                      return (
                        <div
                          className={`${css(styles.evItem)} d-flex mb-2`}
                          key={index}
                        >
                          <p
                            className={`${css([
                              AppStyles.heading61,
                              AppStyles.flex1
                            ])} `}
                          >
                            {index + 1}) {item.title}
                          </p>
                          <button
                            type="button"
                            className={`${css(styles.fixBtn)}`}
                            onClick={() =>
                              this.props.onFixClick(item)
                            }
                          >
                            Fix
                          </button>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
