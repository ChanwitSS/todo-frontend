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
};

const TaskReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "GET_TASK_LIST_SUCCESS":
      return {
        data: action?.data,
        all: [],
      };
    case "GET_TASK_SUCCESS":
      return {
        view: action?.data,
      };
    case "CREATE_TASK_SUCCESS":
      return {
        data: action?.data,
      };
    case "EDIT_TASK_SUCCESS":
      return {
        view: action?.data,
      };
    case "DELETE_TASK_SUCCESS":
      return {
        view: action?.data,
      };
    default:
      return {
        data: null,
        all: [],
      };
  }
};

export default TaskReducer;
