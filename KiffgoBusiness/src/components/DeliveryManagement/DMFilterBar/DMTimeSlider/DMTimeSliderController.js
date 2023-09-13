// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { updateTimeRangeDMFilter } from '../../../../actions/DMFilterActions';
import DMTimeSliderView from './DMTimeSliderView';
import Util from '../../../../services/Util';

class DMTimeSliderController extends React.Component {
  static propTypes = {
    selectedTimeRange: PropTypes.array.isRequired
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      finalStartDate: '',
      finalEndDate: '',
      finalDateTime: ''
    };
  }

  // set state when user change in selected date time
  setSelectedDateTime = () => {
    this.setState({
      finalDateTime:
        Util.findDay(this.props.dateStartingFrom) +
        ' - ' +
        Util.findDay(this.props.dateEndingTill)
    });
  };

  componentDidMount() {
    this.setSelectedDateTime();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dateStartingFrom !== prevProps.dateStartingFrom ||
      this.props.dateEndingTill !== prevProps.dateEndingTill
    ) {
      this.setSelectedDateTime();
    }
  }

  render() {
    const { selectedTimeRange } = this.props;

    return (
      <DMTimeSliderView
        {...this.props}
        onChange={this.props.updateTimeRangeDMFilter}
        selectedTimeRange={selectedTimeRange}
        finalDateTime={this.state.finalDateTime}
      />
    );
  }
}

const mapStateToProps = ({ dmFilter }) => ({
  dateStartingFrom: dmFilter.dateStartingFrom,
  dateEndingTill: dmFilter.dateEndingTill,
  selectedTimeRange: dmFilter.selectedTimeRange
});

const actions = {
  updateTimeRangeDMFilter
};

export default connect(
  mapStateToProps,
  actions
)(withTranslate(DMTimeSliderController));
