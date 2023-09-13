// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
// import DMDriverViewerView from './DMDriverViewerView';
import moment from 'moment';
import {
  dmHideDriverScheduler,
  dmHideDriverViewer,
  dmDriverScheduleAddRequest
} from '../../../actions/DMDriverActions';
import {
  DRIVER_FIELDS_NAME,
  WEEK,
  DRIVER_SCHEDULE_INVALID_TIME_ERROR_ON_SUBMIT,
  DRIVER_SCHEDULE_INVALID_TIME,
  DRIVER_SCHEDULE_INVALID_TIME_RANGE
} from '../../../constants';
import DMDriverSchedulerView from './DMDriverSchedulerView';
import Util from '../../../services/Util';

class DMDriverSchedulerController extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    const prevSchedule = props.driverDetail[DRIVER_FIELDS_NAME.DRIVER_SCHEDULE];

    this.state = {
      isLoading: false,
      weekObject: [
        {
          name: WEEK.SUNDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_break_start) ||
            '',

          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sun_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.MONDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.mon_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.TUESDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.tue_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.WEDNESDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.wed_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.THURSDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.thu_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.FRIDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.fri_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        },
        {
          name: WEEK.SATURDAY,
          start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_start) || '',
          start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_break_start) ||
            '',
          default_start_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_start) || '0000',
          default_start_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_break_start) ||
            '0000',
          end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_end) || '',
          end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_break_end) || '',
          default_end_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_end) || '2359',
          default_end_break_time:
            this.stringParse24HourFormat(prevSchedule[0]?.sat_break_end) ||
            '2359',
          start_time_error: '',
          start_break_time_error: '',
          end_time_error: '',
          end_break_time_error: ''
        }
      ]
    };
  }

  componentDidMount() {
    const { driverDetail } = this.props;
    if (_.isNull(driverDetail)) this.closeViewDriver();
  }

  stringParse24HourFormat = time => time && time.replace(/:/g, '');

  closeViewDriver = () => {
    this.props.dmHideDriverScheduler();
  };

  getMaipulatedTimeNumber = value => {
    let numb = '';
    if (value) {
      numb = value.match(/\d/g);
      if (numb) {
        if (numb) numb = numb.join('');
        if (numb) numb = numb.substring(0, 4);
        // if (numb.length === 3) numb = `0${numb}`;
      }
    }

    return numb;
  };

  isValidTimeNumber = numb => {
    if (numb && numb.length === 4 && parseInt(numb, 10) <= 2359) {
      return true;
    }
    return false;
  };

  validateTimeRange = data => {
    if (data.start_time && data.end_time) {
      const currentCADate = data.start_time.padStart(4, '0');
      const currentCBDate = data.end_time.padStart(4, '0');

      const currentCADateMoment = moment(currentCADate);
      const currentCBDateMoment = moment(currentCBDate);

      const differenceInMinutes = currentCBDateMoment.diff(
        currentCADateMoment,
        'minutes'
      );
      return differenceInMinutes > 1;
    }
    return false;
  };

  validateBreakTimeRange = data => {
    if (data.start_break_time && data.end_break_time) {
      const currentCADate = data.start_break_time.padStart(4, '0');
      const currentCBDate = data.end_break_time.padStart(4, '0');

      const currentCADateMoment = moment(currentCADate);
      const currentCBDateMoment = moment(currentCBDate);

      const differenceInMinutes = currentCBDateMoment.diff(
        currentCADateMoment,
        'minutes'
      );
      return differenceInMinutes > 1;
    }
    return false;
  };

  /**
   *
   * @param {"start"|"end"} type
   * @param {string} key
   * @param {string} date
   */
  onTimeChange = (type, key, time) => {
    if (!_.isNaN(parseInt(time, 10)) || _.isEmpty(time)) {
      this.setState(prevState => {
        const clonnedWeekObject = _.cloneDeep(prevState.weekObject);
        const index = _.findIndex(clonnedWeekObject, o => o.name === key);
        const newData = clonnedWeekObject[index];

        const value = time;
        const numb = this.getMaipulatedTimeNumber(value);

        if (_.isEmpty(value)) {
          newData[type] = '';
          newData[`${type}_error`] = '';
          newData[`default_${type}`] = type === 'start_time' ? '0000' : '2359';
        } else if (this.isValidTimeNumber(numb)) {
          newData[type] = time;
          newData[`default_${type}`] = time;

          const isValidTimeRange = this.validateTimeRange(newData);
          newData.start_time_error = '';
          if (!isValidTimeRange) {
            newData.end_time_error = DRIVER_SCHEDULE_INVALID_TIME_RANGE;
          } else {
            newData.end_time_error = '';
          }
        } else {
          newData[type] = time;
          newData[`${type}_error`] = DRIVER_SCHEDULE_INVALID_TIME;
        }

        if (newData.start_time !== '' && newData.end_time === '') {
          newData.end_time_error = DRIVER_SCHEDULE_INVALID_TIME_RANGE;
        }
        if (newData.start_time === '' && newData.end_time === '') {
          newData.end_time_error = '';
        }
        clonnedWeekObject[index] = newData;
        return { weekObject: clonnedWeekObject };
      });
    }
  };

  /**
   *
   * @param {"start"|"end"} type
   * @param {string} key
   * @param {string} date
   */
  onBreakTimeChange = (type, key, time) => {
    if (!_.isNaN(parseInt(time, 10)) || _.isEmpty(time)) {
      this.setState(prevState => {
        const clonnedWeekObject = _.cloneDeep(prevState.weekObject);
        const index = _.findIndex(clonnedWeekObject, o => o.name === key);
        const newData = clonnedWeekObject[index];

        const value = time;
        const numb = this.getMaipulatedTimeNumber(value);

        if (_.isEmpty(value)) {
          newData[type] = '';
          newData[`${type}_error`] = '';
          newData[`default_${type}`] =
            type === 'start_break_time' ? '0000' : '2359';
        } else if (this.isValidTimeNumber(numb)) {
          newData[type] = time;
          newData[`default_${type}`] = time;

          const isValidTimeRange = this.validateBreakTimeRange(newData);
          newData.start_break_time_error = '';
          if (!isValidTimeRange) {
            newData.end_break_time_error = DRIVER_SCHEDULE_INVALID_TIME_RANGE;
          } else {
            newData.end_break_time_error = '';
          }
        } else {
          newData[type] = time;
          newData[`${type}_error`] = DRIVER_SCHEDULE_INVALID_TIME;
        }

        if (newData.start_break_time !== '' && newData.end_break_time === '') {
          newData.end_break_time_error = DRIVER_SCHEDULE_INVALID_TIME_RANGE;
        }
        if (newData.start_break_time === '' && newData.end_break_time === '') {
          newData.end_break_time_error = '';
        }

        clonnedWeekObject[index] = newData;
        return { weekObject: clonnedWeekObject };
      });
    }
  };

  getDuration = time => {
    const hours = Number(time.substring(0, 2));
    const minutes = Number(time.substring(2, 4));
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes;
  };

  submitSchedule = () => {
    const payload = {};
    payload.schedule = _.cloneDeep(this.state.weekObject);
    payload.driverId = this.props.driverDetail[DRIVER_FIELDS_NAME.ID];

    const hasError = _.find(payload.schedule, o => {
      return !_.isEmpty(o.start_time_error) || !_.isEmpty(o.end_time_error);
    });
    if (hasError)
      return Util.topAlertError(
        `${DRIVER_SCHEDULE_INVALID_TIME_ERROR_ON_SUBMIT}${hasError.name}`
      );
    this.setState({ isLoading: true });
    for (let i = 0; i < payload.schedule.length; i += 1) {
      const iterator = payload.schedule[i];
      const st = iterator.start_time;
      const et = iterator.end_time;
      if (st && et) {
        iterator.start_time = `${st.slice(0, 2)}:${st.slice(2)}`;
        iterator.end_time = `${et.slice(0, 2)}:${et.slice(2)}`;
      }
    }

    this.props.dmDriverScheduleAddRequest(payload, (data, res) => {
      this.setState({ isLoading: false });
      this.closeViewDriver();
    });
    return '';
  };

  render() {
    const { driverDetail } = this.props;

    if (driverDetail) {
      return (
        <DMDriverSchedulerView
          {...this.props}
          closeViewDriver={this.closeViewDriver}
          driverDetail={driverDetail}
          onTimeChange={this.onTimeChange}
          onBreakTimeChange={this.onBreakTimeChange}
          weekObject={this.state.weekObject}
          submitSchedule={this.submitSchedule}
          isLoading={this.state.isLoading}
          history={this.props.history}
        />
      );
    }
    return null;
  }
}

const mapStateToProps = ({ dmDriver, general }) => {
  const { allDrivers, viewDriverId } = dmDriver;

  const driverIndex = _.findIndex(allDrivers, {
    [DRIVER_FIELDS_NAME.ID]: viewDriverId
  });
  let driverDetail = null;
  if (driverIndex >= 0) {
    driverDetail = _.cloneDeep(allDrivers[driverIndex]);
  }
  return {
    driverDetail,
    scheduleDriverId: viewDriverId,
    vehicleTypes: general.vehicleTypes,
    navigateToListingOnEditClose: dmDriver.viewDriverOpenedFromListing
  };
};
const actions = {
  dmHideDriverScheduler,
  dmHideDriverViewer,
  dmDriverScheduleAddRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMDriverSchedulerController)));
