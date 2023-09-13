import { Colors, Images } from "../theme";
import { Route } from "react-router-dom";
import { scrollToContactForm } from "../helpers/scrollToContactForm";

export const SAGA_ALERT_TIMEOUT = 500;
export const IMAGE_MAX_WIDTH = 500;
export const IMAGE_MAX_HEIGHT = 500;
export const MILES_LIMIT = 50;

// URLS
export const URL_WEBSITE = "https://www.kiffgo.com";
export const ANDROID_APP_LINK =
  "https://apps.apple.com/gb/app/kiffgo-driver/id1464886204";

export const IOS_APP_LINK =
  "https://play.google.com/store/apps/details?id=com.kiffgo.driver";

// Array of week
export const OPTIMIZE_TYPE_VALUES = {
  JOB: "job",
  SHIPMENT: "shipment",
};
export const WEEK = {
  SUNDAY: "sunday",
  MONDAY: "monday",
  TUESDAY: "tuesday",
  WEDNESDAY: "wednesday",
  THURSDAY: "thursday",
  FRIDAY: "friday",
  SATURDAY: "saturday",
};

// date time formats
export const DATE_FORMAT1 = "Do MMMM YYYY, HH:mm";
export const DATE_FORMAT2 = "Do MMM";
export const DATE_FORMAT3 = "Do MMM YYYY";
export const DATE_FORMAT4 = "DD/MM/YYYY";
export const DATE_TIME_FORMAT1 = "YYYY-MM-DD HH:mm";
export const DATE_TIME_FORMAT2 = "MMM D HH A";
export const DATE_TIME_FORMAT3 = "HH:mm DD-MM-YYYY";
export const DATE_TIME_FORMAT4 = "dddd Do MMM, YYYY @ HH:mm";
export const DATE_TIME_FORMAT5 = "dddd Do MMM, YYYY @ hh: mm a";
export const DATE_TIME_FORMAT6 = "D MMM YYYY at HH: mm";
export const DATE_TIME_FORMAT7 = "HH:mm (DD MMM)";
export const DATE_TIME_FORMAT8 = "ddd Do MMM YY, HH:mm";
export const DATE_TIME_FORMAT_BULK = "DD/MM/YYYY HH:mm";
export const DATE_TIME_FORMAT_EXPORT = "DD/MM/YY HH:mm";

export const TIME_FORMAT1 = "HH:mm";
export const TIME_FORMAT2 = "H [h] : mm [min]";
export const TIME_FORMAT3 = "hh A";
export const TIME_FORMAT4 = "hh:mm A";
export const TIME_DAY_FORMAT3 = "ddd - HH:mm";
export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const SERVER_TIME_ZONE = "Europe/London";

// Messages

export const MIGRATION_COMPLETED = "Migration is completed.";
export const SAME_VEHICLE_ERROR =
  "All selected driver must have same vehicles.";
export const TASK_REQUIRED_ERROR = "No task provided.";
export const DRIVER_REQUIRED_ERROR = "Please select driver.";
export const DRIVER_SCHEDULE_INCOMPLETE_TIME = "Incomplete time.";
export const DRIVER_SCHEDULE_INVALID_TIME_RANGE = "Invalid time range.";
export const DRIVER_SCHEDULE_INVALID_TIME = "Invalid time.";
export const DRIVER_SCHEDULE_INVALID_TIME_ERROR_ON_SUBMIT =
  "You have entered invalid time for ";
export const SERVICE_TIME_ERROR = "Service time must be number greater than 1.";
export const MAX_OPTIMIZATION_DELAY_ERROR =
  "Max allowed delay time must be number greater than 0.";
export const MAX_TASKS_PER_DRIVER_ERROR =
  "Max tasks per driver must be number greater than 0 and less then 200.";
export const LOCATION_OPTIMIZATION_REQUIRED_ERROR =
  "Start or End location is missing.";
export const LOCATION_PERMISSION_DENIED_ERROR2 =
  "Location permission required, please go to app settings to allow access";
export const INVALID_NAME_ERROR = "Invalid name";
export const INVALID_ADDRESS_ERROR = "Invalid address";
export const INVALID_EMAIL_ERROR = "Invalid email";
export const INVALID_PASSWORD = "Use 6 characters or more for your password";
export const CONFRIM_PASSWORD_MISMATCH_ERROR = "Confirm password mismatch";
export const INTERNET_ERROR = "Please connect to the working internet";
export const SESSION_EXPIRED_ERROR = "Session expired, Please login again";
export const SOMETHING_WRONG = "Something went wrong";
export const LOCATION_POSTCODE_REQUIRED =
  "Select an address which includes an exact street address";
export const BOOKING_CANCEL_SUCCESSFUL = "Booking Cancel Successfully";
export const START_JOB_CONFIRMATION_MESSAGE =
  "Are you sure you want to start this job?";
export const NOTIFICATION_PERMISSION_DENIED_ERROR =
  "Please allow notifications and get notified timely";
export const LOADING_ANOTHER_LOCATION = "Now loading at another location";
export const CARGO_MILES_LIMIT_MESSAGE =
  "Cargo bike can not travel more than 50 miles.";
export const CARGO_ASAP_TIME_LIMIT =
  "Cargo bike only available between 7am to 6pm";
export const CARGO_SCHEDULE_TIME_LIMIT =
  "Please book for after half hour from current time";
export const NON_CARGO_SCHEDULE_TIME_LIMIT =
  "Please book for after one hour from current time";
export const INVALID_POSTCODE_ERROR = "Invalid post code";
export const INVALID_WEBSITE_ERROR = "Invalid website";
export const NOT_AVAILABLE_IN_AREA =
  "We only operate in Central London for Cargo bikes. Please change vehicle type";
export const PASSWORD_RESET_SUCCESS_MSG =
  "Your password has been reset successfully. Use this new password to get logged-in again and enjoy our hassle free services.";
export const IS_REQUIRED_ERROR = "This field is required";
export const PHONE_IS_REQUIRED_ERROR = "Phone field is required";
export const NAME_IS_REQUIRED_ERROR = "Name field is required";
export const LATITUDE_IS_REQUIRED_ERROR = "Latitude field is required";
export const LONGITUDE_IS_REQUIRED_ERROR = "Longitude field is required";
export const ADDRESS_IS_REQUIRED_ERROR = "Address field is required";
export const TIME_ERROR =
  "Time window cannot be in the past. Adjust the time window for the current time or future time.";
export const INVALID_PHONE_ERROR = "Invalid phone number";
export const SIGNUP_SUCCESS_MSG = "Welcome to Kiffgo.";
export const LOCATION_DETAIL_FROM_ERROR =
  "There is an invalid data in location form";
export const PASSED_TIME_ERROR = "You cannot select past date or time";
export const DRIVER_ALLOCATED_SUCCESS_MESSAGE = "Driver Allocated Successfully";
export const COPIED_TO_CLIPBOARD_MESSAGE = "Copied to Clipboard";
export const DRIVER_VERIFIED_SUCCESSFULLY = "Driver Verified Successfully";
export const SEND_INVOICE_SUCCESSFULLY = "Invoice sent successfully";
export const TRACKING_LINK_SENT_SUCCESSFULLY =
  "Tracking link sent successfully";
export const BOOKED_SUCCESSFULLY = "Booked Successfully";
export const ARE_YOU_SURE = "Are you sure?";
export const CONFIRM_DELETE_TASK = "Task will be deleted permanently";
export const CONFIRM_CLONE_TASK = "Do you want to clone this task?";
export const CONFIRM_DELETE_DRIVER = "Driver will be deleted permanently";
export const CONFIRM_DELETE_API_KEY = "Api Key will be deleted permanently";
export const CONFIRM_DELETE_HUB = "Hub will be deleted permanently";
export const INVALID_LAT = "Invalid latitude";
export const INVALID_LNG = "Invalid longitude";
export const FAILED_TO_FETCH = "Failed to fetch, try to refresh the page";

