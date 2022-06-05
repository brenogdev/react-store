import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout";

export const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Carregando página...</p>}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="shop" element={<Layout />} />
      </Routes>
    </Suspense>
  );
};
