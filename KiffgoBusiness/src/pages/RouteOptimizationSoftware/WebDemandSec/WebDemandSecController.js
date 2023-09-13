// @flow
import React from "react";

import WebDemandSecView from "./WebDemandSecView";

export default class WebDemandSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <WebDemandSecView {...this.props} />;
  }
}
