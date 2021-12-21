import React from "react";
import { useNavigate } from "react-router";
import "./style.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="navMainDiv">
      <div className="signBtnDiv">
        <button className="signBtn">تسجيل الدخول</button>
      </div>
      <div className="logoDiv">
        <img
          className="logoImg"
          src="./ar.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="navUserDiv">
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
