import axios from "../../axios";
import { taskAction } from "../reducers/task";

export const getTaskListLoading = () => {
  return {
    type: taskAction.GET_TASK_LIST_LOADING,
  };
};

export const getTaskListSuccess = (data: any, count: any) => {
  return {
    type: taskAction.GET_TASK_LIST_SUCCESS,
    data,
    count,
  };
};

export const getTaskListFailed = (error: any) => {
  return {
    type: taskAction.GET_TASK_LIST_FAILED,
    error,
  };
};

export const getTaskList = () => {
  return (dispatch: any) => {
    dispatch(getTaskListLoading());
    return axios
      .get(`/tasks`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(getTaskListSuccess(response?.data, response?.data?.count));
      })
      .catch((error) => {
        dispatch(getTaskListFailed(error?.response?.data?.message));
      });
  };
};

// VIEW
// export const viewTaskLoading = () => {
//   return {
//     type: taskAction.VIEW_TASK_LOADING,
//   };
// };

// export const viewTaskSuccess = (data) => {
//   return {
//     type: taskAction.VIEW_TASK_SUCCESS,
//     data,
//   };
// };

// export const viewTaskFailed = (error) => {
//   return {
//     type: taskAction.VIEW_TASK_FAILED,
//     error,
//   };
// };

// export const viewTask = (id) => {
//   return (dispatch) => {
//     dispatch(viewTaskLoading());
//     return axios
//       .get(`${Api.GET_TASK}/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem(Key.TOKEN)}`,
//         },
//       })
//       .then((response) => {
//         dispatch(viewTaskSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(viewTaskFailed(error?.response?.data?.message));
//       });
//   };
// };

// CREATE
export const createTaskLoading = () => {
  return {
    type: taskAction.CREATE_TASK_LOADING,
  };
};

export const createTaskSuccess = (data: any) => {
  return {
    type: taskAction.CREATE_TASK_SUCCESS,
    data,
  };
};

export const createTaskFailed = (error: any) => {
  return {
    type: taskAction.CREATE_TASK_FAILED,
    error,
  };
};

export const createTask = (data: any) => {
  return (dispatch: any) => {
    dispatch(createTaskLoading());
    return axios
      .post(`/tasks`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(createTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createTaskFailed(error?.response?.data?.message));
      });
  };
};

export const editTaskLoading = () => {
  return {
    type: taskAction.EDIT_TASK_LOADING,
  };
};

export const editTaskSuccess = (data: any) => {
  return {
    type: taskAction.EDIT_TASK_SUCCESS,
    data,
  };
};

export const editTaskFailed = (error: any) => {
  return {
    type: taskAction.EDIT_TASK_FAILED,
    error,
  };
};

export const editTask = (id: any) => {
  return (dispatch: any) => {
    dispatch(editTaskLoading());
    return axios
      .get(`tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(editTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editTaskFailed(error?.response?.data?.message));
      });
  };
};

// UPDATE
export const updateTaskLoading = () => {
  return {
    type: taskAction.UPDATE_TASK_LOADING,
  };
};

export const updateTaskSuccess = (data: any) => {
  return {
    type: taskAction.UPDATE_TASK_SUCCESS,
    data,
  };
};

export const updateTaskFailed = (error: any) => {
  return {
    type: taskAction.UPDATE_TASK_FAILED,
    error,
  };
};

export const updateTask = (id: number, data: any) => {
  return (dispatch: any) => {
    dispatch(updateTaskLoading());
    return axios
      .patch(`tasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(updateTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateTaskFailed(error?.response?.data?.message));
      });
  };
};

// DELETE
export const deleteTaskLoading = () => {
  return {
    type: taskAction.DELETE_TASK_LOADING,
  };
};

export const deleteTaskSuccess = (data: any) => {
  return {
    type: taskAction.DELETE_TASK_SUCCESS,
    data,
  };
};

export const deleteTaskFailed = (error: any) => {
  return {
    type: taskAction.DELETE_TASK_FAILED,
    error,
  };
};

export const deleteTask = (id: number) => {
  return (dispatch: any) => {
    dispatch(deleteTaskLoading());
    return axios
      .delete(`tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(deleteTaskSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteTaskFailed(error?.response?.data?.message));
      });
  };
};

export const newTask = () => {
  return {
    type: taskAction.NEW_TASK,
  };
};

export const closeViewTask = () => {
  return {
    type: taskAction.CLOSE_VIEW_TASK,
  };
};

export const closeEditTask = () => {
  return {
    type: taskAction.CLOSE_EDIT_TASK,
  };
};
