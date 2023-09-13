// @flow
import _, { isError } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import { hideModal, showModal } from '../../actions/GeneralActions';
import { userSigninRequest } from '../../actions/UserAction';
import SignInView from './SignInView';
import { Images } from '../../theme';
import Util from '../../services/Util';
import {
  INVALID_EMAIL_ERROR,
  INVALID_PASSWORD,
  MODAL_TYPES,
  ROUTES
} from '../../constants';

const FORM_DATA = [
  {
    id: 2,
    type: 'text',
    title: 'Company Email',
    name: 'email',
    icon: Images.email,
    maxLength: 50
  },
  {
    id: 3,
    type: 'password',
    title: 'Password',
    name: 'password',
    icon: Images.password,
    maxLength: 25
  }
];

const defaulState = {
  email: '',
  password: '',
  isLoading: false
};

class SignInController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
  }

  onChange = (e, type) => {
    let temp = {};
    temp[[e.target.name] + 'Error'] = '';

    this.setState({
      [e.target.name]: e.target.value,

      ...temp
    });
  };

  formIsValid = () => {
    let isError = false;
    const errors = {
      emailError: '',
      passwordError: ''
    };
    const { email, password } = this.state;

    if (!Util.isEmailValid(email)) {
      isError = true;
      errors.emailError = INVALID_EMAIL_ERROR;
    }

    if (!Util.isPasswordValid(password)) {
      isError = true;
      errors.passwordError = INVALID_PASSWORD;
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  onSigninClick = e => {
    // e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({
        isLoading: true
      });
      const { email, password } = this.state;
      const payload = {
        email: email.trim(),
        password
      };
      this.props.userSigninRequest(payload, success => {
        this.setState({
          isLoading: false
        });
      });
    }
  };

  enableSigninButton = () => {
    const enableSigninButton = true;
    for (let i = 0; i < FORM_DATA.length; i++) {
      const item = FORM_DATA[i];
      if (_.isEmpty(this.state[item['name']])) {
        return false;
      }
    }
    return enableSigninButton;
  };

  onSignupClick = () => {
    this.props.history.push(ROUTES.SIGN_UP);
  };

  onForgotPasswordClick = () =>
    this.props.showModal(MODAL_TYPES.FORGOT_PASSWORD);

  render() {
    const enableSigninButton = this.enableSigninButton();
    const {
      email,
      password,
      isLoading,
      passwordError,
      emailError
    } = this.state;

    return (
      <SignInView
        {...this.props}
        open={this.props.showSignIn}
        email={email}
        emailError={emailError}
        password={password}
        passwordError={passwordError}
        isLoading={isLoading}
        formData={FORM_DATA}
        onChange={this.onChange}
        onSigninClick={this.onSigninClick}
        enableSigninButton={enableSigninButton}
        onSignupClick={this.onSignupClick}
        onForgotPasswordClick={this.onForgotPasswordClick}
      />
    );
  }
}

const mapStateToProps = ({ general }) => ({
  showSignIn: general.modals.showSignIn
});

const actions = { hideModal, showModal, userSigninRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(SignInController)));
