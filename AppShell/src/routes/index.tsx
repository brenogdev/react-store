import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

const Login = React.lazy(() => import("../modules/Login"));
const Layout = React.lazy(() => import("../shared/Layout"));

export const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <Backdrop
          open
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="shop" element={<h1>ola</h1>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
