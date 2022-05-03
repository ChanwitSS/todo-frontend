
import axios from "../../axios";
import { authAction } from "../reducers/auth";

// Action
export const loginLoading = () => {
  return {
    type: authAction.LOGIN_LOADING,
  };
};

export const loginSuccess = (data: any) => {
  localStorage.setItem('token', data);
  return {
    type: authAction.LOGIN_SUCCESS,
    data,
  };
};

export const loginFailed = (error: any) => {
  return {
    type: authAction.LOGIN_FAILED,
    error,
  };
};

export const login = (data: any) => {
  return (dispatch: any) => {
    dispatch(loginLoading());
    axios
      .post(`/auth/login`, data)
      .then((response) => {
        dispatch(loginSuccess(response.data.token));
      })
      .catch((error) => {
        dispatch(loginFailed(error?.response?.data?.message));
      });
  };
};

export const alreadyLogin = () => {
  return {
    type: authAction.ALREADY_LOGIN,
  };
};

export const notLogin = () => {
  return {
    type: authAction.NOT_LOGIN,
  };
};