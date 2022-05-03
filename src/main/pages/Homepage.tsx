import { styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditTask, getTaskList } from "../../store/actions/task";
import TaskCard from "../components/TaskCard";
import Form from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

const Page = styled("div")({
  height: "90%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  flexWrap: "wrap",
  borderRadius: 1,
});

const TableBox = styled("div")({
  backgroundColor: "white",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5%",
  width: "70%",
  height: "78%",
});

const Homepage = () => {
  const tasks = useSelector((store: any) => store.task.all);
  const dispatch: any = useDispatch();
  const onFetch = () => {
    dispatch(getTaskList());
  };
  useEffect(() => {
    onFetch();
  }, []);

  const onCloseForm = () => {
    dispatch(closeEditTask());
  }

  return (
    <Page>
      {/* {tasks.map((task: any) => {
        return <TaskCard title={"task"} detail="test"></TaskCard>;
      })} */}
      <TableBox>
        <TaskTable data={tasks}></TaskTable>
      </TableBox>
      <Form onCloseForm={onCloseForm}></Form>
    </Page>
  );
};

export default Homepage;
