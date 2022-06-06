import { Box } from "@mui/material";
import React from "react";

export const Layout: React.FunctionComponent = ({ children }) => {
  return <Box sx={{
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh'
  }}>{children}</Box>;
};
