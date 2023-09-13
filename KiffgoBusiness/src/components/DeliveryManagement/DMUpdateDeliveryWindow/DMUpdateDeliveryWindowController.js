// @flow
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMUpdateDeliveryWindowView from './DMUpdateDeliveryWindowView';
import { updateBulkTimeWindow } from '../../../actions/DMTasksActions';
import Util from '../../../services/Util';
import { TASK_FIELDS_NAME, TIME_ERROR, TIME_FORMAT1 } from '../../../constants';
import { getActiveDrivers } from '../../../helpers/dmHelper';

const setCACBTime = dataTime => {
  return Util.getFormattedDateTime(dataTime, TIME_FORMAT1);
};

class DMUpdateDeliveryWindowModalController extends React.Component {
  static propTypes = {
    tasksList: PropTypes.array.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showCACalendar: false,
      showCBCalendar: false,
      CATime: setCACBTime(''),
      CBTime: setCACBTime(''),
      CADate: '',
      CBDate: '',
      CAError: '',
      CBError: '',
      timeError: true,
      inPast: false,
      step: 1
    };
  }

  // new code start

  onCACalendarClick = () => {
    this.setState(prevState => ({
      showCACalendar: !prevState.showCACalendar,
      showCBCalendar: false
    }));
  };

  onCBCalendarClick = () => {
    this.setState(prevState => ({
      showCBCalendar: !prevState.showCBCalendar,
      showCACalendar: false
    }));
  };

  hideBothCalendars = () => {
    this.setState({
      showCBCalendar: false,
      showCACalendar: false
    });
  };

  onCBDateSelect = data => {
    const newMoment = moment(data);
    const previousMoment = moment(this.state.CBDate);
    if (this.state.CBDate) {
      newMoment.set('hours', previousMoment.hours());
      newMoment.set('minutes', previousMoment.minutes());
    }
    this.setState({
      CBTime: setCACBTime(newMoment.toISOString()),
      CBDate: newMoment,
      CBError: ''
    });

    this.validateTimeRange();
  };

  onCADateSelect = data => {
    const newMoment = moment(data);
    const previousMoment = moment(this.state.CADate);
    if (this.state.CADate) {
      newMoment.set('hours', previousMoment.hours());
      newMoment.set('minutes', previousMoment.minutes());
    }
    this.setState({
      CATime: setCACBTime(newMoment.toISOString()),
      CADate: newMoment,
      CAError: ''
    });

    this.validateTimeRange();
  };

  onCAChange = e => {
    const value = e.target.value;
    const numb = this.getMaipulatedTimeNumber(value);

    if (_.isEmpty(value)) {
      this.setState({
        CATime: '',
        CADate: '',
        CAError: ''
      });
    } else if (this.isValidTimeNumber(numb)) {
      let newDateTime = '';
      if (this.state.CADate instanceof moment && this.state.CADate.isValid()) {
        newDateTime = moment(this.state.CADate);
      } else {
        newDateTime = moment();
      }
      moment(this.state.CADate || '');
      newDateTime.set('hours', numb.substring(0, 2));
      newDateTime.set('minutes', numb.substring(2, 4));
      this.setState({
        CATime: value,
        CADate: newDateTime,
        CAError: ''
      });
      this.validateTimeRange();
    } else {
      this.setState({
        CATime: value,
        CADate: '',
        CAError: 'Invalid time'
      });
    }
  };

  onCBChange = e => {
    const value = e.target.value;
    const numb = this.getMaipulatedTimeNumber(value);

    if (_.isEmpty(value)) {
      this.setState({
        CBTime: '',
        CBDate: '',
        CBError: ''
      });
    } else if (this.isValidTimeNumber(numb)) {
      let newDateTime = '';

      if (this.state.CBDate instanceof moment && this.state.CBDate.isValid()) {
        newDateTime = moment(this.state.CBDate);
      } else {
        newDateTime = moment();
      }
      newDateTime.set('hours', numb.substring(0, 2));
      newDateTime.set('minutes', numb.substring(2, 4));
      this.setState({
        CBTime: value,
        CBDate: newDateTime,
        CBError: ''
      });
      this.validateTimeRange();
    } else {
      this.setState({
        CBTime: value,
        CBDate: '',
        CBError: 'Invalid time'
      });
    }
  };

  isValidTimeNumber = numb => {
    if (numb && numb.length === 4 && parseInt(numb) <= 2359) {
      return true;
    }
    return false;
  };

  getMaipulatedTimeNumber = value => {
    let numb = '';
    if (value) {
      numb = value.match(/\d/g);
      if (numb) numb = numb.join('');
      if (numb) numb = numb.substring(0, 4);
      if (numb.length === 3) numb = `0${numb}`;
    }

    return numb;
  };

  validateTimeRange = () => {
    this.setState(
      {
        inPast: false,
        timeError: false,
        CAError: '',
        CBError: ''
      },
      () => {
        setTimeout(() => {
          const { taskInput } = this.props;
          const currentCADate = this.state.CADate;
          const currentCBDate = this.state.CBDate;

          if (currentCADate && currentCBDate) {
            const currentCADateMoment = moment(currentCADate);
            const currentCBDateMoment = moment(currentCBDate);

            const differenceInMinutes = currentCBDateMoment.diff(
              currentCADateMoment,
              'minutes'
            );
            const diffInMinCaNow = currentCADateMoment.diff(
              moment(),
              'minutes'
            );
            const diffInMinCbNow = currentCBDateMoment.diff(
              moment(),
              'minutes'
            );
            if (Util.checkDev())
              console.log({ ab: diffInMinCaNow, b: diffInMinCbNow });
            if (differenceInMinutes < 1) {
              this.setState({
                CAError: 'Must occur before "Complete before"',
                CBError: 'Must occur after "Complete after"',
                timeError: true
              });
            } else if (diffInMinCaNow < 1 && diffInMinCbNow < 1) {
              this.setState({ inPast: true, timeError: false });
            } else {
              this.setState({
                CAError: '',
                CBError: '',
                timeError: false
              });
            }
          }
        }, 200);
      }
    );
  };

  // new code end

  updateTaskBulkTimeWindow = async payload => {
    return new Promise((resolve, reject) => {
      this.props.updateBulkTimeWindow(payload, (status, serverData) => {
        resolve({ status, serverData });
      });
    });
  };

  onNextClick = async () => {
    const { inPast } = this.state;

    if (inPast) {
      Util.dmInformAlert('Error', TIME_ERROR);
    } else if (this.state.step === 1) {
      this.setState({ step: 2 });
    } else {
      // update tasks
      const resultData = [];
      const { tasksList } = this.props;
      while (tasksList.length) {
        resultData.push(tasksList.splice(0, 100));
      }
      for (let i = 0; i < resultData.length; i += 1) {
        const payload = {
          tasks: resultData[i],
          startTime: this.state.CADate.toISOString(),
          endTime: this.state.CBDate.toISOString()
        };
        if (Util.checkDev()) console.log(payload);

        if (i === 0) this.setState({ loading: true });
        const a = await this.updateTaskBulkTimeWindow(payload);
      }
      this.setState({
        loading: false
      });

      this.props.onModalCloseClick();
    }
  };

  render() {
    return (
      <DMUpdateDeliveryWindowView
        {...this.props}
        {...this.state}
        onCACalendarClick={this.onCACalendarClick}
        onCBCalendarClick={this.onCBCalendarClick}
        onCBDateSelect={this.onCBDateSelect}
        onCADateSelect={this.onCADateSelect}
        onCAChange={this.onCAChange}
        onCBChange={this.onCBChange}
        hideBothCalendars={this.hideBothCalendars}
        onDriverClick={this.onDriverClick}
        onNextClick={this.onNextClick}
        onUnassignClick={this.onUnassignClick}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = { updateBulkTimeWindow };

export default connect(
  mapStateToProps,
  actions
)(withRouter(DMUpdateDeliveryWindowModalController));
