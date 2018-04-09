import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import IconButton from "material-ui/IconButton";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";

import avatar from "../../images/jpg/avatar.jpg";
import config from "../../../content/meta/config";

const styles = theme => ({
  header: {
    lineHeight: 1,
    position: "relative"
  },
  avatarLink: {
    willChange: "left, top",
    float: "left",
    display: "block",
    position: "relative",
    margin: "0 12px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 20px 0 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      position: "absolute",
      top: "10px",
      left: "50%",
      marginLeft: "-50px",
      transition: "all .5s",
      transitionTimingFunction: "ease",
      ".navigator-in-transition-from.navigator-is-opened &": {
        left: "50%"
      },
      ".is-aside.open &": {
        left: "8%",
        top: "0"
      }
    }
  },
  avatar: {
    width: "80px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    height: "36px",
    transition: "all .3s",
    transitionTimingFunction: "ease",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "96px",
      height: "26px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "96px",
      height: "26px"
    }
  },
  title: {
    willChange: "transform, left, top",
    fontSize: `${theme.info.fonts.boxTitleSize}em`,
    margin: 0,
    float: "left",
    transitionTimingFunction: "ease",
    "& small": {
      display: "block",
      fontSize: ".5em",
      marginTop: ".3em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
      position: "absolute",
      top: "85px",
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%)",
      transition: "all .5s",
      ".is-aside.open &": {
        left: "65%",
        top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
        textAlign: "left"
      }
    }
  },
  expand: {
    position: "absolute",
    top: "30px",
    right: "-25px",
    display: "none",
    color: theme.info.colors.text,
    ".is-aside.open &": {
      display: "block"
    }
  }
});

const InfoHeader = props => {
  const { classes, avatarOnClick, expandOnClick } = props;

  return (
    <header className={classes.header}>
      <Link className={classes.avatarLink} onClick=""  to="/contact" title="back to Home page">
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
      </Link>
      <h1 className={classes.title}>
        {config.infoTitle.replace(/ /g, "\u00a0")}
        <small>{config.infoTitleNote}</small>
      </h1>
      <IconButton
        aria-label="Expand the box"
        className={classes.expand}
        onClick={expandOnClick}
        title="Expand the box"
      >
        <ExpandMoreIcon />
      </IconButton>
    </header>
  );
};

InfoHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarOnClick: PropTypes.func.isRequired,
  expandOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoHeader);
