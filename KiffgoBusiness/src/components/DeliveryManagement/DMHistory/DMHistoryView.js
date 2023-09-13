// @flow
import _ from 'lodash';
import humanizeDuration from 'humanize-duration';
import React from 'react';
import moment from 'moment';
import { css } from 'aphrodite';
import memoize from 'memoize-one';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faMinus } from '@fortawesome/free-solid-svg-icons';
import ReactStars from 'react-rating-stars-component';
import DMTableHeader from '../DMTableHeader';
import DMUpdateDriveModal from '../DMUpdateDriveModal';
import DMUpdateDeliveryWindow from '../DMUpdateDeliveryWindow';
import styles from './DMHistoryStyles';
import { AppStyles, Colors } from '../../../theme';
import {
  TASK_FIELDS_NAME,
  DATE_FORMAT4,
  TIME_FORMAT1,
  DATE_TIME_FORMAT_EXPORT,
  DATE_TIME_FORMAT7,
  DATE_TIME_FORMAT5,
  DM_TASK_TYPE
} from '../../../constants';
import {
  getTaskTypeDetail,
  getLocationText,
  showDriverEditDetail
} from '../../../helpers/dmHelper';
import Util from '../../../services/Util';

function TableCellViewer({ data, onClick, hoverable }) {
  return (
    <div
      className={css([
        hoverable && styles.dashIconPadding,
        hoverable && !_.isNil(data) && !_.isEmpty(data) && styles.itemHover
      ])}
      onClick={onClick}
    >
      {data || (
        <FontAwesomeIcon className={css([styles.dashIcon])} icon={faMinus} />
      )}
    </div>
  );
}

function EmptyState({ realDataSet, dataSet }) {
  return (
    <div className={css(styles.emptyStateWrapper)}>
      <FontAwesomeIcon
        className={css(styles.emptyStateIcon)}
        icon={faBinoculars}
      />
      <h2 className={css(styles.emptyStateHeading)}>No tasks to display</h2>
      <p className={css(styles.emptyStateText)}>
        Try changing your search keyword.
      </p>
    </div>
  );
}

