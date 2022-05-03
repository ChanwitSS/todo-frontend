import { Button, makeStyles, styled } from "@mui/material";
import TextField from "./TextField";

const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  flexWrap: "wrap",
  backgroundColor: "white",
  width: "70%",
  height: " 60%",
  marginLeft: "15%",
  marginTop: "20%",
});

const TextFieldBox = styled("div")({
  marginTop: "7%",
  height: "9%",
  width: "65%",
});

const ButtonBox = styled("div")({
  marginTop: "7%",
  height: "8%",
  width: "100%",
});

const LoginComponent = () => {
  return (
    <Box>
      <TextFieldBox>
        <TextField
          id="username-input"
          label="Username"
          size="small"
          fullWidth
          // value={value}
          // onChange={handleChange}
          // autoComplete="current-password"
          // variant="filled"
        />
      </TextFieldBox>
      <TextFieldBox>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          size="small"
          fullWidth
          // value={value}
          // onChange={handleChange}
          // autoComplete="current-password"
          // variant="filled"
        />
      </TextFieldBox>
      <ButtonBox>
        <Button variant="outlined" size="medium">
          Register
        </Button>
        <Button variant="outlined" size="medium">
          Login
        </Button>
      </ButtonBox>
    </Box>
  );
};

export default LoginComponent;
