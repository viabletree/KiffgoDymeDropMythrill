/* eslint-disable react/button-has-type */
/* eslint-disable no-else-return */
// @flow
import React from 'react';
import { css } from 'aphrodite';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow
} from 'react-google-maps';
import ReactStars from 'react-rating-stars-component';
import _ from 'lodash';
import { BeatLoader } from 'react-spinners';
import { compose, withProps } from 'recompose';
import { Images, AppStyles, Colors } from '../../theme';
import styles from './TrackingStyles';
import { NavLink, Link } from 'react-router-dom';
import { ROUTES, CENTRAL_LONDON, TIME_FORMAT1 } from '../../constants';
import { ERROR_SOMETHING_WENT_WRONG, G_API_URL } from '../../config/WebService';
import Util from '../../services/Util';
import moment from 'moment';

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d'
      }
    ]
  }
];
const MyMapComponent = compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={css(styles.mapCalculation)} />,
    mapElement: <div className={css(styles.mapCalculation)} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={10}
    ref={props.mapRef}
    zoom={props.mapZoom}
    options={{
      styles: mapStyle
    }}
    defaultCenter={CENTRAL_LONDON}
    onClick={props.onMapClick}
  >
    {props.data !== null &&
      typeof props.data === 'object' &&
      props.driverTracking !== null && (
        <>
          {/* <Polyline
            path={[
              {
                lat: props.data.location.latitude,
                lng: props.data.location.longitude
              },
              {
                lat: props.driverTracking.location.coords.latitude,
                lng: props.driverTracking.location.coords.longitude
              }
            ]}
            geodesic
            options={{
              strokeColor: '#ffff',
              strokeOpacity: 0.75,
              strokeWeight: 2,
              icons: [
                {
                  offset: '0',
                  repeat: '20px'
                }
              ]
            }}
          /> */}
          <Marker
            optimized={false}
            position={{
              lat: props.driverTracking.location.coords.latitude,
              lng: props.driverTracking.location.coords.longitude
            }}
            icon={{
              url: Images.trackingDriverIcon,
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />
        </>
      )}
    {props.data !== null && typeof props.data === 'object' && (
      <Marker
        position={{
          lat: props.data.location.latitude,
          lng: props.data.location.longitude
        }}
        icon={{
          url: Images.inTransitTaskIcon,
          scaledSize: new window.google.maps.Size(20, 20)
        }}
      >
        <div>this is asdads</div>

        {props.data.fullAddress && (
          <InfoWindow
            options={{
              pixelOffset: new window.google.maps.Size(0, 10),
              disableAutoPan: true
            }}
          >
            <div className={css(styles.driverTooltipWrapper)}>
              <p className={css(styles.driverTooltipName)}>
                {props.data.fullAddress}
              </p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    )}
  </GoogleMap>
));
const MyHeaderComponent = props => {
  return (
    <div className={css(styles.headerParent)}>
      <div className={css(styles.headerLeftParent)}>
        <div className={css(styles.picWrapper)}>
          <img
            src={props.data.owner.logo || Images.userImg}
            className={`${
              props.data.owner.logo
                ? css([styles.profilePic])
                : css([styles.profilePicEmpty])
            }`}
          />
        </div>
        <span className={css(styles.dispatcherName)}>{`${props.data.owner
          .business_name || '--'}`}</span>
      </div>

      <div className={css(styles.headerRightParent)}>
        <span className={css(styles.poweredBy)}>Powered by</span>
        <img src={Images.dmKiffgoLogo} className={`${css([styles.dmLogo])}`} />
      </div>
    </div>
  );
};
// make_and_model
const MyFooterComponent = props => {
  const { data } = props;
  const { driver, owner } = data;
  let vehicle = null;
  if (driver && driver.vehicle) {
    vehicle = driver.vehicle[0];
  }
  const arrivingInMinutes = moment(props.data.eta).diff(moment(), 'minutes');
  return (
    <div className={css(styles.footerParent)}>
      <div className={css(styles.footerLeftParent)}>
        <div className={css(styles.footerLeftBtnParent)}>
          <div className={css([styles.etaBox, AppStyles.mRight10])}>
            <span className={css(styles.etaBoxTitle)}>ETA</span>

            <div>
              <span className={css(styles.etaBoxValue)}>
                {props.data.eta
                  ? Util.getFormattedDateTime(props.data.eta, TIME_FORMAT1)
                  : '-'}
              </span>
            </div>
          </div>
          <div className={css([styles.etaBox])}>
            <span className={css(styles.etaBoxTitle)}>Arriving in</span>

            <div>
              <span className={css(styles.etaBoxValue)}>
                {props.data.eta
                  ? arrivingInMinutes > 0
                    ? arrivingInMinutes
                    : '0'
                  : '0'}
              </span>
              <span className={css(styles.etaBoxSbtxt)}>min</span>
            </div>
          </div>
        </div>
        <span className={css(styles.addressText)}>
          {props.data.fullAddress ? `At ${props.data.fullAddress}` : '-- '}
        </span>
      </div>
      <div className={css(styles.footerCenterParent)}>
        {/* <div
          className={css([styles.footerCenterItemParent, AppStyles.mRight30])}
        >
          <div className={`${css([styles.vehicleInfoParent])}`}>
            <span className={css(styles.vehicleText)}>
              {vehicle ? vehicle.make_and_model : ' -- '}
            </span>
            <span className={css(styles.vehicleTextLite)}>
              {vehicle ? vehicle.year : ' -- '}
            </span>
            <span className={css(styles.vehicleTextLite)}>
              {vehicle ? vehicle.color : ' -- '}
            </span>
          </div>
        </div> */}

        <div className={css(styles.footerCenterItemParent)}>
          <div className={css(styles.picWrapperLarge)}>
            <img
              src={props.data.driver.image || Images.userImg}
              className={`${
                props.data.driver.image
                  ? css([styles.profilePic])
                  : css([styles.profilePicEmpty])
              }`}
            />
          </div>
          <div className={css(styles.userNmeParent)}>
            <span className={css(styles.nameText)}>{driver.name || '--'}</span>
            <span
              className={css(styles.dispatcherText)}
            >{`${owner.business_name || '--'}`}</span>
            <span className={css(styles.vehicleText)}>
              {vehicle
                ? `${vehicle.make_and_model} - ${vehicle.number_plate}`
                : ' -- '}
            </span>
            <span className={css(styles.vehicleTextLite)}>
              {vehicle ? vehicle.year : ' -- '}
            </span>
            <span className={css(styles.vehicleTextLite)}>
              {vehicle ? vehicle.color : ' -- '}
            </span>
          </div>
        </div>
      </div>
      <div className={css(styles.footerRightParent)}>
        <div className={css(styles.communicateParent)}>
          <a href={`tel:+${driver.phone}`}>
            <div className={`mr-3 ${css(styles.callTextParent)}`}>
              <img
                src={Images.callLogo}
                className={`${css([styles.callTextLogo])}`}
              />
            </div>
          </a>
          <a href={`sms:+${driver.phone}`}>
            <div className={css(styles.callTextParent)}>
              <img
                src={Images.messageLogo}
                className={`${css([styles.callTextLogo])}`}
              />
            </div>
          </a>
        </div>
      </div>
      <div className={css(styles.mobileViewCommunicationButtonParent)}>
        <a
          href={`tel:+${driver.phone}`}
          className={css(styles.callTextParentWrapper)}
        >
          <div className={`mr-2 ${css(styles.callTextParent)}`}>
            <img
              src={Images.callLogo}
              className={`${css([styles.callTextLogo])}`}
            />
          </div>
        </a>
        <a
          href={`sms:+${driver.phone}`}
          className={css(styles.callTextParentWrapper)}
        >
          <div className={css(styles.callTextParent)}>
            <img
              src={Images.messageLogo}
              className={`${css([styles.callTextLogo])}`}
            />
          </div>
        </a>
      </div>
    </div>
  );
};
const RatingComponent = props => {
  if (props.data.rating > 0 || props.rated) {
    return (
      <div className={css(styles.ratingParent)}>
        <span className={css(styles.ratingHeading)}>
          Task completed. Thank you for rating us!
        </span>
      </div>
    );
  } else if (props.data.rating === 0 || props.noRating) {
    return (
      <div className={css(styles.ratingParent)}>
        <span className={css(styles.ratingHeading)}>
          Task completed. Thank you for using our service!
        </span>
      </div>
    );
  } else {
    return (
      <div className={css(styles.ratingParent)}>
        <span className={css(styles.ratingHeading)}>
          Thank you for using our service!
        </span>
        <span className={css(styles.ratingContent)}>
          Please help us improve by rating your experience
        </span>
        <div className={`${css(styles.ratingComponentParent)}`}>
          <ReactStars
            count={5}
            onChange={rating => {
              props.setRating(rating);
            }}
            size={45}
            activeColor="#ffd700"
          />
        </div>
        <div className={`${css(styles.buttonsParent)}`}>
          <button
            className={`${css([styles.footerButton, styles.greyButton])}`}
            onClick={() => {
              props.submitRating(true);
            }}
          >
            {'Not Now'}
          </button>
          <button
            disabled={props.rating === 0}
            className={`${css([
              styles.footerButton,
              props.rating > 0 ? styles.whiteButton : styles.disabledButton
            ])}`}
            onClick={() => {
              props.submitRating();
            }}
          >
            {'Rate us!'}
          </button>
        </div>
      </div>
    );
  }
};
export default function TrackingView(props) {
  if (props.loading && _.isEmpty(props.isError)) {
    return (
      <div className={css(styles.container)}>
        <BeatLoader sizeUnit={'px'} size={8} color={Colors.kgGreen} />
      </div>
    );
  } else if (
    !props.loading &&
    props.data === null &&
    !_.isEmpty(props.isError)
  ) {
    return <div className={css(styles.container)} />;
  } else if (props.data !== null) {
    if (props.data.status === 'SUCCESS') {
      return (
        <div className={css(styles.doneContainer)}>
          <MyHeaderComponent {...props} />
          <RatingComponent {...props} />
        </div>
      );
    } else if (props.data.status === 'IN_TRANSIT') {
      return (
        <div className={`customerTrackingMap ${css(styles.container)}`}>
          <MyHeaderComponent {...props} />
          <MyMapComponent isMarkerShown {...props} />
          <MyFooterComponent {...props} />
        </div>
      );
    } else if (props.data.status === 'FAIL') {
      return (
        <div className={css(styles.doneContainer)}>
          <MyHeaderComponent {...props} />
          <div className={css(styles.ratingParent)}>
            <p className={css(styles.ratingHeading)}>Task Failed !</p>
            <p className={css(styles.failReason)}>
              Reason : {props.data.fail_reason}
            </p>
          </div>
        </div>
      );
    } else {
      Util.topAlertError(ERROR_SOMETHING_WENT_WRONG.message);
      return <div className={css(styles.doneContainer)} />;
    }
  }
}
