// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPlus,
  faMinus,
  faPencilAlt,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import styles from './DmDispatcherSettingStyle';
import { AppStyles } from '../../../../theme';
import { BlackModal, DMTextField } from '../../../../components';

import DispatcherInput from './DispatcherInput';

export default class DmDispatcherSettingView extends React.PureComponent {
  render() {
    const {
      isdispatcherLoading,
      filteredList,
      selectedUserId,
      onEditdispatcher,
      onDeletedispatcher,
      ondispatcherClick,
      isCreatedispatcherModalVisible,
      isEditdispatcherModalVisible,
      onPlusKeyClick,
      createdispatcherModalClose,
      editdispatcherModalClose,
      onDispatcherNameChange,
      onDispatcherEmailChange,
      DispatcherName,
      DispatcherEmail,
      createdispatcher,
      createdispatcherLoading,
      editdispatcher,
      onDoubleClickdispatcher,
      searchValue,
      onSearchChange,
      nameError,
      emailError
    } = this.props;
    return (
      <div
        className={`whiteTextWrapper  ${css([
          AppStyles.flexBox,
          AppStyles.flexColumn
        ])}`}
      >
        <div className={`${css(styles.wrapper)}`}>
          <div className={`${css(styles.body)}`}>
            {isdispatcherLoading && (
              <div className={css([styles.heading, styles.loader])}>
                <span>Loading...</span>
              </div>
            )}

            {!isdispatcherLoading && (
              <div>
                <DMTextField
                  value={searchValue}
                  placeholder="Search"
                  icon={faSearch}
                  onChange={onSearchChange}
                />
              </div>
            )}

            {filteredList.length === 0 && (
              <div
                className={css([
                  styles.heading,
                  styles.loader,
                  AppStyles.mTop10
                ])}
              >
                <span>No Dispatchers Avialble</span>
              </div>
            )}

            {!isdispatcherLoading && filteredList.length > 0 && (
              <>
                {filteredList.map(item => {
                  return (
                    <DispatcherInput
                      item={item}
                      selected={selectedUserId}
                      onClick={() => ondispatcherClick(item)}
                      onDoubleClick={() => onDoubleClickdispatcher(item)}
                      key={item.id}
                    />
                  );
                })}
              </>
            )}
          </div>
          <div className={`${css(styles.footer)}`}>
            <div className={'d-flex'}>
              <div className={`${css(styles.footerLeft)}`} />
              <div className={`${css(styles.footerCenter)}`}>
                <div
                  className={`${css([
                    selectedUserId === -1 && styles.disabledContainer
                  ])}`}
                  onClick={onEditdispatcher}
                >
                  <FontAwesomeIcon
                    className={`${css(styles.editIcon)}`}
                    icon={faPencilAlt}
                  />
                  <span>Edit</span>
                </div>

                <FontAwesomeIcon
                  className={`${css([
                    styles.plusIcon,
                    selectedUserId === -1 && styles.disabledContainer
                  ])}`}
                  icon={faMinus}
                  onClick={onDeletedispatcher}
                />
              </div>
              <div
                className={`${css(styles.footerRight)}`}
                onClick={() => onPlusKeyClick()}
              >
                <FontAwesomeIcon
                  className={`${css(styles.plusIcon)}`}
                  icon={faPlus}
                />
              </div>
            </div>
          </div>

          {isCreatedispatcherModalVisible && (
            <BlackModal
              open
              hasFooterCancelButton
              focusTrapped={false}
              onClose={createdispatcherModalClose}
              // leftButton={_leftButton}
              rightButton={{
                title: 'Create Dispatcher',
                onClick: createdispatcher,
                isLoading: createdispatcherLoading
              }}
            >
              <div>
                <div
                  className={`mt-2 ${css([
                    styles.header,
                    AppStyles.whiteHeading
                  ])}`}
                >
                  <h2>Add Dispatcher</h2>
                </div>

                <div className={`${css(AppStyles.mTop20)}`}>
                  <span className={css(AppStyles.whiteHeading)}>Name</span>
                </div>

                <DMTextField
                  label="Enter the name"
                  value={DispatcherName}
                  onChange={e => {
                    onDispatcherNameChange(e.target.value);
                  }}
                />
                <span className={`${css(AppStyles.formError)}`}>
                  {nameError}
                </span>
                <div className={`${css(AppStyles.mTop10)}`}>
                  <span className={css(AppStyles.whiteHeading)}>
                    Email Address
                  </span>
                </div>

                <DMTextField
                  label="Enter the email address"
                  value={DispatcherEmail}
                  onChange={e => {
                    onDispatcherEmailChange(e.target.value);
                  }}
                />

                <span className={`${css(AppStyles.formError)}`}>
                  {emailError}
                </span>
              </div>
            </BlackModal>
          )}
          {isEditdispatcherModalVisible && (
            <BlackModal
              open
              hasFooterCancelButton
              focusTrapped={false}
              onClose={editdispatcherModalClose}
              // leftButton={_leftButton}
              rightButton={{
                title: 'Save',
                onClick: editdispatcher,
                isLoading: createdispatcherLoading
              }}
            >
              <div>
                <div
                  className={`mt-2 ${css([
                    styles.header,
                    AppStyles.whiteHeading
                  ])}`}
                >
                  <h2>Edit Dispatcher</h2>
                </div>

                <div className={`${css(AppStyles.mTop20)}`}>
                  <span className={css(AppStyles.whiteHeading)}>Name</span>
                </div>
                <DMTextField
                  label="Enter the name"
                  value={DispatcherName}
                  onChange={e => {
                    onDispatcherNameChange(e.target.value);
                  }}
                />
                <span className={`${css(AppStyles.formError)}`}>
                  {nameError}
                </span>
                <div className={`${css(AppStyles.mTop10)}`}>
                  <span className={css(AppStyles.whiteHeading)}>
                    Email Address
                  </span>
                </div>
                <DMTextField
                  label="Enter the email address"
                  isDisabled={true}
                  value={DispatcherEmail}
                  onChange={e => {
                    onDispatcherEmailChange(e.target.value);
                  }}
                />
                <span className={`${css(AppStyles.formError)}`}>
                  {emailError}
                </span>
              </div>
            </BlackModal>
          )}
        </div>
      </div>
    );
  }
}
