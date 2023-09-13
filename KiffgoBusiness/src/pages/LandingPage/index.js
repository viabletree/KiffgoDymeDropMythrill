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

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Delivery Management Software</title>
          <meta
            data-react-helmet="true"
            id="delivery_management_software"
            name="Improve your delivery operation with delivery route planning software. Best Route optimization software. Live ETA tracking. Last mile delivery communication software. Route planner for trucks, cars, van, bike. Top rated Local delivery software. Customer feedback software. Better than Onfleet, Dispatchtrack, Getcircuit, Circuit, Bringg, Tookan, Pro Delivery Manager,Podfather, Go2stream, Maxoptra. Best route optimization engine.
            Plan your multi-drop delivery, reduce fuel cost, manage driver schedule, make customers happy and increase the productivity of your drivers and fleet. Best fleet management software. Manage fleet and drivers."
            // content="Most pharmacies using Pro Delivery manager (PDM) are really disappointed with the software. There are several critical issues reported. Here are a few of them: Addresses are not mapped accurately, Application UX is too complex to learn and the driver cannot complete a task when there is no mobile internet. Kiffgo is a powerful alternative for pharmacy delivery.Pharmacy route planning. Driver tracking. Pharmacy delivery software. Delivery management software for pharmacy. Pharmacy Route optimization software"
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

export default connect(mapStateToProps, actions)(withTranslate(LandingPage));
