import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout({ token: "" }));
    navigate("/");
  };

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
        {state.signIn.token ? (
          <button className="btn" onClick={logOut}>
            <img
              className="comIcon"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/exit.png"
              alt="icon"
            />
          </button>
        ) : (
          <button className="signBtn" onClick={() => navigate("/login")}>
            تسجيل الدخول
          </button>
        )}
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
            onClick={() => navigate("/UserPage")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