const columns = memoize(
  (
    handleSelectAllToggle,
    handleSelectedChange,
    onTaskNumberClick,
    dmViewDriver,
    gettingData,
    selectedCount,
    realDataSet,
    dataSet,
    tableSettings
  ) => [
    tableSettings[TASK_FIELDS_NAME.TASK_NUMBER] && {
      name: tableSettings[TASK_FIELDS_NAME.TASK_NUMBER].name,
      selector: tableSettings[TASK_FIELDS_NAME.TASK_NUMBER].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.TASK_NUMBER].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.TASK_NUMBER].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.TASK_NUMBER].visible,
      cell: row => (
        <TableCellViewer
          onClick={() => {
            onTaskNumberClick(row[TASK_FIELDS_NAME.TASK_NUMBER]);
          }}
          hoverable
          data={row[TASK_FIELDS_NAME.TASK_NUMBER]}
        />
      )
    },

    tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER] && {
      name: tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER].name,
      selector: tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.INTERNAL_ORDER_NUMBER].visible
    },

    tableSettings[TASK_FIELDS_NAME.STATUS] && {
      name: tableSettings[TASK_FIELDS_NAME.STATUS].name,
      selector: tableSettings[TASK_FIELDS_NAME.STATUS].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.STATUS].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.STATUS].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.STATUS].visible,
      cell: row => {
        const isDelayed = row[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] > 0;
        const statusDetails = getTaskTypeDetail(row[TASK_FIELDS_NAME.STATUS]);

        return (
          <div className={`${css(AppStyles.flexBox)}`}>
            <img
              src={isDelayed ? statusDetails.delayIcon : statusDetails.icon}
              className={`${css(styles.statusIcon)}`}
            />
            {statusDetails.title}
          </div>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.DRIVER_NAME] && {
      name: tableSettings[TASK_FIELDS_NAME.DRIVER_NAME].name,
      selector: tableSettings[TASK_FIELDS_NAME.DRIVER_NAME].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.DRIVER_NAME].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.DRIVER_NAME].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.DRIVER_NAME].visible,
      cell: row => (
        <TableCellViewer
          onClick={() => {
            dmViewDriver(row[TASK_FIELDS_NAME.DRIVER_ID]);
          }}
          hoverable
          data={row[TASK_FIELDS_NAME.DRIVER_NAME]}
        />
      )
    },

    tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER] && {
      name: tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER].name,
      selector: tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.COMPLETE_AFTER].visible,
      cell: row => {
        return (
          <p>
            {!_.isEmpty(row[TASK_FIELDS_NAME.COMPLETE_AFTER])
              ? Util.getFormattedDateTime(
                  row[TASK_FIELDS_NAME.COMPLETE_AFTER],
                  DATE_TIME_FORMAT7
                )
              : '-'}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE] && {
      name: tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE].name,
      selector: tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.COMPLETE_BEFORE].visible,
      cell: row => {
        return (
          <p>
            {!_.isEmpty(row[TASK_FIELDS_NAME.COMPLETE_BEFORE])
              ? Util.getFormattedDateTime(
                  row[TASK_FIELDS_NAME.COMPLETE_BEFORE],
                  DATE_TIME_FORMAT7
                )
              : '-'}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.ETA] && {
      name: tableSettings[TASK_FIELDS_NAME.ETA].name,
      selector: tableSettings[TASK_FIELDS_NAME.ETA].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.ETA].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.ETA].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.ETA].visible,
      cell: row => (
        <TableCellViewer
          data={
            row[TASK_FIELDS_NAME.STATUS] === DM_TASK_TYPE.ASSIGNED.slug
              ? Util.dateParserThree(row[TASK_FIELDS_NAME.ETA])
              : null
          }
        />
      )
    },

    tableSettings[TASK_FIELDS_NAME.END_TIME] && {
      name: tableSettings[TASK_FIELDS_NAME.END_TIME].name,
      selector: tableSettings[TASK_FIELDS_NAME.END_TIME].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.END_TIME].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.END_TIME].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.END_TIME].visible,
      cell: row => {
        return (
          <p>
            {!_.isEmpty(row[TASK_FIELDS_NAME.END_TIME])
              ? Util.getFormattedDateTime(
                  row[TASK_FIELDS_NAME.END_TIME],
                  DATE_TIME_FORMAT_EXPORT
                )
              : '-'}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS] && {
      name: tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS].name,
      selector: tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.LOCATION_ADDRESS].visible,
      cell: row => <TableCellViewer data={getLocationText(row)} />
    },

    tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE] && {
      name: tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE].name,
      selector: tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.LOCATION_POSTCODE].visible,
      cell: row => {
        return <p>{row[TASK_FIELDS_NAME.LOCATION_POSTCODE]}</p>;
      }
    },

    tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME] && {
      name: tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME].name,
      selector: tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.RECIPIENT_NAME].visible,
      cell: row => (
        <TableCellViewer data={row[TASK_FIELDS_NAME.RECIPIENT_NAME]} />
      )
    },

    tableSettings[TASK_FIELDS_NAME.QUANTITY] && {
      name: tableSettings[TASK_FIELDS_NAME.QUANTITY].name,
      selector: tableSettings[TASK_FIELDS_NAME.QUANTITY].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.QUANTITY].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.QUANTITY].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.QUANTITY].visible,
      cell: row => {
        return <p>{row[TASK_FIELDS_NAME.QUANTITY]}</p>;
      }
    },

    tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] && {
      name: tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES].name,
      selector: tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.DELAYED_IN_MINUTES].visible,
      cell: row => (
        <TableCellViewer
          data={
            row[TASK_FIELDS_NAME.DELAYED_IN_MINUTES] > 0
              ? humanizeDuration(
                  moment
                    .duration(row[TASK_FIELDS_NAME.DELAYED_IN_MINUTES], 'm')
                    .asMilliseconds(),
                  {
                    units: ['d', 'h', 'm'],
                    round: true
                  }
                )
              : '-'
          }
        />
      )
    },

    tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME] && {
      name: tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME].name,
      selector: tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.NOTIFICATION_TIME].visible,
      cell: row => {
        return (
          <p>
            {!_.isEmpty(row[TASK_FIELDS_NAME.NOTIFICATION_TIME])
              ? Util.getFormattedDateTime(
                  row[TASK_FIELDS_NAME.NOTIFICATION_TIME],
                  DATE_TIME_FORMAT_EXPORT
                )
              : '-'}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.RATING] && {
      name: tableSettings[TASK_FIELDS_NAME.RATING].name,
      selector: tableSettings[TASK_FIELDS_NAME.RATING].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.RATING].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.RATING].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.RATING].visible,
      cell: row => {
        return (
          <p>
            {row[TASK_FIELDS_NAME.RATING] ? (
              <ReactStars
                count={5}
                value={row[TASK_FIELDS_NAME.RATING]}
                size={10}
                edit={false}
                activeColor="#ffd700"
              />
            ) : (
              '-'
            )}
          </p>
        );
      }
    },
    tableSettings[TASK_FIELDS_NAME.CREATED_BY] && {
      name: tableSettings[TASK_FIELDS_NAME.CREATED_BY].name,
      selector: tableSettings[TASK_FIELDS_NAME.CREATED_BY].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.CREATED_BY].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.CREATED_BY].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.CREATED_BY].visible,
      cell: row => {
        return <p>{row[TASK_FIELDS_NAME.CREATED_BY]}</p>;
      }
    },

    tableSettings[TASK_FIELDS_NAME.UPDATED_AT] && {
      name: tableSettings[TASK_FIELDS_NAME.UPDATED_AT].name,
      selector: tableSettings[TASK_FIELDS_NAME.UPDATED_AT].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.UPDATED_AT].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.UPDATED_AT].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.UPDATED_AT].visible,
      cell: row => {
        return (
          <p>
            {Util.getFormattedDateTime(
              row[TASK_FIELDS_NAME.UPDATED_AT],
              DATE_TIME_FORMAT_EXPORT
            )}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.CREATED_AT] && {
      name: tableSettings[TASK_FIELDS_NAME.CREATED_AT].name,
      selector: tableSettings[TASK_FIELDS_NAME.CREATED_AT].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.CREATED_AT].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.CREATED_AT].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.CREATED_AT].visible,
      cell: row => {
        return (
          <p>
            {Util.getFormattedDateTime(
              row[TASK_FIELDS_NAME.CREATED_AT],
              DATE_TIME_FORMAT_EXPORT
            )}
          </p>
        );
      }
    },

    tableSettings[TASK_FIELDS_NAME.IS_PICKUP] && {
      name: tableSettings[TASK_FIELDS_NAME.IS_PICKUP].name,
      selector: tableSettings[TASK_FIELDS_NAME.IS_PICKUP].selector,
      sortable: tableSettings[TASK_FIELDS_NAME.IS_PICKUP].sortable,
      minWidth: tableSettings[TASK_FIELDS_NAME.IS_PICKUP].minWidth,
      omit: tableSettings[TASK_FIELDS_NAME.IS_PICKUP].visible,
      cell: row => (
        <TableCellViewer
          data={row[TASK_FIELDS_NAME.IS_PICKUP] ? 'Pickup' : 'Dropoff'}
        />
      )
    }
  ]
);

