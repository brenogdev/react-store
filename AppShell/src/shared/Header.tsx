import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Container, Menu, MenuItem } from "@mui/material";
import { MenuNavigation } from "./MenuNavigation";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/authenticate/autenticate.slice";
import { useAppDispatch } from "../hooks/useStore";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user } = useSelector((state: any) => state.authentication);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static" elevation={0}>
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "",
            }}
          >
            <Box>
              <IconButton color="secondary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="secondary">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box textAlign="center">
              <Typography variant="h3" color="secondary">
                Store React
              </Typography>
            </Box>
            <Box>
              {!!user && (
                <IconButton color="secondary" onClick={handleClick}>
                  <PersonIcon />
                </IconButton>
              )}
              <IconButton color="secondary">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Container>
        </Toolbar>
        <MenuNavigation />
      </AppBar>
    </Box>
  );
}
