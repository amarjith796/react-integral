import React, { Component } from "react";
import AppRouter from "../routes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

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
  remember: {
    marginTop: theme.spacing.unit * 20
  },
  terms: {
    marginTop: theme.spacing.unit * 2
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 100
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppRouter {...this.props} />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
