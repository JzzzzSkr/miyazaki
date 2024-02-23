import { Outlet } from "react-router-dom";
import "./index.scss";
import Topbar from "./layoutComponents/topbar/Topbar";
import Copyright from "./layoutComponents/copyright/Copyright";

const Layout = () => {
  return (
    <div className="layout">
      <Topbar></Topbar>

      {/* <div className="content"> */}
      <Outlet></Outlet>
      {/* </div> */}

      <Copyright></Copyright>
    </div>
  );
};

export default Layout;
