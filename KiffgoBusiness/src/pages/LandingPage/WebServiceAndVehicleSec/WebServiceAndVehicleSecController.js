// @flow
import React from "react";

import WebServiceAndVehicleSecView from "./WebServiceAndVehicleSecView";

export default class WebServiceAndVehicleSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <WebServiceAndVehicleSecView {...this.props} sliderSetting={settings} />
    );
  }
}
