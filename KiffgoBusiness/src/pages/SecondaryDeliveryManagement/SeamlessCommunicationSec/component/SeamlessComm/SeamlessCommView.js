// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './SeamlessCommStyles';
import { AppStyles, Images } from '../../../../../theme';

export default function SeamlessCommView(props) {
  const {
    title,
    descTitle,
    description,
    backgroundGradient,
    image,
    altText,
    isImageOnLeft
  } = props;
  return (
    <>
      <div
        className={`${css([styles.seamlessHeroSection, AppStyles.pxy_12])}`}
        style={{ background: backgroundGradient }}
      >
        <div className={`container mb-0 ${css(styles.containerTwo)}`}>
          <div className={`row`}>
            <div className={`col-12`}>
              <p className={`${css(styles.bannerText)}`}>{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${css(styles.container)}`}>
        {isImageOnLeft ? (
          <>
            <div className={`row align-items-center`}>
              <div className={`col-md-6 col-sm-12 mt-3 mb-4`}>
                <img
                  className={`${css(styles.productImg)}`}
                  src={image}
                  alt={altText}
                />
              </div>
              <div className={`col-md-6 col-sm-12 mt-3 mb-4`}>
                <h4 className={`${css(styles.descTitle)}`}>{descTitle}</h4>
                <p className={`${css(styles.description)}`}>{description}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`row align-items-center ${css(AppStyles.colReverse)}`}
            >
              <div className={`col-md-6 col-sm-12 mt-3 mb-4`}>
                <h4 className={`${css(styles.descTitle)}`}>{descTitle}</h4>
                <p className={`${css(styles.descriptiontwo)}`}>{description}</p>
              </div>
              <div className={`col-md-6 col-sm-12 mt-3 mb-4`}>
                <img
                  className={`${css(styles.productImg)}`}
                  src={image}
                  alt={altText}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
