// @flow
import React from 'react';

import WebFooterView from './WebFooterView';
import { scrollToContactForm } from '../../../helpers/scrollToContactForm';
import { scrollToTeamSec } from '../../../helpers/scrollToTeamSection';

export default class WebFooterController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    if (window.location.href.indexOf('#contactForm') > -1) {
      setTimeout(() => {
        this.onFooterContactClick();
      }, 3000);
    }
    if (window.location.href.indexOf('#team') > -1) {
      setTimeout(() => {
        this.onFooterTeamSecClick();
      }, 3000);
    }
  }

  onFooterContactClick = () => {
    scrollToContactForm();
  };

  onFooterTeamSecClick = () => {
    scrollToTeamSec();
  };

  render() {
    return (
      <WebFooterView
        {...this.props}
        onFooterContactClick={this.onFooterContactClick}
        onFooterTeamSecClick={this.onFooterTeamSecClick}
      />
    );
  }
}
