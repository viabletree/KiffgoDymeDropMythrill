import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { showModal } from '../../actions/GeneralActions';
import { WebHeader, WebFooter } from '../../components';
import WebHeroSec from './WebHeroSec';
import WebStatisticsSec from './WebStatisticsSec';
import WebWhyKiffgo from './WebWhyKiffgo';
import WebDemandSec from './WebDemandSec';
import WebContactSec from './WebContactSec';
import WebProductDetailSec from './WebProductDetailSec';
import WebServiceAndVehicleSec from './WebServiceAndVehicleSec';
import { Helmet } from 'react-helmet';

class RouteOptimizationSoftware extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Route Optimization Software</title>
          <meta
            data-react-helmet="true"
            id="route_optimization_software"
            name="route optimization software"
            content="Optimize for any constraint Driver shift, Fleet capacity, Vehicle payload, delivery time window, set-up time, service time, traffic and roadworks. Capture proof of delivery. Track drivers.Delivery route planning in seconds."
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <WebHeroSec />
        <WebStatisticsSec />
        <WebProductDetailSec />
        <WebWhyKiffgo />
        <WebContactSec />
        <WebFooter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = { showModal };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(RouteOptimizationSoftware));
