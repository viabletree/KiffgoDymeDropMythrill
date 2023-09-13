// @flow
import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import Ripples from "react-ripples";
import styles from "./styles";
import { Colors, Images, AppStyles } from "../../theme";

export default class CardBoxButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    iconMaxWidth: PropTypes.number,
    iconMaxHeight: PropTypes.number,
    isBeta: PropTypes.bool
  };

  static defaultProps = {
    subTitle: "",
    iconMaxHeight: 33,
    iconMaxWidth: 42,
    isBeta: false
  };

  render() {
    const {
      title,
      subTitle,
      image,
      isSelected,
      onClick,
      iconMaxHeight,
      iconMaxWidth,
      isBeta
    } = this.props;
    return (
      <div className={css(styles.boxSizingStyle)}>
        {this.props.children}
        <Ripples
          during={1200}
          color={Colors.whiteOpaque}
          className={css([styles.button, isSelected && styles.selectedButton])}
          onClick={onClick}
        >
          {isBeta && (
            <div className={css([styles.betaWrap])}>
              <img className={css([styles.betaFlag])} src={Images.beta}></img>
            </div>
          )}
          <img
            src={image}
            alt={title}
            className={css([styles.imgStyle])}
            style={{ maxWidth: iconMaxWidth, maxHeight: iconMaxHeight }}
          />
          <div className={css([styles.servpara, styles.titleVehicle])}>
            <p className={css(AppStyles.weight6)}>{title}</p>
            <p className={`${css(AppStyles.weight5)}`}>{subTitle}</p>
          </div>
        </Ripples>
      </div>
    );
  }
}
