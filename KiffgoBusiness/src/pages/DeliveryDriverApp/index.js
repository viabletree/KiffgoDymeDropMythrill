/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { Helmet } from 'react-helmet';
import { showModal } from '../../actions/GeneralActions';
import { SecondaryWebFooter, SecondaryWebHeader } from '../../components';
import WebHeroSec from './WebHeroSec';
import WebStatisticsSec from './WebStatisticsSec';
import WebWhyKiffgo from './WebWhyKiffgo';
import WebProductDetailSec from './WebProductDetailSec';
import VideoSec from './VideoSec';

class DeliveryDriverApp extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Delivery Driver App</title>
          <meta
            data-react-helmet="true"
            id="last-mile-delivery-driver-app"
            name="last-mile-delivery-driver-app"
            content="Last mile delivery metrics. Last mile delivery software. Last mile delivery innovation. On-time delivery.Guarantee on-time truck deliveries with sophisticated, accurate, fast routing software. Accelerate delivery time, save on fuel costs, improve customer satisfaction. Track drivers"
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <SecondaryWebHeader />
        <WebHeroSec />
        <WebStatisticsSec />
        <WebProductDetailSec />
        <VideoSec />
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
)(withTranslate(DeliveryDriverApp));
