// @flow
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMTaskViewerView from './DMTaskViewerView';
import { ROUTES } from '../../../constants';
import {
  getTaskDetailFromReducer,
  cloneTask
} from '../../../../src/helpers/dmHelper';
import {
  dmTaskCreateRequest,
  dmGetSingleTaskDetailsRequest
} from '../../../actions/DMTasksActions';

class DMTaskViewerController extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tasksList.length) {
      return {
        taskDetail: getTaskDetailFromReducer(
          nextProps.tasksList,
          nextProps.match.params.actionData
        )
      };
    } else return null; // Triggers no change in the state
  }

  static propTypes = {};

  closeViewTask = () => {
    this.props.history.push(ROUTES.DELIVERY_MANAGEMENT);
  };

  constructor(props) {
    super(props);
    this.state = {
      taskDetail: getTaskDetailFromReducer(
        props.tasksList,
        props.match.params.actionData
      ),
      isCloningTask: false
    };
  }

  cloneCurrentTask = () => {
    const { taskDetail: taskInput } = this.state;

    cloneTask(
      taskInput,
      () => {
        this.setState({
          isCloningTask: true
        });
      },
      () => {
        this.setState({
          isCloningTask: false
        });
      },
      this.props.history
    );
  };

  componentDidMount() {
    const { taskDetail } = this.state;

    if (_.isNull(taskDetail)) {
      this.props.dmGetSingleTaskDetailsRequest(
        {
          task: this.props.match.params.actionData
        },
        success => {
          if (!success) {
            this.closeViewTask();
          }
        }
      );
    }
  }

  render() {
    const { taskDetail, isCloningTask } = this.state;
    if (taskDetail) {
      return (
        <DMTaskViewerView
          {...this.props}
          closeViewTask={this.closeViewTask}
          taskDetail={this.state.taskDetail}
          cloneCurrentTask={this.cloneCurrentTask}
          isCloningTask={isCloningTask}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ dmTasks }) => ({
  tasksList: dmTasks.tasksList || null
});

const actions = {
  dmTaskCreateRequest,
  dmGetSingleTaskDetailsRequest
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(DMTaskViewerController));