export const DEV_ENV = "dev";
export const PROD_ENV = "prod";
export const MAX_ADDITIONAL_LOCATION = 31;
export const MAX_IMAGES_PER_LOCATION = 3;
export const MIN_LOADING_TIME_IN_MINUTES = 10;
export const MAX_LOADING_TIME_IN_MINUTES = 180;
export const CENTRAL_LONDON = { lat: 51.509099, lng: -0.126541 };
export const DM_MODULE_UPDATE_TIMEOUT_IN_MINUTES = 3;

export const UPDATE_LOADING_TIME_TYPE = {
  ADD: "add",
  SUBTRACT: "subtract",
};

// Message types
export const MESSAGE_TYPES = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
};

// Message types
export const USER_LOGIN_THEME = {
  DARK: "dark",
  LIGHT: "light",
};

// File Types
export const FILE_TYPES = { VIDEO: "video", IMAGE: "image", AUDIO: "audi" };

// Job status types

export const JOB_STATUS_TYPES = {
  BOOKED: { title: "Booked", type: "Booked" },
  FINDINGDRIVER: { title: "Finding Driver", type: "FindingDriver" },
  CONFIRMED: { title: "Confirmed", type: "Confirmed" },
  COMPLETE: { title: "Complete", type: "Complete" },
  CANCELLED: { title: "Cancelled", type: "Cancelled" },
};

export const BOOKING_TAB_TYPES = [
  {
    title: "Live Booking",
    onlyForAdmin: false,
    slug: "live",
  },
  {
    title: "Scheduled",
    onlyForAdmin: false,
    slug: "scheduled",
  },
  {
    title: "Completed",
    onlyForAdmin: false,
    slug: "completed",
  },
  {
    title: "Missed",
    onlyForAdmin: true,
    slug: "missed",
  },
  {
    title: "Cancelled",
    onlyForAdmin: false,
    slug: "cancelled",
  },
];

export const SERVICE_TYPES = {
  ASAP: {
    id: 1,
    title: "asap",
  },
  SCHEDULE: {
    id: 2,
    title: "schedule",
  },
  FULL_DAY: {
    id: 3,
    title: "full_day",
  },
  LIGHT_LONG_HAUL: {
    id: 4,
    title: "light_long_haul",
  },
};

export const VEHICLE_TYPES = {
  CARGO: [0],
  CAR: [1],
  SMALL_VAN: [2],
  MEDIUM_VAN: [3],
  LARGE_VAN: [4, 5],
  XL_VAN: [6, 7],
};

export const MODAL_TYPES = {
  SIGNIN_MODAL: "signin_modal",
  SIGNUP_MODAL: "sigup_modal",
  FORGOT_PASSWORD: "forgot_password",
  RESET_PASSWORD: "reset_password",
};

export const EMPTY_LOCATION_OBJECT = {
  fullAddress: "",
  line_1: "",
  line_2: "",
  line_3: "",
  post_town: "",
  postcode: "",
  selectedFromSuggestion: true,
  postcodeValid: false,
  postcodeError: null,
  availableInArea: true,
  stairs: "",
  customerName: "",
  customerContact: "",
  customerEmail: "",
  internalOrderNumber: "",
  number0fItems: 0,
  instructionForLocation: "",
  itemDescription: "",
  customerNameError: "",
  customerContactError: "",
  customerEmailError: "",
  longitude: null,
  latitude: null,
  images: [],
  distanceMiles: 0,
  durationSeconds: 0,
  isCollection: false,
  isDelivery: false,
};

export const COMMUNICATIONS_DEFAULTS = {
  sms: true,
  email: false,
  dropoff: true,
  pickup: false,
  schedule_stage: false,
  schedule_content:
    "Hello [Recipient_Name]\n\nYour [Task_Type] from [Business_Name] is scheduled for [Date_Earliest_ETA] and [Date_Latest_ETA].",
  intransit_stage: true,
  intransit_content:
    "Hello [Recipient_Name]\n\nYour [Task_Type] from [Business_Name] is heading your way. Track it in real-time here [Tracking_Link].",
  completed_stage: true,
  completed_content:
    "Hello [Recipient_Name]\n\nYour [Task_Type] from [Business_Name] is completed Check the proof  of [Task_Type] on here your [Tracking_Link].",
  eta_range: 30,
};
export const LOCATION_INPUT_FIELDS_NAME = {
  STAIRS: "stairs",
  CUSTOMER_NAME: "customerName",
  CUSTOMER_CONTACT: "customerContact",
  CUSTOMER_EMAIL: "customerEmail",
  INTERNAL_ORDER_NUMBER: "internalOrderNumber",
  NUMBER_OF_ITEMS: "number0fItems",
  LOCATION_INSTRUCTION: "instructionForLocation",
  ITEM_DESCRIPTION: "itemDescription",
  CUSTOMER_NAME_ERROR: "customerNameError",
  CUSTOMER_CONTACT_ERROR: "customerContactError",
  CUSTOMER_EMAIL_ERROR: "customerEmailError",
};

export const ROUTES = {
  HOME: "/",
  RESET_PASSWORD: "/reset-password",
  PRICING: "/pricing",
  DELIVERY_ROUTE_PLANNING: "/delivery-route-planning",
  ROUTE_OPTIMIZATION_SOFTWARE: "/route-optimization-software",
  TRUCK_ROUTE_PLANNER: "/truck-route-planner",
  BOOKING_CONFIRM: "/dashboard/booking-confirm",
  BOOKING_THANK_YOU: "/dashboard/thank-you",
  TERMS_OF_USE: "/terms-of-use",
  PRIVACY_POLICY: "/privacy-policy",
  DASHBOARD: "/dashboard",
  BOOKINGS: "/dashboard/bookings",
  NEW_BOOKING: "/dashboard/new-booking",
  DRIVER: "/dashboard/driver",
  BOOKING: "/dashboard/booking",
  BOOKING_DETAIL: "/dashboard/booking-detail",
  BOOKING_LIVE: "/dashboard/bookings/live",
  PAGE_NOT_FOUND: "/PageNotFound",
  LOGIN: "/dashboard/login",
  SIGN_UP: "/dashboard/register",
  PUBLIC_TRACKING: "/tracking",
  DRIVER_LANDING_PAGE: "/driver",
  SETTING: "/dashboard/setting",
  DELIVERY_MANAGEMENT: "/dashboard/delivery-management",
  SECONDARY_DELIVERY_MANAGEMENT: "/delivery-management",
  MOBILE_APP_NAVIGATOR: "/app",
  TRACKING: "/track",
  ONFLEET: "/vs/onfleet",
  CIRCUIT: "/vs/circuit",
  PRO_DELIVERY_MANAGER: "/vs/pro_delivery_manager",
  BLOG: "/best-route-planning-software-uk",
  DELIVERY_EXCELLENCE_BLOG: "/last-mile-delivery-excellence-metrics",
  PRINCIPLES: "/principles",
  DELIVERY_DRIVER_APP: "/delivery-driver-app",
};
export const TRACKING_TYPE_JOB = "j";
export const TRACKING_TYPE_STOP = "s";
export const STOP_TYPE = {
  COLLECTION: {
    slug: "collection",
    title: "Collecting From",
  },
  DELIVERY: {
    slug: "delivery",
    title: "Delivering To",
  },
};
export const COMMUNICATIONS_TASK_TYPE = {
  ALL: "ALL",
  NONE: "NONE",
  PICK_UP: "PICK_UP",
  DROP_OFF: "DROP_OFF",
};
export const COMMUNICATIONS_MESSAGE_TYPE = {
  ALL: "ALL",
  NONE: "NONE",
  SMS: "SMS",
  EMAIL: "EMAIL",
};
export const NOTIFICATION_FILTER_TYPES = {
  NOTIFIED: "notified",
  NON_NOTIFIED: "not notified",
};

