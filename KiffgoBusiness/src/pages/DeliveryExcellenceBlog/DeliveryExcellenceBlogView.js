// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './DeliveryExcellenceBlogStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import { EXCELLENCE_BLOG_DETAILS_LISTING, ROUTES } from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
export default class DeliveryExcellenceBlogView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Last Mile Delivery</title>
          <meta
            data-react-helmet="true"
            id="last-mile-delivery-excellence-metrics"
            name="last-mile-delivery-excellence-metrics"
            content="Last mile delivery metrics. Last mile delivery software. Last mile delivery innovation. On-time delivery.Guarantee on-time truck deliveries with sophisticated, accurate, fast routing software. Accelerate delivery time, save on fuel costs, improve customer satisfaction."
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.titleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>
                10 Last mile delivery excellence metrics
              </h1>
            </div>
          </div>
        </div>

        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.analyzeImageWrapper)}`}>
              <img
                src={Images.analyze}
                alt="last-mile-delivery-excellence-metrics"
                className={`${css(styles.blogAnalyzeImg)}`}
              />
            </div>
          </div>
        </div>

        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.additionalParaWrapper)}`}>
              <p className={`${css(styles.additionalPara)}`}>
                Account for 50% of the overall supply chain. Last mile delivery
                is filled long hours, complicated logistics and razor-thin
                margin. Delivery providers should analyze everything from the
                biggest to the smallest possible factors.
              </p>
            </div>
          </div>

          <div className={`row`}>
            {EXCELLENCE_BLOG_DETAILS_LISTING &&
              EXCELLENCE_BLOG_DETAILS_LISTING.map((item, index) => {
                return (
                  <div
                    className={`col-12 ${css(styles.blogDetailWrapper)}`}
                    key={index}
                  >
                    {/* Blog title */}
                    <div className={`${css(styles.blogTitleWrapper)}`}>
                      <h1 className={`${css(styles.blogTitle)}`}>
                        {item.title}
                      </h1>
                    </div>

                    {/* Blog description */}
                    <div className={`${css(styles.blogDescWrapper)}`}>
                      <p className={`${css(styles.blogDesc)}`}>
                        {item.descriptionOne}
                      </p>
                      {item.descriptionTwo && (
                        <>
                          <br />
                          <p className={`${css(styles.blogDesc)}`}>
                            {item.descriptionTwo}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className={`col-12 ${css(styles.additionalParaTwoWrapper)}`}>
            <p className={`${css(styles.additionalParaTwo)}`}>
              <a href={ROUTES.HOME} className={`${css(styles.kiffgoLink)}`}>
                Kiffgo{' '}
              </a>
              is a leading SaaS that provides end-to-end optimization of
              operations and customer experiences in last-mile delivery. Kiffgo
              platform includes tools like : self-scheduling, route
              optimization, customer communication, real-time tracking and ETA,
              proof of delivery, delivery network intelligence and analytics.
            </p>
          </div>
        </div>

        <WebFooter />
      </div>
    );
  }
}
