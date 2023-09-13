// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux';
import {
  isLoggedIn,
  getUserFullName,
  getUserFirstLetter,
  isKiffgoAdmin,
  userLogout
} from '../../../helpers/userHelper';
import { userLogoutRequest } from '../../../actions/UserAction';
import { USER_LOGIN_THEME, ROUTES } from '../../../constants';
import SideBarView from './SideBarView';
import { Images } from '../../../theme';

class SideBarController extends React.Component {
  // send data to side bar
  SIDE_BAR_ITEM = [
    {
      title: 'Book a delivery',
      itemImage: Images.orders,
      url: ROUTES.NEW_BOOKING,
      onlyForAdmin: false,
      id: 0
    },
    {
      title: 'Booked jobs',
      itemImage: Images.newOrder,
      url: ROUTES.BOOKING_LIVE,
      onlyForAdmin: false,
      id: 1
    },
    {
      title: 'Driver',
      itemImage: Images.driver,
      url: ROUTES.DRIVER,
      onlyForAdmin: true,
      id: 2
    },
    {
      title: 'Setting',
      itemImage: Images.setting,
      url: ROUTES.SETTING,
      onlyForAdmin: false,
      id: 3
    }
  ];

  static propTypes = { theme: PropTypes.string };

  static defaultProps = { theme: USER_LOGIN_THEME.LIGHT };

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
    userLogout();
  };

  render() {
    const isUserLoggedIn = isLoggedIn();

    const userFullName = getUserFullName();

    const userFirstletter = getUserFirstLetter();

    const isUserKiffgoAdmin = isKiffgoAdmin();

    return (
      <SideBarView
        {...this.props}
        isLoggedIn={isUserLoggedIn}
        userFullName={userFullName}
        onProfileBoxClick={this.handleProfileBoxClick}
        userFirstletter={userFirstletter}
        profileBoxStatus={this.state.profileBoxDropDown}
        onLogoutClick={this.onLogoutClick}
        userLoginRef={node => (this.userLoginNode = node)}
        sideBarItem={this.SIDE_BAR_ITEM}
        isKiffgoAdmin={isUserKiffgoAdmin}
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
)(withTranslate(SideBarController));
