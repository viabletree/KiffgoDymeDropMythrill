import { Images } from "../theme";
import { Route } from "react-router-dom";

export const SAGA_ALERT_TIMEOUT = 500;
export const IMAGE_MAX_WIDTH = 500;
export const IMAGE_MAX_HEIGHT = 500;
export const MILES_LIMIT = 50;

// URLS
export const URL_WEBSITE = "https://www.kiffgo.com";

// Array of week

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
export const DATE_TIME_FORMAT_BULK = "DD/MM/YYYY HH:mm";

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
export const TIME_ERROR = "Complete before must not be before creation time";
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
export const DM_MODULE_UPDATE_TIMEOUT_IN_MINUTES = 20;

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

export const CONTACT_OPTION_TYPES = {
  FB: "fb",
  INSTA: "insta",
  EMAIL: "email",
  LINKEDIN: "linkedin",
  MEDIUM: "medium",
  PHONE: "phone",
  PINTEREST: "pinterest",
  REDDIT: "reddit",
  SNAPCHAT: "snapchat",
  TIKTOK: "tiktok",
  TWITCH: "twitch",
  TWITTER: "twitter",
  YOUTUBE: "youtube",
  HUDL: "hudl",
  MAXPREPS: "maxpreps",
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
  DYNAMIC_ROUTE: "/:slug",
  RESET_PASSWORD: "/reset-password",
  PRICING: "/pricing",
  FREE_TRIAL: "/free-trial",
  BESPOKE_LOGISTICS: "/products/bespoke-logistics",
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
  MOBILE_APP_NAVIGATOR: "/app",
  TRACKING: "/track",
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
    title: "Unassigned",
  },
  ASSIGNED: {
    slug: "ASSIGNED",
    icon: Images.assignedTaskIcon,
    delayIcon: Images.assignedDelayedTaskIcon,
    title: "Assigned",
  },
  IN_TRANSIT: {
    slug: "IN_TRANSIT",
    icon: Images.inTransitTaskIcon,
    delayIcon: Images.inTransitDelayedTaskIcon,
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
  SETTINGS: {
    NAME: "settings",
    ACTIONS: {
      ORGANIZATION: "organization",
      USER_SETTINGS: "user-settings",
      DRIVER: "driver",
      DRIVER_APP: "driver-app",
      HUB: "hub",
      COMMUNICATIONS: "communications",
      API_WEBHOOK: "api-webhooks",
      PLANS_BILLING: "plans-billing",
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
    title: "Hub",
    icon: Images.dispatchers,
    iconSelected: Images.dispatchersSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.HUB,
  },
  {
    id: 6,
    title: "Communications",
    icon: Images.communications,
    iconSelected: Images.communicationsSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.COMMUNICATIONS,
  },
  {
    id: 7,
    title: "API & Webhooks",
    icon: Images.userSettings,
    iconSelected: Images.userSettingsSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.API_WEBHOOK,
  },
  {
    id: 8,
    title: "Plans and billing",
    icon: Images.planBilling,
    iconSelected: Images.planBillingSelected,
    route: DM_MODULES.SETTINGS.ACTIONS.PLANS_BILLING,
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
  QUANTITY: "quantity",
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
};

export const HUB_FIELDS_NAME = {
  ID: "id",
  LOCATION: "hub_location",
  ADDRESS: "hub_address",
  BUILDING: "hub_building",
  NAME: "hub_name",
  NAME_ERROR: "name_error",
  LATITUDE_ERROR: "latitude_error",
  LONGITUDE_ERROR: "longitude_error",
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

export const TABLE_VIEW_COLUMNS_LIST = {
  [TASK_FIELDS_NAME.TASK_NUMBER]: {
    name: "Task ID",
    visible: false,
    selector: TASK_FIELDS_NAME.TASK_NUMBER,
    sortable: true,
    minWidth: "180px",
    default: true,
  },
  [TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER]: {
    name: "Internal Order #",
    selector: TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER,
    sortable: true,
    visible: false,
    minWidth: "180px",
    default: false,
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
    name: "Complete After",
    selector: TASK_FIELDS_NAME.COMPLETE_AFTER,
    sortable: false,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.COMPLETE_BEFORE]: {
    name: "Complete Before",
    selector: TASK_FIELDS_NAME.COMPLETE_BEFORE,
    sortable: false,
    visible: false,
    minWidth: "180px",
    default: false,
  },
  [TASK_FIELDS_NAME.ETA]: {
    name: "Eta",
    selector: TASK_FIELDS_NAME.ETA,
    sortable: false,
    visible: false,
    minWidth: "120px",
    default: false,
  },
  [TASK_FIELDS_NAME.LOCATION_ADDRESS]: {
    name: "Location",
    selector: TASK_FIELDS_NAME.LOCATION_ADDRESS,
    sortable: true,
    visible: false,
    minWidth: "280px",
    default: true,
  },
  [TASK_FIELDS_NAME.IS_PICKUP]: {
    name: "Type",
    selector: TASK_FIELDS_NAME.IS_PICKUP,
    sortable: true,
    visible: false,
    minWidth: "80px",
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
  [TASK_FIELDS_NAME.STATUS]: {
    name: "Status",
    selector: TASK_FIELDS_NAME.STATUS,
    sortable: true,
    visible: false,
    minWidth: "150px",
    default: true,
  },
  [TASK_FIELDS_NAME.DELAYED_IN_MINUTES]: {
    name: "Delayed",
    selector: TASK_FIELDS_NAME.DELAYED_IN_MINUTES,
    sortable: true,
    visible: false,
    minWidth: "180px",
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
  [TASK_FIELDS_NAME.CREATED_AT]: {
    name: "Created",
    selector: TASK_FIELDS_NAME.CREATED_AT,
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
};

export const LINK_CARD_VIEW_TYPE = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  WITHOUT_THUMBNAIL: "without_thumbnail",
};
