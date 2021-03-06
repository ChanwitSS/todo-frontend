import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  newTask,
  getIncomingTaskList,
} from "../../store/actions/task";

const Table = (props: any) => {
  const dispatch: any = useDispatch();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Title", width: 200 },
    { field: "detail", headerName: "Detail", width: 450 },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 200,
      renderCell: (record: any) => {
        let datetime = record?.row?.startDate;
        datetime = datetime ? new Date(datetime) : null;
        if (datetime) {
          return datetime.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          });
        } else {
          return "-";
        }
      },
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 200,
      renderCell: (record: any) => {
        let datetime = record?.row?.endDate;
        datetime = datetime ? new Date(datetime) : null;
        if (datetime) {
          return datetime.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          });
        } else {
          return "-";
        }
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 220,
      renderCell: (record: any) => {
        return (
          <>
            <Button
              style={{ backgroundColor: "#d0efff" }}
              size="small"
              onClick={() => onEdit(record?.row?.id)}
            >
              Edit
            </Button>
            <Button
              style={{ marginLeft: "5%", backgroundColor: "#d0efff" }}
              size="small"
              onClick={() => onDelete(record?.row?.id)}
            >
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
      dispatch(getIncomingTaskList());
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "10%" }}>
        <div style={{ float: "right", marginRight: "2%", paddingTop: "1.5%" }}>
          <Button
            size="small"
            style={{ backgroundColor: "#d0efff" }}
            onClick={onCreate}
          >
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
