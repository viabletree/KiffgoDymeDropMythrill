// @flow
import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import { TASK_FIELDS_NAME, TIME_FORMAT1 } from '../../../../constants';
import CollectionTimeSectionView from './CollectionTimeSectionView';
import Util from '../../../../services/Util';

const setCACBTime = dataTime => {
  return Util.getFormattedDateTime(dataTime, TIME_FORMAT1);
};

export default class CollectionTimeSectionController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      showCACalendar: false,
      showCBCalendar: false,
      CATime: setCACBTime(props.taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER]),
      CBTime: setCACBTime(props.taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE]),
      CAError: '',
      CBError: ''
    };
  }

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
    const { taskInput } = this.props;
    const newMoment = moment(data);

    const previousMoment = moment(taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE]);

    if (taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE]) {
      newMoment.set('hours', previousMoment.hours());
      newMoment.set('minutes', previousMoment.minutes());
    } else {
      this.setState({
        CBTime: '00:00',
        CBError: ''
      });
    }
    this.props.dmOnTaskInputUpdate({
      [TASK_FIELDS_NAME.COMPLETE_BEFORE]: newMoment.toISOString()
    });

    this.validateTimeRange();
  };

  onCADateSelect = data => {
    const { taskInput } = this.props;
    const newMoment = moment(data);

    const previousMoment = moment(taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER]);

    if (taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER]) {
      newMoment.set('hours', previousMoment.hours());
      newMoment.set('minutes', previousMoment.minutes());
    } else {
      this.setState({
        CATime: '00:00',
        CAError: ''
      });
    }
    this.props.dmOnTaskInputUpdate({
      [TASK_FIELDS_NAME.COMPLETE_AFTER]: newMoment.toISOString()
    });

    this.validateTimeRange();
  };

  onCAChange = e => {
    const value = e.target.value;
    const numb = this.getMaipulatedTimeNumber(value);

    if (_.isEmpty(value)) {
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_AFTER]: ''
      });

      this.setState({
        CATime: '',
        CAError: ''
      });
    } else if (this.isValidTimeNumber(numb)) {
      this.setState({
        CATime: value,
        CAError: ''
      });

      let newDateTime = moment();
      let currentValue = this.props.taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER];
      if (currentValue) {
        newDateTime = moment(currentValue);
      }
      newDateTime.set('hours', numb.substring(0, 2));
      newDateTime.set('minutes', numb.substring(2, 4));
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_AFTER]: newDateTime.toISOString()
      });
      this.validateTimeRange();
    } else {
      this.setState({
        CATime: value,
        CAError: 'Invalid time'
      });

      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_AFTER]: ''
      });
    }
  };

  onCBChange = e => {
    const value = e.target.value;
    const numb = this.getMaipulatedTimeNumber(value);

    if (_.isEmpty(value)) {
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_BEFORE]: ''
      });

      this.setState({
        CBTime: '',
        CBError: ''
      });
    } else if (this.isValidTimeNumber(numb)) {
      this.setState({
        CBTime: value,
        CBError: ''
      });

      let newDateTime = moment();
      let currentValue = this.props.taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE];
      if (currentValue) {
        newDateTime = moment(currentValue);
      }
      newDateTime.set('hours', numb.substring(0, 2));
      newDateTime.set('minutes', numb.substring(2, 4));
      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_BEFORE]: newDateTime.toISOString()
      });

      this.validateTimeRange();
    } else {
      this.setState({
        CBTime: value,
        CBError: 'Invalid time'
      });

      this.props.dmOnTaskInputUpdate({
        [TASK_FIELDS_NAME.COMPLETE_BEFORE]: ''
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
    setTimeout(() => {
      const { taskInput } = this.props;
      const currentCADate = taskInput[TASK_FIELDS_NAME.COMPLETE_AFTER];
      const currentCBDate = taskInput[TASK_FIELDS_NAME.COMPLETE_BEFORE];

      if (currentCADate && currentCBDate) {
        const currentCADateMoment = moment(currentCADate);
        const currentCBDateMoment = moment(currentCBDate);

        const differenceInMinutes = currentCBDateMoment.diff(
          currentCADateMoment,
          'minutes'
        );
        if (differenceInMinutes < 1) {
          this.setState(
            {
              CAError: 'Must occur before "Complete before"',
              CBError: 'Must occur after "Complete after"'
            },
            () => this.props.onError(true)
          );
        } else {
          this.setState(
            {
              CAError: '',
              CBError: ''
            },
            () => this.props.onError(false)
          );
        }
      }
    }, 200);
  };

  render() {
    return (
      <CollectionTimeSectionView
        {...this.props}
        {...this.state}
        onCACalendarClick={this.onCACalendarClick}
        onCBCalendarClick={this.onCBCalendarClick}
        onCBDateSelect={this.onCBDateSelect}
        onCADateSelect={this.onCADateSelect}
        onCAChange={this.onCAChange}
        onCBChange={this.onCBChange}
        hideBothCalendars={this.hideBothCalendars}
      />
    );
  }
}
