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

class TruckRoutePlanner extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Truck Route Planner</title>
          <meta
            data-react-helmet="true"
            id="truck_route_planning_software"
            name="truck route planning software"
            content="How Do I Plan a Truck Route? Use the right software. Plan mandatory breaks and overnight stops. Optimize fuel stops and breaks for the lowest priced fuel. World-class Route optimization for trucks."
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
)(withTranslate(TruckRoutePlanner));
