import _ from 'lodash';
import moment from 'moment';
import momentTZ from 'moment-timezone';
import {
  SERVICE_TYPES,
  DATE_TIME_FORMAT1,
  INVALID_POSTCODE_ERROR,
  NOT_AVAILABLE_IN_AREA,
  VEHICLE_TYPES,
  SERVER_TIME_ZONE
} from '../constants';
import DataHandler from '../services/DataHandler';
import Util from '../services/Util';
import { asapHoursData, initalFinalBooking } from '../reducers/booking';
import {
  getSmartEstimateRequest,
  updateBookingLocationData,
  flushCurrentBooking,
  getSmartEstimateSuccess
} from '../actions/BookingActions';

const getAsapHoursString = data => {
  const finalArray = [];
  _.mapKeys(data, (value, key) => {
    finalArray.push({
      title: key,
      data: _.isEmpty(value) ? [{ isEmpty: true }] : value
    });
  });
  return finalArray;
};

const isVanType = (vanType, vehicalIndex) => {
  return _.indexOf(vanType, vehicalIndex) !== -1;
};

const bookingHasMoreThan1Address = () => {
  const { route } = DataHandler.getStore().getState().booking.finalBooking;
  const routeArray = getLocationArrayFromRouteObj(route);
  let filledLocationCount = 0;
  routeArray.forEach(element => {
    if (!_.isEmpty(element.fullAddress)) {
      filledLocationCount++;
    }
  });

  return filledLocationCount >= 2;
};

