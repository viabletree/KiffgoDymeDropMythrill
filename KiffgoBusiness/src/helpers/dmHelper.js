import _ from 'lodash';
import moment from 'moment';
import Swal from 'sweetalert2';
import DataHandler from '../services/DataHandler';
import {
  CENTRAL_LONDON,
  DM_TASK_TYPE,
  TASK_FIELDS_NAME,
  DM_MODULES,
  ROUTES,
  DRIVER_FIELDS_NAME,
  DRIVER_TRANSPORT_TYPES,
  DM_DRIVER_STATUS_TYPE,
  HUB_FIELDS_NAME,
  cloneHtml,
  cloneHtmlSingle,
  NOTIFICATION_FILTER_TYPES
} from '../constants';
import { dmDriverDeleteRequest } from '../actions/DMDriverActions';
import { dmTaskCreateRequest } from '../actions/DMTasksActions';
import Util from '../services/Util';
import dataTypes from '../dataTypes';

const calculateETD = (eta, completeAfter, serviceMin) => {
  const serviceTime = serviceMin == 0 ? 5 : serviceMin;
  const startTime = eta < completeAfter ? completeAfter : eta;
  const etd = moment(startTime)
    .add(serviceTime, 'minutes')
    .toISOString();
  return etd;
};
const calculateDelayInMinutes = (eta, completeAfter, status) => {
  if (
    status == DM_TASK_TYPE.ASSIGNED.slug ||
    status == DM_TASK_TYPE.IN_TRANSIT.slug
  ) {
    const diffInMinutes = moment(eta).diff(moment(completeAfter), 'minutes');
    if (diffInMinutes > 0) {
      // is delayed
      return diffInMinutes;
    }
  }

  return 0;
};
const getManipulatedTaskList = itsData => {
  const data = _.isArray(itsData)
    ? _.cloneDeep(itsData)
    : [_.cloneDeep(itsData)];
  const fineData = [];
  const {
    delayedInMinutes: filterDelayMinutes,
    showOnlyDelayedTasks
  } = DataHandler.getStore().getState().dmFilter;
  const theRandomNumber = Math.floor(Math.random() * 10) + 1;
  data.forEach((innerElement, index) => {
    // task layer

    const taskDetail = {
      [TASK_FIELDS_NAME.BARCODES]: innerElement.barcodes || [],
      [TASK_FIELDS_NAME.TIMELINE]: innerElement.timeline || [],
      [TASK_FIELDS_NAME.ID]: innerElement.id || 0,
      [TASK_FIELDS_NAME.RECIPIENT_NAME]: innerElement.contactName || '',
      [TASK_FIELDS_NAME.RECIPIENT_PHONE]: innerElement.contactPhone
        ? innerElement.contactPhone
        : '',
      [TASK_FIELDS_NAME.RECIPIENT_EMAIL]: innerElement.contactEmail || '',
      [TASK_FIELDS_NAME.RECIPIENT_NOTES]: innerElement.instructions || '',
      [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]:
        innerElement.internalOrder || '',
      [TASK_FIELDS_NAME.QUANTITY]: innerElement.quantity || 0,
      [TASK_FIELDS_NAME.ORDERVALUE]: innerElement.order_value || 0,
      [TASK_FIELDS_NAME.IS_PICKUP]: innerElement.is_collection || false,
      [TASK_FIELDS_NAME.IS_DROPOFF]: innerElement.is_delivery || false,
      [TASK_FIELDS_NAME.DESCRIPTION]: innerElement.description || '',
      [TASK_FIELDS_NAME.LOCATION_ADDRESS]:
        innerElement.fullAddress || innerElement.location.address || '',
      [TASK_FIELDS_NAME.LOCATION_POSTCODE]:
        innerElement.postcode || innerElement.location.postcode || '',
      [TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME]: innerElement.company || '',
      [TASK_FIELDS_NAME.LOCATION_BUILDING]:
        innerElement.building || innerElement.location.building || '',
      [TASK_FIELDS_NAME.LOCATION_TOWN]:
        innerElement.city || innerElement.location.city || '',
      [TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME]:
        innerElement.country || innerElement.location.country || '',
      [TASK_FIELDS_NAME.LOCATION_STREET_NAME]:
        innerElement.street_name || innerElement.location.street || '',
      [TASK_FIELDS_NAME.LOCATION_STREET_NUMBER]:
        innerElement.street_number || innerElement.location.number || '',
      [TASK_FIELDS_NAME.DESTINATION_NOTES]:
        innerElement.destination_notes || '',
      [TASK_FIELDS_NAME.COMPLETE_AFTER]: innerElement.earliest_time || '',
      [TASK_FIELDS_NAME.COMPLETE_BEFORE]: innerElement.latest_time || '',
      [TASK_FIELDS_NAME.SERVICE_MIN]: innerElement.service_minutes || 0,
      [TASK_FIELDS_NAME.PROOF]: innerElement.proof || [],
      [TASK_FIELDS_NAME.DRIVER_ID]:
        (innerElement.driver && innerElement.driver.id) || null,
      [TASK_FIELDS_NAME.DRIVER_NAME]:
        (innerElement.driver && innerElement.driver.name) || '',
      [TASK_FIELDS_NAME.DRIVER_PHONE]:
        innerElement.driver && innerElement.driver.phone
          ? innerElement.driver.phone
          : '',
      [TASK_FIELDS_NAME.STATUS]:
        innerElement.status || DM_TASK_TYPE.UNASSIGNED.slug,
      [TASK_FIELDS_NAME.DELAYED_IN_MINUTES]: calculateDelayInMinutes(
        innerElement.eta,
        innerElement.latest_time,
        innerElement.status
      ),
      [TASK_FIELDS_NAME.LOCATION_LATITUDE]:
        innerElement.location.latitude || CENTRAL_LONDON.lat,
      [TASK_FIELDS_NAME.LOCATION_LONGITUDE]:
        innerElement.location.longitude || CENTRAL_LONDON.lng,
      [TASK_FIELDS_NAME.ETA]: innerElement.eta || null,
      [TASK_FIELDS_NAME.CREATED_AT]:
        innerElement.createdAt || moment().toISOString(),
      [TASK_FIELDS_NAME.UPDATED_AT]:
        innerElement.updatedAt || moment().toISOString(),
      [TASK_FIELDS_NAME.TASK_NUMBER]: innerElement.uniquestring || null,
      [TASK_FIELDS_NAME.OWNER]: _.isUndefined(innerElement.owner)
        ? ''
        : `${innerElement.owner.firstName} ${innerElement.owner.lastName}`,
      [TASK_FIELDS_NAME.PICTURES]: innerElement.pictures || [],
      [TASK_FIELDS_NAME.SIGNATURE]: innerElement.signature || {},
      [TASK_FIELDS_NAME.NOTE]: innerElement.note || '',
      [TASK_FIELDS_NAME.RATING]: innerElement.rating || 0,
      [TASK_FIELDS_NAME.SEQUENCE]: innerElement.sequence || 929,
      [TASK_FIELDS_NAME.DURATION]: innerElement.duration_stop_sec || 120,
      [TASK_FIELDS_NAME.CREATED_BY]: innerElement.created_by || '',

      [TASK_FIELDS_NAME.ETD]: calculateETD(
        innerElement.eta,
        innerElement.earliest_time,
        innerElement.service_minutes
      ),
      [TASK_FIELDS_NAME.NOTIFICATION_TIME]:
        innerElement.notification_time || '',

      [TASK_FIELDS_NAME.END_TIME]: innerElement.end_time || '',
      [TASK_FIELDS_NAME.FAILURE_REASON]: innerElement.fail_reason || '',
      [TASK_FIELDS_NAME.MILEAGE]: innerElement.estimated_mileage || null,
      [TASK_FIELDS_NAME.PRIORITY]: innerElement.priority || 0
    };

    taskDetail[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] = calculateDelayInMinutes(
      taskDetail[TASK_FIELDS_NAME.ETA],
      taskDetail[TASK_FIELDS_NAME.COMPLETE_BEFORE],
      taskDetail[TASK_FIELDS_NAME.STATUS]
    );

    if (
      showOnlyDelayedTasks &&
      taskDetail[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] >= filterDelayMinutes
    ) {
      // according to filter this task should not be there because its delaytime is less than selected filters
      fineData.push(taskDetail);
    } else if (!showOnlyDelayedTasks) {
      fineData.push(taskDetail);
    }
  });

  return fineData;
};

