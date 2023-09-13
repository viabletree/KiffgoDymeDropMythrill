// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import DMMigrationView from './DMMigrationView';
import Util from '../../../services/Util';
import {
 dmMigrationStart
} from '../../../actions/DMTasksActions';
import {MIGRATION_COMPLETED} from '../../../constants';


class DMMigrationController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  requestMigration = () => {

    this.props.dmMigrationStart( response => {
        
          // close modal
        Util.dmInformAlert('Migration', response.message);
      });
  }

  render() {
    return (
      <DMMigrationView
        {...this.props}
        requestMigration={this.requestMigration}
      />
    );
  }
}
const mapStateToProps = ({}) => ({});

const actions = { dmMigrationStart };

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMMigrationController)));
