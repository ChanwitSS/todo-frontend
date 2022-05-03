export const authAction = {
  LOGIN_LOADING: "LOGIN_LOADING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  ALREADY_LOGIN: "ALREADY_LOGIN",
  NOT_LOGIN: "NOT_LOGIN",
  LOGOUT: "LOGOUT",
};

// Reducer
const initialState = {};
const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case authAction.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
        isAuthenticate: false,
      };
    case authAction.LOGIN_SUCCESS:
      /////
      return {
        ...state,
        loading: false,
        error: undefined,
        isAuthenticate: true,
        user: action.data,
      };
    case authAction.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        isAuthenticate: false,
        user: undefined,
      };
    case authAction.ALREADY_LOGIN:
      return {
        error: undefined,
        isAuthenticate: true,
      };
    case authAction.NOT_LOGIN:
      return {
        error: undefined,
        isAuthenticate: false,
      };
    case authAction.LOGOUT:
      return {
        error: undefined,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export default reducer;
