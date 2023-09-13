// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import queryString from 'query-string';
import { isLoggedIn } from '../../../helpers/userHelper';
import LoginView from './LoginView';
import { ROUTES } from '../../../constants';

class LoginController extends React.Component {
  static propTypes = {};

  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn = () => {
    if (isLoggedIn()) {
      if (!_.isEmpty(this.props.location.search)) {
        // handling redirection
        const values = queryString.parse(this.props.location.search);
        if (values.redirect) {
          window.location.href = `${window.location.origin}${values.redirect}`;
        }
      } else {
        // enter into Login
        // this.props.history.push(`${ROUTES.DELIVERY_MANAGEMENT}`);
        window.location.href = `${window.location.origin}${ROUTES.DELIVERY_MANAGEMENT}`;
      }
    }
  };

  render() {
    return <LoginView {...this.props} />;
  }
}

const mapStateToProps = ({ user }) => ({
  userData: user.data
});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(LoginController));