const getFilterPayload = () => {
  const {
    dateStartingFrom,
    dateEndingTill,
    tasksStatus,
    delayedInMinutes,
    showOnlyDelayedTasks,
    notificationStatus
  } = DataHandler.getStore().getState().dmFilter;
  let notified = '';
  if (notificationStatus.notified && notificationStatus.nonNotified) {
    notified = '';
  } else if (notificationStatus.nonNotified) {
    notified = NOTIFICATION_FILTER_TYPES.NON_NOTIFIED;
  } else if (notificationStatus.notified) {
    notified = NOTIFICATION_FILTER_TYPES.NOTIFIED;
  }
  return {
    dateStartingFrom,
    dateEndingTill,
    tasks: tasksStatus,
    delayedInMinutes: showOnlyDelayedTasks ? delayedInMinutes : 0,
    notified
  };
};

const getTaskTypeDetail = slug => {
  let taskTypeDetail = {};

  Object.keys(DM_TASK_TYPE).map(function(data, id) {
    if (DM_TASK_TYPE[data].slug === slug) {
      taskTypeDetail = DM_TASK_TYPE[data];
    }
  });

  return taskTypeDetail;
};

const getManipulatedDriverData = data => {
  const fineData = [];
  if (_.isArray(data)) {
    data.forEach((element, index) => {
      // task layer

      fineData.push({
        name: (element.driverDetails && element.driverDetails.name) || '',
        vehicleSize:
          (element.driverDetails && element.driverDetails.vehicleSize) || '',
        id: element.userId || null,
        phone:
          element.driverDetails && element.driverDetails.phone
            ? element.driverDetails.phone
            : '',
        location: {
          lat: element.location.coords.latitude,
          lng: element.location.coords.longitude
        },
        jobId: element.jobId || null,
        timestamp: element.location.timestamp
      });
    });

    return fineData;
  }
  if (_.isObject(data)) {
    return {
      name: (data.driverDetails && data.driverDetails.name) || '',
      vehicleSize: (data.driverDetails && data.driverDetails.vehicleSize) || '',
      phone: (data.driverDetails && data.driverDetails.phone) || '',
      id: data.userId || null,
      location: {
        lat: data.location.coords.latitude,
        lng: data.location.coords.longitude
      },
      jobId: data.jobId || null
    };
  }

  return [];
};

