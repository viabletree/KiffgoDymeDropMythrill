// @flow
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DMProfilePicView from './DMProfilePicView';

export default class DMProfilePicController extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      newImage: null
    };
  }

  static propTypes = {
    onClick: PropTypes.func,
    wrapperStyles: PropTypes.object,
    image: PropTypes.string,
    editable: PropTypes.bool,
    onDoneUpload: PropTypes.func
  };

  static defaultProps = {
    editable: false
  };

  uploadFile = file => {
    this.setState({
      isLoading: true
    });
    const cloudName = 'kiffgo';
    const unsignedUploadPreset = 'gxwgoos3';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        this.props.onDoneUpload(response);
        this.setState({
          isLoading: false,
          newImage: response.secure_url
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);

    xhr.send(fd);
  };

  onUploadFile = e => {
    const file = e.target.files[0];
    this.uploadFile(file);
  };

  render() {
    return (
      <DMProfilePicView
        {...this.props}
        onUploadFile={this.onUploadFile}
        isLoading={this.state.isLoading}
        newImage={this.state.newImage}
      />
    );
  }
}
