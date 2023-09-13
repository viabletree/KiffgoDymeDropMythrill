// @flow
import React from "react";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";
import { hideModal, showModal } from "../../actions/GeneralActions";
import { userForgotPasswordRequest } from "../../actions/UserAction";
import ForgotPasswordModalView from "./ForgotPasswordModalView";
import Util from "../../services/Util";
import { INVALID_EMAIL_ERROR, MODAL_TYPES } from "../../constants";

const defaulState = {
  email: "",
  isLoading: false,
  requestSent: false
};

class ForgotPasswordModalController extends React.Component {
  state = {
    isLoading: false,
    requestSent: false,
    email: ""
  };

  onCloseModal = () => {
    this.props.hideModal(MODAL_TYPES.FORGOT_PASSWORD);
    this.setState(defaulState);
  };

  onChange = (e, type) => {
    const val = e.target.value;
    this.setState({
      [type]: val
    });
  };

  formIsValid = () => {
    const { email } = this.state;

    if (!Util.isEmailValid(email)) {
      Util.topAlertError(INVALID_EMAIL_ERROR);
      return false;
    }

    return true;
  };

  onSubmitClick = e => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({
        isLoading: true
      });
      const { email } = this.state;
      const payload = {
        email
      };
      this.props.userForgotPasswordRequest(payload, () => {
        this.setState({
          isLoading: false,
          requestSent: true
        });
      });
    }
  };

  enableSubmitButton = () => {
    const { email } = this.state;
    return Util.isEmailValid(email);
  };

  render() {
    const enableSubmitButton = this.enableSubmitButton();
    const { email, isLoading, requestSent } = this.state;
    return (
      <ForgotPasswordModalView
        {...this.props}
        open={this.props.forgotPasswordModal}
        onCloseModal={this.onCloseModal}
        email={email}
        isLoading={isLoading}
        onChange={this.onChange}
        onSigninClick={this.onSigninClick}
        enableSubmitButton={enableSubmitButton}
        onSubmitClick={this.onSubmitClick}
        requestSent={requestSent}
      />
    );
  }
}

const mapStateToProps = ({ general }) => ({
  forgotPasswordModal: general.modals.forgotPasswordModal
});

const actions = { hideModal, showModal, userForgotPasswordRequest };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(ForgotPasswordModalController));