// DM
export const DM_SIDE_BAR_WIDTH = 52;
export const DM_HEADER_HEIGHT = 38;
export const DM_FILTER_BAR_HEIGHT = 40;
export const DM_TASK_BAR_WIDTH = 380;
export const DM_FILTER_TYPE = { DATE: "date", TASK: "task", DRIVER: "driver" };
export const DM_TASK_TYPE = {
  UNASSIGNED: {
    slug: "UNASSIGNED",
    icon: Images.unassignedTaskIcon,
    delayIcon: Images.unassignedDelayedTaskIcon,
    priorityIcon: Images.unassignedPriorityTaskIcon,
    priorityDelayIcon: Images.unassignedDelayedPriorityTaskIcon,
    title: "Unassigned",
  },
  ASSIGNED: {
    slug: "ASSIGNED",
    icon: Images.assignedTaskIcon,
    delayIcon: Images.assignedDelayedTaskIcon,
    priorityIcon: Images.assignedPriorityTaskIcon,
    priorityDelayIcon: Images.assignedDelayedPriorityTaskIcon,
    title: "Assigned",
  },
  IN_TRANSIT: {
    slug: "IN_TRANSIT",
    icon: Images.inTransitTaskIcon,
    delayIcon: Images.inTransitDelayedTaskIcon,
    priorityIcon: Images.inTransitPriorityTaskIcon,
    priorityDelayIcon: Images.inTransitDelayedPriorityTaskIcon,
    title: "In Transit",
  },
  SUCCESS: {
    slug: "SUCCESS",
    icon: Images.succeededTaskIcon,
    title: "Succeeded",
  },
  FAIL: {
    slug: "FAIL",
    icon: Images.failedTaskIcon,
    title: "Failed",
  },
};
export const DM_DRIVER_STATUS_TYPE = {
  ACTIVE: {
    // Active means IDLE
    slug: "ACTIVE",
    icon: Images.idleDriverIcon,
    title: "Idle",
  },
  IN_TRANSIT: {
    slug: "IN_TRANSIT",
    icon: Images.inTransitDriverIcon,
    title: "In Transit",
  },
  INACTIVE: {
    // INACTIVE means Offline
    slug: "INACTIVE",
    icon: Images.offileDriverIcon,
    title: "Offline",
  },
  INVITED: {
    slug: "INVITED",
    icon: Images.offileDriverIcon,
    title: "Invited",
  },
  ACTIVE_DELAY: {
    slug: "ACTIVE_DELAY",
    icon: Images.activeDelayDriverIcon,
    title: "Active Delay",
    delayed: true,
  },
  INACTIVE_DELAY: {
    slug: "INACTIVE_DELAY",
    icon: Images.inactiveDelayDriverIcon,
    title: "Inactive Delay",
    delayed: true,
  },
  IN_TRANSIT_DELAY: {
    slug: "IN_TRANSIT_DELAY",
    icon: Images.intransitDelayDriverIcon,
    title: "Intransit Delay",
    delayed: true,
  },
};

export const DM_TASK_STATUS_LENGTH = 5;
export const DM_DRIVER_STATUS_LENGTH = 3;

export const DM_MODULES = {
  TASK: {
    NAME: "task",
    ACTIONS: {
      CREATE: "create",
      EDIT: "edit",
      VIEW: "view",
      OPTIMIZE: "optimize",
    },
  },
  DRIVER: {
    NAME: "driver",
    ACTIONS: { CREATE: "create", EDIT: "edit", SCHEDULE: "schedule" },
  },
  HUB: {
    NAME: "hub",
    ACTIONS: { CREATE: "create", EDIT: "edit" },
  },
  DISPATCHER: {
    NAME: "hub",
    ACTIONS: { CREATE: "create", EDIT: "edit" },
  },
  SETTINGS: {
    NAME: "settings",
    ACTIONS: {
      ORGANIZATION: "organization",
      USER_SETTINGS: "user-settings",
      DRIVER: "driver",
      DRIVER_APP: "driver-app",
      HUB: "hub",
      DISPATCHER: "dispatcher",
      COMMUNICATIONS: "communications",
      API_WEBHOOK: "api-webhooks",
      PLANS_BILLING: "plans-billing",
      MAP_SETTINGS: "map-settings",
    },
  },
};
export const DM_FILTER_TAB = [
  {
    id: 1,
    title: "Date/Time",
    subTitle: "Not choosed",
    slug: "date",
    icon: Images.filterClock,
  },
  {
    id: 2,
    title: "Task",
    subTitle: "Not choosed",
    slug: "task",
    icon: Images.taskIcon,
  },
  {
    id: 3,
    title: "Driver",
    subTitle: "Not choosed",
    slug: "driver",
    icon: Images.allDriveStatusIcon,
  },
];
export const DM_SETTING_TAB = [
  {
    id: 1,
    title: "Organization",
    icon: Images.organization,
    iconSelected: Images.organizationSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.ORGANIZATION,
  },
  {
    id: 2,
    title: "User settings",

    icon: Images.userSettings,
    iconSelected: Images.userSettingsSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.USER_SETTINGS,
  },
  {
    id: 3,
    title: "Driver",

    icon: Images.drivers,
    iconSelected: Images.driversSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.DRIVER,
  },
  {
    id: 4,
    title: "Driver app",
    icon: Images.driverApp,
    iconSelected: Images.driverAppSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.DRIVER_APP,
  },
  {
    id: 5,
    title: "Dispatchers",
    icon: Images.driverApp,
    iconSelected: Images.driverAppSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.DISPATCHER,
  },
  {
    id: 6,
    title: "Hub",
    icon: Images.hubSetting,
    iconSelected: Images.hubSettingSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.HUB,
  },
  {
    id: 6,
    title: "Notify",
    icon: Images.communications,
    iconSelected: Images.communicationsSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS,
  },
  {
    id: 8,
    title: "API & Webhooks",
    icon: Images.apiWeb,
    iconSelected: Images.apiWebSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK,
  },
  {
    id: 9,
    title: "Plans and billing",
    icon: Images.planBilling,
    iconSelected: Images.planBillingSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING,
  },
  {
    id: 10,
    title: "Maps",
    icon: Images.mapSettings,
    iconSelected: Images.mapSettingsSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.MAP_SETTINGS,
  },
];
export const TASK_FIELDS_NAME = {
  RECIPIENT_PHONE: "recipient_phone",
  RECIPIENT_NAME: "recipient_name",
  RECIPIENT_EMAIL: "recipient_email",
  RECIPIENT_NOTES: "recipient_notes",
  IS_PICKUP: "isPickup",
  IS_DROPOFF: "isDropoff",
  DESCRIPTION: "description",
  LOCATION: "location",
  DESTINATION_NOTES: "destination_notes",
  COMPLETE_AFTER: "completeAfter",
  COMPLETE_BEFORE: "completeBefore",
  END_TIME: "end_time",
  QUANTITY: "quantity",
  ORDERVALUE: "order_value",
  SERVICE_MIN: "serviceMin",
  PROOF: "proof",
  RECIPIENT_PHONE_ERROR: "recipient_phone_error",
  RECIPIENT_EMAIL_ERROR: "recipient_email_error",
  RECIPIENT_NAME_ERROR: "recipient_name_error",
  LOCATION_ADDRESS: "location_address",
  LOCATION_ADDRESS_ERROR: "location_address_error",
  LOCATION_POSTCODE: "location_postcode",
  LOCATION_BUSINESS_NAME: "location_business_name",
  LOCATION_BUILDING: "location_building",
  LOCATION_TOWN: "location_town",
  LOCATION_LATITUDE: "location_latitude",
  LOCATION_LONGITUDE: "location_longitude",
  LOCATION_STREET_NAME: "location_street_name",
  LOCATION_STREET_NUMBER: "location_street_number",
  LOCATION_COUNTRY_NAME: "location_country_name",
  INTERNAL_ORDER_NUMBER: "interal_order_number",
  ID: "id",
  TIMELINE: "timeline",
  DRIVER_ID: "driver_id",
  DELAYED_IN_MINUTES: "delayed_in_minutes",
  STATUS: "status",
  DURATION: "duration_stop_sec",
  ETA: "eta",
  CREATED_AT: "created_at",
  CREATED_BY: "created_by",
  TASK_NUMBER: "task_number",
  OWNER: "owner",
  DRIVER_NAME: "driver_name",
  DRIVER_PHONE: "driver_phone",
  UPDATED_AT: "updatedAt",
  PICTURES: "pictures",
  SIGNATURE: "signature",
  NOTE: "note",
  SEQUENCE: "sequence",
  RATING: "rating",
  BARCODES: "barcodes",
  NOTIFICATION_TIME: "notification_time",
  FAILURE_REASON: "fail_reason",
  MILEAGE: "estimated_mileage",
  PRIORITY: "priority",
};

