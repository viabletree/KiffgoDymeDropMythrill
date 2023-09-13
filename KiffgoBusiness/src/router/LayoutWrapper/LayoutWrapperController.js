// @flow
import React from "react";
import LayoutWrapperView from "./LayoutWrapperView";

export default class LayoutWrapperController extends React.Component {
  render() {
    return <LayoutWrapperView {...this.props} />;
  }
}
