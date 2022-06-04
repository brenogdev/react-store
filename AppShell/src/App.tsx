import { Box, CssBaseline } from "@mui/material";
import React from "react";

import "./index.css";
import { Banner } from "./shared/Banner";
import Header from "./shared/Header";

const App = () => (
  <Box>
    <CssBaseline />
    <Header />
    <Banner />
  </Box>
);

export { App };
