import React, { useState } from "react";
import Header from "./../Header";
import { useNavigate } from "react-router";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import Podcast from "../Podcast";
import Nav from "./../Nav";
// import Tilt from "react-vanilla-tilt";

const Landing = () => {
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
    <>
      <Nav />
      <div className="LandingMainDiv">
        <script src="vanilla-tilt.js"></script>
        <br />
        {/* <Tilt style={{ width: "100%", border: "none", shadow: "none" }}> */}
        <Header />
        <br />
        <div className="textDivLanding" id="textDivLanding">
          <h1 className="titleH">لماذا قلنا تحدّث العربّيةَ؟</h1>
          <div className="headDiv">
            <h4 className="textH">
              إظهار الهوية العربية.. إحدى الركائز التي نقوم عليها، فهي عامل جذب
              اقتصادي وسياحي وتمكين أقوى للمملكة في محيطها.. وبذلك ستتوسع
              إمكانيات تعلم اللغة العربية والإطلاع عليها.
            </h4>
            <h4 className="textH">
              كما أن مشاكل وتحديات الهوية واللغة أكثر من أن تُعد أو تحصى، ولكننا
              نؤمن أن الحل لكل هذه العقبات.. يبدأ بممارسة اللغة واستحضارها
              وإحيائها في يوم كل مواطن و<b>مقيم</b>.
            </h4>
            <h4 className="textH">
              فبينما يصبح العالم مكررًا ويزداد تشابهًا كل يوم يحين الوقت لنبرز
              ثقافتنا ونعيد بعضًا من التباين إلى هذا العالم.. ونتحدث العربية،
              ونسمو بها لغةً وحضارة، وقوة.
            </h4>
          </div>
        </div>
        {/* </Tilt> */}
        <div className="podcastMainDiv" id="podcastMainDiv">
          <br />
          <h2 className="podcastHead">
            <b>إذاعة تحدث العربية</b>
          </h2>
          <br />
          <Podcast />
        </div>
        <br />
        <div className="storeSectionDiv" id="storeSectionDiv">
          <h1>Store Section</h1>
        </div>
        <div className="miniQuizSection" id="miniQuizSection">
          <h1>mini quiz section</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
