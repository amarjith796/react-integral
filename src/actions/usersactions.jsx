export const USER_LOGIN = "USER_LOGIN";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
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
