import { userforgotpassword } from "../actions/usersactions";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

const usersSelector = createSelector(state => state.users, users => users);

const mapStateToProps = createSelector(usersSelector, users => ({
  users
}));

const mapActionsToProps = dispatch => {
  return {
    userforgotpassword: email => {
      dispatch(userforgotpassword(email));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ForgotPassword);