export const HUB_FIELDS_NAME = {
  ID: "id",
  NAME: "hub_name",
  LOCATION: "hub_location",
  ADDRESS: "hub_address",
  BUILDING: "hub_building",
  POST_CODE: "postcode",
  STREET_NUMBER: "street_number",
  STREET_NAME: "street_name",
  COUNTRY: "country",
  CITY_TOWN: "city_town",
  HUB_BUSINESS_NAME: "hub_business_name",
  NAME_ERROR: "name_error",
  LATITUDE_ERROR: "latitude_error",
  LONGITUDE_ERROR: "longitude_error",
  SERVICE_TIME: "service_time",
};
export const DRIVER_FIELDS_NAME = {
  DRIVER_PHONE: "driver_phone",
  DRIVER_PHONE_ERROR: "driver_phone_error",
  DRIVER_NAME: "driver_name",
  DRIVER_NAME_ERROR: "driver_name_error",
  DRIVER_PROFILE_PICTURE: "driver_profile_picture",
  DRIVER_EMAIL: "driver_email",
  DRIVER_EMAIL_ERROR: "driver_email_error",
  DRIVER_LOCATION: "driver_location",
  DRIVER_ADDRESS: "driver_address",
  DRIVER_POSTCODE: "driver_postcode",
  DRIVER_CITY: "driver_city",
  NUMBER_PLATE: "number_plate",
  MAKE_MODEL: "make_model",
  YEAR: "year",
  COLOR: "color",
  TRANSPORT_TYPE: "transport_type",
  ID: "id",
  STATUS: "status",
  VEHICLE_CAPACITY: "vehicle_capacity",
  DRIVER_CURRENT_LATITUDE: "driver_current_latitude",
  DRIVER_CURRENT_LONGITUDE: "driver_current_longitude",
  DRIVER_LOCATION_TIMESTAMP: "driver_location_timpstamp",
  DRIVER_CURRENT_TASK_ID: "driver_current_task_id",
  DRIVER_APP_VERSION: "driver_app_version",
  DRIVER_PHONE_MANUFACTURER: "driver_phone_manufacturer",
  DRIVER_PHONE_MODEL: "driver_phone_model",
  DRIVER_PHONE_OS: "driver_phone_os",
  DRIVER_PHONE_BATTERY: "driver_phone_battery",
  DRIVER_PHONE_OS_VERSION: "driver_phone_os_version",
  DRIVER_STREET_NAME: "driver_street_name",
  DRIVER_STREET_NUMBER: "driver_street_number",
  DRIVER_COUNTRY_NAME: "driver_country_name",
  DRIVER_SCHEDULE: "driver_schedule",
  AVAILABLE: "available",
  SPEED: "speed",
};

export const cloneHtmlSingle =
  '<div class="cloneCheck"><input id="openCloned" type="checkbox" name="vehicle2"> Open cloned task for editing</div>';
export const cloneHtml =
  '<div class="cloneCheck" ><input id="addBarcodes" type="checkbox" name="vehicle1"> Clone with barcodes</div>' +
  '<div class="cloneCheck"><input id="openCloned" type="checkbox" name="vehicle2"> Open cloned task for editing</div>';

export const DRIVER_TRANSPORT_TYPES = [
  {
    id: 0,
    name: "Walk",
    icon: Images.walk,
    iconSelected: Images.walkSelected,
  },
  {
    id: 1,
    name: "Bike",
    icon: Images.bike,
    iconSelected: Images.bikeSelected,
  },
  {
    id: 2,
    name: "Scooter",
    icon: Images.scooter,
    iconSelected: Images.scooterSelected,
  },
  {
    id: 3,
    name: "Car",
    icon: Images.car,
    iconSelected: Images.carSelected,
  },
  {
    id: 4,
    name: "Van",
    icon: Images.van,
    iconSelected: Images.vanSelected,
  },
  {
    id: 5,
    name: "Truck",
    icon: Images.truck,
    iconSelected: Images.truckSelected,
  },
];

export const TASK_PROOF_LIST = {
  PICTURE: { title: "Picture", type: "picture" },
  SIGNATURE: { title: "Signature", type: "signature" },
  //   SCAN: { title: 'Scan', type: 'scan' },
  NOTES: { title: "Notes", type: "notes" },
};

export const EMAIL_REGEX =
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
export const MAP_SERVICE_PROVIDERS = {
  google: "google",
  mapbox: "mapbox",
};
export const TABLE_VIEW_COLUMNS_LIST = {
  [TASK_FIELDS_NAME.TASK_NUMBER]: {
    name: "Task ID",
    visible: false,
    selector: TASK_FIELDS_NAME.TASK_NUMBER,
    sortable: true,
    minWidth: "150px",
    default: true,
  },
  [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]: {
    name: "Internal ID",
    selector: TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER,
    sortable: true,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.STATUS]: {
    name: "Status",
    selector: TASK_FIELDS_NAME.STATUS,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: true,
  },
  [TASK_FIELDS_NAME.DRIVER_NAME]: {
    name: "Assigned to",
    selector: TASK_FIELDS_NAME.DRIVER_NAME,
    sortable: true,
    visible: false,
    minWidth: "180px",
    default: true,
  },
  [TASK_FIELDS_NAME.COMPLETE_AFTER]: {
    name: "Complete after",
    selector: TASK_FIELDS_NAME.COMPLETE_AFTER,
    sortable: false,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.COMPLETE_BEFORE]: {
    name: "Complete before",
    selector: TASK_FIELDS_NAME.COMPLETE_BEFORE,
    sortable: false,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.ETA]: {
    name: "ETA",
    selector: TASK_FIELDS_NAME.ETA,
    sortable: false,
    visible: false,
    minWidth: "120px",
    default: false,
  },
  [TASK_FIELDS_NAME.END_TIME]: {
    name: "End time",
    selector: TASK_FIELDS_NAME.END_TIME,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: true,
  },
  [TASK_FIELDS_NAME.LOCATION_ADDRESS]: {
    name: "Location",
    selector: TASK_FIELDS_NAME.LOCATION_ADDRESS,
    sortable: true,
    visible: false,
    minWidth: "280px",
    default: true,
  },
  [TASK_FIELDS_NAME.LOCATION_POSTCODE]: {
    name: "Postcode",
    selector: TASK_FIELDS_NAME.LOCATION_POSTCODE,
    sortable: false,
    visible: false,
    minWidth: "150px",
    default: false,
  },
  [TASK_FIELDS_NAME.RECIPIENT_NAME]: {
    name: "Contact",
    selector: TASK_FIELDS_NAME.RECIPIENT_NAME,
    sortable: true,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.QUANTITY]: {
    name: "Quantity",
    selector: TASK_FIELDS_NAME.QUANTITY,
    sortable: true,
    visible: false,
    minWidth: "100px",
    default: false,
  },
  [TASK_FIELDS_NAME.ORDERVALUE]: {
    name: "Order Value",
    selector: TASK_FIELDS_NAME.ORDERVALUE,
    sortable: true,
    visible: false,
    minWidth: "140px",
    default: false,
  },
  [TASK_FIELDS_NAME.DELAYED_IN_MINUTES]: {
    name: "Delayed",
    selector: TASK_FIELDS_NAME.DELAYED_IN_MINUTES,
    sortable: true,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.NOTIFICATION_TIME]: {
    name: "Notification",
    selector: TASK_FIELDS_NAME.NOTIFICATION_TIME,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: false,
  },
  [TASK_FIELDS_NAME.RATING]: {
    name: "Rating",
    selector: TASK_FIELDS_NAME.RATING,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: false,
  },
  [TASK_FIELDS_NAME.CREATED_BY]: {
    name: "Created by",
    selector: TASK_FIELDS_NAME.CREATED_BY,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: true,
  },
  [TASK_FIELDS_NAME.UPDATED_AT]: {
    name: "Last update",
    selector: TASK_FIELDS_NAME.UPDATED_AT,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: false,
  },
  [TASK_FIELDS_NAME.CREATED_AT]: {
    name: "Created",
    selector: TASK_FIELDS_NAME.CREATED_AT,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: false,
  },
  [TASK_FIELDS_NAME.IS_PICKUP]: {
    name: "Type",
    selector: TASK_FIELDS_NAME.IS_PICKUP,
    sortable: true,
    visible: false,
    minWidth: "80px",
    default: false,
  },
};