const getSelectedFilterTasksOnly = taskList => {
  const fineData = [];

  const {
    tasksStatus: selectedFilter,
    dateStartingFrom,
    dateEndingTill,
    showOnlyDelayedTasks,
    delayedInMinutes
  } = _.clone(DataHandler.getStore().getState().dmFilter);

  taskList.forEach(element => {
    let isInBetweenDates = true;
    const completedAfter = element[TASK_FIELDS_NAME.COMPLETE_AFTER];
    // const completedBefore = element[TASK_FIELDS_NAME.COMPLETE_BEFORE];

    if (moment(completedAfter).isValid()) {
      const afterDateIsInBetween = moment(completedAfter).isBetween(
        moment(dateStartingFrom),
        moment(dateEndingTill)
      );
      if (!afterDateIsInBetween) {
        isInBetweenDates = false;
      }
    }
    /* const bothAreValidDate =
      moment(completedAfter).isValid() && moment(completedBefore).isValid();

    if (bothAreValidDate) {
      const afterDateIsInBetween = moment(completedAfter).isBetween(
        moment(dateStartingFrom),
        moment(dateEndingTill)
      );

      const beforeDateIsInBetween = moment(completedBefore).isBetween(
        moment(dateStartingFrom),
        moment(dateEndingTill)
      );

      if (!afterDateIsInBetween || !beforeDateIsInBetween) {
        isInBetweenDates = false;
      }
    } */

    if (selectedFilter.includes(element.status) && isInBetweenDates) {
      if (showOnlyDelayedTasks) {
        if (element[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] >= delayedInMinutes) {
          fineData.push(element);
        }
      } else {
        fineData.push(element);
      }
    }
  });

  return fineData;
};

const getNewFilteredTask = data => {
  const taskList = _.cloneDeep(getManipulatedTaskList(data));
  // const selectedFilterTasks = getSelectedFilterTasksOnly(taskList);
  const duplicationRemoved = _.uniqBy(taskList, 'id');
  return duplicationRemoved;
};

