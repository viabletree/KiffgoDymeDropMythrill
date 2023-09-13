// @flow
import React from "react";
import { css } from "aphrodite";
import Slider from "react-slick";
import styles from "./WebServiceAndVehicleSecStyles";
import { AppStyles, Images } from "../../../theme";

export default function WebServiceAndVehicleSecView(props) {
  return (
    <section
      className={`py-5 mt-5 ${css([
        AppStyles.overflowHidden,
        AppStyles.pxy_12
      ])}`}
    >
      <div className={`container ${css(AppStyles.container)}`}>
        <p className={`${css([AppStyles.peraOne, AppStyles.weight6])}`}>
          We have dif
        </p>
        <h2 className={`my-3 ${css([AppStyles.headingOne])}`}>
          Vehicles & Services
        </h2>
        <p className={`${css([AppStyles.peraOne])}`}>
          Scalable fleet without the cost of owning, leasing or hiring a van and
          a driver. You can turn it on/off with the push of a button.
        </p>
        <div className={`row pt-5 ${css()}`}>
          <Slider {...props.sliderSetting}>
            <div className={`col ${css([styles.textCenter])}`}>
              <img
                className={` ${css(styles.vehicleImg)}`}
                src={Images.vehicle1}
                alt=""
              />
              <h2
                className={`mt-5 mb-3 ${css([
                  AppStyles.headingT22,
                  AppStyles.weight7
                ])}`}
              >
                Cargo Bike
              </h2>
              <p className={`${css([AppStyles.peraOne])}`}>
                Ideal for congested area
              </p>
            </div>
            <div className={`col ${css([styles.textCenter])}`}>
              <img
                className={` ${css(styles.vehicleImg)}`}
                src={Images.vehicle2}
                alt=""
              />
              <h2
                className={`mt-5 mb-3 ${css([
                  AppStyles.headingT22,
                  AppStyles.weight7
                ])}`}
              >
                Small Van
              </h2>
              <p className={`${css([AppStyles.peraOne])}`}>
                Can go anywhere like a car
              </p>
            </div>
            <div className={`col ${css([styles.textCenter])}`}>
              <img
                className={` ${css(styles.vehicleImg)}`}
                src={Images.vehicle3}
                alt=""
              />
              <h2
                className={`mt-5 mb-3 ${css([
                  AppStyles.headingT22,
                  AppStyles.weight7
                ])}`}
              >
                Medium Van
              </h2>
              <p className={`${css([AppStyles.peraOne])}`}>
                Carry items up to 2.3m length
              </p>
            </div>
            <div className={`col ${css([styles.textCenter])}`}>
              <img
                className={` ${css([
                  styles.vehicleImg,
                  styles.vehicleImgWidth
                ])}`}
                src={Images.vehicle6}
                alt=""
              />
              <h2
                className={`mt-5 mb-3 ${css([
                  AppStyles.headingT22,
                  AppStyles.weight7
                ])}`}
              >
                Large Van
              </h2>
              <p className={`${css([AppStyles.peraOne])}`}>
                Ideal for lengthy and heavy items up to 3m
              </p>
            </div>
            <div className={`col ${css([styles.textCenter])}`}>
              <img
                className={` ${css([
                  styles.vehicleImg,
                  styles.vehicleImgWidth
                ])}`}
                src={Images.vehicle7}
                alt=""
              />
              <h2
                className={`mt-5 mb-3 ${css([
                  AppStyles.headingT22,
                  AppStyles.weight7
                ])}`}
              >
                XL- Luton Van
              </h2>
              <p className={`${css([AppStyles.peraOne])}`}>
                King of vans. Highest capacity
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
