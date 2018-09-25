import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/img/favicon.ico";
import "./Login.css";

const styles = theme => ({
  bgimg1: {
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: window.innerHeight
  },
  subhead: {
    color: "dimgray",
    fontWeight: 800
  }
});
const LoginSide = props => {
  const { classes } = props;

  return (
    <div className={`${classes.bgimg1} bg-img1`}>
      <div className="caption">
        <span className="border">
          <img
            src={logo}
            height="36px"
            width="36px"
            style={{ position: "relative", top: "10px" }}
          />
          {"  "}
          Sadeed.io
        </span>
      </div>
      <div className="caption-body">
        <span className="border">WELCOME TO SADEED</span>
        <br />
        <br />
        <Typography className={classes.subhead}>
          Where you can create your own social media bots.
        </Typography>
      </div>
    </div>
  );
};

LoginSide.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginSide);
