// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Ripples from 'react-ripples';
import { BeatLoader } from 'react-spinners';
import { css } from 'aphrodite/no-important';
import styles from './styles';
import { Colors, AppStyles } from '../../theme';

export default class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    title: PropTypes.string.isRequired,
    ripple: PropTypes.bool,
    isLoading: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    ripple: true,
    onClick: () => {},
    isLoading: false,
    className: ''
  };

  render() {
    const {
      onClick,
      disabled,
      title,
      ripple,
      isLoading,
      children,
      className
    } = this.props;
    if (ripple) {
      return (
        <Ripples>
          <button
            type="submit"
            disabled={disabled || isLoading}
            className={`${className} ${css([
              styles.buttonStyle,
              !_.isEmpty(title) && styles.title,
              isLoading && styles.isLoading,
              AppStyles.weight7
            ])} `}
            onClick={onClick}
          >
            {title && title}
            {children && children}
          </button>
          {isLoading && (
            <div className={css([styles.loadingOverlay])}>
              <BeatLoader sizeUnit="px" size={8} color={Colors.white} />
            </div>
          )}
        </Ripples>
      );
    }

    return (
      <div className={css([styles.positionRelative])}>
        <button
          type="submit"
          disabled={disabled || isLoading}
          className={`${className} ${css([
            styles.buttonStyle,
            !_.isEmpty(title) && styles.title,
            isLoading && styles.isLoading,
            AppStyles.weight7
          ])} `}
          onClick={onClick}
        >
          {title && title}
          {children && children}
        </button>
        {isLoading && (
          <div className={css([styles.loadingOverlayTwo])}>
            <BeatLoader sizeUnit="px" size={8} color={Colors.white} />
          </div>
        )}
      </div>
    );
  }
}