export const PRICING_TABLE_DATA = [
  {
    id: 1,
    key: "STARTER",
    title: "Starter",
    image: Images.starter_img,
    description:
      "Get to know Kiffgo’s powerful features. Track, dispatch, manage, and analyse your fleet within secs.",
    buttonText: "7 days free trial !",
    bgColor: "linear-gradient(to bottom, #ffce00, #efd773)",
    buttonURL: ROUTES.SIGN_UP,
    tasksCount: 1000,
    altText: "Bike delivery optimization",
  },
  {
    id: 2,
    key: "BASIC",
    title: "Basic",
    image: Images.basic_img,
    description:
      "Starter + optimize routes, chat with drivers and build API integration. Live support.",
    buttonText: "7 days free trial !",
    bgColor: "linear-gradient(to bottom, #42d4de, #87d8de)",
    buttonURL: ROUTES.SIGN_UP,
    tasksCount: 2500,
    altText: "Car delivery optimization",
  },
  {
    id: 3,
    key: "PREMIUM",
    title: "Premium",
    image: Images.premium_img,
    description:
      "Basic + scan barcodes and IDs, and use a dedicated phone number.",
    buttonText: "Contact sales",
    mostPopularButtonText: "Most Popular",
    mostPopulatBtnIcon: Images.popular_heart_img,
    bgColor: "linear-gradient(to bottom, #5edea8, #6bf8bd)",
    buttonURL: ROUTES.HOME + "#contactForm",
    tasksCount: 5000,
    altText: "Van delivery optimization",
  },
  {
    id: 4,
    key: "PRO",
    title: "Pro",
    image: Images.pro_img,
    description:
      "Premium + priority support, full data access and brand customization.",
    buttonText: "Contact sales",
    bgColor: "linear-gradient(to bottom, #ba96f6, #893bff)",
    buttonURL: ROUTES.HOME + "#contactForm",
    tasksCount: 12500,
    altText: "Truck delivery optimization",
  },
];

export const PRICING_DRIVER_TABLE_DATA = [
  {
    id: 1,
    key: "STARTER",
    title: "Starter",
    image: Images.starter_img,
    description:
      "Get to know Kiffgo’s powerful features. Track, dispatch, manage, and analyse your fleet within secs.",
    buttonText: "7 days free trial !",
    bgColor: "linear-gradient(to bottom, #ffce00, #efd773)",
    buttonURL: ROUTES.SIGN_UP,
    altText: "Bike delivery optimization",
  },
  {
    id: 2,
    key: "BASIC",
    title: "Basic",
    image: Images.basic_img,
    description:
      "Starter + optimize routes, chat with drivers and build API integration. Live support.",
    buttonText: "7 days free trial !",
    mostPopularButtonText: "Most Popular",
    mostPopulatBtnIcon: Images.popular_heart_img,
    bgColor: "linear-gradient(to bottom, #42d4de, #87d8de)",
    buttonURL: ROUTES.SIGN_UP,
    altText: "Car delivery optimization",
  },
  {
    id: 3,
    key: "PREMIUM",
    title: "Premium",
    image: Images.premium_img,
    description:
      "Basic + scan barcodes and IDs, and use a dedicated phone number.",
    buttonText: "Contact sales",
    bgColor: "linear-gradient(to bottom, #5edea8, #6bf8bd)",
    buttonURL: ROUTES.HOME + "#contactForm",
    altText: "Van delivery optimization",
  },
  {
    id: 4,
    key: "PRO",
    title: "Pro",
    image: Images.pro_img,
    description:
      "Premium + priority support, full data access and brand customization.",
    buttonText: "Contact sales",
    bgColor: "linear-gradient(to bottom, #ba96f6, #893bff)",
    buttonURL: ROUTES.HOME + "#contactForm",
    altText: "Truck delivery optimization",
  },
];

export const DRIVERS_DATA = [
  {
    id: 1,
    name: "Unlimited",
    key: "STARTER",
  },
  {
    id: 2,
    name: "Unlimited",
    key: "BASIC",
  },
  {
    id: 3,
    name: "Unlimited",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "Unlimited",
    key: "PRO",
  },
];

export const USERS_DATA = [
  {
    id: 1,
    name: "Unlimited",
    key: "STARTER",
  },
  {
    id: 2,
    name: "Unlimited",
    key: "BASIC",
  },
  {
    id: 3,
    name: "Unlimited",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "Unlimited",
    key: "PRO",
  },
];