const getFinalUpdatedFilteredTask = data => {
  const {
    tasksList: existingTaskList
  } = DataHandler.getStore().getState().dmTasks;
  const updatedTasksList = _.cloneDeep(getManipulatedTaskList(data));
  const mergedData = [...updatedTasksList, ...existingTaskList];
  const duplicationRemoved = _.uniqBy(mergedData, 'id');
  // const selectedFilterTasks = getSelectedFilterTasksOnly(duplicationRemoved);
  return duplicationRemoved;
};
const getFinalUpdatedDriverTasks = data => {
  const {
    allTasks: existingTaskList
  } = DataHandler.getStore().getState().dmDriver;

  const updatedTasksList = _.cloneDeep(getManipulatedTaskList(data));
  const mergedData = [...updatedTasksList, ...existingTaskList];
  const duplicationRemoved = _.uniqBy(mergedData, 'id');
  // const selectedFilterTasks = getSelectedFilterTasksOnly(duplicationRemoved);
  return existingTaskList.length ? duplicationRemoved : [];
};

const getLocationText = location => {
  const businessName = location[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME];
  const buildingName = location[TASK_FIELDS_NAME.LOCATION_BUILDING];
  const streetNumber = location[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER];
  const address = location[TASK_FIELDS_NAME.LOCATION_ADDRESS];
  const streetName = !_.isEmpty(location[TASK_FIELDS_NAME.LOCATION_STREET_NAME])
    ? !_.isEmpty(streetNumber)
      ? `${streetNumber}, ${location[TASK_FIELDS_NAME.LOCATION_STREET_NAME]}`
      : location[TASK_FIELDS_NAME.LOCATION_STREET_NAME]
    : '';
  const postCode = location[TASK_FIELDS_NAME.LOCATION_POSTCODE];
  const town = location[TASK_FIELDS_NAME.LOCATION_TOWN];
  const country = location[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME];
  let finalText = '';
  let firstPart = '';
  let lastPart = '';

  firstPart = !_.isEmpty(address) ? `${address}` : firstPart;
  firstPart = !_.isEmpty(postCode) ? `${postCode}` : firstPart;
  firstPart = !_.isEmpty(streetName) ? `${streetName}` : firstPart;
  firstPart = !_.isEmpty(buildingName) ? `${buildingName}` : firstPart;
  firstPart = !_.isEmpty(businessName) ? `${businessName}` : firstPart;
  lastPart = !_.isEmpty(town) ? `${town}` : `${country}`;

  finalText = !_.isEmpty(firstPart)
    ? `${firstPart}, ${lastPart}`
    : `${lastPart}`;

  return finalText;
};
/**
 * To get task from reducer
 * @param {array} reducer (reducers which contains data of tasks)
 * @param {string} taskid (task unique id to be search)
 * @return {object|null} (task if found else null)
 */
const getTaskDetailFromReducer = (reducer, taskid) => {
  let taskDetail = null;

  if (taskid) {
    const taskIndex = _.findIndex(reducer, {
      [TASK_FIELDS_NAME.TASK_NUMBER]: taskid
    });
    if (taskIndex >= 0) {
      taskDetail = _.cloneDeep(reducer[taskIndex]);
    }
  }

  return taskDetail;
};

const showCreateTask = historyInstance => {
  historyInstance.push(
    `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.TASK.NAME}/${DM_MODULES.TASK.ACTIONS.CREATE}`
  );
};

const showTaskDetail = (historyInstance, taskId) => {
  historyInstance.push(
    `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.TASK.NAME}/${DM_MODULES.TASK.ACTIONS.VIEW}/${taskId}`
  );
};
const showTaskEditDetail = (historyInstance, taskId) => {
  historyInstance.push(
    `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.TASK.NAME}/${DM_MODULES.TASK.ACTIONS.EDIT}/${taskId}`
  );
};
const showDriverEditDetail = (
  historyInstance,
  driverId,
  onCloseRedirectToListing = false
) => {
  let route = `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.DRIVER.NAME}/${DM_MODULES.DRIVER.ACTIONS.EDIT}/${driverId}`;
  if (onCloseRedirectToListing) {
    route = `${route}?redirect=${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${DM_MODULES.SETTINGS.ACTIONS.DRIVER}`;
  }
  historyInstance.push(route);
};

