import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  newTask,
  getTaskList,
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
    // {
    //   field: "action",
    //   headerName: "Action",
    //   sortable: false,
    //   width: 220,
    //   renderCell: (record: any) => {
    //     return <></>;
    //   },
    // },
  ];

  //   const onEdit = (id: number) => {
  //     dispatch(editTask(id));
  //   };

  //   const onDelete = (id: number) => {
  //     dispatch(deleteTask(id)).then(() => {
  //       dispatch(getTaskList());
  //     });
  //   };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={props?.data ?? []}
        columns={columns}
        pageSize={9}
        // rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>
  );
};

export default Table;
