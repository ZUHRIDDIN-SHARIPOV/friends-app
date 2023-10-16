import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fonts.scss";
import "./index.css";
import App from "./App";
import { AuthUserComponent } from "./auth/AuthUserComponent";
import { Notifications } from "./components/re-export";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthUserComponent>
    <Notifications>
      <App />
    </Notifications>
  </AuthUserComponent>
);
