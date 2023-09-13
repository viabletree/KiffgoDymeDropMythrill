// @flow
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import styles from "./styles";
import { Button, TextField } from "..";
import { AppStyles, Colors, Images } from "../../theme";
import { LINK_CARD_VIEW_TYPE } from "../../constants";

const LinkCard = (props) => {
  const {
    id,
    heading,
    description,
    image,
    actionButtonText,
    actionButtonUrl,
    cardViewType,
    onPressCard,
    linkHeight,
  } = props;

  const rightImageLinkCard = () => (
    <div className={css(styles.rightLeftCardContainer)}>
      <div className={css(styles.rightLeftCardView1)}>
        <h1 className={css(styles.heading)} style={{ width: "80%" }}>
          {heading}
        </h1>
        <img
          src={image}
          className={css(styles.image)}
          style={{ marginLeft: 16 }}
        />
      </div>

      <div className={css(styles.buttonMainView)}>
        <p className={css(styles.description)} style={{ color: "#5b596a" }}>
          {description}
        </p>

        {!_.isEmpty(actionButtonText) && (
          <div className={css(styles.buttonView)}>
            <a href="#" className={css(styles.button)}>
              {actionButtonText.length < 7
                ? `${_.toUpper(actionButtonText)}`
                : `${_.toUpper(actionButtonText.substring(0, 6))}...`}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const leftImageLinkCard = () => (
    <div className={css(styles.rightLeftCardContainer)}>
      <div className={css(styles.rightLeftCardView1)}>
        <img
          src={image}
          className={css(styles.image)}
          style={{ marginRight: 16 }}
        />

        <h1 className={css(styles.heading)} style={{ width: "80%" }}>
          {heading}
        </h1>
      </div>

      <div className={css(styles.buttonMainView)}>
        <p className={css(styles.description)} style={{ color: "#5b596a" }}>
          {description}
        </p>

        {!_.isEmpty(actionButtonText) && (
          <div className={css(styles.buttonView)}>
            <a href="#" className={css(styles.button)}>
              {actionButtonText.length < 7
                ? `${_.toUpper(actionButtonText)}`
                : `${_.toUpper(actionButtonText.substring(0, 6))}...`}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const topImageLinkCard = () => (
    <div
      className={css(styles.topCardContainer)}
      style={{ height: linkHeight + 80 }}
    >
      <div
        className={css(styles.topCardBackground)}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={css(styles.topCardView1)}>
          <h1 className={css(styles.heading)} style={{ color: Colors.white }}>
            {heading}
          </h1>
        </div>
      </div>

      <div className={css(styles.topCardButtonMainView)}>
        <p className={css(styles.description)} style={{ color: "#5b596a" }}>
          {description}
        </p>

        {!_.isEmpty(actionButtonText) && (
          <div className={css(styles.buttonView)}>
            <a href="#" className={css(styles.button)}>
              {actionButtonText.length < 7
                ? `${_.toUpper(actionButtonText)}`
                : `${_.toUpper(actionButtonText.substring(0, 6))}...`}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const bottomImageLinkCard = () => (
    <div
      className={css(styles.bottomCardContainer)}
      style={{ height: linkHeight + 80 }}
    >
      <div className={css(styles.bottomCardView1)}>
        <h1 className={css(styles.heading)}>{heading}</h1>
      </div>

      <div
        className={css(styles.bottomCardBackground)}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={css(styles.BottomCardButtonMainView)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p
              className={css(styles.description)}
              style={{ color: "white", marginBottom: -7 }}
            >
              {description}
            </p>

            {!_.isEmpty(actionButtonText) && (
              <div
                className={css(styles.buttonView)}
                style={{ marginBottom: 6 }}
              >
                <a href="#" className={css(styles.button)}>
                  {actionButtonText.length < 7
                    ? `${_.toUpper(actionButtonText)}`
                    : `${_.toUpper(actionButtonText.substring(0, 6))}...`}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const LinkCardWithoutThumbnail = () => (
    <div className={css(styles.rightLeftCardContainer)}>
      <div className={css(styles.rightLeftCardView1)}>
        <h1 className={css(styles.heading)}>{heading}</h1>
      </div>

      <div className={css(styles.buttonMainView)}>
        <p className={css(styles.description)} style={{ color: "#5b596a" }}>
          {description}
        </p>

        {!_.isEmpty(actionButtonText) && (
          <div className={css(styles.buttonView)}>
            <a href="#" className={css(styles.button)}>
              {actionButtonText.length < 7
                ? `${_.toUpper(actionButtonText)}`
                : `${_.toUpper(actionButtonText.substring(0, 6))}...`}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const clickOnLinkCard = () => {
    window.open(actionButtonUrl);
    onPressCard(id);
  };

  return (
    <div onClick={clickOnLinkCard} style={{ cursor: "pointer" }}>
      {cardViewType === LINK_CARD_VIEW_TYPE.RIGHT && (
        <>{rightImageLinkCard()}</>
      )}
      {cardViewType === LINK_CARD_VIEW_TYPE.LEFT && <>{leftImageLinkCard()}</>}
      {cardViewType === LINK_CARD_VIEW_TYPE.TOP && <>{topImageLinkCard()}</>}
      {cardViewType === LINK_CARD_VIEW_TYPE.BOTTOM && (
        <>{bottomImageLinkCard()}</>
      )}
      {cardViewType === LINK_CARD_VIEW_TYPE.WITHOUT_THUMBNAIL && (
        <>{LinkCardWithoutThumbnail()}</>
      )}
    </div>
  );
};

LinkCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onPressCard: PropTypes.func.isRequired,
  image: PropTypes.any,
  actionButtonText: PropTypes.string.isRequired,
  actionButtonUrl: PropTypes.string.isRequired,

  linkHeight: PropTypes.bool,
  cardViewType: PropTypes.string,
};

LinkCard.defaultProps = {
  image: "",
  actionButtonPress: () => {},
  cardViewType: LINK_CARD_VIEW_TYPE.RIGHT,
  linkHeight: 200,
};

export default LinkCard;
