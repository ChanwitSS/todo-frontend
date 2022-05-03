import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./main/MainApp";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/index";

const theme = createTheme({});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>{MainApp()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
);
export default App;
