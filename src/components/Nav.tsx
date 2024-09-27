import React from "react";
import { Outlet } from "react-router-dom";
import TopArea from "./TopArea";
import Footer from "./Footer";
const Nav: React.FC = () => {
  return (
    <>
      <TopArea />
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
