import React from "react";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";
import { LandingPage } from "../";
import { ResetPasswordModal } from "../../components";
import { showModal } from "../../actions/GeneralActions";
import { MODAL_TYPES } from "../../constants";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const guid = params.get("resetGuid") || null;

    window.history.replaceState(null, null, window.location.pathname);

    this.state = {
      guid
    };
  }
  componentDidMount() {
    if (this.state.guid) {
      this.props.showModal(MODAL_TYPES.RESET_PASSWORD);
    }
  }

  render() {
    return (
      <React.Fragment>
        <LandingPage />
        <ResetPasswordModal guid={this.state.guid} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({});

const actions = { showModal };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(ResetPassword));