export const ZAPIER_INT_DATA = [
  {
    id: 1,
    name: "Task creation only",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const API_DATA = [
  {
    id: 1,
    name: "Only Excel & CSV Upload",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const ROUTE_ENGINE_OPT_DATA = [
  {
    id: 1,
    name: "yes",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const CHAT_DATA = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const PREDICTIVE_ETA_DATA = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const PREDICTIVE_RECIPIENT_NOTIFICATION = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const FULLY_AUTONOMOUS = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "no",
    key: "BASIC",
  },
  {
    id: 3,
    name: "no",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const BARCODE_SCANNING = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const AGE_VERIFICATION = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const DEDICATED_PHONE_NUMBER = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const SCHEDULE_PHONE_SUPPORT = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const PRIVATE_LABEL_TRACKING = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const PRIORITY_SUPPORT = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "yes",
    key: "BASIC",
  },
  {
    id: 3,
    name: "yes",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const DEDICATED_SUCCESS_TEAM = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "no",
    key: "BASIC",
  },
  {
    id: 3,
    name: "no",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const CONCIERGE_ONBOARDING = [
  {
    id: 1,
    name: "no",
    key: "STARTER",
  },
  {
    id: 2,
    name: "no",
    key: "BASIC",
  },
  {
    id: 3,
    name: "no",
    key: "PREMIUM",
  },
  {
    id: 4,
    name: "yes",
    key: "PRO",
  },
];

export const PRICING_KEYS = {
  // for US dollars
  USD: {
    STARTER: {
      currencyAnnually: 110,
      currencyMonthly: 150,
      symbol: "$",
      additionalTasks: 0.18,
    },
    BASIC: {
      currencyAnnually: 270,
      currencyMonthly: 350,
      symbol: "$",
      additionalTasks: 0.18,
    },
    PREMIUM: {
      currencyAnnually: 680,
      currencyMonthly: 850,
      symbol: "$",
      additionalTasks: 0.18,
    },
    PRO: {
      currencyAnnually: 1899,
      currencyMonthly: 2399,
      symbol: "$",
      additionalTasks: 0.18,
    },
  },

  // for UK pounds
  GBP: {
    STARTER: {
      currencyAnnually: 80,
      currencyMonthly: 110,
      symbol: "£",
      additionalTasks: 0.15,
    },
    BASIC: {
      currencyAnnually: 200,
      currencyMonthly: 260,
      symbol: "£",
      additionalTasks: 0.15,
    },
    PREMIUM: {
      currencyAnnually: 510,
      currencyMonthly: 640,
      symbol: "£",
      additionalTasks: 0.15,
    },
    PRO: {
      currencyAnnually: 1399,
      currencyMonthly: 1799,
      symbol: "£",
      additionalTasks: 0.15,
    },
  },

  // for Australian dollars
  AUD: {
    STARTER: {
      currencyAnnually: 150,
      currencyMonthly: 210,
      symbol: "$",
      additionalTasks: 0.25,
    },
    BASIC: {
      currencyAnnually: 370,
      currencyMonthly: 480,
      symbol: "$",
      additionalTasks: 0.25,
    },
    PREMIUM: {
      currencyAnnually: 930,
      currencyMonthly: 1160,
      symbol: "$",
      additionalTasks: 0.25,
    },
    PRO: {
      currencyAnnually: 2599,
      currencyMonthly: 3299,
      symbol: "$",
      additionalTasks: 0.25,
    },
  },

  // for Euros
  EUR: {
    STARTER: {
      currencyAnnually: 100,
      currencyMonthly: 130,
      symbol: "€",
      additionalTasks: 0.16,
    },
    BASIC: {
      currencyAnnually: 230,
      currencyMonthly: 230,
      symbol: "€",
      additionalTasks: 0.16,
    },
    PREMIUM: {
      currencyAnnually: 590,
      currencyMonthly: 740,
      symbol: "€",
      additionalTasks: 0.16,
    },
    PRO: {
      currencyAnnually: 1699,
      currencyMonthly: 1999,
      symbol: "€",
      additionalTasks: 0.16,
    },
  },
};

export const PRICING_KEYS_DRIVER = {
  // for US dollars
  USD: {
    STARTER: {
      currencyAnnually: 31,
      currencyMonthly: 40,
      symbol: "$",
    },
    BASIC: {
      currencyAnnually: 49,
      currencyMonthly: 60,
      symbol: "$",
    },
    PREMIUM: {
      currencyAnnually: 79,
      currencyMonthly: 90,
      symbol: "$",
    },
    PRO: {
      currencyAnnually: 129,
      currencyMonthly: 150,
      symbol: "$",
    },
  },

  // for UK pounds
  GBP: {
    STARTER: {
      currencyAnnually: 20,
      currencyMonthly: 24,
      symbol: "£",
    },
    BASIC: {
      currencyAnnually: 40,
      currencyMonthly: 50,
      symbol: "£",
    },
    PREMIUM: {
      currencyAnnually: 60,
      currencyMonthly: 70,
      symbol: "£",
    },
    PRO: {
      currencyAnnually: 100,
      currencyMonthly: 120,
      symbol: "£",
    },
  },

  // for Australian dollars
  AUD: {
    STARTER: {
      currencyAnnually: 40,
      currencyMonthly: 50,
      symbol: "$",
    },
    BASIC: {
      currencyAnnually: 70,
      currencyMonthly: 80,
      symbol: "$",
    },
    PREMIUM: {
      currencyAnnually: 110,
      currencyMonthly: 130,
      symbol: "$",
    },
    PRO: {
      currencyAnnually: 180,
      currencyMonthly: 220,
      symbol: "$",
    },
  },

  // for Euros
  EUR: {
    STARTER: {
      currencyAnnually: 30,
      currencyMonthly: 40,
      symbol: "€",
    },
    BASIC: {
      currencyAnnually: 40,
      currencyMonthly: 50,
      symbol: "€",
    },
    PREMIUM: {
      currencyAnnually: 70,
      currencyMonthly: 80,
      symbol: "€",
    },
    PRO: {
      currencyAnnually: 110,
      currencyMonthly: 130,
      symbol: "€",
    },
  },
};

export const CURRENCY_KEYS = {
  USD: "USD",
  GBP: "GBP",
  AUD: "AUD",
  EUR: "EUR",
};

export const EUROPEAN_COUNTRIES = [
  {
    name: "Austria",
  },
  {
    name: "Belgium",
  },
  {
    name: "Bulgaria",
  },
  {
    name: "Croatia",
  },
  {
    name: "Cyprus",
  },
  {
    name: "Czechia",
  },
  {
    name: "Denmark",
  },
  {
    name: "Estonia",
  },
  {
    name: "Finland",
  },
  {
    name: "France",
  },
  {
    name: "Germany",
  },
  {
    name: "Greece",
  },
  {
    name: "Hungary",
  },
  {
    name: "Ireland",
  },
  {
    name: "Italy",
  },
  {
    name: "Latvia",
  },
  {
    name: "Lithuania",
  },
  {
    name: "Luxembourg",
  },
  {
    name: "Malta",
  },
  {
    name: "Netherlands",
  },
  {
    name: "Poland",
  },
  {
    name: "Portugal",
  },
  {
    name: "Romania",
  },
  {
    name: "Slovakia",
  },
  {
    name: "Slovenia",
  },
  {
    name: "Spain",
  },
  {
    name: "Sweden",
  },
];

export const API_DATA_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const ZAPIER_DATA_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const UNLEASHED_DATA_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const SELFSERVICE_DATA_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const TIME_WINDOW_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const SERVICE_TIME_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const VEHICLE_CAPACITY_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const DRIVER_SCHEDULE_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const TASKS_PER_DRIVER_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const DRIVING_SPEED_ADJUSTMENT_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const HANDLE_DRIVER_BREAK_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const HANDLE_PRIORITY_ORDERS_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const SETUP_TIME_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const INITIAL_SOLUTION_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const INAPP_CALL_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const INAPP_SMS_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const INAPP_ETA_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const BARCODE_SCANNING_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const HOURS_WEEKLY_SCHEDULE_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const LOCAL_STORAGE_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const DRIVER_REROUTE_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const LIVE_ORDER_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Onfleet",
  },
];

export const OPTIONAL_SELF_SCHEDULING_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const EMAIL_PROOF_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const SCHEDULE_STAGE_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const SCHEDULE_STAGE_CUSTOMER_ONFLEET = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Onfleet",
  },
];

export const DRIVERS_DATA_CIRCUIT = [
  {
    id: 1,
    name: "Unlimited",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "$60/per driver",
    key: "Circuit",
  },
];

export const DISPATCHER_DATA_CIRCUIT = [
  {
    id: 1,
    name: "Unlimited",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "Don’t handle multiple users and depots",
    key: "Circuit",
  },
];

export const API_DATA_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "Only Excel & CSV Upload ",
    key: "Circuit",
  },
];

export const ZAPIER_DATA_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const UNLEASHED_DATA_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const SELFSERVICE_DATA_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const TIME_WINDOW_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const SERVICE_TIME_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const VEHICLE_CAPACITY_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const DRIVER_SCHEDULE_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const TASKS_PER_DRIVER_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const DRIVING_SPEED_ADJUSTMENT_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const HANDLE_DRIVER_BREAK_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const HANDLE_PRIORITY_ORDERS_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const SETUP_TIME_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const INITIAL_SOLUTION_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const INAPP_CALL_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const INAPP_SMS_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const INAPP_ETA_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const BARCODE_SCANNING_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const HOURS_WEEKLY_SCHEDULE_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const LOCAL_STORAGE_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const DRIVER_REROUTE_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const LIVE_ORDER_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "Circuit",
  },
];

export const OPTIONAL_SELF_SCHEDULING_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const EMAIL_PROOF_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const SCHEDULE_STAGE_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const SCHEDULE_STAGE_CUSTOMER_CIRCUIT = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "Circuit",
  },
];

export const DISPATCHER_DATA_PDM = [
  {
    id: 1,
    name: "Unlimited",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "Don’t handle multiple users and depots",
    key: "PDM",
  },
];

export const API_DATA_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "Manual upload",
    key: "PDM",
  },
];

export const ZAPIER_DATA_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const TITAN_INT_PDM = [
  {
    id: 1,
    name: "Work in progress",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const SELFSERVICE_DATA_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const TIME_WINDOW_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const SERVICE_TIME_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const VEHICLE_CAPACITY_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const DRIVER_SCHEDULE_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const TASKS_PER_DRIVER_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const DRIVING_SPEED_ADJUSTMENT_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const HANDLE_DRIVER_BREAK_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const HANDLE_PRIORITY_ORDERS_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const SETUP_TIME_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const INITIAL_SOLUTION_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const INAPP_CALL_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "PDM",
  },
];
export const INAPP_SMS_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "PDM",
  },
];

export const INAPP_ETA_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "PDM",
  },
];

export const BARCODE_SCANNING_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "PDM",
  },
];

export const HOURS_WEEKLY_SCHEDULE_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const LOCAL_STORAGE_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const DRIVER_REROUTE_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "yes",
    key: "PDM",
  },
];

export const LIVE_ORDER_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const OPTIONAL_SELF_SCHEDULING_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const EMAIL_PROOF_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const SCHEDULE_STAGE_PDM = [
  {
    id: 1,
    name: "yes",
    key: "Kiffgo",
  },
  {
    id: 2,
    name: "no",
    key: "PDM",
  },
];

