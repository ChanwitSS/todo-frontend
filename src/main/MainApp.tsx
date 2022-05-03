import { Routes, Route, Router, useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/homepage", element: <Homepage /> },
  ]);
  return routes;
};

const MainApp = () => {
  return <App />;
};
export default MainApp;
