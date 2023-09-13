// @flow

import React, { useEffect, useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import styles from "./styles";
import { Images } from "../../theme";
import { CONTACT_OPTION_TYPES } from "../../constants";

function ContactLinks(props) {
  const { pageDetails } = props;

  const [email, setEmail] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.EMAIL] ?? ""
  );

  const [facebook, setFacebook] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.FB] ?? ""
  );

  const [instagram, setInstagram] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.INSTA] ?? ""
  );

  const [linkedin, setLinkedin] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.LINKEDIN] ?? ""
  );

  const [medium, setMedium] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.MEDIUM] ?? ""
  );

  const [phone, setPhone] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.PHONE] ?? ""
  );

  const [pinterest, setPinterest] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.PINTEREST] ?? ""
  );

  const [reddit, setReddit] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.REDDIT] ?? ""
  );

  const [snapChat, setSnapChat] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.SNAPCHAT] ?? ""
  );

  const [tiktok, setTiktok] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.TIKTOK] ?? ""
  );

  const [twitch, setTwitch] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.TWITCH] ?? ""
  );

  const [twitter, setTwitter] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.TWITTER] ?? ""
  );

  const [youtube, setYoutube] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.YOUTUBE] ?? ""
  );

  const [hudl, setHudl] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.HUDL] ?? ""
  );

  const [maxpreps, setMaxpreps] = useState(
    () => pageDetails?.contactOptions?.[CONTACT_OPTION_TYPES?.MAXPREPS] ?? ""
  );

  const [contactBtnsToShow, setContactBtnsToShow] = useState(() => []);

  let CONTACT_BUTTON_OPTIONS = [
    {
      contactType: CONTACT_OPTION_TYPES.HUDL,

      icon: Images.HudlIcon,
      value: hudl,
    },
    {
      contactType: CONTACT_OPTION_TYPES.MAXPREPS,

      icon: Images.MaxPrepsIcon,
      value: maxpreps,
    },

    {
      contactType: CONTACT_OPTION_TYPES.EMAIL,
      icon: Images.EmailIcon,
      value: email,
    },

    {
      contactType: CONTACT_OPTION_TYPES.FB,

      icon: Images.FacebookIcon,
      value: facebook,
    },
    {
      contactType: CONTACT_OPTION_TYPES.INSTA,

      icon: Images.InstaIcon,
      value: instagram,
    },
    {
      contactType: CONTACT_OPTION_TYPES.LINKEDIN,

      icon: Images.LinkedinIcon,
      value: linkedin,
    },
    {
      contactType: CONTACT_OPTION_TYPES.MEDIUM,

      icon: Images.MediumIcon,
      value: medium,
    },
    {
      contactType: CONTACT_OPTION_TYPES.PHONE,

      icon: Images.PhoneIcon,
      value: phone,
    },
    {
      contactType: CONTACT_OPTION_TYPES.PINTEREST,

      icon: Images.PinterestIcon,
      value: pinterest,
    },
    {
      contactType: CONTACT_OPTION_TYPES.REDDIT,

      icon: Images.RedditIcon,
      value: reddit,
    },
    {
      contactType: CONTACT_OPTION_TYPES.SNAPCHAT,

      icon: Images.SnapChatIcon,
      value: snapChat,
    },
    {
      contactType: CONTACT_OPTION_TYPES.TIKTOK,

      icon: Images.TikTokIcon,
      value: tiktok,
    },
    {
      contactType: CONTACT_OPTION_TYPES.TWITCH,

      icon: Images.TwitchIcon,
      value: twitch,
    },
    {
      contactType: CONTACT_OPTION_TYPES.TWITTER,

      icon: Images.TwitterIcon,

      value: twitter,
    },
    {
      contactType: CONTACT_OPTION_TYPES.YOUTUBE,

      icon: Images.YoutubeIcon,

      value: youtube,
    },
  ];

  useEffect(() => {
    let filteredContactBtns = CONTACT_BUTTON_OPTIONS.filter((item) => {
      return !_.isEmpty(item.value);
    });

    setContactBtnsToShow(filteredContactBtns);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css(styles.container)}>
        {/* <img
          src={Images.FacebookIcon}
          className={css(styles.img)}
          style={{ marginLeft: 15 }}
        /> */}

        {contactBtnsToShow.map((item) => {
          return (
            <>
              {item.contactType === CONTACT_OPTION_TYPES.EMAIL ? (
                <a href={`mailto:${item.value}`}>
                  <img src={item.icon} className={css(styles.img)} />
                </a>
              ) : item.contactType === CONTACT_OPTION_TYPES.PHONE ? (
                <a href={`tel:${item.value}`}>
                  <img src={item.icon} className={css(styles.img)} />
                </a>
              ) : (
                <a href={item.value} target="_blank">
                  <img src={item.icon} className={css(styles.img)} />
                </a>
              )}
            </>
          );
        })}

        {/* <img
          src={Images.PinterestIcon}
          className={css(styles.img)}
          style={{ marginRight: 15 }}
        /> */}
      </div>
    </div>
  );
}

ContactLinks.propTypes = { pageDetails: PropTypes.object };

ContactLinks.defaultProps = { pageDetails: {} };

export default ContactLinks;
