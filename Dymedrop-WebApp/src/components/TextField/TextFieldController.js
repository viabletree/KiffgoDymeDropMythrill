// @flow
import React from 'react';
import PropTypes from 'prop-types';

import TextFieldView from './TextFieldView';

export default class TextFieldController extends React.Component {
  static propTypes = {
    isTextArea: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    styles: PropTypes.object
  };

  static defaultProps = {
    isTextArea: false,
    label: '',
    value: '',
    onChange: () => {},
    error: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      itemValue: 0
    };
  }

  handleOnChange = value => {
    this.setState({
      itemValue: value
    });
  };

  render() {
    return (
      <TextFieldView
        {...this.props}
        itemValue={this.state.itemValue}
        handleOnChange={this.handleOnChange}
      />
    );
  }
}
