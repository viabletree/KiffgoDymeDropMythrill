// @flow
import _, { map } from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styles from './DMCommunicationStyles';
import { BlackModal } from '../../../components';
import { COMMUNICATION_STEPS } from './DMCommunicationController';
import { AppStyles, Images } from '../../../theme';

export default class DMCommunicationView extends React.PureComponent {
  render() {
    const {
      communicationStep,
      taskWithContacts,
      taskWithNoContacts,
      respData,
      showErrors,
      onErrorToggle
    } = this.props;
    const { succeded, failed } = respData;

    const firstStepSelected = communicationStep === COMMUNICATION_STEPS.STEP1;
    const secondStepSelected = communicationStep === COMMUNICATION_STEPS.STEP2;

    let leftButton = null;
    const disableProceedBtn = taskWithContacts < 1;

    let rightButtonTitle = 'Proceed';
    if (secondStepSelected) rightButtonTitle = 'Done';

    let rightBtnLoading = false;
    if (firstStepSelected) {
      rightBtnLoading = this.props.isLoading;
    }

    if (secondStepSelected) {
      // setting back button
      leftButton = null;
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
        leftButton={leftButton}
        hasFooterCancelButton={firstStepSelected}
      >
        <div className={`${css(styles.wrapper)}`}>
          <p className={`${css(styles.heading)}`}>Notify recipient/contacts</p>
          {firstStepSelected && (
            <p className={`${css(styles.subHeading)}`}>
              Notify arrival date, time and products details to contact
            </p>
          )}
        </div>
        <div
          className={`${css(
            firstStepSelected ? styles.parentDiv : styles.parentDivSecond
          )} text-center`}
        >
          {secondStepSelected && (
            <div>
              {succeded.length > 0 && (
                <p
                  className={`${css(styles.success)}`}
                >{`${succeded.length} contact(s) notified`}</p>
              )}

              {/* error start */}
              <div className={`${css(styles.innerWrapper)} mt-2`}>
                {Object.keys(failed).length > 0 && (
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
                        Errors ({Object.keys(failed).length})
                      </span>
                    </div>
                    {showErrors &&
                      Object.keys(failed).map((key, index) => {
                        const item = failed[key];
                        return (
                          <div
                            className={`${css(styles.evItem)} d-flex mb-2`}
                            key={index}
                          >
                            <p className={`${css(styles.failed)} `}>
                              {index + 1}) {key.replace(/_/g, ' ')}{' '}
                              {item.map(item => {
                                return <spam>{`${item}, `}</spam>;
                              })}
                            </p>
                          </div>
                        );
                      })}
                  </>
                )}
              </div>
              {/* error end */}
            </div>
          )}
          {firstStepSelected && (
            <div>
              <img src={Images.optimusIcon} className={`mb-2 mt-2`} />
              <p className={`${css(styles.text)} mb-2 mt-2`}>
                Hello I am Optimus. I am ready to SMS/Email
              </p>
              {taskWithContacts > 0 && (
                <p className={`${css(styles.text)} mt-2 mb-2`}>
                  I will communicate arrival date, time and order details to{' '}
                  <span className={css(AppStyles.fontBold)}>
                    {taskWithContacts} task(s)
                  </span>
                </p>
              )}
              {taskWithNoContacts > 0 && (
                <p className={`${css(styles.text)} mt-2 mb-2`}>
                  <span className={css(AppStyles.fontBold)}>
                    {taskWithNoContacts} task(s)
                  </span>
                  task(s) with no contact won’t receive any update
                </p>
              )}
            </div>
          )}
        </div>
      </BlackModal>
    );
  }
}
