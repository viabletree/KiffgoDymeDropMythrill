// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import { hideModal, showModal } from '../../actions/GeneralActions';
import { userResetPasswordRequest } from '../../actions/UserAction';
import ResetPasswordModalView from './ResetPasswordModalView';
import Util from '../../services/Util';
import {
  MODAL_TYPES,
  INVALID_PASSWORD,
  CONFRIM_PASSWORD_MISMATCH_ERROR,
  ROUTES
} from '../../constants';
import { Images } from '../../theme';

const FORM_DATA = [
  {
    id: 3,
    type: 'password',
    title: 'Password',
    name: 'password',
    icon: Images.password,
    maxLength: 25
  },
  {
    id: 4,
    type: 'password',
    title: 'Confirm Password',
    name: 'confirmPassword',
    icon: Images.password,
    maxLength: 25
  }
];

const defaulState = {
  password: '',
  confirmPassword: '',
  isLoading: false
};

class ResetPasswordModalController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      isLoading: false,
      resetSucceeded: false
    };
  }

  onCloseModal = () => {
    this.props.hideModal(MODAL_TYPES.RESET_PASSWORD);
    this.props.history.push(ROUTES.HOME);
    this.setState(defaulState);
  };

  onChange = (e, type) => {
    const val = e.target.value;
    this.setState({
      [type]: val
    });
  };

  formIsValid = () => {
    const { password, confirmPassword } = this.state;

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

  onSubmitClick = () => {
    if (this.formIsValid()) {
      this.setState({
        isLoading: true
      });
      const { password } = this.state;
      const payload = {
        guid: this.props.guid,
        password
      };
      this.props.userResetPasswordRequest(payload, success => {
        this.setState({
          isLoading: false
        });

        if (success) {
          this.setState({ resetSucceeded: true });
        }
      });
    }
  };

  loginClick = () => {
    this.onCloseModal();
    this.props.history.push(ROUTES.LOGIN);
  };

  enableSubmitButton = () => {
    const { password, confirmPassword } = this.state;
    return !_.isEmpty(password) && !_.isEmpty(confirmPassword);
  };

  render() {
    const enableSubmitButton = this.enableSubmitButton();
    const { password, confirmPassword, isLoading, resetSucceeded } = this.state;
    return (
      <ResetPasswordModalView
        {...this.props}
        open={this.props.resetPasswordModal}
        onCloseModal={this.onCloseModal}
        password={password}
        confirmPassword={confirmPassword}
        isLoading={isLoading}
        onChange={this.onChange}
        onSigninClick={this.onSigninClick}
        enableSubmitButton={enableSubmitButton}
        onSubmitClick={this.onSubmitClick}
        formData={FORM_DATA}
        resetSucceeded={resetSucceeded}
        loginClick={this.loginClick}
      />
    );
  }
}

const mapStateToProps = ({ general }) => ({
  resetPasswordModal: general.modals.resetPasswordModal
});

const actions = { hideModal, showModal, userResetPasswordRequest };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(ResetPasswordModalController)));