export const BLOG_DETAILS_LISTING = [
  {
    id: 1,
    title:
      "1. Kiffgo - The fastest growing young fighter with slick User Experience and tech muscles",
    image: Images.kiffgo_map,
    anchorText: "Kiffgo",
    anchorTextUrl: `${ROUTES.HOME}`,
    description:
      "is an end-to-end route planning, dispatch, communication and analytics platform with modern UX for delightful delivery management.",
    headQuarter: "London, England",
    priceText:
      "for 1000 stops per month with unlimited drivers, vehicles and dispatchers.",
    priceHighlightedText: "Price starts at £70",
  },
  {
    id: 2,
    title: "2. Stream Go - The mid-level player",
    image: Images.go_to_stream,
    anchorText: "Stream Go",
    description:
      "is a software that allows you optimise delivery routes, capture electronic proof of Delivery and track drivers in real-time.",
    headQuarter: "Leeds, England",
    priceText:
      "it includes paperless vehicle check app. There is a 50% discount for electric vehicles.",
    priceHighlightedText: "Price starts at £160 per vehicle",
  },
  {
    id: 3,
    title: "3. Maxoptra - still fighting with legacy UX",
    image: Images.maxoptra2,
    anchorText: "Maxoptra",
    description:
      "is a suite of software scheduling solutions for the distribution and field service logistics industries.",
    headQuarter: "London, England",
    priceText:
      "There is a starting price at £35 per vehicle. It includes only optimization which is not enough get the fully productivity of a delivery management software.",
    priceHighlightedText:
      "Price starts at £50 per vehicle - 12 months contract only.",
  },
  {
    id: 4,
    title:
      "4. Podfather - somewhere in between - not really modern but still better than old mamouth",
    image: Images.podfather,
    anchorText: "Podfather",
    description:
      "is a cloud-based software as a service electronic Proof of Delivery system, allowing businesses to manage their operations in real-time, removing the problems associated with paper-based processes.",
    headQuarter: "Edinburgh, Scotland",
    priceHighlightedText: "Price is not available on the website.",
  },
  {
    id: 5,
    title: "5. GSIT - Multidrop assist - despit his age still going on",
    image: Images.multidrop_assist,
    anchorText: "Multidrop Assist",
    description:
      "is a cloud-based software as a service electronic Proof of Delivery system, allowing businesses to manage their operations in real-time, removing the problems associated with paper-based processes.",
    headQuarter: "Darlington, England",
    priceHighlightedText: "Price is not available on the website.",
  },
  {
    id: 6,
    title: "6. Journease - the most senior fighter by the look of the UX",
    image: Images.journease,
    anchorText: "Journease",
    description:
      "helps you streamline businesses and drive efficiency through its core functionality: Quotations, Job Booking, Invoicing, Integrated Mapping / Route Planning, Mobile Signature Capture, Tracking and Web Booking",
    headQuarter: "Fishponds, England",
    priceHighlightedText: "Price starts at £50 per user.",
  },
];

export const EXCELLENCE_BLOG_DETAILS_LISTING = [
  {
    id: 1,
    title: "1. On-Time Deliveries",
    descriptionOne:
      "The rise of on-demand economy has set the bar high for deliveries. A delayed/missed delivery is such a pain in the ass and a stronger pain in the brain. When an expectation is created in your brain and it is followed by disappointment, such experiences undermine our balance and well-being. When we are having a bad experience, the levels of neurotransmitters such as serotonin or dopamine decrease which is linked to negative emotions. You may think why I am talking about neurarotransmitters in a blog about deliveries. Well, as a product manager at Kiffgo, I got to learn about emotional friction.",
    descriptionTwo:
      "According to Sachin Rekhi, emotional friction refers to emotions your users/customers feel that prevent them from accomplishing their goal. These are often the most difficult to perceive and equally the most difficult to address. Delayed/missed deliveries are emotional roller-coasters that will leave a bad aftertaste in your customers' brain, which turns into a negative emotional connection to your brand. That's why It's need to be tracked in order to be solved.",
  },
  {
    id: 2,
    title: "2. Fuel Consumption Rate and Real-time fuel consumption estimate",
    descriptionOne:
      "Today's map services such as Google Maps can estimate in real-time distance and time for each route, however it cannot provide predicitive real-time fuel consumption and cost estimation.  Wouldn't it be great to have an accurate fuel consumption and cost estimate at the time of planning the routes? Based on Qi Zhao, Qi Chen and Li Wang research, Kiffgo is developing a real-time fuel consumption algorithm that will help courier companies and self-employed driver/owner estimate the fuel cost of a delivery or a route.",
  },
  {
    id: 3,
    title: "3. Used vs Available Vehicle Capacity",
    descriptionOne:
      "In last mile logistics, the utilization of the van has a huge impact on profitability. Therefore, it is important to track the capacity utilized vs the available capacity, this metrics can be calculated by dividing the available capacity by the total capacity of the van. In a low margin industry, it is essential to maximize the utilization of the driver and the vehicle. If you have excess available capacity you must consider improving loading procedure or consolidating routes.",
  },
  {
    id: 4,
    title: "4. Planned Versus Actual Mileage",
    descriptionOne:
      "Routing planning is essential in last mile delivery, however most of the time things doesn't go as planned on the road. The delivery operations team need a tool with the ability to compare the planned vs the actual mileage. Higher actual mileage reveal a route planning issue or unforseen detour to the schedule and end-up costing more. When choosing a delivery management software, it is important to check if it offers automated mileage tracking capabilities per driver/per vehicle.",
  },
  {
    id: 5,
    title: "5. Driver Hours In-Motion and Stationary",
    descriptionOne:
      "It is also critical to measure driver performance in last mile delivery. Drive time and stops are necessary, and It is critical to distinguish them instead of measuring overall routes duration. Excess drive time or stationary hours can reveal issue in planning, driver performance or the lack of real-time support of drivers from the operations team.",
  },
  {
    id: 6,
    title: "6. Cost Per Item, Per Mile, and Per Vehicle",
    descriptionOne:
      "Last mile delivery companies need the supporting technology to track the cost per item, per mile and per vehicle in consistent way. Those KPI’s are important for pricing and leading indicators of profitability.",
  },
  {
    id: 7,
    title: "7. Number of Stops",
    descriptionOne:
      "The number of stops per vehicle /per driver is another essential indicator in last mile delivery, connected to route duration it can reveal too much pressure on drivers, poor route optimization. Vehicles/drivers with higher of stops should be re-evaluated and delivery operations team should look for ways to improve route schedule.",
  },
  {
    id: 8,
    title: "8. Average Service Time",
    descriptionOne:
      "The service time is the time the driver spend at a customer location performing a loading/unloading operation or a task. It takes more time to unload and deliver a sofa to a room of choice than 4 chairs. Every retailer sell different type of goods and it is important to track this metric per customer and gain insight into profitability per customer. It can be daunting to calculate manually this metric, delivery companies when choosing a delivery management software should look into those automated capabilities to calculate those metrics.",
  },
  {
    id: 9,
    title: "9. Feedback Collection",
    descriptionOne:
      "Collecting feedback on Trustpilot can be great for brand awareness. However, in order to improve the delivery operations and providing consistent analytics to operations team having separate dataset somewhere unlinked to the rest of the data will fail to provide a holistic view of the delivery performance. Delivery company should consistently collect customer feedbacks and analyse them in order to continuously improve service and delight end-customer. Kiffgo’s Customer Feedback feature will surely help you improve on this area, once a customer has received their item, they are automatically sent an SMS linking to an HTML web-based app to rate the driver and overall delivery experience.",
  },
  {
    id: 10,
    title: "10. Damage Claims",
    descriptionOne:
      "Goods damage and loss claims can eat away at your profit margin. Last mile Delivery companies need track to consistently which driver, which customer are the claims originated from. Consistent tracking will help to find out the root cause and shout down the problem at its origin.",
    descriptionTwo:
      "How delivery performance is tracked within your organization?",
  },
];

export const COMPARE_PRO_DELIVERY_LISTING = [
  {
    id: 1,
    name: "Addresses are not mapped accurately.",
  },
  {
    id: 2,
    name: "Application UX/UI is too complex to learn.",
  },
  {
    id: 3,
    name: "The driver cannot complete a task when there is no mobile internet.",
  },
  {
    id: 4,
    name: "No realtime Uber-like live tracking on Map.",
  },
];

