import { memo, useState } from "react";
import "./Header.scss";
import { FaTwitter } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { PiFolderOpenLight, PiPhoneLight,PiArrowBendDoubleUpRightLight } from "react-icons/pi";
import { FiMoreVertical, FiUserCheck } from "react-icons/fi";
import { CiLogout, CiLogin } from "react-icons/ci";
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

  const private_route = () => {
    if (user) {
      navigate("/portfolio");
      menuMode();
    } else {
      dark
        ? notify("You are not logged in", "bottom-right", "error", "colored")
        : notify("You are not logged in", "bottom-right", "error");
    }
  };

  const public_route = (path) => {
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

              <li className="site-header__item">
                <NavLink to={"/portfolio"} onClick={private_route}>
                  Portfolio
                </NavLink>
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
                    onClick={() => public_route("/home")}>
                    <LiaHomeSolid />
                    <p>Home</p>
                  </div>
                  <div className="site-header__mobile-right-logo">
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              <li className="site-header__mobile-item">
                <div
                  className="site-header__mobile-item-left-content site-header__mobile-item-left-mark "
                  onClick={private_route}>
                  <PiFolderOpenLight />
                  <p>Portfolio</p>
                </div>
                <div className="site-header__mobile-right-logo">
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
                    onClick={() => public_route("/settings")}>
                    <IoSettingsOutline />
                    <p>Settings</p>
                  </div>
                  <div className="site-header__mobile-right-logo">
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {!user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content"
                    onClick={() => public_route("/")}>
                    <CiLogin />
                    <p>Login</p>
                  </div>
                  <div className="site-header__mobile-right-logo">
                    <PiArrowBendDoubleUpRightLight />
                  </div>
                </li>
              )}

              {!user && (
                <li className="site-header__mobile-item">
                  <div
                    className="site-header__mobile-item-left-content"
                    onClick={() => public_route("/signUp")}>
                    <FiUserCheck />
                    <p>Sign Up</p>
                  </div>
                  <div className="site-header__mobile-right-logo">
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
