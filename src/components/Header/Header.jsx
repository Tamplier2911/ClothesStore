import "./Header.scss";
import React from "react";

import logo from "../../images/logo.png";
import { ReactComponent as Search } from "../../images/svg/icons8-search.svg";
import { ReactComponent as Cart } from "../../images/svg/shopping-cart-moving-symbol.svg";

import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__logo"
          alt="black hat logo"
          src={logo}
        ></img>
      </div>

      <nav className="header__navTop">
        <ul className="header__navTop--ul">
          <li className="header__navTop--li">
            <a className="header__navTop--link" href="/">
              <Search className="header__navTop--link-search" />
              Search
            </a>
          </li>
          <li className="header__navTop--li">
            <a className="header__navTop--link" href="/">
              Contact Us
            </a>
          </li>
          <li className="header__navTop--li">
            <a className="header__navTop--link" href="/">
              Sign In
            </a>
          </li>
          <li className="header__navTop--li">
            <a className="header__navTop--link" href="/">
              <Cart className="header__navTop--link-cart" />
              (0)
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__main">
        <h1 className="header__main--heading">
          Clothes Store
        </h1>
      </div>

      <nav className="header__navBot">
        <ul className="header__navBot--ul">
          <li className="header__navBot--li">
            <a className="header__navBot--link" href="/">
              Shop
            </a>
          </li>
          <li className="header__navBot--li dt-trigger">
            <a className="header__navBot--link" href="/">
              Gift Ideas &#8631;
            </a>
            <Dropdown
              items={[
                "Under $25",
                "Under $50",
                "Above $50"
              ]}
            />
          </li>
          <li className="header__navBot--li">
            <a className="header__navBot--link" href="/">
              About Us
            </a>
          </li>
          <li className="header__navBot--li">
            <a className="header__navBot--link" href="/">
              Our Team
            </a>
          </li>
          <li className="header__navBot--li">
            <a className="header__navBot--link" href="/">
              News
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
