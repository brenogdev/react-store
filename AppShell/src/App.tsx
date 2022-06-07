import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { AppRoutes } from "./routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.authentication);

  useEffect(() => {
    console.log("user", user);
    if (user === null) {
      navigate("login", {
        replace: true,
      });
    }
  }, [user]);

  return (
    <Box>
      <AppRoutes />
    </Box>
  );
};

export { App };
