import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="statics" style={{ backgroundColor: "#0E5064" }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          AroundU
        </Typography>

        <Box display="flex" justifyContent="center">
          <FacebookShareButton
            url="https://aroundU.netlify.app/"
            qoute={"Explore Restaurants, Hotels & Attractions around U"}
            hashtag="#Travel"
          >
            <FacebookIcon
              size={36}
              style={{ margin: "5px", borderRadius: "50%" }}
            />
          </FacebookShareButton>

          <TwitterShareButton
            url="https://aroundU.netlify.app/"
            title={"Explore Restaurants, Hotels & Attractions around U"}
            hashtag="#Travel"
          >
            <TwitterIcon
              size={36}
              style={{ margin: "5px", borderRadius: "50%" }}
            />
          </TwitterShareButton>

          <LinkedinShareButton
            url="https://aroundU.netlify.app/"
            title={"Explore Restaurants, Hotels & Attractions around U"}
            summary={"Google Maps Travel Companion Application"}
            source="aroundU"
          >
            <LinkedinIcon
              size={36}
              style={{ margin: "5px", borderRadius: "50%" }}
            />
          </LinkedinShareButton>

          <WhatsappShareButton
            url="https://aroundU.netlify.app/"
            title={"Explore Restaurants, Hotels & Attractions around U"}
            hashtag="#Travel"
          >
            <WhatsappIcon
              size={36}
              style={{ margin: "5px", borderRadius: "50%" }}
            />
          </WhatsappShareButton>
        </Box>
        <Box display="block">
          <Typography variant="subtitle2" className={classes.subtitle}>
            &copy;
            {new Date().getFullYear()}&nbsp;| All Rights Reserved
          </Typography>
          <a
            href="https://www.dynamic-juice.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className={classes.logoFooter}
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1619252612/dyji4_va32ll.png"
              alt="LogoFooter"
            />
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