export const PRINCIPLES_DATA = [
  {
    id: 1,
    numberColor: `${Colors.text.numberColorOne}`,
    title: "Customer Obsession",
    description:
      "Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.",
  },
  {
    id: 2,
    numberColor: `${Colors.text.numberColorTwo}`,
    title: "Ownership",
    description:
      "Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say “that’s not my job.”",
  },
  {
    id: 3,
    numberColor: `${Colors.text.numberColorThree}`,
    title: "Invent and Simplify",
    description:
      "Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here”. Because we do new things, we accept that we may be misunderstood for long periods of time.",
  },
  {
    id: 4,
    numberColor: `${Colors.text.numberColorFour}`,
    title: "Learn and Be Curious",
    description:
      "Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say “that’s not my job.”",
  },
  {
    id: 5,
    numberColor: `${Colors.text.numberColorFive}`,
    title: "Think Big",
    description:
      "Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.",
  },
  {
    id: 6,
    numberColor: `${Colors.text.numberColorSix}`,
    title: "Bias for Action",
    description:
      "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.",
  },
  {
    id: 7,
    numberColor: `${Colors.text.numberColorSeven}`,
    title: "Frugality",
    description:
      "Accomplish more with less. Constraints breed resourcefulness, self-sufficiency and invention. There are no extra points for growing headcount, budget size or fixed expense.",
  },
  {
    id: 8,
    numberColor: `${Colors.text.numberColorEight}`,
    title: "Earn Trust",
    description:
      "Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team’s body odour smells of perfume. They benchmark themselves and their teams against the best.",
  },
  {
    id: 9,
    numberColor: `${Colors.text.numberColorNine}`,
    title: "Have Backbone, Disagree and Commit",
    description:
      "Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. They do not compromise for the sake of social cohesion. Once a decision is determined, they commit wholly.",
  },
  {
    id: 10,
    numberColor: `${Colors.text.numberColorTen}`,
    title: "Deliver Results",
    description:
      "Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never compromise.",
  },
];

export const TEAM_DATA = [
  {
    id: 1,
    name: "Tayyab",
    title: "Technical lead - CoFounder",
    description:
      "Creates a technical vision in order to turn it into reality with the help of the team. Helping to figure out the right Architecture for the software to ensure fast delivery, reliability and scalability. Making sure the team is taking the right technical path for the right stage of the startup.",
    image: `${Images.technical_lead_cofounder}`,
  },
  {
    id: 2,
    name: "Bernard",
    title: "Product lead - CoFounder",
    description:
      "Responsible for guiding the success of a product and leading the cross-functional team that is responsible for improving it. It is an important organizational role — especially in technology companies — that sets the strategy, roadmap, and feature definition for a product or product line.",
    image: `${Images.product_lead_cofounder}`,
  },
  {
    id: 3,
    name: "Yasir",
    title: "Talent Lead - CoFounder",
    description:
      "Ex software engineer and Ex SaaS founder. All the lessons learnt while building Kiffgo and working with a distributed team and has paved the way to build his next venture. With Elastic Bees Yasir and team have developed a process to manage remote tech talents and guarantee outcome.",
    image: `${Images.talent_lead_cofounder}`,
  },
  {
    id: 4,
    name: "Tasneem",
    title: "Backend Lead",
    description:
      "Responsible for maintaining server and creating APIs as per requested by our client side developers. Managing databases and codebase to make sure seamless releases of features.",
    image: `${Images.backend_lead}`,
  },
  {
    id: 5,
    name: "Ahsan",
    title: "Front-End Engineer",
    description:
      "Manipulating data while utilizing REST APIs and maintaining their states. Responsibilities include building complex UI whilst maintaining user experience.",
    image: `${Images.frontend_engineer}`,
  },
  {
    id: 6,
    name: "Anas",
    title: "DevOps",
    description:
      "Responsible for creating REST APIs and scaling server side application. Responsibilities include managing multiple environments and implementing CI/CD. Real-time sockets communication.",
    image: `${Images.devops_lead}`,
  },
  {
    id: 7,
    name: "Zain",
    title: "Mobile Engineering Lead",
    description:
      "Experienced mobile app developer on React Native, Android Native and Hybrid Ionic Apps with a demonstrated history of working in the information technology and services industry.",
    image: `${Images.mobile_engineering_lead}`,
  },
  {
    id: 8,
    name: "Hassan",
    title: "Mobile engineer",
    description:
      "As a mobile application developer my responsibility is to maintain and develop mobile applications.",
    image: `${Images.mobile_engineer}`,
  },
  {
    id: 9,
    name: "Abid",
    title: "Q&A Lead",
    description:
      "Establish and evolve formal QA processes, ensuring that the team is using industry-accepted best practices.Oversee all aspects of quality assurance including establishing metrics, applying industry best practices, and developing new tools and processes to ensure quality goals are met.",
    image: `${Images.qa_lead}`,
  },
  {
    id: 10,
    name: "Taha",
    title: "DevOps Lead",
    description:
      "Making sure Kiffgo is running 24/7. He is in charge of Version control, Continuous Integration servers, Configuration management, Deployment automation, Containers, Infrastructure Orchestration, Monitoring and analytics, Testing and Cloud Quality tools, and Network protocols.",
    image: `${Images.lead_devops}`,
  },
];

export const ROUTE_OPTIMIZATION_FEATURES = [
  {
    id: 1,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Delivery time window",
    description:
      "Optimizing by delivery time will also allow you to meet the customer promised time. The strength of the Amazon delivery-and-returns proposition — and the operational execution of the proposition — has been a critical element in the creation of the customer-loyalty machine that has made Amazon the success it is today.",
  },
  {
    id: 2,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Service time",
    description:
      "The time the driver or the worker spend providing a service at a particular location. This is very useful for predictive ETA.. Learning about service time can significantly improve the accuracy of ETA",
  },
  {
    id: 3,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Drivers’ working schedule",
    description:
      "Not all the drivers have the same working schedule.. When you have 20+ drivers all working at different schedule. The  optimization will need to take into account all different to plan deliveries accordingly.",
  },
  {
    id: 4,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Vehicle capacity",
    description:
      "Optimization engine should be able to allocate tasks to different type of vehicles according to payload or capacity or number of items it can carry. A van doesn’t have the same capacity as 7.5t truck. And even trucks have different payload",
  },
  {
    id: 5,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Multiple trips",
    description:
      "When you have one delivery that takes the full capacity of the vehicle, The optimization engine needs to understand that if there are other orders that can be filled that day and the driver working schedule has room for it. It needs plan drivers day out for delivery accordingly.",
  },
  {
    id: 6,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Add priority tasks",
    description:
      "Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team’s body odour smells of perfume.  They benchmark themselves and their teams against the best.",
  },
  {
    id: 7,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Autonomous",
    description:
      "Manual intervention for regular and repetitive task is useless.  Kiffgo’s optimization engine can autonomously retrieving orders from your order management system (eg: Unleashed) and plan all deliveries without manual inputs",
  },
  {
    id: 8,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Priority tasks",
    description:
      "Kiffgo’s optimization engine understands that some tasks can more important than others so it can prioritise some tasks.",
  },
  {
    id: 9,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Set-up time",
    description:
      "Set-up time is a variable that takes into account the time required at depot to get the vehicle ready for delivery or collection (e.g: time required to load the vehicle) at the start of the route.",
  },
  {
    id: 10,
    numberColor: `${Colors.text.featureOptimizationNum}`,
    title: "Dynamic ETA recalculation",
    description:
      "If required the dispatcher on Kiffgo platform can rearrange some tasks and get the ETA recalculated in seconds instead of running a complete optimization again.",
  },
];

export const STORE_URLS = {
  GOOGLE_PLAY_STORE:
    "https://play.google.com/store/apps/details?id=com.kiffgo.driver&hl=en&gl=US",
  APP_STORE: "https://apps.apple.com/pk/app/kiffgo-driver/id1464886204",
};

export const GEOLOCATION_BASE_URL =
  "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708";
