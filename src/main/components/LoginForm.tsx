import { Button, styled, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth";

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

const FieldBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  width: "65%",
  marginLeft: "auto",
  marginRight: "auto",
});

const ButtonBox = styled("div")({
  marginTop: "7%",
  height: "8%",
  width: "100%",
});

const LoginForm = () => {
  const dispatch: any = useDispatch();
  const [form, setForm] = useState<any>({});
  const navigate = useNavigate();
  // const isAuthenticate = useSelector((store: any) => store.auth.isAuthenticate);
  const onLogin = () => {
    dispatch(login(form)).then(() => {
      navigate("/incoming-task");
      setForm({});
    });
  };
  // const register = () => {
  //   dispatch(register(form));
  // };

  const onInput = (field: any) => (e: any) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <Box>
      <FieldBox>
        <TextField
          id="username-input"
          label="Username"
          size="small"
          fullWidth
          value={form?.username}
          onChange={onInput("username")}
          // autoComplete="current-password"
          // variant="filled"
        />
      </FieldBox>
      <FieldBox>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          size="small"
          fullWidth
          value={form?.password}
          onChange={onInput("password")}
          // autoComplete="current-password"
          // variant="filled"
        />
      </FieldBox>
      <FieldBox>
        <Button variant="outlined" size="medium" onClick={onLogin}>
          Login
        </Button>
      </FieldBox>
      {/* <FieldBox>
        <Button variant="outlined" size="medium" onClick={onRegister}>
          Register
        </Button>
      </FieldBox> */}
      <ButtonBox></ButtonBox>
    </Box>
  );
};

export default LoginForm;
