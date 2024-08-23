import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RouteData from "./RouteData";
import Layout from "../Layout/Layout";
import AddTask from "../Pages/AddTask";
import EditTask from "../Pages/EditTask";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import Login from "../Pages/Login";

const Router = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RouteData title={t("Tasks")} />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update-task/:id" element={<EditTask />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
