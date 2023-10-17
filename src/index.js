import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fonts.scss";
import "./index.css";
import App from "./App";
import { AuthUser } from "./auth/AuthUser";
import { Notifications } from "./components/re-export";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthUser>
    <Notifications>
      <App />
    </Notifications>
  </AuthUser>
);
