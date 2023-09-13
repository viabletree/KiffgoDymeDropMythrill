// @flow
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrinciplesView from './PrinciplesView';

export default class PrinciplesController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    AOS.init({
      duration: 1000,
      delay: 1000
    });
  }
  render() {
    return <PrinciplesView {...this.props} />;
  }
}