const getStop2StopDistanceDuration = (
  addedItemIndex,
  estimateRequired = true,
  callBack
) => {
  // making sure that address is saved to reducer
  if (bookingHasMoreThan1Address()) {
    const {
      route,
      pickup,
      selectedVehicleIndex
    } = DataHandler.getStore().getState().booking.finalBooking;

    const routeArray = getLocationArrayFromRouteObj(route);
    const currentItem = routeArray[addedItemIndex];
    const nextItem = routeArray[addedItemIndex + 1];
    const previousItem = routeArray[addedItemIndex - 1];
    const hasNextItem =
      !_.isUndefined(nextItem) && !_.isEmpty(nextItem.fullAddress);
    const hasPreviousItem =
      !_.isUndefined(previousItem) && !_.isEmpty(previousItem.fullAddress);

    // setting payload for distance request

    const payload = {
      origins: [],
      destinations: [],
      travelMode: isVanType(VEHICLE_TYPES.CARGO, selectedVehicleIndex)
        ? window.google.maps.TravelMode.BICYCLING
        : window.google.maps.TravelMode.DRIVING,
      unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      drivingOptions: {
        departureTime: moment(pickup).toDate(),
        trafficModel: window.google.maps.TrafficModel.BEST_GUESS
      }
    };

    // adding origins and destinations

    if (hasPreviousItem && hasNextItem) {
      payload.origins.push(
        `${previousItem.latitude},${previousItem.longitude}`
      );
      payload.origins.push(`${currentItem.latitude},${currentItem.longitude}`);
      payload.destinations.push(
        `${currentItem.latitude},${currentItem.longitude}`
      );
      payload.destinations.push(`${nextItem.latitude},${nextItem.longitude}`);
    } else if (!hasPreviousItem && hasNextItem) {
      payload.origins.push(`${currentItem.latitude},${currentItem.longitude}`);
      payload.destinations.push(`${nextItem.latitude},${nextItem.longitude}`);
    } else if (hasPreviousItem && !hasNextItem) {
      payload.origins.push(
        `${previousItem.latitude},${previousItem.longitude}`
      );
      payload.destinations.push(
        `${currentItem.latitude},${currentItem.longitude}`
      );
    } else {
      // no next no previous
      DataHandler.getStore().dispatch(
        updateBookingLocationData(
          {
            index: addedItemIndex,
            isDropoff: isDropoff(addedItemIndex, routeArray.length),
            isPickup: isPickup(addedItemIndex),
            distanceMiles: 0,
            durationSeconds: 0
          },
          () => {
            if (estimateRequired) estimateSmartly();
            if (callBack) callBack();
          }
        )
      );
    }

    if (hasPreviousItem || hasNextItem) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(payload, (response, status) => {
        if (Util.checkDev()) console.log({ status });
        // distnace request callback

        if (status === 'OK') {
          if (hasPreviousItem && hasNextItem) {
            // handling with previous items
            const previousItemDataRes = _.cloneDeep(
              response.rows[0].elements[0]
            );

            if (previousItemDataRes.status === 'OK') {
              const previousItemData = {
                index: addedItemIndex - 1,
                isDropoff: isDropoff(addedItemIndex - 1, routeArray.length),
                isPickup: isPickup(addedItemIndex - 1),
                distanceMiles: Util.getMiles(
                  previousItemDataRes.distance.value
                ),
                durationSeconds: previousItemDataRes.duration_in_traffic
                  ? previousItemDataRes.duration_in_traffic.value
                  : previousItemDataRes.duration
                  ? previousItemDataRes.duration.value
                  : 0
              };

              DataHandler.getStore().dispatch(
                updateBookingLocationData(previousItemData)
              );
            }

            // handling with own items
            const ownItemDataRes = _.cloneDeep(response.rows[1].elements[1]);

            if (ownItemDataRes.status === 'OK') {
              const ownItemData = {
                index: addedItemIndex,
                isDropoff: isDropoff(addedItemIndex, routeArray.length),
                isPickup: isPickup(addedItemIndex),
                distanceMiles: Util.getMiles(ownItemDataRes.distance.value),
                durationSeconds: ownItemDataRes.duration_in_traffic
                  ? ownItemDataRes.duration_in_traffic.value
                  : ownItemDataRes.duration
                  ? ownItemDataRes.duration.value
                  : 0
              };

              DataHandler.getStore().dispatch(
                updateBookingLocationData(ownItemData, () => {
                  if (estimateRequired) estimateSmartly();
                  if (callBack) callBack();
                })
              );
            }
          } else if (!hasPreviousItem && hasNextItem) {
            const respData = response.rows[0].elements[0];
            if (respData.status === 'OK') {
              const { duration_in_traffic, distance, duration } = respData;

              const data = {
                index: addedItemIndex,
                isDropoff: isDropoff(addedItemIndex, routeArray.length),
                isPickup: isPickup(addedItemIndex),
                distanceMiles: Util.getMiles(distance.value),
                durationSeconds: duration_in_traffic
                  ? duration_in_traffic.value
                  : duration
                  ? duration.value
                  : 0
              };
              DataHandler.getStore().dispatch(
                updateBookingLocationData(data, () => {
                  if (estimateRequired) estimateSmartly();
                  if (callBack) callBack();
                })
              );
            }
          } else if (hasPreviousItem && !hasNextItem) {
            const respData = response.rows[0].elements[0];

            if (respData.status === 'OK') {
              const {
                duration_in_traffic,
                distance = { value: 0 },
                duration
              } = respData;
              const data = {
                index: addedItemIndex - 1,
                isDropoff: isDropoff(addedItemIndex - 1, routeArray.length),
                isPickup: isPickup(addedItemIndex - 1),
                distanceMiles: Util.getMiles(distance.value),
                durationSeconds: duration_in_traffic
                  ? duration_in_traffic.value
                  : duration
                  ? duration.value
                  : 0
              };

              DataHandler.getStore().dispatch(
                updateBookingLocationData(data, () => {
                  if (estimateRequired) estimateSmartly();
                  if (callBack) callBack();
                })
              );
            }
          }
        }
      });
    }
  } else {
    // if single location balance flush all estimates
    DataHandler.getStore().dispatch(
      getSmartEstimateSuccess({
        estimate: 0
      })
    );
  }
};

const getLocationArrayFromRouteObj = data => {
  return [
    {
      ...data.pickupLocation,
      ...{ isPickup: true, isDropoff: false }
    },
    ...data.additionalLocations,
    { ...data.dropoffLocation, ...{ isDropoff: true, isPickup: false } }
  ];
};

const getCoordinatesList = data => {
  const listData = getLocationArrayFromRouteObj(data);
  const finalList = [];
  listData.forEach((element, index) => {
    if (!_.isNull(element.latitude)) {
      finalList.push({
        lat: element.latitude,
        lng: element.longitude,
        isPickup: element.isPickup,
        isDropoff: element.isDropoff,
        serialNumber: index + 1
      });
    }
  });
  return finalList;
};

