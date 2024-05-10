import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FetchItems from "./FetchItems";

const Layout = () => {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
    </>
  );
};

export default Layout;
