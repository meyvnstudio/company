import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import Theme from "./Theme";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Theme />
      {/* <Chatbot /> */}
      <Footer />
    </>
  );
};

export default Layout;
