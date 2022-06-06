import { CssBaseline } from "@mui/material";
import React from "react";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export { App };
