import { userSignUp } from "../actions/usersactions";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import SignUp from "../components/SignUp/SignUp";

const usersSelector = createSelector(state => state.users, users => users);

const mapStateToProps = createSelector(usersSelector, users => ({
  users
}));

const mapActionsToProps = dispatch => {
  return {
    userSignUp: (name, email, password) => {
      dispatch(userSignUp(name, email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SignUp);
