// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow,
  TrafficLayer,
  mapTypeId
} from 'react-google-maps';
import ReactTimeAgo from 'react-time-ago';
import { compose, withProps } from 'recompose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTimesCircle,
  faMinus,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import styles from './DMMapStyles';
import { G_API_URL } from '../../../config/WebService';
import { AppStyles, Images } from '../../../theme';
import {
  DM_SIDE_BAR_WIDTH,
  DM_HEADER_HEIGHT,
  DM_FILTER_BAR_HEIGHT,
  CENTRAL_LONDON,
  DM_TASK_TYPE,
  TIME_FORMAT2,
  DATE_FORMAT1,
  TASK_FIELDS_NAME,
  DRIVER_FIELDS_NAME,
  HUB_FIELDS_NAME,
  DM_DRIVER_STATUS_TYPE
} from '../../../constants';
import {
  getTaskTypeDetail,
  getLocationText,
  sortBySequence
} from '../../../helpers/dmHelper';
import Util from '../../../services/Util';

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
    containerElement: (
      <div
        style={{
          height: `calc(100vh - ${DM_HEADER_HEIGHT + DM_FILTER_BAR_HEIGHT}px)`,
          width: `calc(100vw - 431px)`
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          height: `calc(100vh - ${DM_HEADER_HEIGHT + DM_FILTER_BAR_HEIGHT}px)`,
          width: `calc(100vw - 431px)`
        }}
      />
    )
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    maxZoom={10}
    defaultMaxZoom={10}
    defaultZoom={10}
    ref={props.mapRef}
    zoom={props.mapZoom}
    options={{
      styles: mapStyle,
      maxZoom: 20,
      minZoom: 2
    }}
    defaultCenter={CENTRAL_LONDON}
    onClick={props.onMapClick}
    mapTypeId={props.mapTypeId}
  >
    {props.showTraffic && <TrafficLayer autoUpdate />}
    {props.filterHasToday &&
      props.driversList.map(driver => {
        if (!_.isNil(driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE])) {
          // driver markers
          const isIdle = _.isNil(
            driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_TASK_ID]
          );
          const isHoveredDriver = props.hoveredDriver === driver.id;

          const taskList = props.driverWiseGroupedTasks[driver.id];
          const delayedTaskCount = _.filter(taskList, function(taskList) {
            return taskList.delayed_in_minutes > 0;
          });
          let icon;
          if (delayedTaskCount.length > 0) {
            icon = isIdle
              ? DM_DRIVER_STATUS_TYPE.ACTIVE_DELAY.icon
              : DM_DRIVER_STATUS_TYPE.IN_TRANSIT_DELAY.icon;
          } else {
            icon = isIdle
              ? DM_DRIVER_STATUS_TYPE.ACTIVE.icon
              : DM_DRIVER_STATUS_TYPE.IN_TRANSIT.icon;
          }

          return (
            <Marker
              position={{
                lat: driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE],
                lng: driver[DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]
              }}
              key={driver[DRIVER_FIELDS_NAME.ID]}
              icon={{
                url: icon,
                scaledSize: new window.google.maps.Size(14, 14)
              }}
              onMouseOver={() => {
                props.onDriverMouseOver(driver.id);
              }}
              onClick={() => {
                props.driverClick(driver[DRIVER_FIELDS_NAME.ID]);
              }}
            >
              {isHoveredDriver && <DriverDetail driver={driver} />}
            </Marker>
          );
        } else {
          return null;
        }
      })}

    {Object.keys(props.driverWiseGroupedTasks).map(key => {
      let dataArray = props.driverWiseGroupedTasks[key];
      // sort by sequence before render
      dataArray = _.sortBy(dataArray, [
        [TASK_FIELDS_NAME.STATUS],
        [TASK_FIELDS_NAME.SEQUENCE]
      ]);

      const intransitTaskIndex = _.findIndex(dataArray, {
        [TASK_FIELDS_NAME.STATUS]: DM_TASK_TYPE.IN_TRANSIT.slug
      });

      const hasIntransitTaskInList = intransitTaskIndex !== -1;

      // dataArray = _.sortBy(dataArray, [TASK_FIELDS_NAME.STATUS]);
      return dataArray.map((marker, index) => {
        const isDelayed = marker[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] > 0;
        const isPriority = marker[TASK_FIELDS_NAME.PRIORITY] === 1;
        const isAssignedTask =
          marker[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.ASSIGNED.slug;
        const isIntransitTask =
          marker[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.IN_TRANSIT.slug;
        const isSelected =
          props.polylineData.uniqueDriversForSelectedTasks.includes(
            marker[TASK_FIELDS_NAME.DRIVER_ID]
          ) &&
          (isAssignedTask || isIntransitTask);

        // adding sequence number for In-Transit task
        let sequenceNumber = 0;

        if (hasIntransitTaskInList) {
          if (isIntransitTask) {
            sequenceNumber = 1;
          } else {
            sequenceNumber = index + 2;
          }
        } else {
          sequenceNumber = index + 1;
        }

        const statusDetails = getTaskTypeDetail(
          marker[TASK_FIELDS_NAME.STATUS]
        );
        let statusIcon = statusDetails.icon;
        if (isDelayed) {
          statusIcon = statusDetails.delayIcon || statusDetails.icon;
        }
        if (isPriority) {
          statusIcon = statusDetails.priorityIcon;
        }
        if (isPriority && isDelayed) {
          statusIcon = statusDetails.priorityDelayIcon;
        }
        if (statusDetails.slug === 'SUCCESS' || statusDetails.slug === 'FAIL') {
          statusIcon = statusDetails.icon;
        }
        // tasks markers
        return (
          <Marker
            position={{
              lat: marker[TASK_FIELDS_NAME.LOCATION_LATITUDE],
              lng: marker[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
            }}
            key={marker.id}
            icon={{
              url: statusIcon,
              scaledSize: new window.google.maps.Size(20, 20)
            }}
            onClick={() => props.handleMarkerClick(marker)}
          >
            {isSelected && (
              <InfoWindow
                options={{
                  pixelOffset: new window.google.maps.Size(14, 35),
                  disableAutoPan: true
                }}
              >
                <p className={css(styles.mapCounter)}>{sequenceNumber}</p>
              </InfoWindow>
            )}
            {marker.isSelected && (
              <InfoWindow
                options={{
                  disableAutoPan: true
                }}
              >
                <div className={css(styles.selectedTooltipWrapper)}>
                  <p
                    id="selectedTooltipTitle"
                    className={css(styles.selectedTooltipTitle)}
                  >
                    {getLocationText(marker)}
                  </p>
                  {!_.isEqual(marker[TASK_FIELDS_NAME.RECIPIENT_NAME], '-') &&
                    !_.isEmpty(marker[TASK_FIELDS_NAME.RECIPIENT_NAME]) && (
                      <p
                        id="selectedTooltipTitle"
                        className={css(styles.selectedTooltipSubTitle)}
                      >
                        {marker[TASK_FIELDS_NAME.RECIPIENT_NAME]}
                      </p>
                    )}

                  {isDelayed && (
                    <p className={css(styles.selectedTooltipSubTitle)}>
                      {moment
                        .utc(
                          moment
                            .duration(
                              marker[TASK_FIELDS_NAME.DELAYED_IN_MINUTES],
                              'minutes'
                            )
                            .asMilliseconds()
                        )
                        .format(TIME_FORMAT2)}{' '}
                      delayed
                    </p>
                  )}
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      });
    })}

    {props.polylineData.polyLineFinalData.map((item, index) => {
      return (
        <Polyline
          key={index}
          path={item}
          geodesic={true}
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
        />
      );
    })}

    {props.hubList.length > 0 &&
      props.hubList.map(hub => {
        if (!_.isNil(hub[HUB_FIELDS_NAME.LOCATION])) {
          const isHoveredHub = props.hoveredHubId === hub[HUB_FIELDS_NAME.ID];
          // hub markers
          return (
            <Marker
              position={{
                lat: hub[HUB_FIELDS_NAME.LOCATION].latitude,
                lng: hub[HUB_FIELDS_NAME.LOCATION].longitude
              }}
              key={hub[HUB_FIELDS_NAME.ID]}
              icon={{
                url: Images.hub,
                scaledSize: new window.google.maps.Size(25, 25)
              }}
              // icon={Images.hub}
              onClick={() => props.onHubClick(hub)}
              onMouseOver={() => {
                props.setHoveredHubId(hub[HUB_FIELDS_NAME.ID]);
              }}
            >
              {isHoveredHub && <HubDetail hub={hub} />}
            </Marker>
          );
        } else {
          return null;
        }
      })}
  </GoogleMap>
));

function DriverDetail({ driver }) {
  return (
    <InfoWindow
      options={{
        pixelOffset: new window.google.maps.Size(0, 10),
        disableAutoPan: true
      }}
    >
      <div className={css(styles.driverTooltipWrapper)}>
        <p className={css(styles.driverTooltipName)}>
          {driver[DRIVER_FIELDS_NAME.DRIVER_NAME]}
        </p>
        <a>
          <p className={css(styles.driverTooltipPhone)}>
            {driver[DRIVER_FIELDS_NAME.DRIVER_PHONE]}
          </p>
        </a>
        {!_.isNull(driver[DRIVER_FIELDS_NAME.DRIVER_LOCATION_TIMESTAMP]) && (
          <p className={css(styles.driverTooltipLastupdate)}>
            Last updated:{' '}
            <ReactTimeAgo
              date={moment(
                driver[DRIVER_FIELDS_NAME.DRIVER_LOCATION_TIMESTAMP]
              ).toDate()}
            />
          </p>
        )}
      </div>
    </InfoWindow>
  );
}
function HubDetail({ hub }) {
  return (
    <InfoWindow
      options={{
        pixelOffset: new window.google.maps.Size(0, 10),
        disableAutoPan: true
      }}
    >
      <div className={css(styles.hubTooltipWrapper)}>
        <p className={css(styles.hubTooltipName)}>
          {hub[HUB_FIELDS_NAME.NAME]}
        </p>
        {!_.isEmpty(hub[HUB_FIELDS_NAME.ADDRESS]) && (
          <a>
            <p className={css(styles.hubTooltipAddress)}>
              {hub[HUB_FIELDS_NAME.ADDRESS]}
            </p>
          </a>
        )}
        {_.isEmpty(hub[HUB_FIELDS_NAME.ADDRESS]) && (
          <a>
            <p className={css(styles.hubTooltipAddress)}>
              {hub[HUB_FIELDS_NAME.LOCATION].latitude} {' , '}
              {hub[HUB_FIELDS_NAME.LOCATION].longitude}
            </p>
          </a>
        )}
      </div>
    </InfoWindow>
  );
}

function SelectedTasksView(props) {
  if (props.selectedTasks.length) {
    return (
      <div className={`${css(styles.selectedBarWrapper)}`}>
        <p className={`${css(styles.selectedBarText)}`}>
          {props.selectedTasks.length} task selected
        </p>
        <FontAwesomeIcon
          className={css(styles.removeImage)}
          icon={faTimesCircle}
          onClick={props.dmUnselectAllTasks}
        />
      </div>
    );
  }

  return null;
}

function MapControlls(props) {
  return (
    <div className={`${css(styles.mapControllsWrappers)}`}>
      <div className={`${css(styles.mapControllsPlusMinusWrappers)}`}>
        <button
          onClick={props.onMapZoomInClick}
          className={`${css([styles.mapControllsBtn1, styles.borderBottom])}`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <button
          onClick={props.onMapZoomOutClick}
          className={`${css(styles.mapControllsBtn1)}`}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>

      <button
        onClick={props.onMapZoomToFitClick}
        className={`${css(styles.mapZoomToFit)}`}
      >
        <img src={Images.iconZoomToFit} />
      </button>
    </div>
  );
}
function MapTypeControlls(props) {
  const satelliteBtnDisabled = props.mapTypeId === 'hybrid';
  const mapBtnDisabled = props.mapTypeId === 'roadmap';

  return (
    <div className={`${css(styles.mapTypeControllsWrappers)}`}>
      <div className={`${css(styles.mapTypeControllerButtonsWrappers)}`}>
        <button
          disabled={mapBtnDisabled}
          onClick={props.switchMapType}
          className={`${css([
            styles.mapTypeControllsBtn1,
            styles.borderRight,
            mapBtnDisabled && styles.disableBtn
          ])}`}
        >
          Map
        </button>

        <button
          disabled={satelliteBtnDisabled}
          onClick={props.switchMapType}
          className={`${css([
            styles.mapTypeControllsBtn1,
            satelliteBtnDisabled && styles.disableBtn
          ])}`}
        >
          Satellite
        </button>
      </div>
      <div
        className={css([
          styles.mapTypeControllerButtonsWrappers,
          AppStyles.pLeft10
        ])}
      >
        <button
          onClick={props.switchTrafficLayer}
          className={css(
            props.showTraffic
              ? styles.trafficButtonSelected
              : styles.trafficButton
          )}
        >
          Traffic
        </button>
      </div>
    </div>
  );
}

export default function DMMapView(props) {
  return (
    <div className={`mapWrap ${css(styles.mapWrapper)}`}>
      <MyMapComponent isMarkerShown {...props} />
      <SelectedTasksView {...props} />
      <MapControlls {...props} />
      <MapTypeControlls {...props} />
    </div>
  );
}
