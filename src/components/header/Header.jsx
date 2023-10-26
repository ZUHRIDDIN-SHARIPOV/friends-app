import { memo, useState } from "react";
import "./Header.scss";
import {
  FaTwitter,
  TbMenu2,
  BsLightningChargeFill,
  BsLightningCharge,
  VscChromeClose,
  IoSettingsOutline,
  LiaHomeSolid,
  PiFolderOpenLight,
  PiPhoneLight,
  PiArrowBendDoubleUpRightLight,
  FiMoreVertical,
  FiUserCheck,
  CiLogout,
  GoSignIn,
} from "../../assets/re-export";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { useAuthUser } from "../../auth/AuthUser";
import { useNotifications } from "../re-export";
import { useDarkMode } from "../../App";

const Header = () => {
  const { user } = useAuthUser();
  const { dark, darkMode } = useDarkMode();
  const { notify } = useNotifications();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const menuMode = () => {
    setOpen(!open);
  };

  const userSignOut = async () => {
    try {
      setTimeout(async () => {
        await signOut(auth);
        notify("Sign out successfully", "bottom-left", "warning");
      }, 500);
    } catch (error) {
      console.error(error.message);
    }
  };

  const private_portfolio_desktop = () => {
    if (user) {
      navigate("/portfolio");
    } else {
      dark
        ? notify("You are not logged in", "bottom-right", "error", "colored")
        : notify("You are not logged in", "bottom-right", "error");
    }
  };

  const private_portfolio_mobile = () => {
    if (user) {
      navigate("/portfolio");
      menuMode();
    } else {
      dark
        ? notify("You are not logged in", "bottom-right", "error", "colored")
        : notify("You are not logged in", "bottom-right", "error");
    }
  };

  const mobile_route = (path) => {
    navigate(path);
    menuMode();
  };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__logo">
              <FaTwitter />
              <h2>Friends App</h2>
            </div>
            <ul className="site-header__list">
              <li className="site-header__item" onClick={darkMode}>
                {dark ? <BsLightningCharge /> : <BsLightningChargeFill />}
              </li>

              {user && (
                <li className="site-header__item">
                  <NavLink to={"/home"}>Home</NavLink>
                </li>
              )}

              <li
                className="site-header__item"
                onClick={private_portfolio_desktop}>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>

              <li className="site-header__item">
                <button>Contacts</button>
              </li>

              {user && (
                <li className="site-header__item">
                  <button>More</button>
                </li>
              )}

              {user && (
                <li
                  className="site-header__item"
                  onClick={() => navigate("/settings")}>
                  <IoSettingsOutline />
                </li>
              )}

              {!user && (
                <li className="site-header__item">
                  <NavLink to={"/"}>Login</NavLink>
                </li>
              )}

              {!user && (
                <li className="site-header__item">
                  <NavLink to={"/signUp"}>Sign Up</NavLink>
                </li>
              )}

              {user && (
                <li className="site-header__item">
                  <div className="sign-out" onClick={userSignOut}>
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </li>
              )}
            </ul>

            <div
              className={`site-header__mobile ${
                open ? "site-header__mobile-key" : ""
              }`}
              onClick={menuMode}></div>

            <ul className="site-header__mobile-list">
              <li className="site-header__mobile-item">
                <div className="site-header__mobile-logo">
                  <FaTwitter />
                  <h2>Friends App</h2>
                </div>
                <div
                  className="site-header__mobile-darkmode"
                  onClick={darkMode}>
                  {dark ? <BsLightningCharge /> : <BsLightningChargeFill />}
                </div>
              </li>

              {user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content site-header__mobile-item-left-mark"
                    onClick={() => mobile_route("/home")}>
                    <LiaHomeSolid />
                    <p>Home</p>
                  </div>
                  <div
                    className="site-header__mobile-right-logo"
                    onClick={() => mobile_route("/home")}>
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              <li className="site-header__mobile-item">
                <div
                  className="site-header__mobile-item-left-content site-header__mobile-item-left-mark "
                  onClick={private_portfolio_mobile}>
                  <PiFolderOpenLight />
                  <p>Portfolio</p>
                </div>
                <div
                  className="site-header__mobile-right-logo"
                  onClick={private_portfolio_mobile}>
                  <PiArrowBendDoubleUpRightLight />
                </div>
              </li>

              <li className="site-header__mobile-item">
                <div className="site-header__mobile-item-left-content">
                  <PiPhoneLight />
                  <p>Contact Us</p>
                </div>
                <div className="site-header__mobile-right-logo">
                  <PiArrowBendDoubleUpRightLight />
                </div>
              </li>

              {user && (
                <li className="site-header__mobile-item">
                  <div className="site-header__mobile-item-left-content site-header__mobile-item-left-mark">
                    <FiMoreVertical />
                    <p>More</p>
                  </div>
                  <div className="site-header__mobile-right-logo">
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content"
                    onClick={() => mobile_route("/settings")}>
                    <IoSettingsOutline />
                    <p>Settings</p>
                  </div>
                  <div
                    className="site-header__mobile-right-logo"
                    onClick={() => mobile_route("/settings")}>
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {!user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content"
                    onClick={() => mobile_route("/")}>
                    <GoSignIn />
                    <p>Login</p>
                  </div>
                  <div
                    className="site-header__mobile-right-logo"
                    onClick={() => mobile_route("/")}>
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {!user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content"
                    onClick={() => mobile_route("/signUp")}>
                    <FiUserCheck />
                    <p>Sign Up</p>
                  </div>
                  <div
                    className="site-header__mobile-right-logo"
                    onClick={() => mobile_route("/signUp")}>
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {user && (
                <li className="site-header__mobile-item">
                  <div className="site-header__mobile-item-left-content">
                    <CiLogout />
                    <p>Sign Out</p>
                  </div>
                  <div className="sign-out" onClick={userSignOut}>
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </li>
              )}
            </ul>

            <div className="site-header__menu-logo" onClick={menuMode}>
              {open ? <VscChromeClose /> : <TbMenu2 />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
