import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login, reset } from "../../features/authenticate/autenticate.slice";
import { useAppDispatch } from "../../hooks/useStore";

type FormState = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormState>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.authentication
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/", {
        replace: true,
      });
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handlerSubmitForm = (data: FormState) => dispatch(login(data));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(handlerSubmitForm)}>
        <Box sx={{ width: 350 }}>
          <Paper sx={{ width: "100%", height: 400, padding: 3 }}>
            <Grid container spacing={4}>
              <Grid item sm={12} md={12}>
                <Typography variant="h3" textAlign="center" color="secondary">
                  React Store
                </Typography>
              </Grid>
              <Grid item sm={12} md={12}>
                <TextField
                  label="Username"
                  fullWidth
                  color="secondary"
                  {...register("username")}
                />
              </Grid>
              <Grid item sm={12} md={12}>
                <TextField
                  label="Password"
                  fullWidth
                  color="secondary"
                  {...register("password")}
                />
              </Grid>
              <Grid item sm={12} md={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  type="submit"
                >
                  {isLoading ? <CircularProgress color="inherit" size="18px" /> : "Sign in"}
                </Button>
              </Grid>
              <Grid item sm={12} md={12}>
                <Button
                  onClick={() => navigate(-1)}
                  startIcon={<ArrowBackIcon />}
                  variant="text"
                  color="secondary"
                  fullWidth
                >
                  voltar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
