import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const [navbar, setNavbar] = useState(false);
  const [userPage, setUserPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hider = () => {
    if (window.location.href == "http://localhost:3000/UserPage") {
      // console.log(window.location.href, "we're here");
      setUserPage(true);
    } else {
      // console.log(window.location.href, " there");

      setUserPage(false);
    }
  };

  useEffect(() => {
    hider();
  }, []);

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
          {userPage ? (
            <div className="loggedDiv">
              <Link
                // style={{ textDecoration: "none", color: "black" }}
                className="signBtn"
                onClick={logOut}
                to="/"
              >
                تسجيل خروج
              </Link>
            </div>
          ) : (
            <>
              {state.signIn.token ? (
                <div className="loggedDiv">
                  <img
                    src={state.signIn.user.avatar}
                    className="userIconLogged"
                    alt="sideicon"
                    // style={{ border: "1px solid" }}
                    onClick={() => navigate("/UserPage")}
                  />
                  <Link
                    // style={{ border: "1px solid" }}
                    className="signBtn"
                    onClick={logOut}
                    to="/"
                  >
                    تسجيل خروج
                  </Link>
                </div>
              ) : (
                <div className="geustDiv">
                  <img
                    src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
                    className="userIcon"
                    alt="sideicon"
                    onClick={() => navigate("/login")}
                  />
                  <Link to="/login" className="signBtn">
                    تسجيل دخول
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className={navbar ? "navDivScroll" : "navDivNav"} dir="rtl">
        <div className="navTag">
          <a href="/#textDivLanding">لماذا تحدث العربية؟</a>
          <a href="/#miniQuizSection">اختبار قصير</a>
          <a href="/#storeSectionDiv">المتجر</a>
          <a href="/#podcastMainDiv">الاذاعة</a>
          <Link to="/LessonsPage">تعلم العربية</Link>
          <Link to="/Discussions">صفحة المناقشة</Link>
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
