import React, { Component } from "react";
import AppRouter from "../routes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    );
  }
}

export default App;
