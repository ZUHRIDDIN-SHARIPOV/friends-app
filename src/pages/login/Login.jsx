import { memo } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import "./Login.scss";

const Login = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <>
      <main>
        <section className="login">
          <div className="container">
            <div className="login__block">
              <p className="login__text">Welcome back 👋</p>
              <h2 className="login__title">Login to your account</h2>
              <form className="login__form">
                <div className="login__form-control">
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Please enter your email"
                      required
                    />
                  </label>
                  <span>error message</span>
                </div>
                <div className="login__form-control">
                  <label>
                    Password
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Enter password"
                      required
                    />
                  </label>
                  <span>error message</span>
                </div>
                <ColorButton
                  type="submit"
                  style={{
                    maxWidth: "350px",
                  }}
                  variant="contained">
                  Login
                  <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint
                      style={{
                        color: "#fff",
                      }}
                    />
                  </IconButton>
                </ColorButton>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Login);
