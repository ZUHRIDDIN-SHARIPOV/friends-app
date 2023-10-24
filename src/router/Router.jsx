import { memo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/re-export";
import {
  Error404,
  Home,
  Login,
  Portfolio,
  ForgotPassword,
  Settings,
  SignUp,
} from "../pages/re-export";
import { useAuthUser } from "../auth/AuthUser";

const Router = () => {
  const { user } = useAuthUser();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                {!user ? <Login /> : <Navigate to={"/home"} />}
              </>
            }
          />
          <Route
            path="/signUp"
            element={
              <>
                <Header />
                {!user ? <SignUp /> : <Navigate to={"/error"} />}
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                {user ? <Home /> : <Navigate to={"/"} />}
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <Header />
                {user ? <Portfolio /> : <Navigate to={"/"} />}
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Header />
                {user ? <Settings /> : <Navigate to={"/"} />}
              </>
            }
          />
          <Route
            path="/reset"
            element={
              <>
                <Header />
                {!user ? <ForgotPassword /> : <Navigate to={"/error"} />}
              </>
            }
          />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route
            path="/error"
            element={
              <>
                <Header />
                <Error404 />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(Router);
