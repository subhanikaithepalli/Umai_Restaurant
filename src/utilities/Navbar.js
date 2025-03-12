import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
import cartIcon from "../assets/icons/shopping-cart.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ totalQuant, activeSection }) => {
  let navigate = useNavigate()
  let navRef = useRef();
  const toggleNav = () => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };
  useEffect(() => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    let handleSidebarMobile = (e) => {
      if (!navRef.current.contains(e.target)) {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    };
    document.addEventListener("mousedown", handleSidebarMobile);
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    return () => {
      document.removeEventListener("mousedown", handleSidebarMobile);
    };
  }, []);
  return (
    <>
      <div className="header-handler" ref={navRef}>
        <header className="flex sticky">
          <div className="header-left flex">
            <Link
              className="logo-wrapper flex"
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <p className="logo-name">Umaī</p>
            </Link>
            <Link
              to="/cart"
              className={
                activeSection === "cart"
                  ? "cart-menu-icon active"
                  : "cart-menu-icon"
              }
              data-visible="false"
            >
              <img src={cartIcon} alt="cart button" />
              {totalQuant === 0 ? "" : <div> {totalQuant}</div>}
            </Link>
          </div>

          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
            onClick={toggleNav}
          ></button>
          <nav>
            <ul
              id="primary-navigation"
              className="primary-navigation flex"
              data-visible="false"
            >
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    toggleNav();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className={activeSection === "tradition" ? "active" : ""}>
                <Link
                  to="/#tradition"
                  className={activeSection === "tradition" ? "active" : ""}
                  onClick={toggleNav}
                >
                  Tradition
                </Link>
              </li>
              <li className={activeSection === "delivery" ? "active" : ""}>
                <Link
                  to="/#delivery"
                  className={activeSection === "delivery" ? "active" : ""}
                  onClick={toggleNav}
                >
                  Delivery
                </Link>
              </li>
              <li className={activeSection === "dining" ? "active" : ""}>
                <Link
                  to="/#dining"
                  className={activeSection === "dining" ? "active" : ""}
                  onClick={toggleNav}
                >
                  Dining
                </Link>
              </li>
              <li className="contact-button" onClick={() =>{ navigate('/reservation')
            toggleNav()}}>
                <Link to="/reservation" onClick={toggleNav}>
                  Book Table
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
