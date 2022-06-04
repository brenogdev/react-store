import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Container } from "@mui/material";
import { MenuNavigation } from "./MenuNavigation";

export default function Header() {
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
            <Box>
              <Typography variant="h3" color="primary">
                Store React
              </Typography>
            </Box>
            <Box>
              <IconButton color="secondary">
                <PersonIcon />
              </IconButton>
              <IconButton color="secondary">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
        <MenuNavigation />
      </AppBar>
    </Box>
  );
}
