// @flow
import React from "react";

import AddImagesView from "./AddImagesView";

export default class AddImagesController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <AddImagesView {...this.props} />;
  }
}
