import { memo, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { LoginToastify, SignOutToastify } from "../re-export";

const Header = ({ darkMode, checkDark, user }) => {
  const [open, setOpen] = useState(false);
  const menuMode = () => {
    setOpen(!open);
  };
  const [signIn, setSignIn] = useState(true);

  const userSignOut = async () => {
    try {
      setTimeout(async () => {
        await signOut(auth);
        setSignIn(false);
      }, 500);
      console.log("Sign Out successfull");
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
              <h2>My classmates</h2>
            </div>
            <ul className="site-header__list">
              <li className="site-header__item" onClick={darkMode}>
                {checkDark ? <BsLightningCharge /> : <BsLightningChargeFill />}
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
                <h2>My classmates</h2>
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
      <LoginToastify user={user} />
      <SignOutToastify signIn={signIn} setSignIn={setSignIn} />
    </>
  );
};

export default memo(Header);
