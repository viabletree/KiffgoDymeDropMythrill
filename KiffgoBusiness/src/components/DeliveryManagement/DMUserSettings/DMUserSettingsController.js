// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DMUserSettingsView from './DMUserSettingsView';


export default class DMUserSettingsController extends React.Component {
  static propTypes = {
   
  };

  static defaultProps = {
   
  };

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }


  render() {
    return (
      <DMUserSettingsView
        {...this.props}
       foo={this.state.foo}
      />
    );
  }
}
