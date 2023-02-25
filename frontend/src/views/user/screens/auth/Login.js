import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginUser } from "../../../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  TextField,
  Button,
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.LoginUserReducer);
  const { loading, error, success, userInfo } = userLogin;

  useEffect(() => {
    if (error) {
      toast.error(`${error}`, {
        position: "top-center",
      });
    }
    if (success) {
      toast.success(`User Login Successfully`, {
        position: "top-center",
      });
    }
  }, [error, success]);

  useEffect(() => {
    if (userInfo === null) {
      window.location.href = "/#/";
    } else if (userInfo.role === "user") {
      window.location.href = "/#/home";
    } else if (userInfo.role === "admin") {
      window.location.href = "/#/admin";
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      return toast.error("All are required", {
        position: "top-center",
        duration: 3000,
      });
    }
    dispatch(loginUser(email, password));
  };

  return (
    <>
      <section className="login-form">
        <div className="login-title">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            Login
          </h3>
        </div>
        <div className="register-fields">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
              <CssBaseline />
              <Box>
                <Box
                  component="form"
                  onSubmit={submitHandler}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  {loading ? (
                    <>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={loading}
                      >
                        <CircularProgress color="inherit" />
                      </Backdrop>
                    </>
                  ) : null}

                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Enter email address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Enter Password"
                    type="password"
                    name="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 1 }}
                    style={{
                      backgroundColor: "#ffcf33",
                      boxShadow: "none",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Login;
