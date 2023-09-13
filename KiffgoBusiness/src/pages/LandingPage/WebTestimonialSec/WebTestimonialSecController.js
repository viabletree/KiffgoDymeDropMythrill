// @flow
import React from 'react';
import WebTestimonialSecView from './WebTestimonialSecView';

export default class WebTestimonialSecController extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return <WebTestimonialSecView {...this.props} sliderSetting={settings} />;
  }
}