const getSelectedServiceType = serviceId => {
  for (var key in SERVICE_TYPES) {
    if (SERVICE_TYPES[key].id == serviceId) {
      return SERVICE_TYPES[key].title;
    }
  }
};

const getSelectedVehicle = () => {
  const { vehicles } = DataHandler.getStore().getState().booking;
  let selectedVehicleIndex = null;
  if (vehicles.length) {
    selectedVehicleIndex = DataHandler.getStore().getState().booking
      .finalBooking.selectedVehicleIndex;
    return vehicles[selectedVehicleIndex];
  }
  return null;
};

const getRefinedAddressDetails = rawData => {
  const splittedAddress = rawData.fullAddress.split(',');
  let resultComponentsPostcode = '';
  let resultComponentsStreetNumber = '';
  let resultComponentsStreetName = '';
  let resultComponentsCountryName = '';
  rawData.address_components.forEach(element => {
    if (element.types[0] == 'postal_town') {
      resultComponentsPostcode = element.long_name;
    }
    if (element.types[0] == 'street_number') {
      resultComponentsStreetNumber = element.long_name;
    }
    if (element.types[0] == 'route') {
      resultComponentsStreetName = element.long_name;
    }
    if (element.types[0] == 'country') {
      resultComponentsCountryName = element.long_name;
    }
  });

  let business_name = '';
  if (
    !_.isUndefined(
      rawData.business_status
    ) /* && rawData.business_status === "OPERATIONAL" */
  ) {
    business_name = rawData.name;
  }
  return {
    fullAddress: rawData.fullAddress,
    line_1: rawData.line_1,
    line_2: rawData.line_2,
    line_3: rawData.line_3,
    post_town: rawData.post_town,
    postcode: rawData.postcode,
    selectedFromSuggestion: true,
    postcodeValid: rawData.isValid,
    postcodeError: null,
    availableInArea: rawData.availableInArea,
    latitude: rawData.geometry.location.lat,
    longitude: rawData.geometry.location.lng,
    number: splittedAddress[0] || '',
    business_name,
    city_town: resultComponentsPostcode,
    street_number: resultComponentsStreetNumber,
    street_name: resultComponentsStreetName,
    country_name: resultComponentsCountryName
  };
};
const getMapPinRefinedAddressDetails = rawData => {
  const splittedAddress = rawData.fullAddress.split(',');

  return {
    fullAddress: rawData.fullAddress,
    line_1: rawData.line_1,
    line_2: rawData.line_2,
    line_3: rawData.line_3,
    post_town: rawData.post_town,
    postcode: rawData.postcode,
    selectedFromSuggestion: true,
    postcodeValid: rawData.isValid,
    postcodeError: null,
    availableInArea: rawData.availableInArea,
    latitude: rawData.latitude,
    longitude: rawData.longitude,
    number: splittedAddress[0] || ''
  };
};
const getEmptyAddressDetails = () => ({
  fullAddress: '',
  line_1: '',
  line_2: '',
  line_3: '',
  post_town: '',
  postcode: '',
  selectedFromSuggestion: true,
  postcodeValid: false,
  postcodeError: null,
  availableInArea: true,
  longitude: null,
  latitude: null
});

const getFinalDataForSmartEstimate = () => {
  const { finalBooking, vehicles } = DataHandler.getStore().getState().booking;
  const { selectedVehicleIndex, asapHours } = finalBooking;

  const selectedVehicle = !_.isUndefined(vehicles[selectedVehicleIndex])
    ? vehicles[selectedVehicleIndex]
    : {};
  let extraPrice = 0;
  if (!_.isEmpty(asapHours)) {
    const typeOfAsapHour = Object.keys(asapHours)[0];
    extraPrice =
      asapHoursData[typeOfAsapHour][asapHours[typeOfAsapHour]].amount;
  }

  return {
    ...finalBooking,
    ...{
      size: selectedVehicle.slug,
      liftingPowerIndex: selectedVehicle.max_helper,
      requiredTime: 0, // this is temporarily hardcoaded
      collectionRange: 10, // this is temporarily hardcoaded
      pickup: momentTZ(finalBooking.pickup)
        .tz(SERVER_TIME_ZONE)
        .format(DATE_TIME_FORMAT1),

      extraPrice,
      ...getTotalDistanceDuration()
    }
  };
};

