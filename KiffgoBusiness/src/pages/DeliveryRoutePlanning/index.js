/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { Helmet } from 'react-helmet';
import { showModal } from '../../actions/GeneralActions';
import { WebFooter, WebHeader } from '../../components';
import WebHeroSec from './WebHeroSec';
import WebStatisticsSec from '../LandingPage/WebStatisticsSec';
import WebWhyKiffgo from './WebWhyKiffgo';
import WebContactSec from '../LandingPage/WebContactSec';
import WebProductDetailSec from './WebProductDetailSec';
import WebServiceAndVehicleSec from '../LandingPage/WebServiceAndVehicleSec';

class DeliveryRoutePlanning extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Delivery Route Planning Software</title>
          <meta
            data-react-helmet="true"
            id="delivery_route_planning"
            name="delivery route planning"
            content="Improve your delivery operation with Kiffgo’s delivery route planning cloud-based software. Optimize with any constraint your Driver shift, Fleet capacity and delivery time window, set-up time, service time, traffic and roadworks…Optimize your delivery route planning and save time and money now!"
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
)(withTranslate(DeliveryRoutePlanning));
