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
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
              Already have an account? {"    "}
              <Button
                variant="outlined"
                className={classes.btn}
                component={Link}
                to="/login"
              >
                Sign In
              </Button>
            </Typography>
            <main className={classes.layout}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" align="left">
                  Hello There!
                </Typography>
                <Typography variant="caption" align="left">
                  Sign up to create your free account.
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={e => this.onFormSubmit(e)}
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
                    <InputLabel htmlFor="name" shrink>
                      Name
                    </InputLabel>
                    <InputBase
                      id="name"
                      name="name"
                      autoComplete="name"
                      inputRef={name => (this.name = name)}
                      placeholder="Example"
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

                  <Typography align="center" className={classes.terms}>
                    By clicking "Continue" ! I agreed to Sadeed{" "}
                    <a href="#" onClick={this.handleOpen}>
                      Terms and Conditions
                    </a>
                  </Typography>
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
                </form>
              </Paper>
            </main>
          </Grid>
        </Grid>
      </div>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SignUp;
