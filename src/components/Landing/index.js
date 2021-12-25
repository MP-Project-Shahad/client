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
            <img src="./sp.png" alt="sp" className="aboutImg" />
          </div>
          <div className="textPart" dir="rtl">
            <h1>ما المختلف؟ </h1>
            <div className="h4Div">
              <h4 dir="rtl">
                دعماً لحملة تحدث العربية الشهيرة، قررنا انشاء هذا الموقع لكن . .
                <br />
                <i> ما المختلف؟ </i>
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
          <br />
          <br />
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
        <div
          style={{
            borderBottom: "1px solid rgb(0, 0, 0, 0.12)",
            width: "100%",
          }}
        ></div>
        <div className="providersLessonsDiv">
          <div className="arSection">
            <h2 dir="rtl">مهتم تتعلم عربي؟</h2>
            <p dir="rtl">
              {" "}
              هل انت مقدم خدمة او تعرف مقدم خدمة اجنبي في بلد عربي؟
              <br />
              ودك تتعلم او تعلمه اللغة العربية؟
              <br />
              هنا في تحدث العربية نقدر نساعدك تتعلم ببساطة وبلا اي مقابل!
            </p>
            {state.signIn.token ? (
              <>
                <p> ابدأ الان بأخذ اختبار تحديد المستوى</p>
                <button className="mainBtn">بدء اختبار تحديد المستوى</button>
              </>
            ) : (
              <>
                <p>سجل الان لأخذ اختبار تحديد المستوى </p>

                <button
                  className="mainBtn"
                  onClick={() => navigate("./SignUp")}
                >
                  تسجيل
                </button>
              </>
            )}
          </div>
          <div className="imgSection">
            <img src="./splogo2.png" alt="sp" className="lessonImg" />
          </div>
          <div className="enSection">
            <h2>Intrested in learning Arabic?</h2>
            <p>
              Are you a service provider in an Arabic country?
              <br />
              Intrested in learning Arabic? <br />
              We can help you with that for FREE!
              <br />
            </p>
            {state.signIn.token ? (
              <>
                <p> take the placement test.</p>
                <button className="mainBtn">Take The Placement Test</button>
              </>
            ) : (
              <>
                <p> sign up now to take the placement test.</p>
                <button
                  className="mainBtn"
                  onClick={() => navigate("./SignUp")}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid rgb(0, 0, 0, 0.12)",
            width: "100%",
          }}
        ></div>
        <div className="miniQuizSection" id="miniQuizSection">
          <h1 dir="rtl">اختبر فصاحتك</h1>
        </div>
        <div className="storeSectionDiv" id="storeSectionDiv">
          <h1>منتجات تحدث العربية</h1>
          <div class="backgroundEffect">
            <div className="productsCards" style={{ margin: "10px" }}>
              <div className="card" dir="rtl">
                <a
                  href="https://tahaddatharstore.com/products/%D8%AF%D9%81%D8%AA%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A"
                  target="_blank"
                >
                  <div className="prdctImgDiv">
                    <img src="./pr1.png" alt="product" className="prdctImg" />
                  </div>
                  <h3>دفتر عَرَبيْ</h3>
                  <h2>40 ر.س</h2>
                  <p style={{ color: "gray" }}>
                    دفتر عربي أنيق، يحمل الشعار،
                    <br /> بني اللون وبحجم A5 وعدد أوراقه 80
                  </p>

                  {/* <button>شراء</button> */}
                </a>
              </div>
            </div>
          </div>
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
