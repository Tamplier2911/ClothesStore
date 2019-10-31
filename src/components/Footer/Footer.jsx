import "./Footer.scss";
import React from "react";

import { ReactComponent as Facebook } from "../../images/svg/facebook.svg";
import { ReactComponent as Google } from "../../images/svg/google-plus.svg";
import { ReactComponent as Instagram } from "../../images/svg/instagram.svg";
import { ReactComponent as Linked } from "../../images/svg/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/svg/twitter.svg";
import { ReactComponent as Whatsup } from "../../images/svg/whatsapp.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer__line" />
      <section className="footer">
        <div className="footer__info">
          <div className="footer__more">
            <h2 className="footer__more--header">
              More Info
            </h2>
            <ul className="footer__more--ul">
              <li className="footer__more--li">
                <a className="footer__more--link" href="/">
                  Company
                </a>
              </li>
              <li className="footer__more--li">
                <a className="footer__more--link" href="/">
                  Sales
                </a>
              </li>
              <li className="footer__more--li">
                <a className="footer__more--link" href="/">
                  Returns
                </a>
              </li>
              <li className="footer__more--li">
                <a className="footer__more--link" href="/">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__more--li">
                <a className="footer__more--link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contacts">
            <h2 className="footer__contacts--header">
              Clothes Store
            </h2>
            <ul className="footer__contacts--ul">
              <li className="footer__contacts--li">
                <a
                  className="footer__contacts--link"
                  href="/"
                >
                  555 2341 2252
                </a>
              </li>
              <li className="footer__contacts--li">
                <a
                  className="footer__contacts--link"
                  href="/"
                >
                  info@gmail.com
                </a>
              </li>
              <li className="footer__contacts--li">
                <a
                  className="footer__contacts--link"
                  href="/"
                >
                  New York, Broadway
                </a>
              </li>
              <li className="footer__contacts--li">
                <a
                  className="footer__contacts--link"
                  href="/"
                >
                  FREE US Delivery
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__forms">
            <h1 className="footer__header">
              Sign Up for our Newsletter
            </h1>
            <h3 className="footer__sub">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit!
            </h3>
            <form className="footer__form">
              <input
                className="footer__form--firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
              ></input>
              <input
                className="footer__form--lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
              ></input>
              <input
                className="footer__form--email"
                type="email"
                name="email"
                placeholder="Email Address"
              ></input>
              <input
                className="footer__form--submit"
                type="submit"
                value="Sign Up"
              ></input>
            </form>
            <div className="footer__social">
              <div className="footer__social--wrapper">
                <Facebook className="footer__social--icon" />
              </div>
              <div className="footer__social--wrapper">
                <Google className="footer__social--icon" />
              </div>
              <div className="footer__social--wrapper">
                <Twitter className="footer__social--icon" />
              </div>
              <div className="footer__social--wrapper">
                <Linked className="footer__social--icon" />
              </div>
              <div className="footer__social--wrapper">
                <Instagram className="footer__social--icon" />
              </div>
              <div className="footer__social--wrapper">
                <Whatsup className="footer__social--icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
