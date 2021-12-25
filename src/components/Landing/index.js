import React, { useState } from "react";
import Header from "./../Header";
import { useNavigate } from "react-router";
import "./style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import Podcast from "../Podcast";
import Nav from "./../Nav";
import Tilt from "react-vanilla-tilt";

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
      <div className="landingMainDiv">
        <script src="vanilla-tilt.js"></script>
        <br />
        <Header />
        <div className="aboutDiv">
          <div className="imgPart">
            <img src="./sp.png" alt="sp" />
          </div>
          <div className="textPart" dir="rtl">
            <h1>ما المختلف؟</h1>
            <div className="h4Div">
              <h4>
                دعماً لحملة تحدث العربية الشهيرة، قررنا انشاء هذا الموقع لكن..
                ما المختلف؟
              </h4>
              <h4>
                هنا نقدم خدمة تعلم اللغة العربية بشكل مبسط وسريع لمقدمين الخدمات
              </h4>
            </div>
            <div className="stampDiv">
              <h4 className="textH4">حتى يستطيعون</h4>
              <img
                alt="logo"
                src="./mp-logo-Copy.png"
                className="stampImg"
                style={{ width: "60px", transform: "rotate(-15deg)" }}
              />
            </div>
          </div>
          {/* <div className="enPart"></div> */}
        </div>
        <br />
        <div className="textDivLanding" id="textDivLanding">
          <h1 className="titleH">لماذا قلنا تحدّث العربّيةَ؟</h1>
          <div className="headDiv" dir="rtl">
            <h4 className="textH">
              إظهار الهوية العربية.. إحدى الركائز التي نقوم عليها، فهي عامل جذب
              اقتصادي وسياحي وتمكين أقوى للمملكة في محيطها.. وبذلك ستتوسع
              إمكانيات تعلم اللغة العربية والإطلاع عليها.
            </h4>
            <h4 className="textH">
              كما أن مشاكل وتحديات الهوية واللغة أكثر من أن تُعد أو تحصى، ولكننا
              نؤمن أن الحل لكل هذه العقبات.. يبدأ بممارسة اللغة واستحضارها
              وإحيائها في يوم كل
              <b style={{ color: "red", textDecoration: "underline" }}>
                {" "}
                مواطن ومقيم
              </b>
              .
            </h4>
            <h4 className="textH">
              فبينما يصبح العالم مكررًا ويزداد تشابهًا كل يوم يحين الوقت لنبرز
              ثقافتنا ونعيد بعضًا من التباين إلى هذا العالم.. ونتحدث العربية،
              ونسمو بها لغةً وحضارة، وقوة.
            </h4>
          </div>
        </div>
        <br />
        <div className="providersLessonsDiv">
          <h1>Intrested in learing arabic?</h1>
          <div className="arSection"></div>
          <div className="imgSection"></div>
          <div className="enSection"></div>
        </div>
        <div className="storeSectionDiv" id="storeSectionDiv">
          <h1>منتجات تحدث العربية</h1>
          <div class="backgroundEffect">
            <div className="productsCards" style={{ margin: "10px" }}>
              <div className="card">
                <a
                  href="https://tahaddatharstore.com/products/%D9%88%D8%B3%D8%A7%D9%85-%D8%AA%D8%AD%D8%AF%D8%AB-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D8%B9%D8%AF%D9%86%D9%8A-%D9%81%D8%B6%D9%8A"
                  target="_blank"
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "120%",
                      marginLeft: "-30px",
                      marginTop: "-10px",
                      boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 8px",
                    }}
                  >
                    <img src="./pr1.jpeg" alt="product" />
                  </div>
                  <h3>وسام تحدث العربية - معدني (فضي)</h3>
                  <h2>29 ر.س</h2>
                  <p style={{ color: "gray" }}>
                    وسام فضي لامع يتوسطه شعار تحدث العربية
                  </p>

                  {/* <button>شراء</button> */}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="miniQuizSection" id="miniQuizSection">
          <h1>mini quiz section</h1>
        </div>
        <div className="podcastMainDiv" id="podcastMainDiv">
          <br />
          <h2 className="podcastHead">
            <b>إذاعة تحدث العربية</b>
          </h2>
          <br />
          <Podcast />
        </div>
      </div>
    </>
  );
};

export default Landing;