const showCreateDriver = (
  historyInstance,
  onCloseRedirectToListing = false
) => {
  let route = `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.DRIVER.NAME}/${DM_MODULES.DRIVER.ACTIONS.CREATE}`;
  if (onCloseRedirectToListing) {
    route = `${route}?redirect=${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${DM_MODULES.SETTINGS.ACTIONS.DRIVER}`;
  }
  historyInstance.push(route);
};

const showHubEditDetail = (
  historyInstance,
  hubId,
  onCloseRedirectToListing = false
) => {
  let route = `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.HUB.NAME}/${DM_MODULES.HUB.ACTIONS.EDIT}/${hubId}`;

  if (onCloseRedirectToListing) {
    route = `${route}?redirect=${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${DM_MODULES.SETTINGS.ACTIONS.HUB}`;
  }
  historyInstance.push(route);
};

const showCreateHub = (historyInstance, onCloseRedirectToListing = false) => {
  let route = `${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.HUB.NAME}/${DM_MODULES.HUB.ACTIONS.CREATE}`;

  if (onCloseRedirectToListing) {
    route = `${route}?redirect=${ROUTES.DELIVERY_MANAGEMENT}/${DM_MODULES.SETTINGS.NAME}/${DM_MODULES.SETTINGS.ACTIONS.HUB}`;
  }
  historyInstance.push(route);
};
/**
 * To get driver from reducer
 * @param {array} reducer (reducers which contains data of driver)
 * @param {integer} driver (driver id to be search)
 * @return {object|null} (driver if found else null)
 */
const getDriverDetailFromReducer = (reducer, driverid) => {
  let driverDetail = null;
  if (driverid > 1) {
    const driverIndex = _.findIndex(reducer, {
      [DRIVER_FIELDS_NAME.ID]: driverid
    });
    if (driverIndex >= 0) {
      driverDetail = _.cloneDeep(reducer[driverIndex]);
    }
  }

  return driverDetail;
};
const getHubDetailFromReducer = (reducer, hubId) => {
  let hubDetail = null;
  if (hubId > 1) {
    const hubIndex = _.findIndex(reducer, {
      [HUB_FIELDS_NAME.ID]: hubId
    });
    if (hubIndex >= 0) {
      hubDetail = _.cloneDeep(reducer[hubIndex]);
    }
  }

  return hubDetail;
};
const getManipulatedAllDriverData = data => {
  debugger;
  const fineData = [];
  if (data) {
    data.forEach((element, index) => {
      // task layer
      const _transport_name =
        element.transport[0].transport_name || DRIVER_TRANSPORT_TYPES[0].name;
      fineData.push({
        [DRIVER_FIELDS_NAME.ID]: element.id || 0,
        [DRIVER_FIELDS_NAME.DRIVER_PHONE]: element.phone ? element.phone : '',
        [DRIVER_FIELDS_NAME.DRIVER_NAME]: element.name || '',
        [DRIVER_FIELDS_NAME.DRIVER_EMAIL]: element.email || '',
        [DRIVER_FIELDS_NAME.DRIVER_ADDRESS]: element.address || '',
        [DRIVER_FIELDS_NAME.DRIVER_POSTCODE]: element.postcode || '',
        [DRIVER_FIELDS_NAME.DRIVER_CITY]: element.city || '',
        [DRIVER_FIELDS_NAME.DRIVER_STREET_NAME]: element.street_name || '',
        [DRIVER_FIELDS_NAME.DRIVER_STREET_NUMBER]: element.street_number || '',
        [DRIVER_FIELDS_NAME.DRIVER_COUNTRY_NAME]: element.country || '',
        [DRIVER_FIELDS_NAME.NUMBER_PLATE]:
          element.transport[0].number_plate || '',
        [DRIVER_FIELDS_NAME.MAKE_MODEL]:
          element.transport[0].make_and_model || '',
        [DRIVER_FIELDS_NAME.YEAR]: element.transport[0].year || '',
        [DRIVER_FIELDS_NAME.COLOR]: element.transport[0].color || '',
        [DRIVER_FIELDS_NAME.TRANSPORT_TYPE]:
          element.transport[0].transport_id || 1,
        [DRIVER_FIELDS_NAME.DRIVER_PROFILE_PICTURE]: element.image || {},
        [DRIVER_FIELDS_NAME.STATUS]: element.status,
        [DRIVER_FIELDS_NAME.VEHICLE_CAPACITY]: element.capacity || '',
        [DRIVER_FIELDS_NAME.DRIVER_LOCATION]:
          element.location && element.location.longitude
            ? {
                longitude: element.location.longitude,
                latitude: element.location.latitude
              }
            : '',
        [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LATITUDE]:
          element.tracking_location &&
          element.tracking_location.coords.latitude,
        [DRIVER_FIELDS_NAME.DRIVER_CURRENT_LONGITUDE]:
          element.tracking_location &&
          element.tracking_location.coords.longitude,
        [DRIVER_FIELDS_NAME.DRIVER_CURRENT_TASK_ID]: element.taskId || null,
        [DRIVER_FIELDS_NAME.DRIVER_SCHEDULE]: element.schedule || [],
        [DRIVER_FIELDS_NAME.AVAILABLE]: element.available,
        [DRIVER_FIELDS_NAME.SPEED]: element.speed
      });
    });

    return fineData;
  }
};

