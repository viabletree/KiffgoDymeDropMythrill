// @flow
import _ from "lodash";
import React from "react";
import { css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { BeatLoader } from "react-spinners";

import styles from "./PictureUploaderStyles";
import { Colors } from "../../../theme";

export default function PictureUploaderView(props) {
  return (
    <div className={css(styles.parentWrapper)}>
      {!_.isUndefined(props.data) ? (
        <div style={{ position: "relative" }}>
          <div className={css(styles.imageWrap)}>
            <FontAwesomeIcon
              className={css(styles.removeImage)}
              icon={faTimesCircle}
              onClick={() => props.onRemoveFile(props.data.public_id)}
            />

            <img
              className={css(styles.imageWrapImage)}
              src={props.data.secure_url}
              alt={props.data.public_id}
            ></img>
          </div>
        </div>
      ) : (
        <div style={{ position: "relative" }} className={css(styles.inputWrap)}>
          <div
            className={css([
              styles.files,
              !props.isLoading && props.isAddImage && styles.addImage
            ])}
          >
            <input
              type="file"
              className={"form-group " + css(styles.filesInput)}
              accept="image/*"
              onChange={props.onUploadFile}
              disabled={!props.isAddImage}
            ></input>
          </div>
        </div>
      )}
      {props.isLoading && (
        <div className={css(styles.loaderWrapper)}>
          <BeatLoader sizeUnit={"px"} size={8} color={Colors.kgGreen} />
        </div>
      )}
    </div>
  );
}
