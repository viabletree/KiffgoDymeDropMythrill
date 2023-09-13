// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
   faClipboard, faClipboardCheck 
} from '@fortawesome/free-solid-svg-icons';
import {
  dmGetApiKeysRequest,
  dmCreateApiKeyRequest,
  dmDeleteApiKeyRequest,
  dmEditApiKeyRequest,
  dmGetWebHooksRequest,
  dmGetWebHookEventsRequest,
  dmCreateWebHookRequest,
  dmEditWebHookRequest,
  dmDeleteWebHookRequest,
  dmGetThirdPartyApikeyRequest,
  dmChangeThirdPartyApiId,
  dmChangeThirdPartyApiKey,
  dmUpdateThirdPartyAPI
} from '../../../../actions/ApiWebhookActions';
import DmApiWebhooksSettingView from './DmApiWebhooksSettingView';
import { ARE_YOU_SURE, CONFIRM_DELETE_API_KEY } from '../../../../constants';
import Util from '../../../../services/Util';

class DmApiWebhooksSettingController extends React.Component {
  static propTypes = {
    selectedTab: PropTypes.number
  };

  static defaultProps = {
    selectedTab: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isApiKeysLoading: true,
      createApiKeyLoading: false,
      isCreateApiModalVisible: false,
      isEditApiModalVisible: false,
      newApiKeyName: '',
      isWebHooksLoading: true,
      isWebHookModalVisible: false,
      selectedApiKeyId: -1,
      webhookName: '',
      webHookEvents: [],
      webhookUrl: '',
      selectedEventIndex: 0,
      showSecret: false,
      selectedWebhook: {},
      isApiKeyCopied: false
    };
  }

  componentDidMount() {
    this.getApiKeyList();
    this.getEvents();
    this.getWebHookList();
    this.getThirdPartyApi();
  }

 // Thrid party api works
  getThirdPartyApi = () => {
    this.props.dmGetThirdPartyApikeyRequest(() => {});
  };

  updateThirdPartyApi = () => {
    const { thirdpartyapikeys } = this.props;

    if (
      thirdpartyapikeys.thirdpartyapi_id == '' ||
      thirdpartyapikeys.thirdpartyapi_key == ''
    )
      return;

    const payload = {
      thirdpartyapi_id: thirdpartyapikeys.thirdpartyapi_id,
      thirdpartyapi_key: thirdpartyapikeys.thirdpartyapi_key
    };
    this.props.dmUpdateThirdPartyAPI(payload, status => {
      console.log(status);
      console.log(payload);
    });
  };

  
  deleteThirdPartyApi = () => {
    const { thirdpartyapikeys } = this.props;
    console.log(this.props.thirdpartyapikeys);

    this.props.dmChangeThirdPartyApiKey('');
    this.props.dmChangeThirdPartyApiId('');


    return;
  };
