import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../redux/actions/userAction";
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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.RegisterUserReducer);
  const { loading, error, success } = userRegister;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password != cpassword) {
      setMessage("Password not match");
    } else {
      dispatch(registerUser(name, email, password));
    }
  };

  return (
    <>
      <section className="register-form">
        <div className="register-title">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            Create account
          </h3>
        </div>
        <div className="errorMsg d-flex justify-content-center">
          <p
            style={{
              color: "red",
            }}
          >
            {error && error}
            {message && message}
            {success && "user register successfully"}
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
                    label="Enter Full Name"
                    name="fname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />

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

                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Enter confirm password"
                    type="password"
                    name="cpass"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
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
                    Register
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

export default Register;
