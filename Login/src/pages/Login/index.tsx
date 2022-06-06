import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export const Login = () => {
  return (
    <form>
      <Box sx={{ width: 350 }}>
        <Paper sx={{ width: "100%", height: 400, padding: 3 }}>
          <Grid container spacing={4}>
            <Grid item sm={12} md={12}>
              <Typography variant="h3" textAlign="center" color="secondary">
                React Store
              </Typography>
            </Grid>
            <Grid item sm={12} md={12}>
              <TextField label="Username" fullWidth color="secondary" />
            </Grid>
            <Grid item sm={12} md={12}>
              <TextField label="Password" fullWidth color="secondary" />
            </Grid>
            <Grid item sm={12} md={12}>
              <Button variant="contained" color="secondary" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </form>
  );
};
