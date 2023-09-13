// @flow
import React from 'react';
import { css } from 'aphrodite';
import Slider from 'react-slick';
import { Images, AppStyles } from '../../../theme';

import styles from './WebTestimonialSecStyles';
export default function WebTestimonialSecView(props) {
  return (
    <section className={`py-5 ${css(styles.testimonialSection)}`}>
      <div className={`pt-4 ${css(styles.techSection)}`}>
        <div className={`container ${css(styles.container)}`}>
          <div className={`row py-5 text-center `}>
            <h2
              className={`w-100 ${css(AppStyles.headingBig)} ${css(
                AppStyles.whiteColor
              )}`}
            >
              Tech enabled and built for future,<br></br>
              our deliveries go extra miles
            </h2>
          </div>
        </div>
      </div>

      <div className={`slider-Section`}>
        <Slider {...props.sliderSetting}>
          <div className={`single-Slide `}>
            <div className={`slide-img`}>
              <img
                className={` ${css(styles.slideImg)}`}
                src={Images.profile}
                alt=""
              />
            </div>
            <p className={`mt-4 ${css(AppStyles.peraOne)}`}>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta.
            </p>
            <div className={`row mt-3 `}>
              <div className={`col-6`}>
                <h2
                  className={`${css(AppStyles.peraThree)} ${css(
                    AppStyles.peraOne
                  )}`}
                >
                  Scott Herrera
                </h2>
              </div>
              <div className={`col-6 text-right`}>
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`single-Slide `}>
            <div className={`slide-img`}>
              <img
                className={` ${css(styles.slideImg)}`}
                src={Images.profile}
                alt=""
              />
            </div>
            <p className={`mt-4 ${css(AppStyles.peraOne)}`}>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta.
            </p>
            <div className={`row mt-3 `}>
              <div className={`col-6`}>
                <h2
                  className={`${css(AppStyles.peraThree)} ${css(
                    AppStyles.peraOne
                  )}`}
                >
                  Scott Herrera
                </h2>
              </div>
              <div className={`col-6 text-right`}>
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`single-Slide `}>
            <div className={`slide-img`}>
              <img
                className={` ${css(styles.slideImg)}`}
                src={Images.profile}
                alt=""
              />
            </div>
            <p className={`mt-4 ${css(AppStyles.peraOne)}`}>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta.
            </p>
            <div className={`row mt-3 `}>
              <div className={`col-6`}>
                <h2
                  className={`${css(AppStyles.peraThree)} ${css(
                    AppStyles.peraOne
                  )}`}
                >
                  Scott Herrera
                </h2>
              </div>
              <div className={`col-6 text-right`}>
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`single-Slide `}>
            <div className={`slide-img`}>
              <img
                className={` ${css(styles.slideImg)}`}
                src={Images.profile}
                alt=""
              />
            </div>
            <p className={`mt-4 ${css(AppStyles.peraOne)}`}>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta.
            </p>
            <div className={`row mt-3 `}>
              <div className={`col-6`}>
                <h2
                  className={`${css(AppStyles.peraThree)} ${css(
                    AppStyles.peraOne
                  )}`}
                >
                  Scott Herrera
                </h2>
              </div>
              <div className={`col-6 text-right`}>
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`single-Slide `}>
            <div className={`slide-img`}>
              <img
                className={` ${css(styles.slideImg)}`}
                src={Images.profile}
                alt=""
              />
            </div>
            <p className={`mt-4 ${css(AppStyles.peraOne)}`}>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta.
            </p>
            <div className={`row mt-3 `}>
              <div className={`col-6`}>
                <h2
                  className={`${css(AppStyles.peraThree)} ${css(
                    AppStyles.peraOne
                  )}`}
                >
                  Scott Herrera
                </h2>
              </div>
              <div className={`col-6 text-right`}>
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
                <img
                  className={` ${css(styles.ratingImg)}`}
                  src={Images.star}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
