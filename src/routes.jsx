import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./containers/Login";
import ForgotPassword from "./containers/ForgotPassword";
import ForgetPasswordSuccess from "./components/ForgotPassword/ForgetPasswordSuccess";
import SignUp from "./components/SignUp/SignUp";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
const routes = [
  {
    path: "/",
    value: 0,
    main: () => {
      return <TabContainer>Search By Id</TabContainer>;
    }
  },
  {
    path: "/searchById",
    value: 0,
    main: () => {
      return <TabContainer>Search By Id</TabContainer>;
    }
  },
  {
    path: "/landscape",
    value: 1,
    main: () => {
      return <TabContainer>Landscape</TabContainer>;
    }
  },
  {
    path: "/realtime",
    value: 2,
    main: () => {
      return <TabContainer>Realtime</TabContainer>;
    }
  },
  {
    path: "/externaltradeAnalysis",
    value: 3,
    main: () => {
      return <TabContainer>External Trade Analysis</TabContainer>;
    }
  }
];

const AppRouter = props => {
  let current_page = routes.filter(obj => {
    return obj.path === window.location.pathname ? obj.value : 0;
  });
  let class_props = props;
  if (localStorage.getItem("isloggedIn") === null) {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              strict
              render={props => <Login {...class_props} {...props} />}
            />
            <Route
              path="/login"
              exact
              strict
              render={props => <Login {...class_props} {...props} />}
            />
            <Route
              path="/signup"
              exact
              strict
              render={props => <SignUp {...class_props} {...props} />}
            />
            <Route
              path="/forgotPassword"
              exact
              strict
              render={props => <ForgotPassword {...class_props} {...props} />}
            />
            <Route
              path="/emailsuccess"
              exact
              strict
              render={props => (
                <ForgetPasswordSuccess {...class_props} {...props} />
              )}
            />
            <Route
              exact
              strict
              render={() => {
                return "No Page Found";
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div>
        <NavBar value={current_page.length > 0 ? current_page[0].value : 0} />
        <div style={{ position: "absolute", top: "70px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                strict
                component={route.main}
              />
            ))}
            <Route
              exact
              strict
              render={() => {
                return "No Page Found";
              }}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
