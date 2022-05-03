import { useSelector } from "react-redux";
import { Routes, Route, Router, useRoutes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/incoming-task", element: <Homepage /> },
    { path: "/create-task", element: <Homepage /> },
    { path: "/task-history", element: <Homepage /> },
  ]);
  return routes;
};

const MainApp = () => {
  return (
    <>
      <AppBar></AppBar>
      <App />
    </>
  );
};
export default MainApp;
