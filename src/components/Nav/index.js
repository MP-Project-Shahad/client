import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={navbar ? "navMainDivScroll" : "navMainDivNav"}>
      <div className={navbar ? "signBtnDivScroll" : "signBtnDivNav"}>
        <button className="signBtn" onClick={() => navigate("/Sign")}>
          تسجيل الدخول
        </button>
      </div>
      <div className="logoDiv">
        <img
          className={navbar ? "logoImgScroll" : "logoImgNav"}
          src="./mp-logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={navbar ? "navUserDivScroll" : "navUserDivNav"}>
        <div className="side">
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
            className="userIcon"
            alt="sideicon"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
