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
const Message = props => (
  <Typography variant="caption" align="left">
    <b>Sorry: </b> {props.msg}
  </Typography>
);
function CustomizedSnackbars(props) {
  const { classes, message } = props;
  return (
    <SnackbarContent
      className={classes.snackbar}
      message={<Message msg={message} />}
    />
  );
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string
};

export default withStyles(styles)(CustomizedSnackbars);
