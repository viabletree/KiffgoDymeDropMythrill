// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './DMTextFieldStyles';

export default class DMTextFieldView extends React.PureComponent {
  render() {
    const hasError = !_.isEmpty(this.props.error);

    return (
      <div
        className={`${this.props.isDisabled && 'not-allowed-wrapper'} ${css([
          this.props.icon && styles.withIcon,
          styles.container,
          this.props.isDisabled && styles.disabledContainer
        ])}`}
      >
        {false && (
          <label className={css(styles.labelStyle)}>{this.props.label}</label>
        )}
        {this.props.icon && (
          <FontAwesomeIcon
            className={`mr-3 ${css(styles.icon)} ${this.props.iconClassName}`}
            icon={this.props.icon}
          />
        )}
        {!this.props.isTextArea && !this.props.isPhoneNumber && (
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            min={this.props.min || '0'}
            maxLength={this.props.maxLength || 200}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            onKeyDown={this.props.onKeyDown}
            className={css([
              styles.inputStyle,
              this.props.icon && styles.inputWithIcon,
              this.props.isPhoneNumber && styles.inputWithFlagIcon,
              hasError && styles.errorPadding,
              this.props.styles && this.props.styles
            ])}
            disabled={this.props.isDisabled || this.props.isReadOnly}
            autoComplete="off"
            placeholder={
              this.props.placeHolder ? this.props.placeHolder : this.props.label
            }
          />
        )}
        {this.props.isPhoneNumber && (
          <PhoneInput
            containerClass={css(styles.phoneInputContainer)}
            inputClass={css(styles.phoneInput)}
            dropdownClass={css(styles.phoneDropDown)}
            buttonClass={css(styles.phoneDropDownButton)}
            country={'gb'}
            onlyCountries={[
              'us',
              'fr',
              'ca',
              'au',
              'gb',
              'pk',
              'in',
              'om',
              'ae'
            ]}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            isValid={(value, country) => {
              if (value.length === country.countryCode.length + 4) {
                const withoutCode = value.substr(country.countryCode.length);
                const withoutLeadingZero = value.substr(
                  country.countryCode.length + 1
                );
                const newValue = country.countryCode + withoutLeadingZero;
                if (_.startsWith(withoutCode, '0')) {
                  this.props.onChange(newValue);
                }
              }
            }}
            name={this.props.name}
            value={this.props.value}
            placeholder="+44 7757 858580"
            disabled={this.props.isDisabled}
          />
        )}
        {this.props.isTextArea && !this.props.isPhoneNumber && (
          <textarea
            value={this.props.value}
            onChange={this.props.onChange}
            name={this.props.name}
            rows="4"
            cols="30"
            className={css([
              styles.inputStyle,
              styles.textAreaStyle,
              hasError && styles.errorPadding,
              this.props.styles && this.props.styles
            ])}
            disabled={this.props.isDisabled}
            placeholder={this.props.placeHolder}
            maxLength={this.props.maxLength || 200}
            placeholder={
              this.props.placeHolder ? this.props.placeHolder : this.props.label
            }
          />
        )}
        {this.props.error && (
          <div
            className={css(styles.errorIconWrapper)}
            data-tip={this.props.error}
            data-for="errorTip"
          >
            <ReactTooltip
              place="top"
              type="light"
              effect="solid"
              id="errorTip"
            />

            <FontAwesomeIcon
              className={css(styles.errorIcon)}
              icon={faExclamationTriangle}
            />
          </div>
        )}
      </div>
    );
  }
}
