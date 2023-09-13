// @flow
import _ from "lodash";
import React from "react";
import { css } from "aphrodite";
import styles from "./AddImagesStyles";
import PictureUploader from "./PictureUploader";
import { MAX_IMAGES_PER_LOCATION } from "../../constants";
import { AppStyles } from "../../theme";

export default function AddImagesView(props) {
  return (
    <div>
      <p
        className={css([
          AppStyles.font14,
          AppStyles.mTop20,
          AppStyles.mBottom10,
          AppStyles.weight6
        ])}
      >
        Add Pictures:
      </p>
      <div className={css(styles.imagesWrap)}>
        {_.times(MAX_IMAGES_PER_LOCATION, index => {
          let isAddImage = false;
          if (
            (index === 0 && _.isUndefined(props.images[index])) ||
            (_.isUndefined(props.images[index]) && props.images[index - 1])
          ) {
            isAddImage = true;
          }

          return (
            <PictureUploader
              isAddImage={isAddImage}
              data={props.images[index]}
              key={index}
              {...props}
            />
          );
        })}
      </div>
      {/* <PictureUploader></PictureUploader> */}
    </div>
  );
}
