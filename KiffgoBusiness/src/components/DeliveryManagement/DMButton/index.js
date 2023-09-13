// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Ripples from 'react-ripples';
import { BeatLoader } from 'react-spinners';
import { css } from 'aphrodite/no-important';
import styles from './styles';
import { Colors, AppStyles } from '../../../theme';

export const DM_BUTTON_THEME = {
  GREY_THEME: 'grey_theme',
  WHITE_THEME: 'white_theme'
};

export default class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    title: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    onClick: () => {},
    isLoading: false,
    className: '',
    theme: DM_BUTTON_THEME.WHITE_THEME
  };

  render() {
    const {
      onClick,
      disabled,
      title,
      isLoading,
      children,
      className,
      theme
    } = this.props;

    return (
      <button
        type="submit"
        disabled={disabled || isLoading}
        className={`${className} ${css([
          styles.buttonStyle,
          theme === DM_BUTTON_THEME.WHITE_THEME && styles.whiteButton,
          theme === DM_BUTTON_THEME.GREY_THEME && styles.greyButton
          // isLoading && styles.isLoading,
          // AppStyles.weight7
        ])} `}
        onClick={onClick}
      >
        {title && title}
        {children && children}
        {isLoading && (
          <div className={css(styles.loaderWrapper)}>
            <BeatLoader sizeUnit={'px'} size={8} color={Colors.white} />
          </div>
        )}
      </button>
    );
  }
}
