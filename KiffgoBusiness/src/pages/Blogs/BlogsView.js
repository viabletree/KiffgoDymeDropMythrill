// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './BlogsStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import { BLOG_DETAILS_LISTING, ROUTES } from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
export default class BlogsView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Best route planning software made in UK</title>
          <meta
            data-react-helmet="true"
            id="best-route-planning-software-made-in-uk"
            name="Best route planning software made in UK"
            content="best-route-planning-software-made-in-uk"
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
                The best Route Planning software made in UK (2021)
              </h1>
            </div>
          </div>
        </div>

        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.boxingImageWrapper)}`}>
              <img
                src={Images.boxing_blog}
                alt="blog boxing image"
                className={`${css(styles.blogBoxingImg)}`}
              />
            </div>
          </div>
        </div>

        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.additionalParaWrapper)}`}>
              <p className={`${css(styles.additionalPara)}`}>
                When it comes to route planning, the choice is abundant, however
                it is very hard to find a robust solution that is user friendly,
                modern and incorporating latest technology. Here are a list top
                six routing planning, driver scheduling, and delivery management
                SaaS made in UK. For each software we went to find the real
                screenshot of the dispatcher dashboard so you can get a glimpse
                of the effort put into user experience (UX).
              </p>
            </div>
          </div>

          <div className={`row`}>
            {BLOG_DETAILS_LISTING &&
              BLOG_DETAILS_LISTING.map((item, index) => {
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

                    {/* Blog image */}
                    <div className={`${css(styles.blogImgWrapper)}`}>
                      <img
                        src={item.image}
                        alt={item.image}
                        className={`${css(styles.blogImg)}`}
                      />
                    </div>

                    {/* Blog description */}
                    <div className={`${css(styles.blogDescWrapper)}`}>
                      <p className={`${css(styles.blogDesc)}`}>
                        {item.anchorTextUrl ? (
                          <a
                            href={item.anchorTextUrl}
                            className={`${css(styles.descLink)}`}
                          >
                            {item.anchorText}{' '}
                          </a>
                        ) : (
                          <span className={`${css(styles.descLink)}`}>
                            {item.anchorText}{' '}
                          </span>
                        )}
                        {item.description}
                      </p>
                    </div>

                    {/* Blog head quarter */}
                    <div className={`${css(styles.blogHQWrapper)}`}>
                      <p className={`${css(styles.blogHQ)}`}>
                        <span className={`${css(AppStyles.weight8)}`}>HQ:</span>{' '}
                        {item.headQuarter}
                      </p>
                    </div>

                    {/* Blog price text */}
                    <div className={`${css(styles.blogHQWrapper)}`}>
                      <p className={`${css(styles.blogHQ)}`}>
                        <span className={`${css(AppStyles.weight8)}`}>
                          {item.priceHighlightedText &&
                            item.priceHighlightedText}
                        </span>{' '}
                        {item.priceText && item.priceText}
                      </p>
                    </div>
                  </div>
                );
              })}

            <div className={`col-12 ${css(styles.blogDetailWrapper)}`}>
              {/* Blog title */}
              <div className={`${css(styles.blogTitleWrapper)}`}>
                <h1 className={`${css(styles.blogTitle)}`}>
                  Poor UX Thinking vs Great UX Thinking
                </h1>
              </div>

              {/* Blog image */}
              <div className={`${css(styles.blogImgWrapper)}`}>
                <img
                  src={Images.ux_ui_comparison}
                  alt={'UX-UI Comparison'}
                  className={`${css(styles.blogImg)}`}
                />
              </div>

              {/* Blog description */}
              <div className={`${css(styles.blogDescWrapper)}`}>
                <p className={`${css(styles.blogDesc)}`}>
                  Enterprise software, which doesn’t always prioritize user
                  experience, can require months of training. Focusing on good
                  design is a top priority at Kiffgo, because we do understand
                  that well executed design makes everyone more productive even
                  the 1st time user, reduces training expenses and time, and
                  increase users’ engagement which is the most important thing
                  for the long-term success of any enterprise application. Your
                  dispatchers, your drivers, and your customers are using super
                  simple apps like Uber, Deliveroo, Amazon. However, when they
                  use your software, with overly complicated legacy designs they
                  travel back in time to the 90's, while vintage design is king
                  for furniture, speaking about software seamless user
                  experience prevails. Driver, dispatcher, and customer can make
                  better and faster decisions and improve productivity.
                </p>
              </div>
            </div>
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
