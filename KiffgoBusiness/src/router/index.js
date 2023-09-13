import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ROUTES } from '../constants';
import {
  LandingPage,
  ResetPassword,
  PageNotFound,
  TermsOfUse,
  PrivacyPolicy,
  Dashboard,
  BookingDetail,
  Login,
  Signup,
  DeliveryManagement,
  SecondaryDeliveryManagement,
  BespokeLogistics,
  MobileAppLink,
  Tracking,
  DeliveryRoutePlanning,
  RouteOptimizationSoftware,
  OnFleetComparison,
  CircuitComparison,
  Pricing,
  Blogs,
  TruckRoutePlanner,
  ProDeliveryManager,
  DeliveryExcellenceBlog,
  Principles,
  DeliveryDriverApp
} from '../pages';
import {
  isLoggedIn,
  setUserLoggedOutRecently,
  isKiffgoAdmin
} from '../helpers/userHelper';
import LayoutWrapper from './LayoutWrapper';

const AuthDashboardRoute = props => {
  if (!isLoggedIn()) {
    if (props.user.isLoggedOutRecently) {
      setUserLoggedOutRecently(false);
      return <Redirect to={`${ROUTES.LOGIN}`} />;
    }
    return (
      <Redirect to={`${ROUTES.LOGIN}?redirect=${props.location.pathname}`} />
    );
  }

  if (props.forAdminOnly && !isKiffgoAdmin()) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

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
      forAdminOnly: false
    };
    return (
      <Router>
        <div>
          <Switch>
            <NoAuthRoute
              path={ROUTES.HOME}
              component={LandingPage}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.RESET_PASSWORD}
              component={ResetPassword}
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
            <NoAuthRoute
              path={ROUTES.DASHBOARD}
              component={Dashboard}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.LOGIN}
              component={Login}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.SIGN_UP}
              component={Signup}
              {...repeatedProps}
            />

            <AuthDashboardRoute
              path={`${ROUTES.DELIVERY_MANAGEMENT}`}
              component={DeliveryManagement}
              {...repeatedProps}
            />

            <AuthDashboardRoute
              path={`${ROUTES.DELIVERY_MANAGEMENT}/:moduleName`}
              component={DeliveryManagement}
              {...repeatedProps}
            />

            <AuthDashboardRoute
              path={`${ROUTES.DELIVERY_MANAGEMENT}/:moduleName/:moduleAction`}
              component={DeliveryManagement}
              {...repeatedProps}
            />

            <AuthDashboardRoute
              path={`${ROUTES.DELIVERY_MANAGEMENT}/:moduleName/:moduleAction/:actionData`}
              component={DeliveryManagement}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.TRACKING}/:uniqueString`}
              component={Tracking}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.PRICING}`}
              component={Pricing}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={`${ROUTES.DELIVERY_ROUTE_PLANNING}`}
              component={DeliveryRoutePlanning}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.ROUTE_OPTIMIZATION_SOFTWARE}`}
              component={RouteOptimizationSoftware}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.SECONDARY_DELIVERY_MANAGEMENT}`}
              component={SecondaryDeliveryManagement}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.TRUCK_ROUTE_PLANNER}`}
              component={TruckRoutePlanner}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.ONFLEET}`}
              component={OnFleetComparison}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.CIRCUIT}`}
              component={CircuitComparison}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.PRO_DELIVERY_MANAGER}`}
              component={ProDeliveryManager}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.BLOG}`}
              component={Blogs}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.DELIVERY_EXCELLENCE_BLOG}`}
              component={DeliveryExcellenceBlog}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.PRINCIPLES}`}
              component={Principles}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={`${ROUTES.DELIVERY_DRIVER_APP}`}
              component={DeliveryDriverApp}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={`${ROUTES.MOBILE_APP_NAVIGATOR}`}
              component={MobileAppLink}
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
  user
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
