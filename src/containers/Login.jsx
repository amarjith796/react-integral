import { userLogin } from "../actions/usersactions";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Login from "../components/Login/Login";

const usersSelector = createSelector(state => state.users, users => users);

const mapStateToProps = createSelector(usersSelector, users => ({
  users
}));

const mapActionsToProps = dispatch => {
  return {
    userLogin: (email, password) => {
      dispatch(userLogin(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