const estimateSmartly = () => {
  if (bookingHasMoreThan1Address()) {
    // has more than one address
    if (
      !_.isUndefined(getTotalDistanceDuration().distanceInMiles) &&
      getTotalDistanceDuration().distanceInMiles > 0
    ) {
      // if has valid distance
      DataHandler.getStore().dispatch(
        getSmartEstimateRequest(getFinalDataForSmartEstimate())
      );
    } else if (getTotalDistanceDuration().distanceInMiles === 0) {
      DataHandler.getStore().dispatch(
        getSmartEstimateSuccess({
          estimate: 0
        })
      );
    }
  } else {
    // if single location balance flush all estimates
    DataHandler.getStore().dispatch(
      getSmartEstimateSuccess({
        estimate: 0
      })
    );
  }
};

const flushCurrentBookingNow = () => {
  DataHandler.getStore().dispatch(flushCurrentBooking());
};

const validateAddressClientMiddleware = (
  data,
  index,
  isPickup,
  isDropoff,
  callBack,
  gotFromLocationTyped
) => {
  if (!data.postcodeValid) {
    // not valid post code
    DataHandler.getStore().dispatch(
      updateBookingLocationData({
        ...{ index, isDropoff, isPickup },
        ...{ error: INVALID_POSTCODE_ERROR }
      })
    );
    if (callBack) callBack();

    Util.topAlertError(INVALID_POSTCODE_ERROR);
  } else if (!data.availableInArea) {
    // not available in area
    DataHandler.getStore().dispatch(
      updateBookingLocationData({
        ...{ index, isDropoff, isPickup },
        ...{ error: NOT_AVAILABLE_IN_AREA }
      })
    );
    if (callBack) callBack();

    Util.topAlertError(NOT_AVAILABLE_IN_AREA);
  } else {
    // address is okay and save data to reducer

    const payload = _.cloneDeep(data);
    if (gotFromLocationTyped) payload['isUpdatedRecord'] = true;
    DataHandler.getStore().dispatch(
      updateBookingLocationData({
        ...{ index, isDropoff, isPickup },
        ...payload,
        ...{ error: null }
      })
    );

    setTimeout(() => {
      getStop2StopDistanceDuration(index);
    }, 200);

    if (callBack) callBack();
  }
};

const bookingInProgress = () => {
  const { finalBooking } = DataHandler.getStore().getState().booking;

  return !_.isEqual(finalBooking, initalFinalBooking);
};

const isPickup = index => index === 0;
const isDropoff = (index, length) => length === index + 1;

const getTotalDistanceDuration = () => {
  const { route } = DataHandler.getStore().getState().booking.finalBooking;
  const routeArray = getLocationArrayFromRouteObj(route);
  const finalData = { distanceSum: 0, durationSeconds: 0 };
  routeArray.forEach(element => {
    finalData.distanceSum = finalData.distanceSum + element.distanceMiles;
    finalData.durationSeconds =
      finalData.durationSeconds + element.durationSeconds;
  });
  return {
    distanceInMiles: _.round(finalData.distanceSum, 2),
    durationInMinutes: _.round(finalData.durationSeconds / 60, 2)
  };
};

const getLocationNewId = routes => {
  const routeArray = getLocationArrayFromRouteObj(routes);
  const maxId = _.maxBy(routeArray, 'id');
  return maxId.id + 1 || 9999;
};

export {
  getAsapHoursString,
  isVanType,
  getLocationArrayFromRouteObj,
  getSelectedServiceType,
  getRefinedAddressDetails,
  getSelectedVehicle,
  getCoordinatesList,
  bookingHasMoreThan1Address,
  getFinalDataForSmartEstimate,
  estimateSmartly,
  getEmptyAddressDetails,
  validateAddressClientMiddleware,
  flushCurrentBookingNow,
  // getBookingDistanceDuration,
  bookingInProgress,
  getStop2StopDistanceDuration,
  isPickup,
  isDropoff,
  getTotalDistanceDuration,
  getLocationNewId,
  getMapPinRefinedAddressDetails
};
