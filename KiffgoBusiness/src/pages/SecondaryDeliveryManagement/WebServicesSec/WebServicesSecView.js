// @flow
import React from "react";
import { css } from "aphrodite";
import { Images, AppStyles } from "../../../theme";
import styles from "./WebServicesSecStyles";

export default function WebServicesSecView(props) {
  return (
    <section
      className={`py-5 ${[
        css(styles.marginBottom, AppStyles.pxy_12, styles.vehicleSection)
      ]} `}
    >
      <div className={`container ${css(AppStyles.container)}`}>
        <div className={`row align-items-center`}>
          <div className={`col-lg-5 col-md-12 ${css(styles.serviceCol)} `}>
            <p
              className={`${css(AppStyles.peraOne)} ${css(
                AppStyles.whiteColor
              )}`}
            >
              We have different
            </p>
            <h2
              className={`mt-2 mb-4 ${css(AppStyles.headingFour)} ${css(
                AppStyles.whiteColor
              )}`}
            >
              Vehicles & Services
            </h2>
            <p
              className={`${css(AppStyles.peraOne)} ${css(
                AppStyles.whiteColor
              )}`}
            >
              In hac habitasse platea dictumst. Vivamus adipiscing fermentum
              quam volutpat aliquam. Integer et elit eget elit facilisis
              tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat,
              non ultrices sem tincidunt euismod.
            </p>
          </div>
          <div className={`col-lg-7 col-md-12 ${css(styles.vehiclesCol)}`}>
            <img
              className={`w-100 ${css(styles.vehiclesImg)}`}
              src={Images.allVehicles}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
