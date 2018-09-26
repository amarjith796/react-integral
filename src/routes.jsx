import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./containers/Login";
import ForgotPassword from "./containers/ForgotPassword";
import ForgetPasswordSuccess from "./components/ForgotPassword/ForgetPasswordSuccess";
import OrderPage from "./components/OrderPage/OrderPage";
import SignUp from "./containers/SignUp";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const TabContainer = props => {
  return (
    <Typography
      component="div"
      style={{ padding: 0, position: "relative", top: "65px" }}
    >
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const Home = ({ component: Component, ...rest }) => {
  if (localStorage.getItem("isloggedIn") === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <TabContainer>
        <Component {...rest} />
      </TabContainer>
    </div>
  );
};

const routes = [
  {
    path: "/",
    value: 0,
    main: () => {
      return <Home name="Search By Id" />;
    }
  },
  {
    path: "/searchById",
    value: 0,
    main: () => {
      return <Home name="Search By Id" component={OrderPage} />;
    }
  },
  {
    path: "/landscape",
    value: 1,
    main: () => {
      return <Home name="Landscape" />;
    }
  },
  {
    path: "/realtime",
    value: 2,
    main: () => {
      return <Home name="Realtime" />;
    }
  },
  {
    path: "/externaltradeAnalysis",
    value: 3,
    main: () => {
      return <Home name="External Trade Analysis" />;
    }
  }
];
class AppRouter extends React.Component {
  state = {
    loggedIn: localStorage.getItem("isloggedIn")
  };
  appLogin = log => {
    this.setState({
      loggedIn: log
    });
  };
  render() {
    let class_props = this.props;
    let currentpage = routes.filter(obj => {
      return obj.path === window.location.pathname ? obj.value : 0;
    });
    return (
      <Router>
        <div>
          {localStorage.getItem("isloggedIn") ? (
            <NavBar
              value={currentpage.length > 0 ? currentpage[0].value : 0}
              appLogin={this.appLogin}
            />
          ) : null}

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
              path="/login"
              exact
              strict
              render={props =>
                !this.state.loggedIn ? (
                  <Login {...class_props} {...props} appLogin={this.appLogin} />
                ) : (
                  <Redirect to="/searchById" />
                )
              }
            />
            <Route
              path="/signup"
              exact
              strict
              render={props =>
                !this.state.loggedIn ? (
                  <SignUp {...class_props} {...props} />
                ) : (
                  <Redirect to="/searchById" />
                )
              }
            />
            <Route
              path="/forgotPassword"
              exact
              strict
              render={props =>
                !this.state.loggedIn ? (
                  <ForgotPassword {...class_props} {...props} />
                ) : (
                  <Redirect to="/searchById" />
                )
              }
            />
            <Route
              path="/emailsuccess"
              exact
              strict
              render={props =>
                !this.state.loggedIn ? (
                  <ForgetPasswordSuccess {...class_props} {...props} />
                ) : (
                  <Redirect to="/searchById" />
                )
              }
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
}

export default AppRouter;
