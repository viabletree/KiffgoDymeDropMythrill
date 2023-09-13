import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../constants";
import { LandingPage, PageNotFound, TermsOfUse, PrivacyPolicy } from "../pages";
import LayoutWrapper from "./LayoutWrapper";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
      forAdminOnly: false,
    };
    return (
      <Router>
        <div>
          <Switch>
            <NoAuthRoute
              path={ROUTES.HOME}
              component={PageNotFound}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.DYNAMIC_ROUTE}
              component={LandingPage}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.TERMS_OF_USE}
              component={TermsOfUse}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PRIVACY_POLICY}
              component={PrivacyPolicy}
              {...repeatedProps}
            />

            {/* Keep this in last always */}
            <NoAuthRoute path={Route.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
