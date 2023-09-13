import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { showModal } from '../../actions/GeneralActions';
import { SecondaryWebHeader, SecondaryWebFooter } from '../../components';
import WebHeroSec from './WebHeroSec';
import WebStatisticsSec from './WebStatisticsSec';
import WebWhyKiffgo from './WebWhyKiffgo';
import RouteOptimizationSec from './RouteOptimizationSec';
import { Helmet } from 'react-helmet';
import SeamlessIntSec from './SeamlessIntSec';
import SeamlessCommunicationSec from './SeamlessCommunicationSec';

class SecondaryDeliveryManagement extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Delivery Management</title>
          <meta
            data-react-helmet="true"
            id="what_is_delivery_management"
            name="what is delivery management"
            content="Delivery management is the process of transferring deliveries from their point of origin to their final destination. Delivery management is all about process improvement with the ultimate goal of driving down the delivery cost (man hours, vehicles, fuel, missed deliveries, errors) while keeping a high level of customer service. Delivery operations teams leverage a number of tools and strategies for improving their metrics and scaling up their operations.Route optimization and autonomous dispatch. Seamless communication and real-time ETA.Seamless API integration with 3rd party software."
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <SecondaryWebHeader />
        <WebHeroSec />
        <WebStatisticsSec />
        <RouteOptimizationSec />
        <SeamlessCommunicationSec />
        <SeamlessIntSec />
        <WebWhyKiffgo />
        <SecondaryWebFooter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = { showModal };

export default connect(
  mapStateToProps,
  actions
)(withTranslate(SecondaryDeliveryManagement));
