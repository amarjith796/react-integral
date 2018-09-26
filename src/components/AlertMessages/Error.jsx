import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  error: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: "#fff3cd",
    color: "black",
    borderColor: "#fff3cd"
  },
  success: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: "#d4edda",
    color: "black",
    borderColor: "#d4edda"
  }
});
const Message = props => (
  <Typography variant="caption" align="left">
    {props.msg}
  </Typography>
);
function CustomizedSnackbars(props) {
  const { classes, message, classname } = props;
  return (
    <SnackbarContent
      className={`${classes[`${classname}`]}`}
      message={<Message msg={message} />}
    />
  );
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string,
  classname: PropTypes.string
};

export default withStyles(styles)(CustomizedSnackbars);
