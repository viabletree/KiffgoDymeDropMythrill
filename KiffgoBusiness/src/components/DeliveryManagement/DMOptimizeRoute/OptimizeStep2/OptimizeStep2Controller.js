// @flow
import _ from 'lodash';
import React from 'react';
import { showTaskEditDetail } from '../../../../helpers/dmHelper';

import OptimizeStep2View from './OptimizeStep2View';

export default class OptimizeStep2Controller extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      showErrors: true,
      showWarning: true
    };
  }

  onErrorToggle = () => {
    this.setState({ showErrors: !this.state.showErrors });
  };

  onWarningToggle = () => {
    this.setState({ showWarning: !this.state.showWarning });
  };

  onFixClick = (item) =>{
    if(item.type === 'task'){
        showTaskEditDetail(this.props.history,item.taskNumber)
    }else{
      this.props.onBackClick();
    }
    
  }

  render() {
    return (
      <OptimizeStep2View
        {...this.props}
        onWarningToggle={this.onWarningToggle}
        onErrorToggle={this.onErrorToggle}
        showErrors={this.state.showErrors}
        showWarning={this.state.showWarning}
        onFixClick={this.onFixClick}
      />
    );
  }
}
