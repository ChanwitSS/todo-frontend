import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  editTask,
  newTask,
  getTaskList,
} from "../../store/actions/task";
import { useNavigate } from "react-router-dom";

const Table = (props: any) => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const task: any = useSelector((store: any) => store.task.edit);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, sortable: false },
    { field: "name", headerName: "Title", width: 200, sortable: false },
    { field: "detail", headerName: "Detail", width: 450, sortable: false },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 200,
      sortable: false,
    },
    { field: "endDate", headerName: "End Date", width: 200, sortable: false },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 220,
      renderCell: (record: any) => {
        return (
          <>
            <Button size="small" onClick={() => onEdit(record?.row?.id)}>
              Edit
            </Button>
            <Button size="small" onClick={() => onDelete(record?.row?.id)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const onCreate = () => {
    dispatch(newTask());
  };

  const onEdit = (id: number) => {
    dispatch(editTask(id));
  };

  const onDelete = (id: number) => {
    dispatch(deleteTask(id)).then(() => {
      dispatch(getTaskList())
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "10%" }}>
        <div style={{ float: "right", marginRight: "2%", paddingTop: "1.5%" }}>
          <Button size="small" onClick={onCreate}>
            Create Task
          </Button>
        </div>
      </div>
      <div style={{ height: "90%" }}>
        <DataGrid
          rows={props?.data ?? []}
          columns={columns}
          pageSize={9}
          // rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
  );
};

export default Table;
