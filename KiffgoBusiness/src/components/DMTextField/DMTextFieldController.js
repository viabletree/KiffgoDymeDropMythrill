// @flow
import React from 'react';
import PropTypes from 'prop-types';

import DMTextFieldView from './DMTextFieldView';

export default class DMTextFieldController extends React.Component {
  static propTypes = {
    isTextArea: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    error: PropTypes.string,
    icon: PropTypes.object,
    isPhoneNumber: PropTypes.bool,
    isDisabled: PropTypes.bool,
    placeHolder: PropTypes.string,
    styles: PropTypes.object,
    iconClassName: PropTypes.string,
    isReadOnly: PropTypes.bool,
    name: PropTypes.string
  };

  static defaultProps = {
    isTextArea: false,
    label: '',
    value: '',
    onChange: () => {},
    error: '',
    icon: null,
    isPhoneNumber: false,
    isDisabled: false,
    placeHolder: '',
    iconClassName: '',
    isReadOnly: false,
    name: ''
  };

  render() {
    return <DMTextFieldView {...this.props} />;
  }
}
