import { memo } from "react";
import { FaTwitter } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ darkMode, checkDark }) => {
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
                <NavLink>Home</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink>Login</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink>Sign Up</NavLink>
              </li>
              <li className="site-header__item">
                <NavLink>Support</NavLink>
              </li>
            </ul>
            <div className="site-header__menu-logo">
              <CgMenuLeft />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
