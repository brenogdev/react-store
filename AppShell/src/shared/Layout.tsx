import { CssBaseline } from "@mui/material";
import React from "react";
import { Banner } from "./Banner";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Banner />
    </>
  );
};

export default Layout;
