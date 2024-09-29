import React from "react";
import { Outlet } from "react-router-dom";
import TopArea from "./TopArea";
import Footer from "./Footer";
import { AppBar } from "@mui/material";
const Nav: React.FC = () => {
  return (
    <>
      <AppBar>
        <TopArea />
      </AppBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
