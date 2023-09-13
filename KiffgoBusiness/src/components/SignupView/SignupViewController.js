// @flow
import _ from 'lodash';
import React from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import { userSignupRequest, userSignupSuccess } from '../../actions/UserAction';
import SignupView from './SignupView';
import { Images } from '../../theme';
import Util from '../../services/Util';
import moment from 'moment-timezone';
import {
  INVALID_EMAIL_ERROR,
  INVALID_PASSWORD,
  CONFRIM_PASSWORD_MISMATCH_ERROR,
  IS_REQUIRED_ERROR,
  INVALID_NAME_ERROR,
  INVALID_PHONE_ERROR,
  MESSAGE_TYPES,
  SIGNUP_SUCCESS_MSG,
  SAGA_ALERT_TIMEOUT,
  ROUTES,
  INVALID_WEBSITE_ERROR
} from '../../constants';

const FORM_DATA = [
  {
    id: 0,
    type: 'text',
    title: 'First Name',
    name: 'firstName',
    icon: Images.user,
    maxLength: 50
  },
  {
    id: 1,
    type: 'text',
    title: 'Last Name',
    name: 'lastName',
    icon: Images.user,
    maxLength: 50
  },
  {
    id: 2,
    type: 'text',
    title: 'Company Name',
    name: 'companyName',
    icon: Images.businessIcon,
    maxLength: 200
  },
  {
    id: 3,
    type: 'text',
    title: 'Company Email',
    name: 'email',
    icon: Images.email,
    maxLength: 50
  },
  {
    id: 4,
    type: 'password',
    title: 'Password',
    name: 'password',
    icon: Images.password,
    maxLength: 25
  },
  {
    id: 5,
    type: 'password',
    title: 'Confirm Password',
    name: 'confirmPassword',
    icon: Images.password,
    maxLength: 25
  }
];

const defaulState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  industry: '',
  volume: '',
  showVerifyEmail: false,
  isLoading: false,
  verificationCode: '',
  companyName: ''
};