// end Thrid party api works

  // get api key list

  getApiKeyList = () => {
    this.setState({ isApiKeysLoading: true });
    this.props.dmGetApiKeysRequest(() => {
      this.setState({ isApiKeysLoading: false });
    });
  };

  onApiKeyCopy = () => {
    
     this.setState({isApiKeyCopied: true});
  };
  // Create api key request

  createApiKey = () => {
    const { newApiKeyName } = this.state;
    if (newApiKeyName !== '') {
      const payload = { name: newApiKeyName };
      this.setState({ createApiKeyLoading: true });
      this.props.dmCreateApiKeyRequest(payload, status => {
        this.setState({ createApiKeyLoading: false });
        if (status) {
          this.setState({ isCreateApiModalVisible: false, newApiKeyName: '' });
        }
      });
    } else {
      Util.topAlertError('Api key name required');
    }
  };

  // Edit api key button press listener

  onEditApiKey = () => {
    const { selectedApiKeyId } = this.state;
    if (selectedApiKeyId !== -1) {
      const selectedApiKeyIndex = _.findIndex(this.props.apiKeyList, item => {
        return item.id === selectedApiKeyId;
      });
      if (selectedApiKeyIndex !== -1) {
        this.setState({
          isEditApiModalVisible: true,
          newApiKeyName: this.props.apiKeyList[selectedApiKeyIndex].name
        });
      }
    }
  };

  // Edit api key request

  editRequest = () => {
    const { newApiKeyName, selectedApiKeyId, apiKeyList } = this.state;
    if (newApiKeyName !== '') {
      const payload = { name: newApiKeyName, id: selectedApiKeyId };
      this.setState({ createApiKeyLoading: true});
      this.props.dmEditApiKeyRequest(payload, status => {
        this.setState({ createApiKeyLoading: false, isApiKeyCopied: false });
        if (status) {
          this.setState({ isEditApiModalVisible: false, newApiKeyName: '' });
        }
      });
    } else {
      Util.topAlertError('Api key name required');
    }
  };

  // Delete api key request

  onDeleteApiKey = () => {
    const { selectedApiKeyId } = this.state;
    const selectedKeyIndex = _.findIndex(
      this.props.apiKeyList,
      item => item.id === selectedApiKeyId
    );
    if (selectedApiKeyId !== -1) {
      Util.dmConfirmAlert(
        ARE_YOU_SURE,
        `The key '${this.props.apiKeyList[selectedKeyIndex].name}' will be permanently deleted and any code using it will no longer function properly.`,
        'Yes, Delete',
        () => {
          const payload = { id: selectedApiKeyId };
          this.props.dmDeleteApiKeyRequest(payload, () => {
            this.setState({
              selectedApiKeyId: -1
            });
          });
        }
      );
    }
  };

  // Api key item single click

  onApiKeyClick = id => {
    this.setState({
      selectedApiKeyId: id
    });
  };

  // Api key item double click

  onDoubleClickApiKey = id => {
    this.setState({ selectedApiKeyId: id }, () => {
      this.onEditApiKey();
    });
  };

  // Api key + click

  onPlusKeyClick = () => {
    this.setState({ isCreateApiModalVisible: true, selectedApiKeyId: -1 });
  };

  // Api key create modal close

  createApiModalClose = () => {
    this.setState({ isCreateApiModalVisible: false, newApiKeyName: '', isApiKeyCopied: false });
  };

  // Api key edit modal close

  editApiModalClose = () => {
    this.setState({ isEditApiModalVisible: false, newApiKeyName: '', isApiKeyCopied: false });
  };

  // Api key name change listener

  onApiKeyNameChange = newApiKeyName => {
    this.setState({ newApiKeyName });
  };

  // get Webhook list

  getWebHookList = () => {
    this.setState({ isWebHooksLoading: true });
    this.props.dmGetWebHooksRequest(() => {
      this.setState({ isWebHooksLoading: false });
    });
    return true;
  };

  // Webhook + click

  onPlusWebhookClick = () => {
    this.setState({ isWebHookModalVisible: true, selectedWebhook: {} });
  };

  // Webhook create modal close

  createWebhookModalClose = () => {
    this.setState({
      isWebHookModalVisible: false,
      webhookName: '',
      webhookUrl: '',
      selectedEventIndex: 0
    });
  };

  // Webhook name change listener

  onWebhookNameChange = webhookName => {
    this.setState({ webhookName });
  };

  // Webhook URL change listener

  onWebhookUrlChange = webhookUrl => {
    this.setState({ webhookUrl });
  };

  // Get webhook events

  getEvents = () => {
    this.props.dmGetWebHookEventsRequest((status, data) => {
      if (status) {
        this.setState({ webHookEvents: data });
      }
    });
  };

  // EventSelect listener

  eventSelect = e => {
    const { selectedIndex } = e.target;
    this.setState({ selectedEventIndex: selectedIndex });
  };

  // Create Webhook request

  createWebhook = () => {
    const {
      webhookName,
      webhookUrl,
      selectedEventIndex,
      webHookEvents,
      selectedWebhook
    } = this.state;
    const isEdit = !_.isEmpty(selectedWebhook);
    if (webhookName !== '') {
      if (Util.isValidHttpsURL(webhookUrl)) {
        const payload = {
          name: webhookName,
          webhook: webhookUrl,
          trigger: webHookEvents[selectedEventIndex].id
        };
        this.setState({ createApiKeyLoading: true });
        if (isEdit) {
          payload.id = selectedWebhook.id;
          this.props.dmEditWebHookRequest(payload, status => {
            this.setState({ createApiKeyLoading: false });
            if (status) {
              this.setState({
                isWebHookModalVisible: false,
                webhookName: '',
                webhookUrl: '',
                selectedEventIndex: 0
              });
            }
          });
        } else {
          this.props.dmCreateWebHookRequest(payload, status => {
            this.setState({ createApiKeyLoading: false });
            if (status) {
              this.setState({
                isWebHookModalVisible: false,
                webhookName: '',
                webhookUrl: '',
                selectedEventIndex: 0
              });
            }
          });
        }
      } else {
        Util.topAlertError('The webhook URL provided is invalid');
      }
    } else {
      Util.topAlertError('Api key name required');
    }
  };

  // Webhook item single click

  onWebHookClick = selectedWebhook => {
    this.setState({
      selectedWebhook
    });
  };

  onShowSecretClick = () => {
    this.setState((prevState)=>{
      return {showSecret: !prevState.showSecret};
    }, () => {
      const tabBody = document.getElementById('tabBody');
   
      if (tabBody) {
        tabBody.scrollTo({
          top: tabBody.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  };

  // Webhook item double click

  onDoubleClickWebHook = selectedWebhook => {
    this.setState({ selectedWebhook }, () => {
      this.onEditWebhookPress();
    });
  };

  // Edit Webhookbutton press listener

  onEditWebhookPress = () => {
    const { selectedWebhook, webHookEvents } = this.state;
    if (!_.isEmpty(selectedWebhook)) {
      this.setState({
        isWebHookModalVisible: true,
        webhookName: selectedWebhook.name,
        webhookUrl: selectedWebhook.webhook,
        selectedEventIndex: _.findIndex(
          webHookEvents,
          item => item.id === selectedWebhook.trigger.id
        )
      });
    }
  };
  // Delete Webhook

  onDeleteWebhook = () => {
    const { selectedWebhook } = this.state;
    if (!_.isEmpty(selectedWebhook)) {
      Util.dmConfirmAlert(
        ARE_YOU_SURE,
        `The webhook '${selectedWebhook.name}' will be permanently deleted and any integration using it will no longer function properly.`,
        'Yes, Delete',
        () => {
          const payload = {
            webhookId: selectedWebhook.id,
            event_slug: selectedWebhook.trigger.event_slug
          };
          this.props.dmDeleteWebHookRequest(payload, () => {
            this.setState({
              selectedWebhook: {}
            });
          });
        }
      );
    }
  };

  render() {
    const {
      selectedApiKeyId,
      isApiKeysLoading,
      isWebHooksLoading,
      isCreateApiModalVisible,
      isEditApiModalVisible,
      newApiKeyName,
      createApiKeyLoading,
      isWebHookModalVisible,
      webhookName,
      webHookEvents,
      webhookUrl,
      selectedEventIndex,
      selectedWebhook
    } = this.state;
    return (
      <DmApiWebhooksSettingView
        {...this.props}
        onApiKeyClick={this.onApiKeyClick}
        onEditApiKey={this.onEditApiKey}
        onDeleteApiKey={this.onDeleteApiKey}
        onPlusKeyClick={this.onPlusKeyClick}
        createApiModalClose={this.createApiModalClose}
        onApiKeyNameChange={this.onApiKeyNameChange}
        createApiKey={this.createApiKey}
        editApiModalClose={this.editApiModalClose}
        editRequest={this.editRequest}
        onDoubleClickApiKey={this.onDoubleClickApiKey}
        onPlusWebhookClick={this.onPlusWebhookClick}
        createWebhookModalClose={this.createWebhookModalClose}
        onWebhookNameChange={this.onWebhookNameChange}
        onWebhookUrlChange={this.onWebhookUrlChange}
        eventSelect={this.eventSelect}
        createWebhook={this.createWebhook}
        onWebHookClick={this.onWebHookClick}
        onDoubleClickWebHook={this.onDoubleClickWebHook}
        onEditWebhookPress={this.onEditWebhookPress}
        onDeleteWebhook={this.onDeleteWebhook}
        onShowSecretClick={this.onShowSecretClick}
        isApiKeyCopied={this.state.isApiKeyCopied}
        onApiKeyCopy={this.onApiKeyCopy}
        showSecret={this.state.showSecret}
        newApiKeyName={newApiKeyName}
        createApiKeyLoading={createApiKeyLoading}
        isWebHookModalVisible={isWebHookModalVisible}
        webhookName={webhookName}
        webHookEvents={webHookEvents}
        webhookUrl={webhookUrl}
        selectedEventIndex={selectedEventIndex}
        selectedWebhook={selectedWebhook}
        selectedApiKeyId={selectedApiKeyId}
        isApiKeysLoading={isApiKeysLoading}
        isWebHooksLoading={isWebHooksLoading}
        isCreateApiModalVisible={isCreateApiModalVisible}
        isEditApiModalVisible={isEditApiModalVisible}
        onUpdateThirdPartyApi={this.updateThirdPartyApi}
        onDeleteThirdPartyApi={this.deleteThirdPartyApi}
      />
    );
  }
}

const mapStateToProps = ({ apiWebhook }) => ({
  apiKeyList: apiWebhook.apiKeys,
  webHookList: apiWebhook.webHooks,
  thirdpartyapikeys: apiWebhook.thirpartyapikey
});

const actions = {
  dmGetApiKeysRequest,
  dmCreateApiKeyRequest,
  dmDeleteApiKeyRequest,
  dmEditApiKeyRequest,
  dmGetWebHooksRequest,
  dmGetWebHookEventsRequest,
  dmCreateWebHookRequest,
  dmEditWebHookRequest,
  dmDeleteWebHookRequest,
  dmGetThirdPartyApikeyRequest,
  dmChangeThirdPartyApiId,
  dmChangeThirdPartyApiKey,
  dmUpdateThirdPartyAPI
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(withTranslate(DmApiWebhooksSettingController)));
