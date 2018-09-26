import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LoginSide from "../LoginSide/LoginSide";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { Link } from "react-router-dom";
class ForgetPasswordSuccess extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Grid container spacing={24}>
          <Grid item xs={5} md={4}>
            <LoginSide />
          </Grid>
          <Grid item xs={7} md={8}>
            <Typography className={classes.subhead}>
              Don't have an account? {"    "}
              <Button
                variant="outlined"
                className={classes.btn}
                component={Link}
                to="/signup"
              >
                Get Started
              </Button>
            </Typography>
            <main className={classes.layout}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ alignItems: "center" }}
              >
                <EmailOutlinedIcon className={classes.icon} />
                <Typography variant="headline" align="left">
                  Check your email
                </Typography>
                <Typography variant="caption" align="left">
                  We have sent an email to <b>example@sadeed.com</b>
                  <br />
                  Click the link in the email to reset the password
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  style={{ marginTop: "50px" }}
                >
                  If you didn't receive anything{" "}
                  <Link to="/forgotPassword">
                    <b>Click here</b>
                  </Link>
                </Typography>
              </Paper>
            </main>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ForgetPasswordSuccess.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ForgetPasswordSuccess;