const deleteDriverRequest = (driverId, callback) => {
  if (driverId) {
    DataHandler.getStore().dispatch(
      dmDriverDeleteRequest({ driverId }, callback)
    );
  }
};

const getActiveDrivers = driversList => {
  // getting active drivers only, here inavtive means offline
  return [
    ..._.filter(driversList, { status: DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug }),
    ..._.filter(driversList, { status: DM_DRIVER_STATUS_TYPE.INACTIVE.slug }),
    ..._.filter(driversList, { status: DM_DRIVER_STATUS_TYPE.ACTIVE.slug })
  ];
};

const cloneTask = (
  taskInput,
  confirmCallback,
  responseCallback,
  historyInstance
) => {
  const obj = {
    background: 'rgba(52, 52, 52, 1)',
    position: 'top',
    title: 'Clone task',
    text: 'Select cloning options',
    html: _.isEmpty(taskInput[TASK_FIELDS_NAME.BARCODES])
      ? cloneHtmlSingle
      : cloneHtml,
    preConfirm: () => {
      return _.isEmpty(taskInput[TASK_FIELDS_NAME.BARCODES])
        ? [document.getElementById('openCloned').checked]
        : [
            document.getElementById('openCloned').checked,
            document.getElementById('addBarcodes').checked
          ];
    },
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonText: 'Clone',

    customClass: {
      container: 'dm_swl_container dm_clone_swl_container',
      popup: 'dm_swl_popup',
      header: 'dm_swl_header',
      title: 'dm_swl_title',
      closeButton: 'dm_swl_closeButton',
      icon: 'dm_swl_icon',
      image: 'dm_swl_image',
      content: 'dm_swl_content',
      input: 'dm_swl_input',
      actions: 'dm_swl_actions',
      confirmButton: 'dm_swl_confirmButton',
      cancelButton: 'dm_swl_cancelButton',
      footer: 'dm_swl_footer'
    }
  };

  Swal.fire(obj).then(response => {
    if (response.isConfirmed) {
      if (confirmCallback) confirmCallback();
      const payload = {
        name: taskInput[TASK_FIELDS_NAME.RECIPIENT_NAME],
        phone: taskInput[TASK_FIELDS_NAME.RECIPIENT_PHONE],
        email: taskInput[TASK_FIELDS_NAME.RECIPIENT_EMAIL],
        recipient_notes: taskInput[TASK_FIELDS_NAME.RECIPIENT_NOTES],
        isPickup: taskInput[TASK_FIELDS_NAME.IS_PICKUP],
        isDropoff: taskInput[TASK_FIELDS_NAME.IS_DROPOFF],
        order_id: taskInput[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER],
        description: taskInput[TASK_FIELDS_NAME.DESCRIPTION],
        location: {
          latitude: taskInput[TASK_FIELDS_NAME.LOCATION_LATITUDE],
          longitude: taskInput[TASK_FIELDS_NAME.LOCATION_LONGITUDE]
        },
        address: taskInput[TASK_FIELDS_NAME.LOCATION_ADDRESS],
        business_name: taskInput[TASK_FIELDS_NAME.LOCATION_BUSINESS_NAME],
        building: taskInput[TASK_FIELDS_NAME.LOCATION_BUILDING],
        postcode: taskInput[TASK_FIELDS_NAME.LOCATION_POSTCODE],
        city_town: taskInput[TASK_FIELDS_NAME.LOCATION_TOWN],
        street_number: taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NUMBER],
        street_name: taskInput[TASK_FIELDS_NAME.LOCATION_STREET_NAME],
        country: taskInput[TASK_FIELDS_NAME.LOCATION_COUNTRY_NAME],
        destination_notes: taskInput[TASK_FIELDS_NAME.DESTINATION_NOTES],
        quantity: taskInput[TASK_FIELDS_NAME.QUANTITY] || 0,
        serviceMin: taskInput[TASK_FIELDS_NAME.SERVICE_MIN] || 0,
        proof: taskInput[TASK_FIELDS_NAME.PROOF]
      };
      if (response.value[1]) {
        // user marked checkbox for clone with barcode
        /**
         * @type {Barcode[]}
         */
        const taskBarcodeList = _.cloneDeep(
          taskInput[TASK_FIELDS_NAME.BARCODES]
        );
        /**
         * @type {Barcode[]}
         */
        const newBarcodeList = [];
        taskBarcodeList.forEach(element => {
          if (element.isAssigned) {
            newBarcodeList.push({
              barcodeString: element.barcodeString,
              isRequired: element.isRequired
            });
          }
        });
        payload.barcodes = newBarcodeList;
      }

      DataHandler.getStore().dispatch(
        dmTaskCreateRequest(payload, createResponse => {
          if (responseCallback) responseCallback(createResponse);

          if (createResponse.status) {
            if (response.value[0]) {
              // user marked checkboxfor edit, open edit view of task
              const taskId = createResponse.data[0].uniquestring;
              showTaskEditDetail(historyInstance, taskId);
            } else {
              Util.dmInformAlert('Success', 'Task cloned successfully!');
            }
          }
        })
      );

      // onConfirmPress();
    }
  });
};

