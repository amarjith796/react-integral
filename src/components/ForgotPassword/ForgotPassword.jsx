import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LoginSide from "../LoginSide/LoginSide";
import InputBase from "@material-ui/core/InputBase";
import CustomizedSnackbars from "../AlertMessages/Error";
import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit * 4}px`
  },
  subhead: {
    marginTop: theme.spacing.unit * 2,
    color: "dimgray",
    fontWeight: 400,
    textAlign: "right",
    marginRight: "30px"
  },
  btn: {
    borderRadius: "20px"
  },
  btnSubmit: {
    marginTop: theme.spacing.unit * 4,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 1}px ${theme.spacing.unit * 5}px`
  },
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#2196f3",
      boxShadow: "0 0 0 0.2px rgba(0, 0, 0, 0.87)"
    }
  }
});
class ForgotPassword extends Component {
  state = {
    showError: true
  };

  onErrorClose = () => {
    this.setState({
      showError: false
    });
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
                <CustomizedSnackbars />
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
                <Typography
                  variant="caption"
                  align="center"
                  component={Link}
                  to="/emailsuccess"
                  style={{ marginTop: "20px" }}
                >
                  Already Reseted
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

export default withStyles(styles)(ForgotPassword);
