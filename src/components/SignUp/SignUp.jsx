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
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

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
  },
  terms: {
    marginTop: theme.spacing.unit * 2
  }
});
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

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
