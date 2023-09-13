// @flow
import React from 'react';
import ReactGA from 'react-ga';

import WebProductDetailSecView from './WebProductDetailSecView';

export default class WebProductDetailSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  scrollToDemo = (e, trial) => {
    e.preventDefault();
    const demoForm = document.getElementById('demoFrom');
    if (demoForm) {
      window.scrollTo({
        top: demoForm.offsetTop,
        behavior: 'smooth'
      });
    }
    ReactGA.event({
      category: trial ? 'freetrial' : 'bookmeeting',
      action: 'click',
      label: 'success'
    });
  };
  render() {
    return (
      <WebProductDetailSecView
        {...this.props}
        scrollToDemo={this.scrollToDemo}
      />
    );
  }
}