const getDriverStatusDetail = status => {
  if (status === DM_DRIVER_STATUS_TYPE.ACTIVE.slug) {
    return DM_DRIVER_STATUS_TYPE.ACTIVE;
  }
  if (status === DM_DRIVER_STATUS_TYPE.IN_TRANSIT.slug) {
    return DM_DRIVER_STATUS_TYPE.IN_TRANSIT;
  }
  if (status === DM_DRIVER_STATUS_TYPE.INACTIVE.slug) {
    return DM_DRIVER_STATUS_TYPE.INACTIVE;
  }
  if (status === DM_DRIVER_STATUS_TYPE.INVITED.slug) {
    return DM_DRIVER_STATUS_TYPE.INVITED;
  }
  if (status === DM_DRIVER_STATUS_TYPE.ACTIVE_DELAY.slug) {
    return DM_DRIVER_STATUS_TYPE.ACTIVE_DELAY;
  }
  if (status === DM_DRIVER_STATUS_TYPE.INACTIVE_DELAY.slug) {
    return DM_DRIVER_STATUS_TYPE.INACTIVE_DELAY;
  }
  if (status === DM_DRIVER_STATUS_TYPE.IN_TRANSIT_DELAY.slug) {
    return DM_DRIVER_STATUS_TYPE.IN_TRANSIT_DELAY;
  }

  return null;
};

const sortBySequence = data => {
  return _.sortBy(data, TASK_FIELDS_NAME.SEQUENCE);
};

export {
  getManipulatedTaskList,
  getFilterPayload,
  getTaskTypeDetail,
  getManipulatedDriverData,
  getNewFilteredTask,
  getSelectedFilterTasksOnly,
  getFinalUpdatedFilteredTask,
  getLocationText,
  showTaskDetail,
  showTaskEditDetail,
  showDriverEditDetail,
  getTaskDetailFromReducer,
  getManipulatedAllDriverData,
  showCreateTask,
  getDriverDetailFromReducer,
  deleteDriverRequest,
  showCreateDriver,
  cloneTask,
  getActiveDrivers,
  getDriverStatusDetail,
  sortBySequence,
  showHubEditDetail,
  getHubDetailFromReducer,
  showCreateHub,
  calculateDelayInMinutes,
  calculateETD,
  getFinalUpdatedDriverTasks
};
