import { css } from "aphrodite";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  WebHeader,
  WebFooter,
  LinkCard,
  ContactLinks,
  HeroSection,
} from "../../components";
import { LINK_CARD_VIEW_TYPE } from "../../constants";
import { Images } from "../../theme";
import styles from "./styles";
import Blur from "react-css-blur";
import { BarLoader } from "react-spinners";
import {
  addPassView,
  clickPageCountRequest,
  getPageDetailsRequest,
  viewPageCountRequest,
} from "../../actions/PageActions";
import { useHistory, useParams } from "react-router-dom";
import _ from "lodash";
import { DEEPLNK_URL } from "../../config/WebService";

function LandingPage(props) {
  const { pageDetails } = props;
  const [isLoading, setIsLoading] = useState(() => true);
  const [addViewReq, setAddViewReq] = useState(() => false);
  const dispatch = useDispatch(null);
  const history = useHistory();

  const { slug } = useParams();
  // console.log({ slugggg: _.toNumber(id) });

  console.log({ pageDetails });

  useEffect(() => {
    const payload = {
      // id: _.toNumber(id),
      slug,
    };

    dispatch(
      getPageDetailsRequest(payload, (res) => {
        dispatch(viewPageCountRequest(payload, (res) => {}));
        console.log("my response", res);
        if (res) {
        } else {
          history.replace("/");
        }
        setIsLoading(false);
      })
    );
  }, []);

  useEffect(() => {
    if (!_.isEmpty(pageDetails) && pageDetails?.id && !addViewReq) {
      setAddViewReq(true);
      dispatch(
        addPassView(pageDetails?.id, (res) => {
          // console.log('Res', res);
        })
      );
    }
  }, [pageDetails]);

  const onPressCard = (id) => {
    const payload = {
      id,
    };
    dispatch(clickPageCountRequest(payload, (res) => {}));
  };

  if (!_.isEmpty(pageDetails) && pageDetails.isDelete) {
    history.replace("/");
  }
  console.log("pageDetails", pageDetails);
  const activeTagSec = () => (
    <a
      className={css(styles.activatePassContainer)}
      target="_blank"
      href={`${DEEPLNK_URL}?fandeeplink=${slug}`}>
      <div className={css(styles.activatePassContainer1)}>
        <img
          src={Images.ActivatePass1}
          className={css(styles.activatePassImg1)}
        />

        <div style={{ marginLeft: 16 }}>
          <h5 className={css(styles.activatePassHeading)}>
            Activate Perfect Pass™
          </h5>
          <p className={css(styles.activatePassPara)}>
            Skip the line. Stay in the loop.
          </p>
        </div>
      </div>

      <div>
        <img
          src={Images.ActivatePass3}
          className={css(styles.activatePassImg3)}
        />

        <img
          src={Images.ActivatePass2}
          className={css(styles.activatePassImg2)}
        />
      </div>
    </a>
  );

  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <BarLoader sizeUnit={"px"} size={150} color={"#333240"} />
        </div>
      )}

      {!isLoading && (
        <div className={css(styles.container)}>
          <div>
            <img
              src={pageDetails?.imagePreview}
              className={css(styles.backgroundImage)}
            />
            <div className={css(styles.backgroundImageBlur)}></div>
          </div>

          <HeroSection pageDetails={pageDetails} />

          <ContactLinks pageDetails={pageDetails} />

          <div className={css(styles.linkCardView)}>
            {pageDetails?.links.map((item) => {
              return (
                <LinkCard
                  id={item?.id}
                  heading={item?.title}
                  description={item?.description}
                  image={item?.image}
                  actionButtonText={item?.actionTitle}
                  actionButtonUrl={item?.link}
                  linkHeight={item?.linkHeight}
                  cardViewType={
                    item?.viewType ?? LINK_CARD_VIEW_TYPE.WITHOUT_THUMBNAIL
                  }
                  onPressCard={onPressCard}
                />
              );
            })}
          </div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.dymedrop.com");
            }}
            className={css(styles.logoView)}>
            <img src={Images.Logo} />
          </div>

          {pageDetails.passenable &&
            pageDetails.activations?.length > 0 &&
            activeTagSec()}
        </div>
      )}
    </>
  );
}

LandingPage.propTypes = { pageDetails: PropTypes.object };

LandingPage.defaultProps = { pageDetails: {} };

const mapStateToProps = ({ pages }) => ({
  pageDetails: pages.pageDetails,
});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);
