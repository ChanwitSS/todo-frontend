import { TextField as MuiTextField } from "@mui/material";

const TextField = (props: any) => {
  return (
    <MuiTextField
      id={props?.id}
      label={props?.label}
      value={props?.value}
      onChange={props?.onChange}
      size={props?.size}
      fullWidth={props?.fullWidth}
      // autoComplete="current-password"
      // variant="filled"
    />
  );
};

export default TextField;
