// @flow
import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import styles from "./styles";
import { Images } from "../../theme";

const HeroSection = (props) => {
  const { pageDetails } = props;
  console.log({ pageDetailsHero: pageDetails });
  return (
    <div className={css(styles.container)}>
      <img src={pageDetails?.imagePreview} className={css(styles.img)} />
      <h1 className={css(styles.heading)}>{pageDetails?.title}</h1>
      <p className={css(styles.description)}>{pageDetails?.description} </p>
    </div>
  );
};

HeroSection.propTypes = { pagesDetails: PropTypes.object };

HeroSection.defaultProps = { pagesDetails: {} };

export default HeroSection;
