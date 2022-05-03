import { styled, experimental_sx as sx } from "@mui/system";
import LoginComponent from "../components/LoginComponent";

const Page = styled("div")({
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  flexWrap: "wrap",
});

const BackgroundBox = styled("div")({
  backgroundImage: "url(/images/todo-bg.jpg)",
  backgroundSize: "100% 100%",
  width: "60%",
  height: "100%",
});

const LoginBox = styled("div")({
  backgroundColor: "#ECECEC",
  width: "40%",
  height: "100%",
});

const Login = () => {
  return (
    <Page>
      <BackgroundBox />
      <LoginBox>
        <LoginComponent></LoginComponent>
      </LoginBox>
    </Page>
  );
};

export default Login;
