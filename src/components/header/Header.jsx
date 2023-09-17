import { memo, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ darkMode, checkDark }) => {
  const [open, setOpen] = useState(false);
  const menuMode = () => {
    setOpen(!open);
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
              <li className="site-header__item">
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink to={"/"}>Login</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink to={"/signUp"}>Sign Up</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink to={"/support"}>Support</NavLink>
              </li>
            </ul>
            <ul className={`site-header__menu-list ${open ? "menu__key" : ""}`}>
              <li className="site-header__menu-item">
                <FaTwitter />
                <h2>My classmates</h2>
              </li>
              <li className="site-header__menu-item">
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li className="site-header__menu-item">
                <NavLink to={"/"}>Login</NavLink>
              </li>
              <li className="site-header__menu-item">
                <NavLink to={"/signUp"}>Sign Up</NavLink>
              </li>
              <li className="site-header__menu-item">
                <NavLink to={"/support"}>Support</NavLink>
              </li>
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
