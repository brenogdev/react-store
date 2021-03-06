import { Container, Toolbar, Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const MenuNavigation = () => {
  return (
    <Toolbar>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "",
        }}
      >
        <Box sx={{ margin: 5 }}>
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box sx={{ margin: 5 }}>
          <NavLink to="shop">Shop</NavLink>
        </Box>
        <Box sx={{ margin: 5 }}>
          <NavLink to="login">Sign in</NavLink>
        </Box>
      </Container>
    </Toolbar>
  );
};
