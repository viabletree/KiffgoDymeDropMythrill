// @flow
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { userLogoutRequest } from "../../actions/UserAction";

import HeaderView from "./HeaderView";
import { ROUTES } from "../../constants";
import {
  isLoggedIn,
  getUserFullName,
  getUserFirstLetter,
} from "../../helpers/userHelper";

class HeaderController extends React.Component {
  static propType = {
    showLoginBtn: PropTypes.bool,
    showSignupBtn: PropTypes.bool,
  };

  static defaultProps = {
    showLoginBtn: true,
    showSignupBtn: true,
  };

  state = {
    profileBoxDropDown: false,
  };

  onSignInClick = () => {
    this.props.history.push(ROUTES.LOGIN);
  };

  onSignUpClick = () => {
    this.props.history.push(ROUTES.SIGN_UP);
  };

  onLogoutClick = () => {
    this.props.userLogoutRequest();
  };

  handleProfileBoxClick = () => {
    this.setState({ profileBoxDropDown: !this.state.profileBoxDropDown });
  };

  hideDropDown = () => {
    this.setState({ profileBoxDropDown: false });
  };

  render() {
    const isUserLoggedIn = isLoggedIn();
    const userFullName = getUserFullName();
    const userFirstletter = getUserFirstLetter();
    return (
      <HeaderView
        {...this.props}
        onSignInClick={this.onSignInClick}
        onSignUpClick={this.onSignUpClick}
        isLoggedIn={isUserLoggedIn}
        userFullName={userFullName}
        userFirstletter={userFirstletter}
        onLogoutClick={this.onLogoutClick}
        onProfileBoxClick={this.handleProfileBoxClick}
        profileBoxStatus={this.state.profileBoxDropDown}
        onDropOutSide={this.hideDropDown}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userData: user.data,
});

const actions = {
  userLogoutRequest,
};

export default connect(mapStateToProps, actions)(withRouter(HeaderController));
