import { styled } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { getTaskList } from "../../store/actions/task";
import TaskCard from "../components/TaskCard";

const Page = styled("div")({
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  flexWrap: "wrap",
});

const Homepage = () => {
  const tasks = useSelector((store: any) => store.task.all);
  const onFetch = async () => {
    await store.dispatch(getTaskList());
  };
  useEffect(() => {
    onFetch();
  }, [tasks]);

  return (
    <Page>
      {tasks.map((task: any) => {
        return <TaskCard title={"task"} detail="test"></TaskCard>;
      })}
    </Page>
  );
};

export default Homepage;
