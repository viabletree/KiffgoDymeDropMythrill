// @flow
import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';
import TrialHeaderView from './TrialHeaderView';
import { isLoggedIn } from '../../../helpers/userHelper';

class TrialHeaderController extends React.Component {
  static propTypes = {
    showSignupBtn: PropTypes.bool,
    showLoginBtn: PropTypes.bool
  };

  static defaultProps = {
    showSignupBtn: true,
    showLoginBtn: true
  };

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  onHamburgeClick = () => {
    this.setState({ showMobileMenu: true });
    document.body.style.overflow = 'hidden';
  };
  componentDidMount() {
    document.body.style.overflow = 'auto';
  }

  onHamburgeHide = () => {
    this.setState({ showMobileMenu: false });
    document.body.style.overflow = 'auto';
  };

  onLoginClick = () => {
    this.props.history.push(ROUTES.LOGIN);
  };

  render() {
    const { showMobileMenu } = this.state;
    const isUserLoggedIn = isLoggedIn();
    return (
      <TrialHeaderView
        {...this.props}
        onLoginClick={this.onLoginClick}
        onHamburgeClick={this.onHamburgeClick}
        onHamburgeHide={this.onHamburgeHide}
        showMobileMenu={showMobileMenu}
        isLoggedIn={isUserLoggedIn}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userData: user.data
});
const actions = {};
export default connect(
  mapStateToProps,
  actions
)(withTranslate(TrialHeaderController));
