// @flow
import _ from 'lodash';
import React from 'react';
import Modal from 'react-responsive-modal';
import { css } from 'aphrodite';
import { BeatLoader } from 'react-spinners';
import { Colors, AppStyles } from '../../theme';
import styles from './BlackModalStyles';

export const MODAL_WIDTH_TYPES = {
  oneX: '375px'
};

export const MODAL_BOTTOMS_THEME = {
  GREY_THEME: 'grey_theme'
};

export default function BlackModalView({
  open = false,
  onClose = () => {},
  showCloseIcon = false,
  focusTrapped = false,
  width = MODAL_WIDTH_TYPES.oneX,
  children = null,
  hasFooterCancelButton = true,
  rightButton = null,
  leftButton = null,
  leftButton2 = null,
  leftButton3 = null,
  modalStyle = {},
  overRideOverFlow = false
}) {
  const hasFooter =
    hasFooterCancelButton || !_.isNull(rightButton) || !_.isNull(leftButton);

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      closeOnEsc
      showCloseIcon={showCloseIcon}
      focusTrapped={focusTrapped}
      closeOnOverlayClick={false}
      styles={{
        modal: {
          paddingTop: '20px',
          paddingRight: '0px',
          paddingLeft: '0px',
          paddingBottom: '0px',
          width: width,
          maxWidth: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          background: Colors.mineShafta,
          colors: Colors.white,
          maxHeight: 'calc(100vh - 50px)',
          ...modalStyle
        },
        overlay: {
          background: Colors.tintedBlack
        }
      }}
    >
      <div
        className={`grey_scrollbar ${css([
          !overRideOverFlow
            ? styles.contentContainer
            : styles.contentContainerOverRideOverFlow,
          hasFooter && styles.childViewWithFooter
        ])}`}
      >
        {children}
        {hasFooter && <div className={`${css(styles.footerGapping)}`} />}
      </div>
      {hasFooter && (
        <div
          className={`${css(
            !overRideOverFlow
              ? styles.footeWrapper
              : styles.footeWrapperOverRideOverFlow
          )}`}
        >
          <div>
            {hasFooterCancelButton && (
              <button
                className={`${css([styles.greyButton, styles.footerButton])}`}
                onClick={onClose}
              >
                Cancel
              </button>
            )}
            {!_.isNull(leftButton) && (
              <button
                className={`${css([
                  styles.footerButton,
                  styles.whiteButton,
                  leftButton.theme === MODAL_BOTTOMS_THEME.GREY_THEME &&
                    styles.greyButton
                ])}`}
                onClick={leftButton.onClick}
                disabled={leftButton.disabled}
              >
                {leftButton.title}
                {leftButton.isLoading && (
                  <div className={css(styles.loaderWrapper)}>
                    <BeatLoader sizeUnit={'px'} size={8} color={Colors.white} />
                  </div>
                )}
              </button>
            )}

            {!_.isNull(leftButton2) && (
              <button
                disabled={leftButton2.disabled}
                className={`${css([
                  styles.footerButton,
                  styles.whiteButton,
                  AppStyles.mLeft10,
                  leftButton2.theme === MODAL_BOTTOMS_THEME.GREY_THEME &&
                    styles.greyButton
                ])}`}
                onClick={leftButton2.onClick}
              >
                {leftButton2.title}
                {leftButton2.isLoading && (
                  <div className={css(styles.loaderWrapper)}>
                    <BeatLoader sizeUnit={'px'} size={8} color={Colors.white} />
                  </div>
                )}
              </button>
            )}
            {!_.isNull(leftButton3) && (
              <button
                disabled={leftButton3.disabled}
                className={`${css([
                  styles.footerButton,
                  styles.whiteButton,
                  AppStyles.mLeft10,
                  leftButton3.theme === MODAL_BOTTOMS_THEME.GREY_THEME &&
                    styles.greyButton
                ])}`}
                onClick={leftButton3.onClick}
              >
                {leftButton3.title}
                {leftButton3.isLoading && (
                  <div className={css(styles.loaderWrapper)}>
                    <BeatLoader sizeUnit={'px'} size={8} color={Colors.white} />
                  </div>
                )}
              </button>
            )}
          </div>

          {!_.isNull(rightButton) && (
            <button
              className={`${css([styles.footerButton, styles.whiteButton])}`}
              onClick={rightButton.onClick}
              disabled={rightButton.disabled}
            >
              {rightButton.title}
              {rightButton.isLoading && (
                <div className={css(styles.loaderWrapper)}>
                  <BeatLoader sizeUnit={'px'} size={8} color={Colors.white} />
                </div>
              )}
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}
