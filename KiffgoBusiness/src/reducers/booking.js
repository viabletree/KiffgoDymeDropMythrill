// @flow
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import moment from 'moment';
import { Images } from '../theme';
import {
  GET_VEHICLES,
  SELECT_BOOKING_VEHICLE,
  CHANGE_BOOKING_TAB,
  SELECT_BOOKING_SERVICE,
  SELECT_ASAP_HOURS_OPTION,
  CHANGE_PICKUP_DATE,
  SET_FOCUSED_LOCATION_INDEX,
  UPDATE_BOOKING_LOCATION_DATA,
  ADD_ADDITIONAL_LOCATION,
  REMOVE_ADDITIONAL_LOCATION,
  UPDATE_RETURN_DISCOUNT,
  GET_SMART_ESTIMATE,
  UPDATE_EXTRA_LOADING_TIME,
  UPDATE_EXTRA_UNLOADING_TIME,
  UPDATE_NOTE_TO_DRIVER,
  FLUSH_CURRENT_BOOKING,
  CONFIRM_CURRENT_BOOKING,
  BOOKING_THANK_YOU_VISITED,
  SUBMIT_BOOKING,
  REMOVE_UPDATED_ROUTE_FLAG
} from '../actions/ActionTypes';
import {
  EMPTY_LOCATION_OBJECT,
  UPDATE_LOADING_TIME_TYPE,
  MIN_LOADING_TIME_IN_MINUTES,
  DATE_TIME_FORMAT1,
  SERVICE_TYPES,
  STOP_TYPE
} from '../constants';
import Util from '../services/Util';
import { getLocationNewId } from '../helpers/bookingHelper';

const LOADING_STEP = 10;

export const asapHoursData = {
  cargo: [
    { title: 'Pickup within 30 min', hours: 0.5, amount: 1000 },
    { title: 'Pickup within 1 hour', hours: 1, amount: 500 },
    { title: 'Pickup within 2 hours', hours: 2, amount: 0 }
  ],
  others: [
    { title: 'Pickup within 1 hour', hours: 1, amount: 200 },
    { title: 'Pickup within 2 hours', hours: 2, amount: 150 },
    { title: 'Pickup within 3 hours', hours: 3, amount: 100 }
  ]
};

export const initalFinalBooking = {
  selectedVehicleIndex: 3,
  selectedServiceId: /* 2, // */ null,
  pickup: /* moment()
    .add(2, "hour")
    .toISOString(), // */ null,
  asapHours: {},
  route: {
    pickupLocation: _.cloneDeep({
      ...EMPTY_LOCATION_OBJECT,
      ...{ id: 1, isCollection: true }
    }),
    additionalLocations: [],
    dropoffLocation: _.cloneDeep({
      ...EMPTY_LOCATION_OBJECT,
      ...{ id: 2, isDelivery: true }
    })
  },
  extraLoadingTime: MIN_LOADING_TIME_IN_MINUTES,
  extraUnloadingTime: MIN_LOADING_TIME_IN_MINUTES,
  returnDiscount: false,
  estimation: {
    estimate: 0
  },
  noteToDriver: ''
};

