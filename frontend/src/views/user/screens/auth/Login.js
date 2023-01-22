import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
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
  const { loading, error, success } = userLogin;

  // useEffect(() => {
  //   if (localStorage.getItem("userInfo")) {
  //     window.location.href = "/";
  //   }
  // }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
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
        <div className="errorMsg d-flex justify-content-center">
          <p
            style={{
              color: "red",
            }}
          >
            {error && error}

            {success && "user login success"}
          </p>
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
    </>
  );
};

export default Login;
