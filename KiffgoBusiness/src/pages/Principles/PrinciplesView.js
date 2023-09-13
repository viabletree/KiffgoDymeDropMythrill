// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './PrinciplesStyles';
import { Helmet } from 'react-helmet';
import { WebHeader, WebFooter, ComparisonHeroSection } from '../../components';
import { PRINCIPLES_DATA, ROUTES, TEAM_DATA } from '../../constants';
import { AppStyles, Colors, Images } from '../../theme';
import { PopupButton } from 'react-calendly';

export default class PrinciplesView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>10 Kiffgo Principles</title>
          <meta
            data-react-helmet="true"
            id="principles"
            name="last-mile-delivery-driver-app"
            content="Last mile delivery metrics. Last mile delivery software. Last mile delivery innovation. On-time delivery.Guarantee on-time truck deliveries with sophisticated, accurate, fast routing software. Accelerate delivery time, save on fuel costs, improve customer satisfaction. Track drivers. 10 kiffgo principle."
          />
          <meta
            name="google-site-verification"
            content="T_Z7R3SCqDo2bNdHnvp_Ey0pGotIm7MrAwbXhiL0roI"
          />
        </Helmet>
        <WebHeader />
        <div className={`container ${css(styles.container)}`}>
          <div className={`row`}>
            <div className={`col-12 ${css(styles.titleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>
                The 10 Kiffgo’s principles
              </h1>
              <p className={`${css(styles.subTitle)}`}>
                *We were inspired by Jeff Bezos execution
              </p>
            </div>
          </div>

          {/* principles data */}
          <div className={`row`}>
            {PRINCIPLES_DATA &&
              PRINCIPLES_DATA.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-lg-6 col-sm-12 mt-3`}
                    data-aos="fade-up"
                  >
                    <div className={`${css(styles.principleBoxWrapper)}`}>
                      <div className={`${css(styles.principleNumberWrapper)}`}>
                        <h4
                          className={`${css(styles.principleNumber)}`}
                          style={{ color: `${item.numberColor}` }}
                        >
                          {item.id}
                        </h4>
                      </div>

                      <div className={`${css(styles.principleContent)}`}>
                        <h6 className={`${css(styles.principleInnerTitle)}`}>
                          {item.title}
                        </h6>
                        <p className={`${css(styles.principleDesc)}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* team work data */}
          <div className={`row mt-5`}>
            <div className={`col-12 ${css(styles.teamWorkTitleWrapper)}`}>
              <h1 className={`${css(styles.title)}`}>
                Team - Work is not a place. It is a deep sense of belonging
              </h1>
            </div>
          </div>
          <div className={`${css(styles.teamWorkContentWrapper)}`}>
            <div className={`${css(styles.teamWorkImgWrapper)}`}>
              <img
                src={Images.cpe_image}
                alt=""
                className={`${css(styles.teamWorkImg)}`}
              />
            </div>
            <div className={`${css(styles.teamWorkParaWrapper)}`}>
              <p className={`${css(styles.teamWorkPara)}`}>
                Previous to Kiffgo, we have built two delivery marketplaces and
                run delivery operations for tech start-up like Feedr (Food tech
                acquired for $24M), Lovespace (on-demand storage, raised $5.2M).
                We know what it takes to manage delivery operations and we know
                how to put bits together in terrific ways to deliver value.
                Today, technology is increasingly commoditized. Customers have
                endless choices, more products are self-service, and adoption of
                them is more transactional. In almost any vertical of today’s
                universe of technology, there are many gifted teams putting bits
                together in terrific ways that deliver value. In this
                environment, we think features will not set Kiffgo apart.
                Meaningful person-to-person interactions — the complete product
                experience (CPE) differentiates Kiffgo from its competitors.
                Customer choose Kiffgo not only for our software’s eye-popping
                features list but for CPE. Customers stay with us for the long
                haul because we build love and productivity with the help of the
                CPE. Want to try our loveable delivery management and route
                optimization software?
              </p>
              {/* demo request button */}
              <div className={`${css(styles.buttonContainer)}`}>
                <PopupButton
                  className={css(styles.buttonOne)}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                  }}
                  prefill={null}
                  styles={{}}
                  text="Request A Demo"
                  url="https://calendly.com/kiffgo/power-your-deliver-with-kiffgo"
                  utm={null}
                />
              </div>
            </div>
          </div>

          {/* team data */}
          <div className={`row mt-5 teamInfoWrapper`} id={`team`}>
            {TEAM_DATA &&
              TEAM_DATA.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-lg-4 col-sm-12 my-5`}
                    data-aos="fade-up"
                  >
                    {/* image div */}
                    <div className={`${css(styles.teamImageWrapper)}`}>
                      <img
                        src={item.image}
                        className={`${css(styles.teamImage)}`}
                        alt={item.title}
                      />
                    </div>

                    {/* team info card */}
                    <div className={`${css(styles.teamInfoCardWrapper)}`}>
                      <h4 className={`${css(styles.teamMemberName)}`}>
                        {item.name}
                      </h4>
                      <h6 className={`${css(styles.teamMemberTitle)}`}>
                        {item.title}
                      </h6>
                      <p className={`${css(styles.teamMemberDesc)}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <WebFooter />
      </div>
    );
  }
}
