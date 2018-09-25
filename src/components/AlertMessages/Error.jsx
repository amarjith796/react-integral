import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  snackbar: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: "#fff3cd",
    color: "black",
    borderColor: "#fff3cd"
  }
});
const message = (
  <Typography variant="caption" align="left">
    <b>Sorry: </b>
    It Seems this email address is not registered in our database.
  </Typography>
);
function CustomizedSnackbars(props) {
  const { classes } = props;
  return <SnackbarContent className={classes.snackbar} message={message} />;
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedSnackbars);