export default class DMTableView extends React.PureComponent {
  conditionalRowStyles = [
    {
      when: row => row.isSelected,
      style: row => {
        return {
          backgroundColor: Colors.kgDarkGreen
        };
      }
    }
  ];

  customStyles = {
    table: {
      style: {
        color: Colors.white,
        background: Colors.outerSpace,
        minHeight: 'calc(100vh - 154px)'
      }
    },

    headRow: {
      style: {
        color: Colors.white,
        background: Colors.outerSpace
      }
    },

    headCells: {
      style: {
        color: Colors.white,
        fontSize: '15px'
      },
      activeSortStyle: {
        color: Colors.white,
        '&:focus': {
          outline: 'none'
        },
        '&:hover:not(:focus)': {
          color: Colors.white
        }
      },
      inactiveSortStyle: {
        '&:focus': {
          outline: 'none',
          color: Colors.white
        },
        '&:hover': {
          color: Colors.white
        }
      }
    },
    header: {
      style: {
        display: 'none'
      }
    },
    rows: {
      style: {
        backgroundColor: Colors.mineShafta,
        color: Colors.white,
        minHeight: '40px',
        fontSize: '12px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '5px',
          borderBottomColor: Colors.mineShafta
        }
      }
    },
    noData: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.silver,
        backgroundColor: Colors.outerSpace,
        flex: 1,
        paddingTop: '100px'
      }
    }
  };

  render() {
    const { tableSettings } = this.props;
    const tempColumns = columns(
      this.props.handleSelectAllToggle,
      this.props.handleSelectedChange,
      this.props.onTaskNumberClick,
      this.props.dmViewDriver,
      this.props.gettingData,
      this.props.selectedCount,
      this.props.realDataSet,
      this.props.dataSet,
      tableSettings.columns
    );
    const finalColumns = [];
    tempColumns.forEach(element => {
      if (element) {
        finalColumns.push(element);
      }
    });

    return (
      <div className={`${css(AppStyles.flex1, styles.wrapper)}`}>
        <DMTableHeader
          selectedCount={this.props.selectedCount}
          totalCount={this.props.realDataSet.length}
          showEdit={this.props.showEdit}
          showClone={this.props.showClone}
          showDelete={this.props.showDelete}
          showChangeAssignment={this.props.showChangeAssignment}
          showBulkTimeWindow={this.props.showBulkTimeWindow}
          showClearSelection={this.props.showClearSelection}
          onEditPress={this.props.onEditPress}
          onClonePress={this.props.onClonePress}
          onDeletePress={this.props.onDeletePress}
          onChangeAssignmentPress={this.props.onChangeAssignmentPress}
          showBulkTimeWindowPress={this.props.showBulkTimeWindowPress}
          onClearSelectionPress={this.props.onClearSelectionPress}
          onSearchChange={this.props.onSearchChange}
          showOptimize={this.props.showOptimize}
          showNotify={this.props.showNotify}
          onOptimizePress={this.props.onOptimizePress}
          onNotifyPress={this.props.onNotifyPress}
          onExportClick={this.props.downloadCSV}
          communicationSetting={this.props.communicationSetting}
          dmTaskSearchRequest={this.props.dmTaskSearchRequest}
          dmTaskSearchSuccess={this.props.dmTaskSearchSuccess}
          isHistoryView
        />

        {!_.isNull(this.props.tasksListForChangeAssigment) && (
          <DMUpdateDriveModal
            tasksList={this.props.tasksListForChangeAssigment}
            onModalCloseClick={this.props.onDMUpdateDriveModalCloseClick}
          />
        )}
        {/* {true && ( */}
        {!_.isNull(this.props.tasksListForChangeTimeWindow) && (
          <DMUpdateDeliveryWindow
            tasksList={this.props.tasksListForChangeTimeWindow}
            onModalCloseClick={this.props.onDMUpdateDriveModalCloseClick}
          />
        )}
        <DataTable
          columns={finalColumns}
          data={this.props.dataSet}
          keyField="id"
          fixedHeader
          fixedHeaderScrollHeight="calc(100vh - 210px)"
          customStyles={this.customStyles}
          progressPending={this.props.dmLoading}
          selectableRowsHighlight
          responsive
          noDataComponent={
            <EmptyState
              realDataSet={this.props.realDataSet}
              dataSet={this.props.dataSet}
            />
          }
          progressComponent={null}
          conditionalRowStyles={this.conditionalRowStyles}
          actions={
            <a id="yolo" className onClick={e => this.props.downloadCSV()}>
              Export
            </a>
          }
        />
      </div>
    );
  }
}
