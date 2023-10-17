import { memo, useState } from "react";
import "./Header.scss";
import { FaTwitter } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { useAuthUser } from "../../auth/AuthUser";
import { useNotifications } from "../re-export";
import { useDarkMode } from "../../App";

const Header = () => {
  const { user } = useAuthUser();
  const { dark, darkMode } = useDarkMode();
  const { notify } = useNotifications();

  const [open, setOpen] = useState(false);
  const menuMode = () => {
    setOpen(!open);
  };

  const userSignOut = async () => {
    try {
      setTimeout(async () => {
        await signOut(auth);
        notify("bottom-left", "warning", "dark", "Sign out successfully");
      }, 500);
    } catch (error) {
      console.error(error.message);
    }
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
              {user && (
                <li className="site-header__item">
                  <NavLink to={"/support"}>Support</NavLink>
                </li>
              )}
              {!user && (
                <li className="site-header__item">
                  <NavLink to={"/"}>Login</NavLink>
                </li>
              )}
              {!user ? (
                <li className="site-header__item">
                  <NavLink to={"/signUp"}>Sign Up</NavLink>
                </li>
              ) : (
                <li className="site-header__item">
                  <div className="sign-out" onClick={userSignOut}>
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </li>
              )}
            </ul>
            <ul className={`site-header__menu-list ${open ? "menu__key" : ""}`}>
              <li className="site-header__menu-item">
                <FaTwitter />
                <h2>Friends App</h2>
              </li>
              {user && (
                <li className="site-header__menu-item">
                  <NavLink to={"/home"}>Home</NavLink>
                </li>
              )}
              {user && (
                <li className="site-header__menu-item">
                  <NavLink to={"/support"}>Support</NavLink>
                </li>
              )}
              {!user && (
                <li className="site-header__menu-item">
                  <NavLink to={"/"}>Login</NavLink>
                </li>
              )}
              {!user ? (
                <li className="site-header__menu-item">
                  <NavLink to={"/signUp"}>Sign Up</NavLink>
                </li>
              ) : (
                <li className="site-header__menu-item">
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
