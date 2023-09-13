// @flow
import React from 'react';

import SecondaryWebFooterView from './SecondaryWebFooterView';
import { scrollToContactForm } from '../../../helpers/scrollToContactForm';
import { scrollToTeamSec } from '../../../helpers/scrollToTeamSection';

export default class SecondaryWebFooterController extends React.Component {
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
      <SecondaryWebFooterView
        {...this.props}
        onFooterContactClick={this.onFooterContactClick}
        onFooterTeamSecClick={this.onFooterTeamSecClick}
      />
    );
  }
}
