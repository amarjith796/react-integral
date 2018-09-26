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
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import CustomizedSnackbars from "../AlertMessages/Error";

class Login extends Component {
  state = { isloggedIn: false };

  handleLogin = e => {
    e.preventDefault();
    this.props.userLogin(this.email.value, this.password.value);
    this.email.value = "";
    this.password.value = "";
    // localStorage.setItem("isloggedIn", this.state.isloggedIn);
  };
  render() {
    const { classes, users } = this.props;
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
                  Sign in to Sadeed
                </Typography>
                <Typography variant="caption" align="left">
                  Enter your details below
                </Typography>
                {users.login === false ? (
                  <CustomizedSnackbars
                    message="Email Address or Password is incorrect, Please try again."
                    classname="error"
                  />
                ) : null}
                <form
                  className={classes.form}
                  onSubmit={e => this.handleLogin(e)}
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
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password" shrink>
                      Password
                    </InputLabel>
                    <span style={{ textAlign: "right" }}>
                      {" "}
                      <Typography
                        variant="caption"
                        align="right"
                        component={Link}
                        to="/forgotPassword"
                      >
                        Forgot Password?
                      </Typography>
                    </span>
                    <InputBase
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      inputRef={password => (this.password = password)}
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
                      Login
                    </Button>
                  </center>
                  <Typography align="center" className={classes.remember}>
                    <Checkbox color="primary" />
                    Remember Me
                  </Typography>
                </form>
              </Paper>
            </main>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Login;
