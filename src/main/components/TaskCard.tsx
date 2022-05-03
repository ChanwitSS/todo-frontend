import styled from "@emotion/styled";

const Card = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  width: "20%",
  height: "40%",
  backgroundColor: "pink",
  margin: "2%",
});

const TaskCard = (props: any) => {
  return (
    <Card>
      {props?.title}
      {props?.detail}
      {props?.date}
    </Card>
  );
};

export default TaskCard;
