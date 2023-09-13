// @flow
import React from 'react';
import _ from 'lodash';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import {
  IS_REQUIRED_ERROR,
  ROUTES,
  INVALID_NAME_ERROR,
  INVALID_PHONE_ERROR,
  INVALID_EMAIL_ERROR
} from '../../../constants';
import WebHeroSecView from './WebHeroSecView';
import Util from '../../../services/Util';
import { requestDemoRequest } from '../../../actions/GeneralActions';

window.addEventListener('hashchange', e => {
  e.preventDefault();
  const { hash } = window.location;

  if (hash === '#contact') {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      window.scrollTo({
        top: contactForm.offsetTop,
        behavior: 'smooth'
      });
    }
  }
});
window.addEventListener('load', e => {
  e.preventDefault();
  const { hash } = window.location;
  if (hash === '#contact') {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      window.scrollTo({
        top: contactForm.offsetTop,
        behavior: 'smooth'
      });
    }
  }
});

class WebHeroSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: '',
    nameError: '',
    phoneNumber: '',
    phoneNumberError: '',
    businessEmail: '',
    businessEmailError: '',
    successStatus: false,
    successMsg: '',
    isLoading: false,
    volume: '',
    volumeError: '',
    trialLoading: false
  };

  componentDidMount() {
    // this.getInTouch();
  }

  getInTouch = () => {
    const contactForm = document.getElementById('contactForm');

    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: 'smooth'
    });
  };

  freeTrialPress = () => {
    window.location.href = `${window.location.origin}${ROUTES.SIGN_UP}`;
  };

  change = e => {
    let temp = {};
    temp[[e.target.name] + 'Error'] = '';

    this.setState({
      [e.target.name]: e.target.value,

      ...temp
    });
  };

  onSubmit = (e, trial = false) => {
    e.preventDefault(); // needed for IE
    if (!this.validateForm()) {
      // e.preventDefault();
      // TODO make request to server

      // Google analytics
      ReactGA.event({
        category: 'demo',
        action: 'submit',
        label: 'success'
      });

      const { name, phoneNumber, businessEmail, volume } = this.state;

      const payload = {
        name,
        number: phoneNumber,
        email: businessEmail.trim(),
        volume
      };
      this.setState(
        trial
          ? { trialLoading: true }
          : {
              isLoading: true
            }
      );
      this.props.requestDemoRequest(payload, success => {
        this.setState({
          isLoading: false,
          trialLoading: false
        });
        if (success) {
          if (trial) {
            this.freeTrialPress();
          }
          this.setState({
            successStatus: true,
            successMsg:
              "We've received your query and we will contact you soon",
            name: '',
            phoneNumber: '',
            businessEmail: '',
            volume: ''
          });
          setTimeout(() => {
            this.flush_alert();
          }, 5000);
        }
      });
    }
  };

  flush_alert = () => {
    this.setState((prevState, props) => ({
      successStatus: !prevState
    }));
  };

  validateForm = () => {
    let isError = false;
    const errors = {
      nameError: '',
      phoneNumberError: '',
      businessEmailError: '',
      volumeError: ''
    };

    if (_.isEmpty(this.state.name)) {
      isError = true;
      errors.nameError = IS_REQUIRED_ERROR;
    }
    if (!Util.isValidName(this.state.name)) {
      isError = true;
      errors.nameError = INVALID_NAME_ERROR;
    }
    if (!Util.isValidUKMobileNumber(this.state.phoneNumber)) {
      isError = true;
      errors.phoneNumberError = INVALID_PHONE_ERROR;
    }
    if (!Util.isEmailValid(this.state.businessEmail)) {
      isError = true;
      errors.businessEmailError = INVALID_EMAIL_ERROR;
    }
    if (_.isEmpty(this.state.volume)) {
      isError = true;
      errors.volumeError = IS_REQUIRED_ERROR;
    }
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  render() {
    const {
      name,
      nameError,
      phoneNumber,
      phoneNumberError,
      businessEmail,
      businessEmailError,
      successStatus,
      successMsg,
      isLoading,
      volume,
      volumeError,
      trialLoading
    } = this.state;
    return (
      <WebHeroSecView
        {...this.props}
        getInTouch={this.getInTouch}
        freeTrialPress={this.freeTrialPress}
        onInputChange={this.change}
        onSubmit={this.onSubmit}
        flush_alert={this.flush_alert}
        name={name}
        nameError={nameError}
        phoneNumber={phoneNumber}
        phoneNumberError={phoneNumberError}
        businessEmail={businessEmail}
        businessEmailError={businessEmailError}
        successStatus={successStatus}
        successMsg={successMsg}
        isLoading={isLoading}
        volume={volume}
        volumeError={volumeError}
        trialLoading={trialLoading}
      />
    );
  }
}
const mapStateToProps = () => ({});

const actions = { requestDemoRequest };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(WebHeroSecController));
