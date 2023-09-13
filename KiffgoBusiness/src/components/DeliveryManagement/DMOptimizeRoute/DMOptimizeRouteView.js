// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMOptimizeRouteStyles';
import { BlackModal } from '../../../components';
import OptimizeStep1 from './OptimizeStep1';
import OptimizeStep2 from './OptimizeStep2';
import OptimizeStep3 from './OptimizeStep3';
import OptimizeStep4 from './OptimizeStep4';
import { OPTIMIZATION_STEPS } from './DMOptimizeRouteController';
import { MODAL_BOTTOMS_THEME } from '../../BlackModal';

export default class DMOptimizeRouteView extends React.PureComponent {
  render() {
    const {
      optimizationStep,
      optimizeServerErrors,
      optimizationId,
      optimizationInProgress
    } = this.props;
    const firstStepSelected = optimizationStep === OPTIMIZATION_STEPS.STEP1;
    const secondStepSelected = optimizationStep === OPTIMIZATION_STEPS.STEP2;
    const thirdStepSelected = optimizationStep === OPTIMIZATION_STEPS.STEP3;
    const fourthStepSelected = optimizationStep === OPTIMIZATION_STEPS.STEP4;

    let leftButton2 = null;
    let leftButton = null;
    let disableProceedBtn =
      secondStepSelected && optimizeServerErrors.length > 0; // disable btn if we've errors balance to solve

    let rightButtonTitle = 'Proceed';
    if (thirdStepSelected) rightButtonTitle = 'Confirm';
    if (fourthStepSelected) rightButtonTitle = 'Done';

    let rightBtnLoading = false;
    if (firstStepSelected || thirdStepSelected) {
      rightBtnLoading = this.props.isLoading;
    } else if (fourthStepSelected && optimizationInProgress) {
      // is optimizing on step 4
      rightBtnLoading = true;
    }

    if (secondStepSelected) {
      // setting retry button
      leftButton2 = {
        title: 'Retry',
        onClick: this.props.onRetryClick,
        isLoading: this.props.isLoading,
        theme: MODAL_BOTTOMS_THEME.GREY_THEME
      };
    }

    if (secondStepSelected || thirdStepSelected) {
      // setting back button
      leftButton = {
        title: 'Back',
        onClick: this.props.onBackClick,
        theme: MODAL_BOTTOMS_THEME.GREY_THEME
      };
    }

    return (
      <BlackModal
        open
        onClose={this.props.onModalCloseClick}
        rightButton={{
          title: rightButtonTitle,
          onClick: this.props.onSubmitClick,
          isLoading: rightBtnLoading,
          disabled: disableProceedBtn
        }}
        leftButton2={leftButton2}
        leftButton={leftButton}
        hasFooterCancelButton={firstStepSelected}
      >
        <div className={`${css(styles.wrapper)}`}>
          <p className={`${css(styles.heading)}`}>
            Optimize Tasks{' '}
            {` ${!_.isNull(optimizationId) ? `(${optimizationId})` : ''}`}
          </p>
          {firstStepSelected && (
            <p className={`${css(styles.subHeading)}`}>
              Select drivers and configure parameters.
            </p>
          )}
          {thirdStepSelected && (
            <p className={`${css(styles.subHeading)}`}>Review and confirm</p>
          )}

          {fourthStepSelected && optimizationInProgress && (
            <p className={`${css(styles.subHeading)}`}>
              Optimization in progress...
            </p>
          )}
        </div>
        <div className={`${css(styles.wrapper)}`}>
          {firstStepSelected && <OptimizeStep1 {...this.props} />}
          {secondStepSelected && <OptimizeStep2 {...this.props} />}
          {thirdStepSelected && <OptimizeStep3 {...this.props} />}
          {fourthStepSelected && <OptimizeStep4 {...this.props} />}
        </div>
      </BlackModal>
    );
  }
}