const initialState = Immutable({
  bookingSuccessDetail: {},
  vehicles: [],
  services: [
    {
      id: 1,
      title: 'ASAP',
      image: Images.asap_serv,
      hours: _.cloneDeep(asapHoursData)
    },
    {
      id: 2,
      title: 'Scheduled',
      image: Images.scheduled_serv
    },
    {
      id: 3,
      title: 'Full Day',
      image: Images.fullday_serv
    },
    {
      id: 4,
      title: 'Intercity',
      image: Images.lightlong_serv
    }
  ],

  tabsStatus: { selectedIndex: 0 },
  generalBooking: {
    focusedLocationIndex: null,
    // bookingConfirmed: false,
    bookingSubmitted: false
  },

  finalBooking: _.cloneDeep(initalFinalBooking)
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BOOKING_VEHICLE: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.selectedVehicleIndex = action.data;
      tempfinalBooking.extraLoadingTime =
        state.vehicles[action.data].min_loading_unloading_time_minutes / 2;
      tempfinalBooking.extraUnloadingTime =
        state.vehicles[action.data].min_loading_unloading_time_minutes / 2;
      tempfinalBooking.selectedServiceId = null;
      tempfinalBooking.asapHours = {};
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case CHANGE_BOOKING_TAB: {
      const temptabsStatus = _.cloneDeep(state.tabsStatus);
      temptabsStatus.selectedIndex = action.data;
      return Immutable.merge(state, {
        tabsStatus: temptabsStatus
      });
    }

    case SELECT_BOOKING_SERVICE: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.selectedServiceId = action.data;
      if (tempfinalBooking.selectedServiceId) {
        if (tempfinalBooking.selectedServiceId === SERVICE_TYPES.FULL_DAY.id) {
          // removing extra loading / unloading time if is FULL Day
          tempfinalBooking.extraLoadingTime = 0;
          tempfinalBooking.extraUnloadingTime = 0;
        } else {
          // refreshing extra loading / unloading time on service type change
          tempfinalBooking.extraLoadingTime =
            state.vehicles[tempfinalBooking.selectedVehicleIndex]
              .min_loading_unloading_time_minutes / 2;
          tempfinalBooking.extraUnloadingTime =
            state.vehicles[tempfinalBooking.selectedVehicleIndex]
              .min_loading_unloading_time_minutes / 2;
        }
      }

      // clearing ASAP on changing service type
      if (action.data) tempfinalBooking.asapHours = {};
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case SELECT_ASAP_HOURS_OPTION: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      const asapHours = {};
      asapHours[action.key] = action.index;
      tempfinalBooking.asapHours = asapHours;
      const typeOfAsapHour = Object.keys(asapHours)[0];
      const selectedIndex = asapHours[typeOfAsapHour];
      const numberOfHours = asapHoursData[typeOfAsapHour][selectedIndex].hours;

      tempfinalBooking.pickup = Util.getFormattedDateTime(
        moment().add(numberOfHours, 'hours'),
        DATE_TIME_FORMAT1
      );
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case CHANGE_PICKUP_DATE: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.pickup = action.data;
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case SET_FOCUSED_LOCATION_INDEX: {
      const tempGeneralBooking = _.cloneDeep(state.generalBooking);
      tempGeneralBooking.focusedLocationIndex = action.index;
      return Immutable.merge(state, {
        generalBooking: tempGeneralBooking
      });
    }

    case UPDATE_BOOKING_LOCATION_DATA: {
      const { index, isDropoff, isPickup } = action.data;
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      const additionalLocations = _.cloneDeep(
        tempfinalBooking.route.additionalLocations
      );

      // setting isUpdatedRecord to false before getting data
      tempfinalBooking.route.pickupLocation.isUpdatedRecord = false;
      tempfinalBooking.route.dropoffLocation.isUpdatedRecord = false;
      tempfinalBooking.route.additionalLocations = _.map(
        additionalLocations,
        o => _.extend({ isUpdatedRecord: false }, o)
      );

      if (isPickup) {
        const isPickupCopy = _.cloneDeep(tempfinalBooking.route.pickupLocation);
        tempfinalBooking.route.pickupLocation = {
          ...isPickupCopy,
          ...action.data
        };
      } else if (isDropoff) {
        const isDropoffCopy = _.cloneDeep(
          tempfinalBooking.route.dropoffLocation
        );

        tempfinalBooking.route.dropoffLocation = {
          ...isDropoffCopy,
          ...action.data
        };
      } else {
        const additionalLocCopy = _.cloneDeep(
          tempfinalBooking.route.additionalLocations[index - 1]
        );
        tempfinalBooking.route.additionalLocations[index - 1] = {
          ...additionalLocCopy,
          ...action.data
        };
      }

      // if pickup and dropoff are same check mark "Add Return Delivery"

      if (
        !_.isEmpty(tempfinalBooking.route.pickupLocation.fullAddress) &&
        _.isEqual(
          tempfinalBooking.route.pickupLocation.fullAddress,
          tempfinalBooking.route.dropoffLocation.fullAddress
        )
      ) {
        tempfinalBooking.returnDiscount = true;
      } else {
        tempfinalBooking.returnDiscount = false;
      }

      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case ADD_ADDITIONAL_LOCATION: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      const tempGeneralBooking = _.cloneDeep(state.generalBooking);
      const jobTypeCollection = action.stopType === STOP_TYPE.COLLECTION.slug;
      const jobTypeDelivery = action.stopType === STOP_TYPE.DELIVERY.slug;

      const dropOffTemp = _.cloneDeep(state.finalBooking.route.dropoffLocation);

      if (tempfinalBooking.returnDiscount) {
        // if Add return is "ON" add additional location instead of adding dropoff
        tempfinalBooking.route.additionalLocations.push({
          ...EMPTY_LOCATION_OBJECT,
          ...{
            id: getLocationNewId(tempfinalBooking.route),
            isDropoff: false,
            isCollection: jobTypeCollection,
            isDelivery: jobTypeDelivery
          }
        });

        tempfinalBooking.route.dropoffLocation.id = getLocationNewId(
          tempfinalBooking.route
        );

        // focus on that field
        tempGeneralBooking.focusedLocationIndex =
          tempfinalBooking.route.additionalLocations.length;
      } else {
        tempfinalBooking.route.additionalLocations.push({
          ...dropOffTemp,
          ...{
            id: getLocationNewId(tempfinalBooking.route),
            isDropoff: false
          }
        });

        tempfinalBooking.route.dropoffLocation = _.cloneDeep({
          ...EMPTY_LOCATION_OBJECT,
          ...{
            id: getLocationNewId(tempfinalBooking.route),
            isCollection: jobTypeCollection,
            isDelivery: jobTypeDelivery
          }
        });

        // focus on that field
        tempGeneralBooking.focusedLocationIndex =
          tempfinalBooking.route.additionalLocations.length + 1;
      }

      return Immutable.merge(state, {
        finalBooking: tempfinalBooking,
        generalBooking: tempGeneralBooking
      });
    }

    case REMOVE_ADDITIONAL_LOCATION: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);

      if (
        _.isUndefined(tempfinalBooking.route.additionalLocations[action.index])
      ) {
        tempfinalBooking.route.dropoffLocation =
          tempfinalBooking.route.additionalLocations[action.index - 1];
        tempfinalBooking.route.additionalLocations.splice(action.index - 1, 1);
      } else {
        tempfinalBooking.route.additionalLocations.splice(action.index, 1);
      }

      // if pickup and dropoff are same check mark "Add Return Delivery"

      if (
        !_.isEmpty(tempfinalBooking.route.pickupLocation.fullAddress) &&
        _.isEqual(
          tempfinalBooking.route.pickupLocation.fullAddress,
          tempfinalBooking.route.dropoffLocation.fullAddress
        )
      ) {
        tempfinalBooking.returnDiscount = true;
      } else {
        tempfinalBooking.returnDiscount = false;
      }

      // removing focus
      const tempGeneralBooking = _.cloneDeep(state.generalBooking);
      tempGeneralBooking.focusedLocationIndex = null;

      // setting drop off distnance and duration to zero because it does not have another stop after that
      tempfinalBooking.route.dropoffLocation.distanceMiles = 0;
      tempfinalBooking.route.dropoffLocation.durationSeconds = 0;

      return Immutable.merge(state, {
        finalBooking: tempfinalBooking,
        generalBooking: tempGeneralBooking
      });
    }

    case UPDATE_RETURN_DISCOUNT: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      if (!tempfinalBooking.returnDiscount) {
        // on toggle "ON"

        const pickupCopy = _.cloneDeep(tempfinalBooking.route.pickupLocation);
        const dropoffCopy = _.cloneDeep(tempfinalBooking.route.dropoffLocation);

        if (!_.isEmpty(tempfinalBooking.route.dropoffLocation)) {
          // moving dropOff to last additional location
          tempfinalBooking.route.additionalLocations.push({
            ...dropoffCopy,
            ...{
              id: getLocationNewId(tempfinalBooking.route),
              isDropoff: false,
              isPickup: false,
              distanceMiles: 0,
              durationSeconds: 0
            }
          });
        }

        // setting dropoff same as pickup
        tempfinalBooking.route.dropoffLocation = {
          ...pickupCopy,
          ...{
            id: getLocationNewId(tempfinalBooking.route),
            isDropoff: true,
            isPickup: false,
            distanceMiles: 0,
            durationSeconds: 0,
            images: []
          }
        };
      } else {
        // on toggle "OFF"
        if (
          tempfinalBooking.route.additionalLocations.length > 0 &&
          !_.isEmpty(
            tempfinalBooking.route.additionalLocations[
              tempfinalBooking.route.additionalLocations.length - 1
            ].fullAddress
          )
        ) {
          // has additional locations before dropoff
          const tempLastAdditionalLocation = _.cloneDeep(
            tempfinalBooking.route.additionalLocations[
              tempfinalBooking.route.additionalLocations.length - 1
            ]
          );
          // setting dropoff as last item of additional location and
          tempfinalBooking.route.dropoffLocation = {
            ...tempLastAdditionalLocation,
            ...{
              id: getLocationNewId(tempfinalBooking.route),
              isDropoff: true,
              isPickup: false,
              distanceMiles: 0,
              durationSeconds: 0
            }
          };
        } else {
          // no additional location before dropoff

          tempfinalBooking.route.dropoffLocation = {
            ...EMPTY_LOCATION_OBJECT,
            ...{
              id: getLocationNewId(tempfinalBooking.route),
              isDropoff: false,
              isPickup: false
            }
          };
        }

        tempfinalBooking.route.additionalLocations.splice(
          tempfinalBooking.route.additionalLocations.length - 1,
          1
        );
      }

      tempfinalBooking.returnDiscount = !tempfinalBooking.returnDiscount; // toggle button
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case GET_SMART_ESTIMATE.SUCCESS: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.estimation = action.data;
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case UPDATE_EXTRA_LOADING_TIME: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);

      if (action.updateType === UPDATE_LOADING_TIME_TYPE.ADD) {
        tempfinalBooking.extraLoadingTime =
          tempfinalBooking.extraLoadingTime + LOADING_STEP;
      } else if (action.updateType === UPDATE_LOADING_TIME_TYPE.SUBTRACT) {
        tempfinalBooking.extraLoadingTime =
          tempfinalBooking.extraLoadingTime - LOADING_STEP;
      }
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case UPDATE_EXTRA_UNLOADING_TIME: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);

      if (action.updateType === UPDATE_LOADING_TIME_TYPE.ADD) {
        tempfinalBooking.extraUnloadingTime =
          tempfinalBooking.extraUnloadingTime + LOADING_STEP;
      } else if (action.updateType === UPDATE_LOADING_TIME_TYPE.SUBTRACT) {
        tempfinalBooking.extraUnloadingTime =
          tempfinalBooking.extraUnloadingTime - LOADING_STEP;
      }
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case UPDATE_NOTE_TO_DRIVER: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.noteToDriver = action.data;
      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    case FLUSH_CURRENT_BOOKING: {
      return Immutable.merge(state, {
        finalBooking: initalFinalBooking,
        tabsStatus: { selectedIndex: 0 },
        generalBooking: {
          focusedLocationIndex: null
          // bookingConfirmed: false
        }
      });
    }

    /* case CONFIRM_CURRENT_BOOKING: {
      return Immutable.merge(state, {
        generalBooking: {
          bookingConfirmed: true
        }
      });
    } */

    case SUBMIT_BOOKING.SUCCESS: {
      return Immutable.merge(state, {
        bookingSuccessDetail: action.data,
        generalBooking: {
          bookingSubmitted: true
        }
      });
    }

    /* case BOOKING_THANK_YOU_VISITED: {
      return Immutable.merge(state, {
        generalBooking: {
          bookingSubmitted: false
        }
      });
    } */

    case REMOVE_UPDATED_ROUTE_FLAG: {
      const tempfinalBooking = _.cloneDeep(state.finalBooking);
      tempfinalBooking.route.pickupLocation.isUpdatedRecord = false;
      tempfinalBooking.route.dropoffLocation.isUpdatedRecord = false;
      tempfinalBooking.route.additionalLocations = tempfinalBooking.route.additionalLocations.map(
        item => {
          return {
            ...item,
            ...{ isUpdatedRecord: false }
          };
        }
      );

      return Immutable.merge(state, {
        finalBooking: tempfinalBooking
      });
    }

    default:
      return state;
  }
};
