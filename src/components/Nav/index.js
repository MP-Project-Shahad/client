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
    if (window.scrollY > 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={navbar ? "navMainDivScroll" : "navMainDivNav"}>
      <div className={navbar ? "signBtnDivScroll" : "signBtnDivNav"}>
        <div className="side">
          {state.signIn.token ? (
            <div className="loggedDiv">
              <img
                src={state.signIn.user.avatar}
                className="userIconLogged"
                alt="sideicon"
                // style={{ border: "1px solid" }}
                onClick={() => navigate("/UserPage")}
              />
              <a
                // style={{ border: "1px solid" }}
                className="signBtn"
                onClick={logOut}
                href="/"
              >
                تسجيل خروج
              </a>
            </div>
          ) : (
            <div className="geustDiv">
              <img
                src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
                className="userIcon"
                alt="sideicon"
                onClick={() => navigate("/login")}
              />
              <a href="/login" className="signBtn">
                تسجيل دخول
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={navbar ? "navDivScroll" : "navDivNav"} dir="rtl">
        <div className="navTag">
          <a href="/#textDivLanding">لماذا تحدث العربية؟</a>
          <a href="/#miniQuizSection">اختبار قصير</a>
          <a href="/#storeSectionDiv">المتجر</a>
          <a href="/#podcastMainDiv">الاذاعة</a>
          <a href="/LessonsPage">تعلم العربية</a>
          <a href="/Discussions">صفحة المناقشة</a>
        </div>
      </div>
      <div className="logoDiv">
        <img
          className={navbar ? "logoImgScroll" : "logoImgNav"}
          src="./mp-logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Nav;