class SignupViewController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      showVerifyEmail: false,
      isLoading: false,
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
      companyName: '',
      companyNameError: '',
      companyWeb: '',
      companyWebError: '',
      industry: '',
      industryError: '',
      volume: '',
      volumeError: '',
      verificationCode: '',
      verificationCodeError: '',
      step: 0,
      data: {}
    };
  }

  componentDidMount() {
    let newMail = '';
    let firstName = '';
    let lastName = '';
    let phone = '';
    const values = queryString.parse(this.props.location.search);

    if (values.email) {
      newMail = values.email;
    }
    if (values.phone) {
      phone = values.phone;
    }
    if (values.name) {
      const firstSpace = values.name.indexOf(' ');
      if (firstSpace > 0) {
        firstName = values.name.substr(0, values.name.indexOf(' '));
        lastName = values.name.substr(values.name.indexOf(' ') + 1);
      } else {
        firstName = values.name;
      }
    }
    this.setState({ email: newMail, phone, firstName, lastName });
  }

  nextClick = () => {
    const { step } = this.state;
    if (step < 3) {
      if (!this.validateForm()) {
        if (step === 0) {
          // Google analytics
          ReactGA.event({
            category: 'next',
            action: 'submit',
            label: 'success'
          });
        }
        if (step === 1) {
          this.onSignupClick();
        } else if (step === 2) {
          this.onVerifyCodeConfirmClick();
        } else {
          this.setState({ step: step + 1 });
        }
      }
    }
  };

  previousClick = () => {
    const { step } = this.state;
    if (step > 0) {
      this.setState({ step: step - 1 });
    }
  };

  formIsValid = () => {
    const { email, password, confirmPassword } = this.state;

    if (!Util.isEmailValid(email)) {
      Util.topAlertError(INVALID_EMAIL_ERROR);
      return false;
    }
    if (!Util.isPasswordValid(password)) {
      Util.topAlertError(INVALID_PASSWORD);
      return false;
    }
    if (!_.isEqual(password, confirmPassword)) {
      Util.topAlertError(CONFRIM_PASSWORD_MISMATCH_ERROR);
      return false;
    }

    return true;
  };

  validateForm = () => {
    let isError = false;
    const errors = {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      phoneError: '',
      passwordError: '',
      confirmPasswordError: '',
      companyNameError: '',
      companyWebError: '',
      industryError: '',
      volumeError: '',
      verificationCodeError: ''
    };

    if (this.state.step === 0) {
      if (_.isEmpty(this.state.firstName)) {
        isError = true;
        errors.firstNameError = IS_REQUIRED_ERROR;
      }
      if (!Util.isValidName(this.state.firstName)) {
        isError = true;
        errors.firstNameError = INVALID_NAME_ERROR;
      }
      if (_.isEmpty(this.state.lastName)) {
        isError = true;
        errors.lastNameError = IS_REQUIRED_ERROR;
      }
      if (!Util.isValidName(this.state.lastName)) {
        isError = true;
        errors.lastNameError = INVALID_NAME_ERROR;
      }
      if (!Util.isValidUKMobileNumber(this.state.phone)) {
        isError = true;
        errors.phoneError = INVALID_PHONE_ERROR;
      }
      if (!Util.isEmailValid(this.state.email)) {
        isError = true;
        errors.emailError = INVALID_EMAIL_ERROR;
      }
      if (_.isEmpty(this.state.password)) {
        isError = true;
        errors.passwordError = IS_REQUIRED_ERROR;
      }
      if (!Util.isPasswordValid(this.state.password)) {
        isError = true;
        errors.passwordError = INVALID_PASSWORD;
      }
      if (_.isEmpty(this.state.confirmPassword)) {
        isError = true;
        errors.confirmPasswordError = IS_REQUIRED_ERROR;
      }
      if (!_.isEqual(this.state.password, this.state.confirmPassword)) {
        isError = true;
        errors.confirmPasswordError = CONFRIM_PASSWORD_MISMATCH_ERROR;
      }
    } else if (this.state.step === 1) {
      if (_.isEmpty(this.state.companyName)) {
        isError = true;
        errors.companyNameError = IS_REQUIRED_ERROR;
      }
      if (_.isEmpty(this.state.companyWeb)) {
        isError = true;
        errors.companyWebError = IS_REQUIRED_ERROR;
      }
      if (!Util.isValidURL(this.state.companyWeb)) {
        isError = true;
        errors.companyWebError = INVALID_WEBSITE_ERROR;
      }
      if (_.isEmpty(this.state.volume)) {
        isError = true;
        errors.volumeError = IS_REQUIRED_ERROR;
      }
      if (_.isEmpty(this.state.industry)) {
        isError = true;
        errors.industryError = IS_REQUIRED_ERROR;
      }
    } else if (this.state.step === 2) {
      if (_.isEmpty(this.state.verificationCode)) {
        isError = true;
        errors.verificationCodeError = IS_REQUIRED_ERROR;
      }
    }
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onPaymentDone = () => {
    this.alert(SIGNUP_SUCCESS_MSG, MESSAGE_TYPES.SUCCESS);
    this.props.userSignupSuccess(this.state.data);
  };

  sendVerificationCode = () => this.userSignupRequest(true, false);

  submitVerification = () => this.userSignupRequest(false, true);

  userSignupRequest = (sendVerification, submitVerification) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      industry,
      volume,
      companyName,
      companyWeb,
      verificationCode
    } = this.state;
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      business_name: companyName,
      phone: phone.trim(),
      industry: industry.trim(),
      monthly_delivery_volume: volume.trim(),
      business_website: companyWeb.trim(),
      timezone: moment.tz.guess()
    };
    if (submitVerification) {
      payload['verificationCode'] = verificationCode;
    }
    this.props.userSignupRequest(payload, (success, data) => {
      this.setState({
        isLoading: false
      });

      if (sendVerification) {
        if (success) {
          this.setState({
            showVerifyEmail: true,
            step: 2
          });
        }
      } else if (submitVerification) {
        if (success) {
          // this.setState(defaulState);
          this.setState({
            data,
            step: 3
          });
        }
      }
    });
  };

  onSignupClick = () => {
    // e.preventDefault();
    this.setState({
      isLoading: true
    });

    this.sendVerificationCode();
  };

  enableSignupButton = () => {
    for (let i = 0; i < FORM_DATA.length; i++) {
      const item = FORM_DATA[i];
      if (_.isEmpty(this.state[item['name']])) {
        return false;
      }
    }
    return true;
  };

  enableVerificationConfirmButton = () => {
    const { verificationCode } = this.state;
    return verificationCode.length > 5 && !isNaN(verificationCode);
  };

  onSigninClick = () => {
    this.props.history.push(ROUTES.LOGIN);
  };

  onVerifyCodeConfirmClick = () => {
    // e.preventDefault();
    this.setState({
      isLoading: true
    });
    this.submitVerification();
  };

  alert(message, type = MESSAGE_TYPES.ERROR) {
    setTimeout(() => {
      Util.topAlert(message, type);
    }, SAGA_ALERT_TIMEOUT);
  }
  onChange = (e, type) => {
    let temp = {};
    temp[[e.target.name] + 'Error'] = '';

    this.setState({
      [e.target.name]: e.target.value,

      ...temp
    });
  };

  render() {
    const enableSignupButton = this.enableSignupButton();
    const enableVerificationConfirmButton = this.enableVerificationConfirmButton();
    const {
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      email,
      emailError,
      phone,
      phoneError,
      password,
      passwordError,
      confirmPassword,
      confirmPasswordError,
      showVerifyEmail,
      isLoading,
      verificationCode,
      verificationCodeError,
      companyName,
      companyNameError,
      companyWeb,
      companyWebError,
      industry,
      industryError,
      volume,
      volumeError,
      step,
      data
    } = this.state;
    return (
      <SignupView
        {...this.props}
        firstName={firstName}
        firstNameError={firstNameError}
        lastName={lastName}
        lastNameError={lastNameError}
        email={email}
        emailError={emailError}
        phone={phone}
        phoneError={phoneError}
        password={password}
        passwordError={passwordError}
        confirmPassword={confirmPassword}
        confirmPasswordError={confirmPasswordError}
        companyName={companyName}
        formData={FORM_DATA}
        onInputChange={this.onChange}
        onSignupClick={this.onSignupClick}
        enableSignupButton={enableSignupButton}
        onSigninClick={this.onSigninClick}
        showVerifyEmail={showVerifyEmail}
        isLoading={isLoading}
        verificationCode={verificationCode}
        verificationCodeError={verificationCodeError}
        onVerifyCodeConfirmClick={this.onVerifyCodeConfirmClick}
        enableVerificationConfirmButton={enableVerificationConfirmButton}
        step={step}
        nextClick={this.nextClick}
        previousClick={this.previousClick}
        companyNameError={companyNameError}
        companyWeb={companyWeb}
        companyWebError={companyWebError}
        industry={industry}
        industryError={industryError}
        volume={volume}
        volumeError={volumeError}
        onPaymentDone={this.onPaymentDone}
        data={data}
      />
    );
  }
}

const mapStateToProps = () => ({});

const actions = { userSignupRequest, userSignupSuccess };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(SignupViewController)));
