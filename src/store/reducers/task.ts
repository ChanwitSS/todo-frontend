export const taskAction = {
  GET_TASK_LIST_LOADING: "GET_TASK_LIST_LOADING",
  GET_TASK_LIST_SUCCESS: "GET_TASK_LIST_SUCCESS",
  GET_TASK_LIST_FAILED: "GET_TASK_LIST_FAILED",

  GET_TASK_LOADING: "GET_TASK_LOADING",
  GET_TASK_SUCCESS: "GET_TASK_SUCCESS",
  GET_TASK_FAILED: "GET_TASK_FAILED",

  CREATE_TASK_LOADING: "CREATE_TASK_LOADING",
  CREATE_TASK_SUCCESS: "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAILED: "CREATE_TASK_FAILED",

  EDIT_TASK_LOADING: "EDIT_TASK_LOADING",
  EDIT_TASK_SUCCESS: "EDIT_TASK_SUCCESS",
  EDIT_TASK_FAILED: "EDIT_TASK_FAILED",

  UPDATE_TASK_LOADING: "UPDATE_TASK_LOADING",
  UPDATE_TASK_SUCCESS: "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILED: "UPDATE_TASK_FAILED",

  DELETE_TASK_LOADING: "DELETE_TASK_LOADING",
  DELETE_TASK_SUCCESS: "DELETE_TASK_SUCCESS",
  DELETE_TASK_FAILED: "DELETE_TASK_FAILED",

  NEW_TASK : "NEW_TASK",
  CLOSE_VIEW_TASK : "CLOSE_VIEW_TASK",
  CLOSE_EDIT_TASK : "CLOSE_EDIT_TASK",
};

// Reducer
const initialState = { all: [], loading: false, count: 0 };
const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case taskAction.GET_TASK_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.GET_TASK_LIST_SUCCESS:
      return {
        ...state,
        all: action.data,
        loading: false,
        count: action.count,
        error: undefined,
      };
    case taskAction.GET_TASK_LIST_FAILED:
      return {
        ...state,
        all: [],
        count: 0,
        loading: false,
        error: action.error,
      };
    case taskAction.NEW_TASK:
      return {
        ...state,
        loading: false,
        form: {},
      };
    case taskAction.CLOSE_VIEW_TASK:
      return {
        ...state,
        GET: undefined,
        error: undefined,
      };
    case taskAction.CLOSE_EDIT_TASK:
      return {
        ...state,
        form: undefined,
        error: undefined,
      };
    case taskAction.CREATE_TASK_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        form: undefined,
        error: undefined,
      };
    case taskAction.CREATE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case taskAction.GET_TASK_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.GET_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        GET: action.data,
        error: undefined,
      };
    case taskAction.GET_TASK_FAILED:
      return {
        ...state,
        loading: false,
        GET: undefined,
        error: undefined,
      };
    case taskAction.EDIT_TASK_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.EDIT_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        form: action.data,
        error: undefined,
      };
    case taskAction.EDIT_TASK_FAILED:
      return {
        ...state,
        loading: false,
        form: undefined,
        error: undefined,
      };
    case taskAction.UPDATE_TASK_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        form: undefined,
        error: undefined,
      };
    case taskAction.UPDATE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case taskAction.DELETE_TASK_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case taskAction.DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    case taskAction.DELETE_TASK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
