// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import TrackingView from './TrackingView';
import {
  dmGetSingleTaskDetailsNoTokenRequest,
  submitTrackingRating
} from '../../actions/DMTasksActions';
import SocketIO from '../../services/SocketIO';
import { dmTaskEtaChanged } from '../../actions/DMTasksActions';
import { TASK_FIELDS_NAME } from '../../constants';
import _ from 'lodash';

class TrackingController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isError: '',
      data: null,
      rating: 0,
      rated: false,
      noRating: false,
      driverTracking: null,
      mapZoom: 10,
      showDriverTooltip: false,
      showDestinationTooltip: false
    };
  }

  componentDidMount() {
    const { uniqueString } = this.props.match.params;
    const payload = { task: uniqueString };
    this.setState({ loading: true });
    this.props.dmGetSingleTaskDetailsNoTokenRequest(payload, (status, data) => {
      if (status) {
        this.setState({
          loading: false,
          data,
          driverTracking: data.driver.lastLocation
        });
        this.initSocket();
      } else {
        this.setState({ loading: false, isError: data });
      }
    });
    setTimeout(() => {
      this.autoFitMapMarkers();
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.driverTracking === null && this.state.driverTracking) {
      this.autoFitMapMarkers();
    }
  }

  initSocket = () => {
    SocketIO.disconnect();
    SocketIO.connect(
      () => {
        // connect callback
        const { data } = this.state;
        if (data && typeof data === 'object') {
          SocketIO.emit('business', { businessId: data.owner.business });
        }
        // event listners
        SocketIO.onDisconnect();
        SocketIO.stillConnected();

        SocketIO.onTrackingInfo(tracking => {
          if (tracking.taskId === this.state.data.uniquestring) {
            this.setState({ driverTracking: tracking });
          }
        }); // Continous driver tracking

        // get eta update
        SocketIO.onTaskEtaUpdate(data => {
          // Task Eta updated

          const taskEtaUpdate = _.find(data.data, {
            uniquestring: this.state.data.uniquestring
          });
          if (taskEtaUpdate)
            this.setState(prevState => {
              return {
                loading: false,
                data: {
                  ...prevState.data,
                  ...{ [TASK_FIELDS_NAME.ETA]: taskEtaUpdate.eta }
                }
              };
            });
        });

        SocketIO.onTaskUpdated(task => {
          // On task update
          const updatedTask = task.data[0];

          if (updatedTask.id === this.state.data.id) {
            if (updatedTask.status !== this.state.data.status) {
              const oldTask = this.state.data;
              oldTask.status = updatedTask.status;
              this.setState({ data: updatedTask });
            }
          }
        });
      },
      () => {}
    );
  };

  setRating = rating => {
    this.setState({ rating });
  };

  setNoRating = noRating => {
    this.setState({ noRating });
  };

  submitRating = (skip: false) => {
    this.setState({ loading: true });
    const payload = {};
    payload.uniquestring = this.state.data.uniquestring;
    payload.rating = skip ? 0 : this.state.rating.toString();
    this.props.submitTrackingRating(payload, status => {
      if (status) {
        if (payload.rating > 0) {
          this.setState({ rated: true, loading: false });
        } else {
          this.setState({ noRating: true, loading: false });
        }
      }
    });
  };

  autoFitMapMarkers() {
    const { data, driverTracking } = this.state;

    if (data && driverTracking && window.google) {
      const bounds = new window.google.maps.LatLngBounds();

      bounds.extend({
        lat: data.location.latitude,
        lng: data.location.longitude
      });
      bounds.extend({
        lat: driverTracking.location.coords.latitude,
        lng: driverTracking.location.coords.longitude
      });
      if (this.mapReference) {
        this.mapReference.fitBounds(bounds, {
          padding: {
            top: 20,
            bottom: 20,
            left: 420,
            right: 20
          }
        });
        setTimeout(() => {
          const zoomState = this.mapReference.getZoom();

          this.setState(prevState => ({
            mapZoom: zoomState - 1
          }));
        }, 1000);
      }
    }
  }

  render() {
    const {
      loading,
      isError,
      data,
      rating,
      noRating,
      rated,
      driverTracking,
      showDestinationTooltip,
      showDriverTooltip
    } = this.state;

    return (
      <TrackingView
        {...this.props}
        mapRef={node => (this.mapReference = node)}
        loading={loading}
        isError={isError}
        data={data}
        rating={rating}
        rated={rated}
        noRating={noRating}
        mapZoom={this.state.mapZoom}
        driverTracking={driverTracking}
        showDestinationTooltip={showDestinationTooltip}
        showDriverTooltip={showDriverTooltip}
        setRating={this.setRating}
        setNoRating={this.setNoRating}
        submitRating={this.submitRating}
      />
    );
  }
}
const mapStateToProps = ({ user }) => ({
  userData: user.data
});

const actions = {
  dmGetSingleTaskDetailsNoTokenRequest,
  submitTrackingRating,
  dmTaskEtaChanged
};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(TrackingController));
