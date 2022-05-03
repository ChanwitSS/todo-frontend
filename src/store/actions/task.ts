import axios from "../../axios";

export const getTaskList = async () => {
  console.log('work')
  const response = await axios.get("/tasks", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    // params: {
    //   ...params,
    // },
  });
  return {
    type: "GET_TASK_LIST_SUCCESS",
    data: response?.data,
  };
};

export const getTask = async (id: number) => {
  const response = await axios.patch(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return {
    type: "GET_TASK_SUCCESS",
    data: response?.data,
  };
}

export const createTask = async (data: any) => {
  const response = await axios.post("/tasks", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return {
    type: "CREATE_TASK_SUCCESS",
    data: response?.data,
  };
};

export const updateTask = async (data: any) => {
  const response = await axios.patch(`/tasks/${data?.id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return {
    type: "UPDATE_TASK_SUCCESS",
    data: response?.data,
  };
};

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return {
    type: "DELETE_TASK_SUCCESS",
    data: response?.data,
  };
};
