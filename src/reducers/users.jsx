import { USER_LOGIN, FORGOT_PASSWORD } from "../actions/usersactions";

const initial_state = {
  users: [
    {
      name: "John",
      email: "john@sadeed.com",
      password: "john@123"
    }
  ],
  login: null,
  usernotfound: false,
  toemailsuccess: false
};

const usersReducers = (state = initial_state, { type, payload }) => {
  let users;
  switch (type) {
    case USER_LOGIN:
      users = { ...state };
      let userfound = users.users.some(d => {
        return d.email === payload.email && d.password === payload.password;
      });
      return {
        ...state,
        login: userfound
      };
    case FORGOT_PASSWORD:
      users = { ...state };
      let usernotindata = users.users.some(d => {
        return d.email !== payload.email;
      });
      return {
        ...state,
        usernotfound: usernotindata,
        toemailsuccess: !usernotindata
      };
    default:
      return state;
  }
};

export default usersReducers;
