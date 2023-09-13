// @flow
import React from 'react';

import WebWhyKiffgoView from './WebWhyKiffgoView';

export default class WebWhyKiffgoController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  scrollToDemo = e => {
    e.preventDefault();
    const demoForm = document.getElementById('demoFrom');
    if (demoForm) {
      window.scrollTo({
        top: demoForm.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  render() {
    return (
      <WebWhyKiffgoView {...this.props} scrollToDemo={this.scrollToDemo} />
    );
  }
}
