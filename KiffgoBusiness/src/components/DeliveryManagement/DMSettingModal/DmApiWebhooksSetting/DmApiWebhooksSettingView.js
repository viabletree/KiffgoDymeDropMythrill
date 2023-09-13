// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  faPlus,
  faMinus,
  faPencilAlt,
  faDownload,
  faClipboard,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import styles from './DmApiWebhooksSettingStyles';
import { DM_MODULES, ROUTES } from '../../../../constants';
import { AppStyles } from '../../../../theme';
import { BlackModal, DMTextField } from '../../../../components';
import { getUserWebhookSecret } from '../../../../helpers/userHelper';
import ApiKeyItem from './ApiKeyItem';
import WebhookItem from './WebhookItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class DmApiWebhooksSettingView extends React.PureComponent {
  render() {
    const {
      isWebHooksLoading,
      isApiKeysLoading,
      apiKeyList,
      webHookList,
      selectedApiKeyId,
      onEditApiKey,
      onDeleteApiKey,
      onApiKeyClick,
      isCreateApiModalVisible,
      isEditApiModalVisible,
      onPlusKeyClick,
      createApiModalClose,
      editApiModalClose,
      onApiKeyNameChange,
      newApiKeyName,
      createApiKey,
      createApiKeyLoading,
      editRequest,
      onDoubleClickApiKey,
      isWebHookModalVisible,
      onPlusWebhookClick,
      createWebhookModalClose,
      webhookName,
      onWebhookNameChange,
      webHookEvents,
      onWebhookUrlChange,
      webhookUrl,
      eventSelect,
      selectedEventIndex,
      createWebhook,
      onShowSecretClick,
      onWebHookClick,
      onDoubleClickWebHook,
      selectedWebhook,
      onEditWebhookPress,
      onDeleteWebhook,
      showSecret,
      isApiKeyCopied,
      onApiKeyCopy,
      onUpdateThirdPartyApi,
      onDeleteThirdPartyApi
    } = this.props;
    const selectedApiKeyIndex = _.findIndex(apiKeyList, item => {
      return item.id === selectedApiKeyId;
    });

    return (
      <div className={css([AppStyles.flexBox, AppStyles.flexColumn])}>
        {/*  Third party api work*/}

        <div>
          <div className={css(AppStyles.heading60)}>THIRD PARTY API</div>
          <div className={`${css(AppStyles.mTop10)}`}>
            <span className={css(AppStyles.whiteHeading)}>API id :</span>
          </div>
          <div>
            <div className={css(AppStyles.flexBox)}>
              <div className={`${css(AppStyles.flex1)}`}>
                <DMTextField
                  label="Enter API id"
                  value={this.props.thirdpartyapikeys.thirdpartyapi_id}
                  onChange={event => {
                    this.props.dmChangeThirdPartyApiId(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${css(AppStyles.mTop10)}`}>
            <span className={css(AppStyles.whiteHeading)}>API key :</span>
          </div>
          <div>
            <div className={css(AppStyles.flexBox)}>
              <div className={`${css(AppStyles.flex1)}`}>
                <DMTextField
                  label="Enter API key"
                  value={this.props.thirdpartyapikeys.thirdpartyapi_key}
                  onChange={event => {
                    this.props.dmChangeThirdPartyApiKey(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={css([AppStyles.flexBox, AppStyles.mTop10])}>
              <NavLink
                to="#"
                onClick={onDeleteThirdPartyApi}
                className={css([
                  AppStyles.mRight10,
                  styles.thirdpartyapiactionText
                ])}
              >
                Delete
              </NavLink>
              <NavLink
                className={css([
                  AppStyles.mRight10,
                  styles.thirdpartyapiactionText
                ])}
                to="#"
                onClick={onUpdateThirdPartyApi}
              >
                Save
              </NavLink>
            </div>
          </div>
        </div>

        {/*  end Third party api work*/}

        <div className={css(AppStyles.heading60, AppStyles.mTop30)}>
          Internal API & WEBHOOK
        </div>
        <div className={css(styles.apiWrapper, AppStyles.mTop10)}>
          <span className={css(AppStyles.whiteHeading)}>API key :</span>
          <div className={`${css(styles.innerWrapper)}`}>
            <div className={`${css(styles.body)}`}>
              {isApiKeysLoading && (
                <div className={css([styles.heading, styles.loader])}>
                  <span>Loading...</span>
                </div>
              )}
              {!isApiKeysLoading && apiKeyList.length === 0 && (
                <div className={css([styles.heading, styles.loader])}>
                  <span>No api keys</span>
                </div>
              )}
              {!isApiKeysLoading && apiKeyList.length > 0 && (
                <>
                  {apiKeyList.map(item => {
                    return (
                      <ApiKeyItem
                        item={item}
                        selected={selectedApiKeyId}
                        onClick={onApiKeyClick}
                        onDoubleClick={onDoubleClickApiKey}
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
                      selectedApiKeyId === -1 && styles.disabledContainer
                    ])}`}
                    onClick={onEditApiKey}
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
                      selectedApiKeyId === -1 && styles.disabledContainer
                    ])}`}
                    icon={faMinus}
                    onClick={onDeleteApiKey}
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
          </div>
        </div>

        {/* //2nd part */}

        <div className={css(styles.apiWrapper)}>
          <span className={css(AppStyles.whiteHeading)}>Webhook :</span>
          <div className={`${css(styles.innerWrapper)}`}>
            <div className={`${css(styles.body)}`}>
              {isWebHooksLoading && (
                <div className={css([styles.heading, styles.loader])}>
                  <span>Loading...</span>
                </div>
              )}
              {!isWebHooksLoading && _.isEmpty(webHookList) && (
                <div className={css([styles.heading, styles.loader])}>
                  <span>No webhooks</span>
                </div>
              )}
              {!isWebHooksLoading && !_.isEmpty(webHookList) && (
                <>
                  {Object.keys(webHookList).map(item => {
                    return (
                      <WebhookItem
                        item={{ event: item, items: webHookList[item] }}
                        selected={selectedWebhook}
                        onClick={onWebHookClick}
                        onDoubleClick={onDoubleClickWebHook}
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
                      _.isEmpty(selectedWebhook) && styles.disabledContainer
                    ])}`}
                    onClick={onEditWebhookPress}
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
                      _.isEmpty(selectedWebhook) && styles.disabledContainer
                    ])}`}
                    icon={faMinus}
                    onClick={onDeleteWebhook}
                  />
                </div>
                <div
                  className={`${css(styles.footerRight)}`}
                  onClick={() => onPlusWebhookClick()}
                >
                  <FontAwesomeIcon
                    className={`${css(styles.plusIcon)}`}
                    icon={faPlus}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modals here */}
        {/*  webhook secret key */}
        <div className={css(styles.apiWrapper)}>
          <span className={css(AppStyles.whiteHeading)}>
            {' '}
            Webhook Secret key :
          </span>
          <div
            className={`${css([styles.innerWrapper, styles.innerSecretBox])}`}
          >
            <span
              className={`${css([
                AppStyles.mBottom20,
                AppStyles.whiteColor,
                AppStyles.fontSize13
              ])}`}
            >
              Optional cryptographic verification for all webhook calls.
            </span>
            {!showSecret && (
              <button
                className={`${css([
                  AppStyles.padding5,
                  styles.footerButton,
                  AppStyles.fullWidth,
                  AppStyles.justifyCenter,
                  styles.greyButton,
                  styles.smallButton
                ])}`}
                type="button"
                onClick={onShowSecretClick}
              >
                Show secret key
              </button>
            )}
            {showSecret && (
              <>
                <button
                  className={`${css([
                    AppStyles.mBottom20,
                    AppStyles.padding5,
                    styles.footerButton,
                    AppStyles.fullWidth,
                    AppStyles.justifyCenter,
                    styles.smallButton
                  ])}`}
                  type="button"
                  onClick={onShowSecretClick}
                >
                  Hide secret key
                </button>
                <p
                  className={`${css([
                    AppStyles.mBottom20,
                    AppStyles.whiteColor,
                    AppStyles.fontSize13
                  ])}`}
                >
                  {getUserWebhookSecret()}
                </p>
                <CopyToClipboard
                  onCopy={this.onCopy}
                  text={getUserWebhookSecret()}
                >
                  <button
                    className={`${css([
                      AppStyles.padding5,
                      styles.footerButton,
                      AppStyles.fullWidth,
                      AppStyles.justifyCenter,
                      styles.smallButton
                    ])}`}
                    type="button"
                  >
                    Copy secret key
                  </button>
                </CopyToClipboard>
              </>
            )}
          </div>
        </div>
        {/* create api key modal */}
        {isCreateApiModalVisible && (
          <BlackModal
            open
            hasFooterCancelButton
            focusTrapped={false}
            onClose={createApiModalClose}
            // leftButton={_leftButton}
            rightButton={{
              title: 'Create key',
              onClick: createApiKey,
              isLoading: createApiKeyLoading
            }}
          >
            <div>
              <DMTextField
                label="Name"
                value={newApiKeyName}
                onChange={e => {
                  onApiKeyNameChange(e.target.value);
                }}
              />
            </div>
          </BlackModal>
        )}
        {/* update api key modal */}
        {isEditApiModalVisible && (
          <BlackModal
            open
            hasFooterCancelButton
            focusTrapped={false}
            onClose={editApiModalClose}
            // leftButton={_leftButton}
            rightButton={{
              title: 'Save',
              onClick: editRequest,
              isLoading: createApiKeyLoading
            }}
          >
            <div>
              <DMTextField
                label="Name"
                autoFocus
                value={newApiKeyName}
                onChange={e => {
                  onApiKeyNameChange(e.target.value);
                }}
              />
            </div>
            <div className={css(AppStyles.positionRelative)}>
              <DMTextField
                label="Key"
                autoFocus
                value={apiKeyList[selectedApiKeyIndex].key}
                isReadOnly
              />
              <CopyToClipboard
                onCopy={onApiKeyCopy}
                text={apiKeyList[selectedApiKeyIndex].key}
              >
                <FontAwesomeIcon
                  className={css(styles.clipboard)}
                  icon={isApiKeyCopied ? faClipboardCheck : faClipboard}
                />
              </CopyToClipboard>
            </div>
          </BlackModal>
        )}
        {/* Create / Edit Webhook modal */}
        {isWebHookModalVisible && (
          <BlackModal
            open
            hasFooterCancelButton
            focusTrapped={false}
            onClose={createWebhookModalClose}
            // leftButton={_leftButton}
            rightButton={{
              title: _.isEmpty(selectedWebhook) ? 'Create Webhook' : 'Save',
              onClick: createWebhook,
              isLoading: createApiKeyLoading
            }}
          >
            <div>
              <span className={css(styles.headingAddWebhook)}>
                Add a webhook
              </span>
              <br />
              <span className={css(styles.lowerTextAddWebhook)}>
                Specify trigger and URL to push to
              </span>
              <div>
                <DMTextField
                  label="Name"
                  autoFocus
                  value={webhookName}
                  onChange={e => {
                    onWebhookNameChange(e.target.value);
                  }}
                />
              </div>
              <div
                className={css([
                  styles.lowerTextAddWebhook,
                  AppStyles.mTop15,
                  AppStyles.mBottom10
                ])}
              >
                Add a webhook triggered when:
              </div>
              <select
                className={css(styles.selectOptions)}
                onChange={eventSelect}
              >
                {webHookEvents.map((item, index) => {
                  return (
                    <option
                      key={item.id}
                      selected={index === selectedEventIndex}
                      value={index}
                    >
                      {item.event_text}
                    </option>
                  );
                })}
              </select>
              <div>
                <DMTextField
                  label="URL"
                  onChange={e => {
                    onWebhookUrlChange(e.target.value);
                  }}
                  value={webhookUrl}
                />
              </div>
            </div>
          </BlackModal>
        )}
      </div>
    );
  }
}
