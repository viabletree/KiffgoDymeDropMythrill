// @flow
import _ from "lodash";
import React from "react";
import PictureUploaderView from "./PictureUploaderView";

export default class PictureUploaderController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    selectedFile: null,
    isLoading: false
  };

  addImageToReducer = e => {
    const { isPickup, isDropoff, index, images } = this.props;
    const updatedImagesArray = _.cloneDeep(images);
    updatedImagesArray.push(e);

    this.props.updateBookingLocationData({
      ...{ index, isDropoff, isPickup },
      ...{ images: updatedImagesArray }
    });
  };

  onRemoveFile = e => {
    const { isPickup, isDropoff, index, images } = this.props;
    const updatedImagesArray = _.cloneDeep(images);
    _.remove(updatedImagesArray, n => n.public_id === e);

    this.props.updateBookingLocationData({
      ...{ index, isDropoff, isPickup },
      ...{ images: updatedImagesArray }
    });
  };
  uploadFile = file => {
    this.setState({
      isLoading: true
    });
    const cloudName = "kiffgo";
    const unsignedUploadPreset = "gxwgoos3";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    xhr.onreadystatechange = e => {
      this.setState({
        isLoading: false
      });
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        this.addImageToReducer(response);
      }
    };

    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("file", file);
    xhr.send(fd);
  };
  onUploadFile = e => {
    const file = e.target.files[0];

    this.uploadFile(file);
  };

  render() {
    return (
      <PictureUploaderView
        {...this.props}
        onUploadFile={this.onUploadFile}
        onRemoveFile={this.onRemoveFile}
        selectedFile={this.state.selectedFile}
        isLoading={this.state.isLoading}
      />
    );
  }
}
