import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DMTableColumnSelectView from './DMTableColumnSelectView';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import {
  changeTableColumnVisibility,
  updateTableColumns
} from '../../../actions/GeneralActions';

class DMTableColumnSelectController extends React.Component {
  constructor() {
    super();
    this.state = {
      showSelector: false
    };
  }

  componentDidMount() {
    this.props.updateTableColumns();
  }

  onColumnSelectorClickShow = () => {
    this.setState({
      showSelector: true
    });
  };
  onColumnSelectorClickHide = () => {
    this.setState({
      showSelector: false
    });
  };
  onColumnSelect = (key, visibility) => {
    this.props.changeTableColumnVisibility({ key, visibility });
  };
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { showSelector } = this.state;
    return (
      <DMTableColumnSelectView
        {...this.props}
        onColumnSelectorClickShow={this.onColumnSelectorClickShow}
        onColumnSelectorClickHide={this.onColumnSelectorClickHide}
        onColumnSelect={this.onColumnSelect}
        showSelector={showSelector}
      />
    );
  }
}

const mapStateToProps = ({ dmPersist }) => {
  return {
    tableSettings: dmPersist.tableSettings.columns
  };
};

const actions = {
  changeTableColumnVisibility,
  updateTableColumns
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DMTableColumnSelectController)));
