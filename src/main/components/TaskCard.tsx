import styled from "@emotion/styled";

const Card = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  width: "20%",
  height: "40%",
  backgroundColor: "pink",
  margin: "2%",
  borderRadius: 7,
});

const TitleDiv = styled("div")({
  width: "100%",
  height: "10%",
  margin: 20,
  fontSize: 30,
  marginLeft: "auto",
  marginRight: "auto",
});

const TaskCard = (props: any) => {
  return (
    <Card>
      <TitleDiv>{props?.title}</TitleDiv>

      {props?.detail}
      {props?.date}
    </Card>
  );
};

export default TaskCard;
