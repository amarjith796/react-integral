import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LoginSide from "../LoginSide/LoginSide";
import InputBase from "@material-ui/core/InputBase";
import CustomizedSnackbars from "../AlertMessages/Error";
import { Link, Redirect } from "react-router-dom";

class ForgotPassword extends Component {
  handleForgotPass = e => {
    e.preventDefault();
    this.props.userforgotpassword(this.email.value);
    this.email.value = "";
  };

  render() {
    const { classes, users } = this.props;
    if (users.toemailsuccess) {
      return <Redirect to="/emailsuccess" />;
    }
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
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" align="left">
                  Forgot Password?
                </Typography>
                <Typography variant="caption" align="left">
                  Enter your email address below and we'll get you back on
                  track.
                </Typography>
                {users.usernotfound ? (
                  <CustomizedSnackbars
                    message="Sorry: It Seems this email address is not registered in our database."
                    classname="error"
                  />
                ) : null}
                <form
                  className={classes.form}
                  onSubmit={e => this.handleForgotPass(e)}
                >
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email" shrink>
                      Email Address
                    </InputLabel>
                    <InputBase
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      inputRef={email => (this.email = email)}
                      placeholder="example@sadeed.com"
                      classes={{
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapInput
                      }}
                    />
                  </FormControl>
                  <center>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      className={`${classes.submit} ${classes.btn} ${
                        classes.btnSubmit
                      }`}
                    >
                      Reset Password
                    </Button>
                  </center>
                </form>
                <Typography
                  variant="caption"
                  align="center"
                  component={Link}
                  to="/login"
                  style={{ marginTop: "20px" }}
                >
                  Back to Login
                </Typography>
              </Paper>
            </main>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ForgotPassword;
