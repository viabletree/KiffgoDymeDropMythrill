// @flow
import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import MobileAppLinkView from './MobileAppLinkView';
import { ANDROID_APP_LINK, IOS_APP_LINK } from '../../constants';

export default class PrivacyPolicyController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    if (isIOS) {
      window.location.href = ANDROID_APP_LINK;
    } else {
      window.location.href = IOS_APP_LINK;
    }
  }

  render() {
    return <MobileAppLinkView {...this.props} />;
  }
}
