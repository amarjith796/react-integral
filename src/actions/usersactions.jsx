export const USER_LOGIN = "USER_LOGIN";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const SIGN_UP = "SIGN_UP";
export const userLogin = (email, password) => {
  return {
    type: USER_LOGIN,
    payload: { email: email, password: password }
  };
};

export const userforgotpassword = email => {
  return {
    type: FORGOT_PASSWORD,
    payload: { email: email }
  };
};
export const userSignUp = (name, email, password) => {
  return {
    type: SIGN_UP,
    payload: { name: name, email: email, password: password }
  };
};
