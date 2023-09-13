// @flow
import React from 'react';
import WebStatisticsSecView from './WebStatisticsSecView';

export default class WebStatisticsSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  getInTouch = () => {
    const contactForm = document.getElementById('contactForm');
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: 'smooth'
    });
  };

  render() {
    return <WebStatisticsSecView {...this.props} />;
  }
}
