import axios from "axios";

//Sign Up User
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";
export const RESET_USER = "RESET_USER";

const ROOT_URL = "https://fullstack-app.herokuapp.com/";

export function signupUser(user) {
  const request = axios.post(`${ROOT_URL}/users`);

  return {
    type: SIGNUP_USER,
    payload: user
  };
}

export function signupUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signupUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}

export function resetUser() {
  return {
    type: RESET_USER
  };
}
