import { Button, styled, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  updateTask,
  closeEditTask,
  getTaskList,
} from "../../store/actions/task";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const FormBox = styled("div")({
  backgroundColor: "white",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10%",
  width: "30%",
  height: "60%",
});

const TextFieldBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  width: "65%",
  marginLeft: "auto",
  marginRight: "auto",
});

const Form = (props: any) => {
  const task = useSelector((store: any) => store.task.form);
  const [form, setForm] = useState<any>({});
  const id = form?.id;
  const dispatch: any = useDispatch();

  useEffect(() => {
    setForm(task);
  }, [task]);

  const onSubmit = () => {
    (form ? dispatch(createTask(form)) : dispatch(updateTask(id, form))).then(
      () => {
        dispatch(closeEditTask());
        dispatch(getTaskList());
      }
    );
  };

  const onInput = (field: any) => (e: any) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const onChange = (field: any) => (value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <Modal
      open={task ? true : false}
      onClose={props?.onCloseForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormBox>
        <TextFieldBox>
          <TextField
            id="name-input"
            label="Name"
            size="small"
            fullWidth
            style={{ marginTop: "10%" }}
            defaultValue={form?.name}
            value={form?.name}
            onChange={onInput("name")}
          />
        </TextFieldBox>
        <TextFieldBox>
          <TextField
            id="detail-input"
            label="Detail"
            size="small"
            fullWidth
            multiline
            rows={3}
            defaultValue={form?.detail}
            value={form?.detail}
            onChange={onInput("detail")}
          />
        </TextFieldBox>
        <TextFieldBox>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Start Datetime"
              inputFormat="hh/mm/yyyy hh:mm a"
              value={form?.startDate ?? null}
              onChange={(value) => {
                setForm({
                  ...form,
                  startDate: new Date(value),
                });
              }}
            />
          </LocalizationProvider>
        </TextFieldBox>
        <TextFieldBox>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="End Datetime"
              value={form?.endDate ?? null}
              onChange={(value) => {
                setForm({
                  ...form,
                  endDate: new Date(value),
                });
              }}
            />
          </LocalizationProvider>
        </TextFieldBox>
        <TextFieldBox>
          <Button size="large" onClick={() => onSubmit()}>
            {id ? "Edit" : "create"}
          </Button>
        </TextFieldBox>
      </FormBox>
    </Modal>
  );
};

export default Form;
