// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DMProfilePicStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { BeatLoader } from 'react-spinners';
import { Colors, Images } from '../../theme';

export default class DMProfilePicView extends React.PureComponent {
  render() {
    return (
      <div
        className={`${css([
          styles.wrapper,
          this.props.wrapperStyles && this.props.wrapperStyles
        ])}`}
      >
        {this.props.editable && (
          <div className={`${css(styles.editParent)}`}>
            <FontAwesomeIcon
              className={`${css(styles.editIcon)}`}
              icon={faPencilAlt}
            />
            <input
              type="file"
              className={'form-group ' + css(styles.filesInput)}
              accept="image/*"
              onChange={this.props.onUploadFile}
              // disabled={!this.props.isAddImage}
            ></input>
          </div>
        )}
        <div className={`${css(styles.picWrapper)}`}>
          {this.props.isLoading && (
            <BeatLoader sizeUnit={'px'} size={8} color={Colors.kgGreen} />
          )}
          {!this.props.isLoading && (
            <img
              src={this.props.newImage || this.props.image || Images.userImg}
              className={`${css([
                this.props.image ? styles.profilePic : styles.profilePicEmpty
              ])}`}
            />
          )}
        </div>
      </div>
    );
  }
}
