// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import queryString from 'query-string';
import { isLoggedIn } from '../../../helpers/userHelper';
import SignupView from './SignupView';
import { ROUTES } from '../../../constants';

class SignupController extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  componentDidMount() {
    this.redirectIfLoggedIn(true);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn = isDidMount => {
    if (isLoggedIn()) {
      if (!_.isEmpty(this.props.location.search)) {
        // handling redirection
        const values = queryString.parse(this.props.location.search);
        if (values.redirect) {
          this.props.history.push(values.redirect);
        } else if (values.email && values.name && values.phone) {
          window.location.href = `${window.location.origin}${ROUTES.DELIVERY_MANAGEMENT}`;
        }
      } else {
        // enter into Signup
        // this.props.history.push(`${ROUTES.BOOKINGS}/live`);
        window.location.href = `${window.location.origin}${ROUTES.DELIVERY_MANAGEMENT}`;
      }
    } else if (isDidMount) {
      this.setState({ showForm: true });
    }
  };

  render() {
    if (this.state.showForm) {
      return <SignupView {...this.props} />;
    }

    return null;
  }
}

const mapStateToProps = ({ user }) => ({
  userData: user.data
});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(SignupController));
