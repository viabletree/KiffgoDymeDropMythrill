// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux';
import {
  isLoggedIn,
  getUserFullName,
  getUserFirstLetter
} from '../../helpers/userHelper';
import UserLoginView from './UserLoginView';
import { userLogoutRequest } from '../../actions/UserAction';
import { USER_LOGIN_THEME } from '../../constants';

class UserLoginController extends React.Component {
  static propTypes = {
    theme: PropTypes.string
  };

  static defaultProps = {
    theme: USER_LOGIN_THEME.LIGHT
  };

  constructor(props) {
    super(props);
    // this.userLoginNode = React.createRef();
    this.state = {
      profileBoxDropDown: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (isLoggedIn()) {
      if (this.userLoginNode.contains(e.target)) {
        return;
      }

      this.handleOutside();
    }
  };

  handleOutside = () => {
    this.setState({ profileBoxDropDown: false });
  };

  handleProfileBoxClick = () => {
    this.setState({ profileBoxDropDown: !this.state.profileBoxDropDown });
  };

  onLogoutClick = () => {
    this.props.userLogoutRequest();
    this.setState({ profileBoxDropDown: false });
  };

  render() {
    const isUserLoggedIn = isLoggedIn();
    const userFullName = getUserFullName();
    const userFirstletter = getUserFirstLetter();
    return (
      <UserLoginView
        {...this.props}
        isLoggedIn={isUserLoggedIn}
        userFullName={userFullName}
        onProfileBoxClick={this.handleProfileBoxClick}
        userFirstletter={userFirstletter}
        profileBoxStatus={this.state.profileBoxDropDown}
        onLogoutClick={this.onLogoutClick}
        loginRef={node => (this.userLoginNode = node)}
      />
    );
  }
}
const mapStateToProps = ({ user }) => ({
  userData: user.data
});
const actions = {
  userLogoutRequest
};
export default connect(
  mapStateToProps,
  actions
)(withTranslate(UserLoginController));
