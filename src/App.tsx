import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./main/MainApp";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/index";
import AppBar from "./main/components/AppBar";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#565656",
  //   },
  //   secondary: {
  //     main: "#f44336",
  //   },
  // },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{MainApp()}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
