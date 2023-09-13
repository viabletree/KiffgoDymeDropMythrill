// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { DMTextField, DMTableColumnSelect } from '../../../components';
import styles from './DMTableHeaderStyles';
import { AppStyles, Images } from '../../../theme';

function Button({ title, onClick, icon }) {
  return (
    <div className={`${css(styles.btnWrapper)}`} onClick={onClick}>
      <img src={icon} alt="." className={css(styles.btnIcon)} />
      <p className={`${css(styles.btnTitle)}`}>{title}</p>
    </div>
  );
}

export default class DMTableHeaderView extends React.PureComponent {
  render() {
    const { isHistoryView } = this.props;
    return (
      <div
        className={`${css([
          styles.wrapper,
          AppStyles.flexBox,
          AppStyles.spaceBetween
        ])}`}
      >
        <div className={`${css(styles.actionsWrapper)}`}>
          {!isHistoryView && (
            <div className={`${css(styles.selecteText)}`}>
              {this.props.selectedCount}/{this.props.totalCount} selected
            </div>
          )}

          {!isHistoryView && (
            <div className={`${css([AppStyles.mLeft10, AppStyles.flexBox])}`}>
              <Button
                title="Export"
                icon={Images.exportIcon}
                onClick={this.props.onExportClick}
              />

              {this.props.showEdit && (
                <Button
                  title="Edit"
                  icon={Images.tableEdit}
                  onClick={this.props.onEditPress}
                />
              )}

              {this.props.showClone && (
                <Button
                  title="Clone"
                  icon={Images.tableClone}
                  onClick={this.props.onClonePress}
                />
              )}

              {this.props.showOptimize && (
                <Button
                  title="Optimize"
                  icon={Images.tableOptimize}
                  onClick={this.props.onOptimizePress}
                />
              )}

              {this.props.showChangeAssignment && (
                <Button
                  title="Priority"
                  icon={Images.prioritize}
                  onClick={this.props.onChangePriorityPress}
                />
              )}
              {this.props.showChangeAssignment && (
                <Button
                  title="Change assignment"
                  icon={Images.tableDriver}
                  onClick={this.props.onChangeAssignmentPress}
                />
              )}

              {this.props.showBulkTimeWindow && (
                <Button
                  title="Change completion date"
                  icon={Images.tableCalendar}
                  onClick={this.props.showBulkTimeWindowPress}
                />
              )}
              {this.props.showDelete && (
                <Button
                  title="Delete"
                  icon={Images.tableDelete}
                  onClick={this.props.onDeletePress}
                />
              )}
              {this.props.showNotify &&
                this.props.communicationSetting.schedule_stage && (
                  <Button
                    title="Notify"
                    icon={Images.notify}
                    onClick={this.props.onNotifyPress}
                  />
                )}

              {/* {this.props.showClearSelection && (
                <Button
                  title="Clear Selection"
                  icon={Images.tableClearSelection}
                  onClick={this.props.onClearSelectionPress}
                />
              )} */}
            </div>
          )}
        </div>
        <div className={`${css(styles.searchWrapper)}`}>
          {!isHistoryView && (
            <DMTextField
              label="Search"
              onChange={this.props.onHeaderSearchChange}
              value={this.props.searchValue}
              icon={faSearch}
              iconClassName={`${css(styles.searchIcon)}`}
            />
          )}
          {isHistoryView && (
            <div>
              <DMTextField
                styles={AppStyles.pRight30}
                label="Search"
                onChange={this.props.onServerSearchTextChange}
                onKeyDown={e => {
                  if (e.key == 'Enter') {
                    this.props.searchRequest();
                  }
                }}
                value={this.props.serverSearchText}
                iconClassName={`${css(styles.searchIcon)}`}
                icon={this.props.loading ? faSpinner : faSearch}
              />
            </div>
          )}
          <div className={`${css(styles.tableColumn)}`}>
            <DMTableColumnSelect />
          </div>
        </div>
      </div>
    );
  }
}
